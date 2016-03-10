System.register(['angular2/testing', '../app/symges'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, symges_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (symges_1_1) {
                symges_1 = symges_1_1;
            }],
        execute: function() {
            testing_1.beforeEachProviders(function () { return [symges_1.SymgesApp]; });
            testing_1.describe('App: Symges', function () {
                testing_1.it('should have the `defaultMeaning` as 42', testing_1.inject([symges_1.SymgesApp], function (app) {
                    testing_1.expect(app.defaultMeaning).toBe(42);
                }));
                testing_1.describe('#meaningOfLife', function () {
                    testing_1.it('should get the meaning of life', testing_1.inject([symges_1.SymgesApp], function (app) {
                        testing_1.expect(app.meaningOfLife()).toBe('The meaning of life is 42');
                        testing_1.expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
                    }));
                });
            });
        }
    }
});
//# sourceMappingURL=../../../app/symges.spec.js.map