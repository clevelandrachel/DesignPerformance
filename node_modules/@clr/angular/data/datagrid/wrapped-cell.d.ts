import { AfterViewInit, EmbeddedViewRef, TemplateRef } from '@angular/core';
import { DynamicWrapper } from '../../utils/host-wrapping/dynamic-wrapper';
export declare class WrappedCell implements DynamicWrapper, AfterViewInit {
    _dynamic: boolean;
    templateRef: TemplateRef<void>;
    cellView: EmbeddedViewRef<void>;
    ngAfterViewInit(): void;
}
