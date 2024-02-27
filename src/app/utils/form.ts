import { FormControl } from "@angular/forms";

export function nonNullableFormControl<T>(defVal: T) {
    return new FormControl<T>(defVal, { nonNullable: true });
}