import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type COMPONENT_TYPE = "widgets" | "pipelineCommands" | "events";

@Injectable({
    providedIn: "root"
})
export class DragAndDropManagerService {

    private widgets = new BehaviorSubject<string[]>([]);
    private pipelineCommands = new BehaviorSubject<string[]>([]);
    private events = new BehaviorSubject<string[]>([]);

    onChange = {
        "widgets": this.widgets.asObservable(),
        "pipelineCommands": this.pipelineCommands.asObservable(),
        "events": this.events.asObservable(),
    };

    constructor() { }

    register(type: COMPONENT_TYPE, id: string) {

        // console.log("registering", type, id);
        // console.log("widgets", this.widgets.value);
        // console.log("pipelineCommands", this.pipelineCommands.value);
        // console.log("events", this.events.value);
        
        const list = this[type];
        if (!id || list.value.includes(id)) {
            return;
        }
        list.next([ ...list.value, id ]);
    };

    unregister(type: COMPONENT_TYPE, id: string) {
        const list = this[type];
        list.next(list.value.filter(x => x !== id));
    };
}
