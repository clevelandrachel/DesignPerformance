import { AfterViewInit, EmbeddedViewRef, TemplateRef } from '@angular/core';
import { DynamicWrapper } from '../../utils/host-wrapping/dynamic-wrapper';
export declare class WrappedColumn implements DynamicWrapper, AfterViewInit {
    _dynamic: boolean;
    templateRef: TemplateRef<void>;
    columnView: EmbeddedViewRef<void>;
    ngAfterViewInit(): void;
}
