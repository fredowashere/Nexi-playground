import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonWidgetModel } from '../models/widgets/button-widget.models';
import { WidgetSpec } from '../models/widget.models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { beautifyJson } from 'src/app/utils/json';
import { PipelineCommandDialogComponent } from './pipeline-command-dialog/pipeline-command-dialog.component';

@Component({
  selector: 'app-pipeline-command',
  templateUrl: './pipeline-command.component.html',
  styleUrls: ['./pipeline-command.component.css']
})
export class PipelineCommandComponent {

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
            PipelineCommandDialogComponent,
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