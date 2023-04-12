import { Component, Directive, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { ConfEl, ConfElType, ConfiguratoreService } from '../services/configuratore.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WidgetType } from '../widgets/widget.util';

@Directive({
  selector: '[dcl]',
})
export class DclDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Component({
  selector: 'app-conf-el-shell',
  templateUrl: './conf-el-shell.component.html',
  styleUrls: ['./conf-el-shell.component.css']
})
export class ConfElShellComponent {

  @ViewChild(DclDirective, { static: true }) dcl!: DclDirective;
  @Input("confEl") confEl!: ConfEl;

  ConfElType = ConfElType;
  WidgetType = WidgetType;

  constructor(
    private confService: ConfiguratoreService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const componentRef = this.dcl.viewContainerRef.createComponent<any>(this.confEl.component);
    componentRef.instance.confEl = this.confEl;
  }

  async openConfSettings() {

    const modalRef = this.modalService.open(
      this.confEl.settingsDialog,
      { centered: true, scrollable: true }
    );
		modalRef.componentInstance.target = this.confEl;

		const result = await modalRef.result;
  }

  removeConf() {
    this.confService.removeConfEl(this.confEl.id);
  }
}
