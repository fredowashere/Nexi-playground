import { Component, Directive, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { ConfEl, ConfiguratoreService } from '../services/configuratore.service';

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

  constructor(
    private confService: ConfiguratoreService
  ) {

  }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const componentRef = this.dcl.viewContainerRef.createComponent<any>(this.confEl.component);
    componentRef.instance.confEl = this.confEl;
  }

  removeConf() {
    this.confService.removeConfEl(this.confEl.id);
  }
}
