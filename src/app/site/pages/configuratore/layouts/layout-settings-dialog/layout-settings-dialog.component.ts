import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfEl } from '../../services/configuratore.service';

@Component({
  selector: 'app-layout-settings-dialog',
  templateUrl: './layout-settings-dialog.component.html',
  styleUrls: ['./layout-settings-dialog.component.css']
})
export class LayoutSettingsDialogComponent {

  @Input("target") target!: ConfEl;

  constructor(
    public activeModal: NgbActiveModal
  ) { }
}
