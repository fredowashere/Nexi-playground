import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RemoveConfElDialogComponent } from '../dialogs/remove-conf-el-dialog/remove-conf-el-dialog.component';

export enum ConfElType {
  Layout = "layout",
  Widget = "widget",
  Command = "Command"
}

export interface ConfEl {
  id: string;
  type: ConfElType;
  name: any;
  settings: any;
  settingsDialog?: any;
  component: any;
  outlet1: ConfEl[];
  outlet2: ConfEl[];
  outlet3: ConfEl[];
  outlet4: ConfEl[];
}

@Injectable({
  providedIn: 'root'
})
export class ConfiguratoreService {

  header: ConfEl[] = [];
  sideLeft: ConfEl[] = [];
  main: ConfEl[] = [];
  sideRight: ConfEl[] = [];
  footer: ConfEl[] = [];

  init: ConfEl[] = [];
  destroy: ConfEl[] = [];

  constructor(
    private modalService: NgbModal
  ) { }

  async removeConfEl(id: string) {

    const modalRef = this.modalService.open(
      RemoveConfElDialogComponent,
      { centered: true }
    );

		const result = await modalRef.result;

    const list = this.findList(id);
    const confIndex = this.findConfIndex(id, list);
    list.splice(confIndex, 1);
  }

  findList(id: string) {

    let safe = 1e3;
    let el = null;
    let list = null;

    // Search in root
    if (this.findConfIndex(id, this.header) > -1) {
      list = this.header;
    }
    if (this.findConfIndex(id, this.sideLeft) > -1) {
      list = this.sideLeft;
    }
    if (this.findConfIndex(id, this.main) > -1) {
      list = this.main;
    }
    if (this.findConfIndex(id, this.sideRight) > -1) {
      list = this.sideRight;
    }
    if (this.findConfIndex(id, this.footer) > -1) {
      list = this.footer;
    }

    // Found in root -> return list
    if (list) return list;

    // Breadth-first search
    const q = [
      ...this.header,
      ...this.sideLeft,
      ...this.main,
      ...this.sideRight,
      ...this.footer
    ];

    while (q.length && safe--) {

      el = q.pop();

      if (!el) continue;

      if (el.id === id) break;

      // Search in 4 outlets
      if (this.findConfIndex(id, el.outlet1) > -1) {
        list = el.outlet1;
      }
      if (this.findConfIndex(id, el.outlet2) > -1) {
        list = el.outlet2;
      }
      if (this.findConfIndex(id, el.outlet3) > -1) {
        list = el.outlet3;
      }
      if (this.findConfIndex(id, el.outlet4) > -1) {
        list = el.outlet4;
      }

      // Found in outlets -> return list
      if (list) return list;

      q.push(
        ...el.outlet1,
        ...el.outlet2,
        ...el.outlet3,
        ...el.outlet4
      );
    }

    return list || [];
  }

  findConfIndex(id: string, list: ConfEl[]) {
    return list.findIndex(el => el.id === id);
  }
}
