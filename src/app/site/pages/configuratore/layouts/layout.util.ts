import { guid } from "src/app/utils/uuid";
import { ConfEl, ConfElType } from "../services/configuratore.service";
import { LayoutComponent } from "./layout/layout.component";
import { LayoutSettingsDialogComponent } from "./layout-settings-dialog/layout-settings-dialog.component";

export const LAYOUTS = [
    createLayout({ numOfCols: 1 }),
    createLayout({ numOfCols: 2 }),
    createLayout({ numOfCols: 3 }),
    createLayout({ numOfCols: 4 }),
];

export function createLayout(opt: { numOfCols: number }): ConfEl {
    return {
        id: guid(),
        type: ConfElType.Layout,
        name: "Oggetto Layout",
        component: LayoutComponent,
        settingsDialog: LayoutSettingsDialogComponent,
        settings: {
            numOfCols: opt.numOfCols
        },
        outlet1: [],
        outlet2: [],
        outlet3: [],
        outlet4: []
    };
}