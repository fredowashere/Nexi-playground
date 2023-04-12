import { Component } from '@angular/core';
import { ConfEl, ConfElType, ConfiguratoreService } from '../../services/configuratore.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AddConfElDialogComponent } from '../../dialogs/add-conf-el-dialog/add-conf-el-dialog.component';

@Component({
  selector: 'app-template-d',
  templateUrl: './template-d.component.html',
  styleUrls: ['./template-d.component.css']
})
export class TemplateDComponent {

  constructor(
    public confService: ConfiguratoreService,
    private modalService: NgbModal
  ) {}

  drop(event: CdkDragDrop<ConfEl[]>, list: ConfEl[]) {
    moveItemInArray(list, event.previousIndex, event.currentIndex);
  }

  async addConfEl(target: ConfEl[]) {

		const modalRef = this.modalService.open(
      AddConfElDialogComponent,
      { size: 'xl', centered: true, scrollable: true }
    );
		modalRef.componentInstance.target = target;
    modalRef.componentInstance.supportedConfigs = [
      ConfElType.Layout
    ];

		const result = await modalRef.result;
	}
}
