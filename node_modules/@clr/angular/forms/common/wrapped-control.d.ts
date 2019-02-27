/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { InjectionToken, Injector, OnInit, Type, ViewContainerRef, Renderer2, ElementRef, OnDestroy } from '@angular/core';
import { DynamicWrapper } from '../../utils/host-wrapping/dynamic-wrapper';
import { ControlIdService } from './providers/control-id.service';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';
export declare class WrappedFormControl<W extends DynamicWrapper> implements OnInit, OnDestroy {
    protected vcr: ViewContainerRef;
    protected wrapperType: Type<W>;
    private ngControl;
    private ngControlService;
    private ifErrorService;
    private controlClassService;
    private markControlService;
    protected subscriptions: Subscription[];
    protected index: number;
    protected controlIdService: ControlIdService;
    _id: string;
    constructor(vcr: ViewContainerRef, wrapperType: Type<W>, injector: Injector, ngControl: NgControl, renderer: Renderer2, el: ElementRef);
    id: string;
    triggerValidation(): void;
    private _containerInjector;
    protected getProviderFromContainer<T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T): T;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
