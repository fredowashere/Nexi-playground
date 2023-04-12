import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfEl } from '../../services/configuratore.service';

@Component({
  selector: 'app-button-settings-dialog',
  templateUrl: './button-settings-dialog.component.html',
  styleUrls: ['./button-settings-dialog.component.css']
})
export class ButtonSettingsDialogComponent {

  @Input("target") target!: ConfEl;

  constructor(
    public activeModal: NgbActiveModal
  ) { }
}
