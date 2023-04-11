import { Component, Input } from '@angular/core';
import { ConfEl, ConfElType } from '../../services/configuratore.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddConfElDialogComponent } from '../../dialogs/add-conf-el-dialog/add-conf-el-dialog.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  @Input("confEl") confEl!: ConfEl;
  @Input("isShowcase") isShowcase = false;

  constructor(
    private modalService: NgbModal
  ) {}

  drop(event: CdkDragDrop<ConfEl[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  async addConfEl(target: ConfEl[]) {

		const modalRef = this.modalService.open(AddConfElDialogComponent, { size: 'xl', centered: true });
		modalRef.componentInstance.target = target;
    modalRef.componentInstance.supportedConfigs = [
      ConfElType.Layout
    ];

		const result = await modalRef.result;
		console.log("Choice", result);
	}
}
