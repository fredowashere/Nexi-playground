import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-remove-conf-el-dialog',
  templateUrl: './remove-conf-el-dialog.component.html',
  styleUrls: ['./remove-conf-el-dialog.component.css']
})
export class RemoveConfElDialogComponent {

  constructor(
    public activeModal: NgbActiveModal
  ) {}
}
