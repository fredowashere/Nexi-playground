import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { WidgetModel, WidgetSpec } from './models/widget.models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css']
})
export class ConfiguratorComponent {

  public invert: boolean = true;
  public onDragDrop$ = new Subject<CdkDragDrop<any[]>>();

  leftSide: WidgetSpec<WidgetModel>[] = [];
  header: WidgetSpec<WidgetModel>[] = [
    {
      "id": "lang-indicator",
      "class": "eu.sia.atm.Button",
      "parent_id": "header",
      "model": {
        "label": "Lingua",
        "goto": "langs",
        "image": "resources/language.svg"
      },
      "html_attributes": {
        "class": "only-text lang-indicator"
      },
      "events": [
        {
          "trigger": "ENGINE:widgetsLoaded",
          "attributes": { "disabled": "", "data-valid": true }
        }
      ]
    }
  ];
  content: WidgetSpec<WidgetModel>[] = [];
  footer: WidgetSpec<WidgetModel>[] = [
    {
      "id": "test",
      "class": "eu.sia.atm.Button",
      "parent_id": "footer",
      "model": {
        "label": "Prova",
        "goto": "langs",
        "image": "resources/language.svg"
      },
      "html_attributes": {
        "class": "only-text lang-indicator"
      },
      "events": [
        {
          "trigger": "ENGINE:widgetsLoaded",
          "attributes": { "disabled": "", "data-valid": true }
        }
      ]
    }
  ];
  rightSide: WidgetSpec<WidgetModel>[] = [];

  ngOnInit() {
    this.onDragDrop$.subscribe(this.onDragDrop);
  }

  onDragDrop(event: CdkDragDrop<any[]>) {
    if (event.container === event.previousContainer) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  };

}
