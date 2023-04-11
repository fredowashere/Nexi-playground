import { Injectable } from '@angular/core';

export enum ConfElType {
  Layout = "layout",
  Widget = "widget",
  Command = "Command"
}

export interface ConfEl {
  id: string;
  type: ConfElType;
  name: string;
  component: any;
  settings: any;
  outlet1?: ConfEl[];
  outlet2?: ConfEl[];
  outlet3?: ConfEl[];
  outlet4?: ConfEl[];
}

@Injectable({
  providedIn: 'root'
})
export class ConfiguratoreService {

  header: ConfEl[] = [];
  sideLeft: ConfEl[] = [];
  main: ConfEl[] = [];
  sideRight: ConfEl[] = [];
  footer: ConfEl[] = [];

  constructor() { }
}
