import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ConfiguratorComponent } from './configurator.component';

const routes: Routes = [
  { path: '', component: ConfiguratorComponent },
];

@NgModule({
  declarations: [
    ConfiguratorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ConfiguratorModule { }