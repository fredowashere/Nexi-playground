import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonWidgetModel } from '../../models/widgets/button-widget.models';
import { WidgetSpec } from '../../models/widget.models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { beautifyJson } from 'src/app/utils/json';
import { ButtonWidgetDialogComponent } from './button-widget-dialog/button-widget-dialog.component';

@Component({
  selector: 'app-button-widget',
  templateUrl: './button-widget.component.html',
  styleUrls: ['./button-widget.component.css']
})
export class ButtonWidgetComponent {

    beautifyJson = beautifyJson;

    @Input("spec") spec!: WidgetSpec<ButtonWidgetModel>;
    @Output("delete") deleteEmitter = new EventEmitter<WidgetSpec<ButtonWidgetModel>>();

    showJson = false;

    constructor(
        private modalService: NgbModal
    ) {}

    ngOnInit() {}

    async open() {
        const modalRef = this.modalService.open(
            ButtonWidgetDialogComponent,
            { 
                centered: true,
                scrollable: true
            }
        );
        modalRef.componentInstance.spec = this.spec;
        await modalRef.result;
	}

    delete() {
        this.deleteEmitter.emit(this.spec);
    }
}