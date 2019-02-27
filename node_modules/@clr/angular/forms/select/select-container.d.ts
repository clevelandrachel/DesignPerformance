/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { OnDestroy } from '@angular/core';
import { SelectMultipleControlValueAccessor, NgControl } from '@angular/forms';
import { IfErrorService } from '../common/if-error/if-error.service';
import { NgControlService } from '../common/providers/ng-control.service';
import { LayoutService } from '../common/providers/layout.service';
import { DynamicWrapper } from '../../utils/host-wrapping/dynamic-wrapper';
import { ClrLabel } from '../common/label';
import { ControlClassService } from '../common/providers/control-class.service';
export declare class ClrSelectContainer implements DynamicWrapper, OnDestroy {
    private ifErrorService;
    private layoutService;
    private controlClassService;
    private ngControlService;
    private subscriptions;
    invalid: boolean;
    _dynamic: boolean;
    label: ClrLabel;
    multiple: SelectMultipleControlValueAccessor;
    private multi;
    control: NgControl;
    constructor(ifErrorService: IfErrorService, layoutService: LayoutService, controlClassService: ControlClassService, ngControlService: NgControlService);
    wrapperClass(): "clr-multiselect-wrapper" | "clr-select-wrapper";
    controlClass(): string;
    addGrid(): boolean;
    ngOnDestroy(): void;
}
