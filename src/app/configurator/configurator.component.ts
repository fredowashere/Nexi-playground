import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { WidgetModel, WidgetSpec } from './widgets/widget.models';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css']
})
export class ConfiguratorComponent {

  leftSide: WidgetSpec<WidgetModel>[] = [
    {
      "id": "lang-indicator",
      "class": "eu.sia.atm.Button",
      "parent_id": "footer",
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
    },
    {
      "id": "lang-indicator",
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
  ]
  header: WidgetSpec<WidgetModel>[] = [];
  content: WidgetSpec<WidgetModel>[] = [];
  footer: WidgetSpec<WidgetModel>[] = [];
  rightSide: WidgetSpec<WidgetModel>[] = [];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
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
        event.currentIndex,
      );
    }
  }

}
