import { PRODUCT_TYPE, PipelineCommand } from "../widget.models";

export interface ButtonWidgetModel {
    label: string;
    description?: string;
    eco_label?: string;
    image?: string;
    skip_operation_block?: boolean;
    pipeline?: PipelineCommand[];
    check_pin?: boolean;
    goto?: string;
    product?: {
        id: string;
        type: PRODUCT_TYPE;
        optionalDevices?: string[];
    };
}