"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const schematics_1 = require("@angular-devkit/schematics");
const find_module_1 = require("./find-module");
describe('find-module', () => {
    describe('findModule', () => {
        let host;
        const modulePath = '/foo/src/app/app.module.ts';
        beforeEach(() => {
            host = new schematics_1.EmptyTree();
            host.create(modulePath, 'app module');
        });
        it('should find a module', () => {
            const foundModule = find_module_1.findModule(host, 'foo/src/app/bar');
            expect(foundModule).toEqual(modulePath);
        });
        it('should not find a module in another sub dir', () => {
            host.create('/foo/src/app/buzz/buzz.module.ts', 'app module');
            const foundModule = find_module_1.findModule(host, 'foo/src/app/bar');
            expect(foundModule).toEqual(modulePath);
        });
        it('should ignore routing modules', () => {
            host.create('/foo/src/app/app-routing.module.ts', 'app module');
            const foundModule = find_module_1.findModule(host, 'foo/src/app/bar');
            expect(foundModule).toEqual(modulePath);
        });
        it('should work with weird paths', () => {
            host.create('/foo/src/app/app-routing.module.ts', 'app module');
            const foundModule = find_module_1.findModule(host, 'foo//src//app/bar/');
            expect(foundModule).toEqual(modulePath);
        });
        it('should throw if no modules found', () => {
            host.create('/foo/src/app/oops.module.ts', 'app module');
            try {
                find_module_1.findModule(host, 'foo/src/app/bar');
                throw new Error('Succeeded, should have failed');
            }
            catch (err) {
                expect(err.message).toMatch(/More than one module matches/);
            }
        });
        it('should throw if two modules found', () => {
            try {
                host = new schematics_1.EmptyTree();
                find_module_1.findModule(host, 'foo/src/app/bar');
                throw new Error('Succeeded, should have failed');
            }
            catch (err) {
                expect(err.message).toMatch(/Could not find an NgModule/);
            }
        });
    });
});
//# sourceMappingURL=find-module_spec.js.map