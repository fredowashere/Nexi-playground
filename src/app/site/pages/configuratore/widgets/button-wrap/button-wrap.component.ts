import { Component, Input } from '@angular/core';
import { ConfEl, ConfElType } from '../../services/configuratore.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AddConfElDialogComponent } from '../../dialogs/add-conf-el-dialog/add-conf-el-dialog.component';

@Component({
  selector: 'app-button-wrap',
  templateUrl: './button-wrap.component.html',
  styleUrls: ['./button-wrap.component.css']
})
export class ButtonWrapComponent {

  @Input("confEl") confEl!: ConfEl;

  constructor(
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
      ConfElType.Command
    ];

		const result = await modalRef.result;
	}
}
