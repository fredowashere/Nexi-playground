import { ButtonWidgetModel } from "./widgets/button-widget.models";

export enum PRODUCT_TYPE {
    PAY = "payment",
    DISPO = "dispositive",
    INFO = "informative",
}

export enum ATM_EVENT_TYPE {
    TEMPORARY = "TEMPORARY",
    STATIC = "STATIC",
    ONESHOT = "ONESHOT",
}

export enum WIDGET_SOURCE {
    JSON = "json",
    HTML = "html",
    JS = "js",
}

export interface PipelineCommand {
    id: string;
    async?: boolean;
    trigger?: string;
    payload?: Record<string, unknown>;
    type?: ATM_EVENT_TYPE;
    skip?: string;
}

export interface WidgetSpec<T extends WidgetModel> {
    class: string;
    id?: string;
    source?: WIDGET_SOURCE;
    url?: string;
    model?: T;
    render?: string;
    parent_id?: string;
    html_attributes?: Record<string, string>;
    events?: {
        trigger: string;
        model?: Partial<T>;
        attributes?: Record<string, any>;
        removeClass?: string;
        addClass?: string;
    }[];
}

export type WidgetModel = ButtonWidgetModel;
