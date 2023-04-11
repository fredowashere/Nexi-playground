import { Component } from '@angular/core';

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

}
