/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { installPatch } from './app/configurator/drag-and-drop/monkye-patch';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

installPatch();
