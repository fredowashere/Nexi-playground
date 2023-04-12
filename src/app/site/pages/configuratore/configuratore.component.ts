import { Component } from '@angular/core';
import { ConfEl, ConfElType, ConfiguratoreService } from './services/configuratore.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddConfElDialogComponent } from './dialogs/add-conf-el-dialog/add-conf-el-dialog.component';

enum PageLayout {
  TemplateA = 1,
  TemplateB = 2,
  TemplateC = 3,
  TemplateD = 4
}

@Component({
  selector: 'app-configuratore',
  templateUrl: './configuratore.component.html',
  styleUrls: ['./configuratore.component.css']
})
export class ConfiguratoreComponent {

  PageLayout = PageLayout;

  selectedPageLayout?: PageLayout;

  constructor(
    private modalService: NgbModal,
    public confService: ConfiguratoreService
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
