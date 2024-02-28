import { CdkDropList } from '@angular/cdk/drag-drop';
import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { COMPONENT_TYPE, DragAndDropManagerService } from './drag-and-drop-manager.service';

@Directive({
    selector: '[dragAndDropManager]'
})
export class DragAndDropManagerDirective implements OnInit, OnDestroy {

    @Input("dragAndDropManager") dragAndDropManager!: COMPONENT_TYPE;

    private manager!: Subscription;

    constructor(
        private dropList: CdkDropList,
        private managerService: DragAndDropManagerService
    ) { }

    ngOnInit() {
        this.managerService.register(this.dragAndDropManager, this.dropList.id);
        this.manager = this.managerService.onChange[this.dragAndDropManager]
            .subscribe(x => {
                this.dropList.connectedTo = x.reverse();
            });
    }

    ngOnDestroy() {
        this.manager.unsubscribe();
        this.managerService.unregister(this.dragAndDropManager, this.dropList.id);
    }
}