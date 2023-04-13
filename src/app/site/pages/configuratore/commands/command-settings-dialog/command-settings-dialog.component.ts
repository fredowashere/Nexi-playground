import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfEl } from '../../services/configuratore.service';

@Component({
  selector: 'app-command-settings-dialog',
  templateUrl: './command-settings-dialog.component.html',
  styleUrls: ['./command-settings-dialog.component.css']
})
export class CommandSettingsDialogComponent {

  @Input("target") target!: ConfEl;

  constructor(
    public activeModal: NgbActiveModal
  ) { }
}
