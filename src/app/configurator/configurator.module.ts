import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ConfiguratorComponent } from './configurator.component';
import { ButtonWidgetComponent } from './widgets/button-widget/button-widget.component';
import { DropListComponent } from './drop-list/drop-list.component';
import { DropListItemComponent } from './drop-list/drop-list-item/drop-list-item.component';

const routes: Routes = [
  { path: '', component: ConfiguratorComponent },
];

@NgModule({
  declarations: [
    ConfiguratorComponent,
    DropListComponent,
    DropListItemComponent,
    ButtonWidgetComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ConfiguratorModule { }