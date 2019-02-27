import { TemplateRef, ViewContainerRef } from '@angular/core';
import { IfErrorService } from './if-error.service';
import { NgControlService } from '../providers/ng-control.service';
export declare class ClrIfError {
    private ifErrorService;
    private ngControlService;
    private template;
    private container;
    constructor(ifErrorService: IfErrorService, ngControlService: NgControlService, template: TemplateRef<any>, container: ViewContainerRef);
    error: string;
    private subscriptions;
    private displayed;
    private control;
    ngOnDestroy(): void;
    private displayError;
}
