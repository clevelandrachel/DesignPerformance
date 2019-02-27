import { AfterViewInit, EmbeddedViewRef, TemplateRef } from '@angular/core';
import { DynamicWrapper } from '../../utils/host-wrapping/dynamic-wrapper';
export declare class WrappedRow implements DynamicWrapper, AfterViewInit {
    _dynamic: boolean;
    templateRef: TemplateRef<void>;
    rowView: EmbeddedViewRef<void>;
    ngAfterViewInit(): void;
}
