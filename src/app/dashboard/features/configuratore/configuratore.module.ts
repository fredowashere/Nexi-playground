import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguratoreComponent } from './configuratore.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ConfiguratoreComponent }
];

@NgModule({
  declarations: [
    ConfiguratoreComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ConfiguratoreModule { }
