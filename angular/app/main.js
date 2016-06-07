System.register(['angular2/platform/browser', './accueil/accueil.component', './accueil/compte.component', './accueil/connecter.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, accueil_component_1, compte_component_1, connecter_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (accueil_component_1_1) {
                accueil_component_1 = accueil_component_1_1;
            },
            function (compte_component_1_1) {
                compte_component_1 = compte_component_1_1;
            },
            function (connecter_component_1_1) {
                connecter_component_1 = connecter_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(accueil_component_1.AccueilComponent);
            browser_1.bootstrap(compte_component_1.CompteComponent);
            browser_1.bootstrap(connecter_component_1.ConnecterComponent);
        }
    }
});
//# sourceMappingURL=main.js.map