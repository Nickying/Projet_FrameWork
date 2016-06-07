System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ConnecterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ConnecterComponent = (function () {
                function ConnecterComponent() {
                }
                ConnecterComponent = __decorate([
                    core_1.Component({
                        selector: 'my-connecter',
                        template: '<div id="menu">' +
                            '<h1>iDeas</h1>' +
                            '<div class="button">' +
                            '<button name="btnCreerCompte">Cr�er un compte</button>' +
                            '<button name="btnConnecter">Se connecter</button>' +
                            '</div>' +
                            '</div>' +
                            '<h3> Se connecter </h3>' +
                            '<div id="connexion">' +
                            '<form method="POST">' +
                            '<div class="form-group">' +
                            '<label for="email">E-mail</label>' +
                            '<input type="email" class="form-control" id="email" placeholder="E-mail" required>' +
                            '</div>' +
                            '<div class="form-group">' +
                            '<label for="mdp">Mot de passe</label>' +
                            '<input type="password" class="form-control" id="mdp" placeholder="Mot de passe" required>' +
                            '</div>' +
                            '<input type="submit" value="Se connecter">' +
                            '</form>' +
                            '</div>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ConnecterComponent);
                return ConnecterComponent;
            }());
            exports_1("ConnecterComponent", ConnecterComponent);
        }
    }
});
//# sourceMappingURL=connecter.component.js.map