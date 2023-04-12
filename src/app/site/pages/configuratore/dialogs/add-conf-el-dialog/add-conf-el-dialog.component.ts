import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfEl, ConfElType } from '../../services/configuratore.service';
import { LAYOUTS, createLayout } from '../../layouts/layout.util';
import { WIDGETS, WidgetType, createButton, createHeading, createParagraph } from '../../widgets/widget.util';

@Component({
  selector: 'app-add-conf-el-dialog',
  templateUrl: './add-conf-el-dialog.component.html',
  styleUrls: ['./add-conf-el-dialog.component.css']
})
export class AddConfElDialogComponent {

  @Input("target") target!: ConfEl[];
  @Input("supportedConfigs") supportedConfigs!: ConfElType[];

  ConfElType = ConfElType;

  LAYOUTS = LAYOUTS;
  WIDGETS = WIDGETS;

  buttons: ConfEl[] = [];
  headings: ConfEl[] = [];
  paragraphs: ConfEl[] = [];

  constructor(
    public activeModal: NgbActiveModal
  ) {

    this.buttons = WIDGETS.filter(w => w.name === WidgetType.Button);
    this.headings = WIDGETS.filter(w => w.name === WidgetType.Heading);
    this.paragraphs = WIDGETS.filter(w => w.name === WidgetType.Paragraph);
  }

  select(confEl: ConfEl) {

    if (confEl.type === ConfElType.Layout) {
      this.target.push(
        createLayout({ numOfCols: confEl.settings.numOfCols })
      );
    }

    if (confEl.type === ConfElType.Widget && confEl.name === WidgetType.Button) {
      this.target.push(
        createButton({ text: confEl.settings.text, size: confEl.settings.size })
      );
    }

    if (confEl.type === ConfElType.Widget && confEl.name === WidgetType.Heading) {
      this.target.push(
        createHeading({ text: confEl.settings.text, size: confEl.settings.size })
      );
    }

    if (confEl.type === ConfElType.Widget && confEl.name === WidgetType.Paragraph) {
      this.target.push(
        createParagraph({ text: confEl.settings.text })
      );
    }
    
    this.activeModal.close(confEl);
  }
}
