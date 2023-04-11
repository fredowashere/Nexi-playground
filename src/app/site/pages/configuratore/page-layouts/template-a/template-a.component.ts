import { Component } from '@angular/core';
import { ConfEl, ConfElType, ConfiguratoreService } from '../../services/configuratore.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AddConfElDialogComponent } from '../../dialogs/add-conf-el-dialog/add-conf-el-dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-template-a',
  templateUrl: './template-a.component.html',
  styleUrls: ['./template-a.component.css']
})
export class TemplateAComponent {

  constructor(
    public confService: ConfiguratoreService,
    private modalService: NgbModal
  ) {}

  drop(event: CdkDragDrop<ConfEl[]>, list: ConfEl[]) {
    moveItemInArray(list, event.previousIndex, event.currentIndex);
  }

  async addConfEl(target: ConfEl[]) {

		const modalRef = this.modalService.open(AddConfElDialogComponent, { size: 'xl' });
		modalRef.componentInstance.target = target;
    modalRef.componentInstance.supportedConfigs = [
      ConfElType.Layout
    ];

		const result = await modalRef.result;
		console.log("Choice", result);
	}
}
