import { guid } from "src/app/utils/uuid";
import { ConfEl, ConfElType } from "../services/configuratore.service";
import { LayoutComponent } from "./layout/layout.component";

export const LAYOUT = {};

export function createLayout(opt: { numOfCols: number }): ConfEl {
    return {
        id: guid(),
        type: ConfElType.Layout,
        name: `${ ["", "One", "Two", "Three", "Four"][opt.numOfCols] } col${ opt.numOfCols > 1 ? "s" : "" } layout`,
        component: LayoutComponent,
        settings: {
            numOfCols: opt.numOfCols
        },
        outlet1: [],
        outlet2: [],
        outlet3: [],
        outlet4: []
    };
}