import { Component, Input, TemplateRef } from '@angular/core';
import { ButtonWidgetModel } from '../../models/widgets/button-widget.models';
import { PRODUCT_TYPE, WidgetSpec } from '../../models/widget.models';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { beautifyJson } from 'src/app/utils/json';
import { FormControl, FormGroup } from '@angular/forms';
import { SelectOption } from 'src/app/shared/components/input/input.component';
import { nonNullableFormControl } from 'src/app/utils/form';

@Component({
  selector: 'app-button-widget',
  templateUrl: './button-widget.component.html',
  styleUrls: ['./button-widget.component.css']
})
export class ButtonWidgetComponent {

    beautifyJson = beautifyJson;

    @Input("spec") spec!: WidgetSpec<ButtonWidgetModel>;

    showJson = true;

    productTypes: SelectOption[] = Object.values(PRODUCT_TYPE).map(pt => ({ value: pt, text: pt }));

    form = new FormGroup({
        label: nonNullableFormControl(""),
        description: nonNullableFormControl(""),
        eco_label: nonNullableFormControl(""),
        image: nonNullableFormControl(""),
        goto: nonNullableFormControl(""),
        skip_operation_block: nonNullableFormControl(false),
        check_pin_control: nonNullableFormControl(false),
        product: new FormGroup({
            id: nonNullableFormControl(""),
            type: nonNullableFormControl(PRODUCT_TYPE.DISPO),
            optionalDevices: nonNullableFormControl<string[]>([])
        }),
        // pipeline?: PipelineCommand[];
    });

    isProductControl = new FormControl(false);

    constructor(
        private modalService: NgbModal
    ) {}

    ngOnInit() {
        const newButtonWidgetModel: ButtonWidgetModel = { label: "" };
        this.form.patchValue(this.spec.model || newButtonWidgetModel);
        this.isProductControl.setValue(!!this.spec.model?.product)
    }

    async open(content: TemplateRef<any>) {
        await this.modalService.open(
            content,
            { 
                centered: true,
                scrollable: true
            }
        );
	}

    save(modal: NgbActiveModal) {
        this.spec.model = this.form.getRawValue();
        if (!this.isProductControl.value) {
            delete this.spec.model.product;
        }
        modal.close();
    }

    logInternalModel() {
        console.log(this.form.value);
    }
}
