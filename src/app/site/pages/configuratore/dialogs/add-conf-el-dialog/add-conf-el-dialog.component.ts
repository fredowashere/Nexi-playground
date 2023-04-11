import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfEl, ConfElType } from '../../services/configuratore.service';
import { createLayout } from '../../layouts/layout.util';

@Component({
  selector: 'app-add-conf-el-dialog',
  templateUrl: './add-conf-el-dialog.component.html',
  styleUrls: ['./add-conf-el-dialog.component.css']
})
export class AddConfElDialogComponent {

  @Input("target") target!: ConfEl[];
  @Input("supportedConfigs") supportedConfigs!: ConfElType[];

  ConfElType = ConfElType;

  oneColLayout = createLayout({ numOfCols: 1 });
  twoColLayout = createLayout({ numOfCols: 2 });
  threeColLayout = createLayout({ numOfCols: 3 });
  fourColLayout = createLayout({ numOfCols: 4 });

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
