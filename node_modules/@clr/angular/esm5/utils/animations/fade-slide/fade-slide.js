/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { animate, style, transition } from '@angular/animations';
/**
 * @param {?} direction
 * @return {?}
 */
export function fadeSlide(direction) {
    /** @type {?} */
    var transform = null;
    if (direction === 'up') {
        transform = 'translate(0, 25%)';
    }
    else if (direction === 'down') {
        transform = 'translate(0, -25%)';
    }
    else if (direction === 'left') {
        transform = 'translate(25%, 0)';
    }
    else if (direction === 'right') {
        transform = 'translate(-25%, 0)';
    }
    else {
        throw new Error('Unknown direction ' + direction + ' for slide animation.');
    }
    return [
        transition('void => *', [style({ opacity: 0, transform: transform }), animate('0.2s ease-in-out')]),
        transition('* => void', [animate('0.2s ease-in-out', style({ opacity: 0, transform: transform }))]),
    ];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFkZS1zbGlkZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbHIvYW5ndWxhci8iLCJzb3VyY2VzIjpbInV0aWxzL2FuaW1hdGlvbnMvZmFkZS1zbGlkZS9mYWRlLXNsaWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxPQUFPLEVBQXFCLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7QUFFcEYsTUFBTSxVQUFVLFNBQVMsQ0FBQyxTQUFpQjs7UUFDckMsU0FBUyxHQUFXLElBQUk7SUFDNUIsSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO1FBQ3RCLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQztLQUNqQztTQUFNLElBQUksU0FBUyxLQUFLLE1BQU0sRUFBRTtRQUMvQixTQUFTLEdBQUcsb0JBQW9CLENBQUM7S0FDbEM7U0FBTSxJQUFJLFNBQVMsS0FBSyxNQUFNLEVBQUU7UUFDL0IsU0FBUyxHQUFHLG1CQUFtQixDQUFDO0tBQ2pDO1NBQU0sSUFBSSxTQUFTLEtBQUssT0FBTyxFQUFFO1FBQ2hDLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQztLQUNsQztTQUFNO1FBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxTQUFTLEdBQUcsdUJBQXVCLENBQUMsQ0FBQztLQUM3RTtJQUNELE9BQU87UUFDTCxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQ25HLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDcEcsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBhbmltYXRlLCBBbmltYXRpb25NZXRhZGF0YSwgc3R5bGUsIHRyYW5zaXRpb24gfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZhZGVTbGlkZShkaXJlY3Rpb246IHN0cmluZyk6IEFuaW1hdGlvbk1ldGFkYXRhW10ge1xuICBsZXQgdHJhbnNmb3JtOiBzdHJpbmcgPSBudWxsO1xuICBpZiAoZGlyZWN0aW9uID09PSAndXAnKSB7XG4gICAgdHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgwLCAyNSUpJztcbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdkb3duJykge1xuICAgIHRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoMCwgLTI1JSknO1xuICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgdHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgyNSUsIDApJztcbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICB0cmFuc2Zvcm0gPSAndHJhbnNsYXRlKC0yNSUsIDApJztcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZGlyZWN0aW9uICcgKyBkaXJlY3Rpb24gKyAnIGZvciBzbGlkZSBhbmltYXRpb24uJyk7XG4gIH1cbiAgcmV0dXJuIFtcbiAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06IHRyYW5zZm9ybSB9KSwgYW5pbWF0ZSgnMC4ycyBlYXNlLWluLW91dCcpXSksXG4gICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW2FuaW1hdGUoJzAuMnMgZWFzZS1pbi1vdXQnLCBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogdHJhbnNmb3JtIH0pKV0pLFxuICBdO1xufVxuIl19