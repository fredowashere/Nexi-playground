import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfEl } from '../../services/configuratore.service';

@Component({
  selector: 'app-paragraph-settings-dialog',
  templateUrl: './paragraph-settings-dialog.component.html',
  styleUrls: ['./paragraph-settings-dialog.component.css']
})
export class ParagraphSettingsDialogComponent {

  @Input("target") target!: ConfEl;

  constructor(
    public activeModal: NgbActiveModal
  ) { }
}
