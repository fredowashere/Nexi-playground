import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfEl, ConfElType } from '../../services/configuratore.service';
import { LAYOUTS, createLayout } from '../../layouts/layout.util';

@Component({
  selector: 'app-add-conf-el-dialog',
  templateUrl: './add-conf-el-dialog.component.html',
  styleUrls: ['./add-conf-el-dialog.component.css']
})
export class AddConfElDialogComponent {

  @Input("target") target!: ConfEl[];
  @Input("supportedConfigs") supportedConfigs!: ConfElType[];

  ConfElType = ConfElType;

  LAYOUTS = LAYOUTS;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  select(confEl: ConfEl) {

    if (confEl.type === ConfElType.Layout) {
      this.target.push(
        createLayout({ numOfCols: confEl.settings.numOfCols })
      );
    }
    
    this.activeModal.close(confEl);
  }
}
