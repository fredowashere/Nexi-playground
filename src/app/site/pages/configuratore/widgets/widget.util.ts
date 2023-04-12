import { guid } from "src/app/utils/uuid";
import { ConfEl, ConfElType } from "../services/configuratore.service";
import { ButtonWrapComponent } from "./button-wrap/button-wrap.component";
import { ButtonSettingsDialogComponent } from "./button-settings-dialog/button-settings-dialog.component";
import { HeadingWrapComponent } from "./heading-wrap/heading-wrap.component";
import { HeadingSettingsDialogComponent } from "./heading-settings-dialog/heading-settings-dialog.component";
import { ParagraphWrapComponent } from "./paragraph-wrap/paragraph-wrap.component";
import { ParagraphSettingsDialogComponent } from "./paragraph-settings-dialog/paragraph-settings-dialog.component";

export enum WidgetType {
    Button = "Oggetto pulsante",
    Heading = "Oggetto titolo",
    Paragraph = "Oggetto testo"
}

export const WIDGETS = [
    createButton({ text: "Pulsante piccolo", size: "sm" }),
    createButton({ text: "Pulsante medio" }),
    createButton({ text: "Pulsante grande", size: "lg" }),
    createHeading({ text: "Titolo piccolo", size: "sm" }),
    createHeading({ text: "Titolo medio" }),
    createHeading({ text: "Titolo grande", size: "lg" }),
    createParagraph({ text: "Paragrafo di testo" })
];

export function createButton(opt: { text: string, size?: "sm" | "md" | "lg" }): ConfEl {
    return {
        id: guid(),
        type: ConfElType.Widget,
        name: WidgetType.Button,
        component: ButtonWrapComponent,
        settingsDialog: ButtonSettingsDialogComponent,
        settings: {
            text: opt.text,
            size: opt.size || "md"
        },
        outlet1: [],
        outlet2: [],
        outlet3: [],
        outlet4: []
    };
}

export function createHeading(opt: { text: string, size?: "sm" | "md" | "lg" }): ConfEl {
    return {
        id: guid(),
        type: ConfElType.Widget,
        name: WidgetType.Heading,
        component: HeadingWrapComponent,
        settingsDialog: HeadingSettingsDialogComponent,
        settings: {
            text: opt.text,
            size: opt.size || "md"
        },
        outlet1: [],
        outlet2: [],
        outlet3: [],
        outlet4: []
    };
}

export function createParagraph(opt: { text: string }): ConfEl {
    return {
        id: guid(),
        type: ConfElType.Widget,
        name: WidgetType.Paragraph,
        component: ParagraphWrapComponent,
        settingsDialog: ParagraphSettingsDialogComponent,
        settings: {
            text: opt.text
        },
        outlet1: [],
        outlet2: [],
        outlet3: [],
        outlet4: []
    };
}