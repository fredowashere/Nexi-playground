import { FormControl, ValidatorFn } from "@angular/forms";

export function nonNullableFormControl<T>(defVal: T, validators?: ValidatorFn | ValidatorFn[]) {
    return new FormControl<T>(defVal, { nonNullable: true, validators });
}