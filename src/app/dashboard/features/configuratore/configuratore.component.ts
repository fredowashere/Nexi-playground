import { Component } from '@angular/core';
import { Swappable, Plugins } from '@shopify/draggable';

@Component({
  selector: 'app-configuratore',
  templateUrl: './configuratore.component.html',
  styleUrls: ['./configuratore.component.css']
})
export class ConfiguratoreComponent {

  ngAfterViewInit() {

    const containerSelector = '.block-layout';
    const containers = document.querySelectorAll(containerSelector);

    if (containers.length === 0)
      return;
  
    const swappable = new Swappable(containers, {
      draggable: '.block--is-draggable',
      mirror: {
        appendTo: containerSelector,
        constrainDimensions: true,
      },
      plugins: [Plugins.ResizeMirror],
    });
  }


}
