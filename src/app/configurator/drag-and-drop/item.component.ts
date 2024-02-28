import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { Component, Input } from "@angular/core";
import { Subject } from "rxjs";

@Component({
    selector: "app-item",
    template: `
<div class="card" style="min-height: 64px;">

    <h5>{{ item.name }}</h5>

    <div
        style="min-height: 64px;"
        *ngIf="item.widgets"
        class="alert alert-primary"
        cdkDropList
        [id]="item.id + '-widgets'"
        [dragAndDropManager]="'widgets'"
        [cdkDropListData]="item.widgets"
        (cdkDropListDropped)="onDragDrop$.next($event)"
    >
        <app-item
            cdkDrag
            *ngFor="let item of item.widgets"
            [item]="item"
            [onDragDrop]="onDragDrop$"
        />
    </div>

    <div
        style="min-height: 64px;"
        *ngIf="item.pipelineCommands"
        class="alert alert-secondary"
        cdkDropList
        [id]="item.id + '-pipelineCommands'"
        [dragAndDropManager]="'pipelineCommands'"
        [cdkDropListData]="item.pipelineCommands"
        (cdkDropListDropped)="onDragDrop$.next($event)"
    >
        <app-item
            cdkDrag
            *ngFor="let item of item.pipelineCommands"
            [item]="item"
            [onDragDrop]="onDragDrop$"
        />
    </div>

    <div
        style="min-height: 64px;"
        *ngIf="item.events"
        class="alert alert-warning"
        cdkDropList
        [id]="item.id + '-events'"
        [dragAndDropManager]="'events'"
        [cdkDropListData]="item.events"
        (cdkDropListDropped)="onDragDrop$.next($event)"
    >
        <app-item
            cdkDrag
            *ngFor="let item of item.events"
            [item]="item"
            [onDragDrop]="onDragDrop$"
        />
    </div>
</div>
`,
    styles: [ `` ]
})
export class ItemComponent {

    @Input('onDragDrop') public onDragDrop$!: Subject<CdkDragDrop<any[]>>;
    @Input() item!: any;

    constructor() {}

    ngOnInit() {}
}
