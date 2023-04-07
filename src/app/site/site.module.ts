import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SiteComponent } from './site.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { ConfiguratoreComponent } from './pages/configuratore/configuratore.component';
import { TemplateAComponent } from './pages/configuratore/page-layouts/template-a/template-a.component';
import { TemplateBComponent } from './pages/configuratore/page-layouts/template-b/template-b.component';
import { TemplateCComponent } from './pages/configuratore/page-layouts/template-c/template-c.component';
import { TemplateDComponent } from './pages/configuratore/page-layouts/template-d/template-d.component';

const routes: Routes = [
  {
    path: '',
    component: SiteComponent,
    children: [
      { path: '', redirectTo: 'configuratore', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'configuratore', component: ConfiguratoreComponent },
    ]
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    SiteComponent,
    NavbarComponent,
    FooterComponent,
    ConfiguratoreComponent,
    TemplateAComponent,
    TemplateBComponent,
    TemplateCComponent,
    TemplateDComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class SiteModule { }
