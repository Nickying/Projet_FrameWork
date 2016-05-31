System.register(['angular2/platform/browser', './accueil/accueil.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, accueil_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (accueil_component_1_1) {
                accueil_component_1 = accueil_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(accueil_component_1.AccueilComponent);
        }
    }
});
//# sourceMappingURL=main.js.map