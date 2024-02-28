import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ConfiguratorComponent } from './configurator.component';
import { ButtonWidgetComponent } from './widgets/button-widget/button-widget.component';
import { ButtonWidgetDialogComponent } from './widgets/button-widget/button-widget-dialog/button-widget-dialog.component';
import { PipelineCommandComponent } from './pipeline-command/pipeline-command.component';
import { PipelineCommandDialogComponent } from './pipeline-command/pipeline-command-dialog/pipeline-command-dialog.component';
import { DragAndDropManagerDirective } from './drag-and-drop/drag-and-drop.directive';
import { BaseWidgetComponent } from './widgets/base-widget/base-widget.component';
import { ItemComponent } from './drag-and-drop/item.component';

const routes: Routes = [
  { path: '', component: ConfiguratorComponent },
];

@NgModule({
  declarations: [
    ItemComponent,
    DragAndDropManagerDirective,
    ConfiguratorComponent,
    PipelineCommandComponent,
    PipelineCommandDialogComponent,
    BaseWidgetComponent,
    ButtonWidgetComponent,
    ButtonWidgetDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ConfiguratorModule { }