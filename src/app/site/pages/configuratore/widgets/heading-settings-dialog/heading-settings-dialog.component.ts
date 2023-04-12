import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfEl } from '../../services/configuratore.service';

@Component({
  selector: 'app-heading-settings-dialog',
  templateUrl: './heading-settings-dialog.component.html',
  styleUrls: ['./heading-settings-dialog.component.css']
})
export class HeadingSettingsDialogComponent {

  @Input("target") target!: ConfEl;

  constructor(
    public activeModal: NgbActiveModal
  ) { }
}
