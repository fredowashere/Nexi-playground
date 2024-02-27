import { PipelineCommand, WidgetModel, WidgetSpec } from "./widget.models";

export enum PIN_STATUS {
    PIN_REQUIRED = 0,
    PIN_ACQUIRED = 1,
    PIN_VERIFIED = 2,
    PIN_AUTHORIZED = 3,
    PIN_FAILED = 4,
}

export interface StructurePage {
    root: boolean;
    id: string;
    widgets: {
        spec: WidgetSpec<WidgetModel>;
    }[];
    pipeline: PipelineCommand[];
    type?: string;
    title?: string;
    theme?: string;
    pin_status?: keyof typeof PIN_STATUS;
    data_storage?: DataStorageToLoad[];
}
  
export interface DataStorageToLoad {
    storage_key: string;
    type: string;
    backend_id: string;
    api_id: string;
    payload?: any;
}