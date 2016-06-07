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
    var CompteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CompteComponent = (function () {
                function CompteComponent() {
                }
                CompteComponent = __decorate([
                    core_1.Component({
                        selector: 'my-compte',
                        template: '<div id="menu">' +
                            '<h1>iDeas</h1>' +
                            '<div class="button">' +
                            '<button name="btnCreerCompte">Cr�er un compte</button>' +
                            '<button name="btnConnecter">Se connecter</button>' +
                            '</div>' +
                            '</div>' +
                            '<form>' +
                            '<fieldset>' +
                            '<h2> Inscription </h2>' +
                            '<div class="form-group">' +
                            '<label for="pseudo">Pseudonyme</label>' +
                            '<input type="text" class="form-control" id="pseudo" placeholder="Pseudonyme" required>' +
                            '</div>' +
                            '<div class="form-group">' +
                            '<label for="nom">Nom</label>' +
                            '<input type="text" class="form-control" id="nom" placeholder="Nom" required>' +
                            '</div>' +
                            '<div class="form-group">' +
                            '<label for="prenom">Pr�nom</label>' +
                            '<input type="text" class="form-control" id="prenom" placeholder="Prenom" required>' +
                            '</div>' +
                            '<div class="form-group">' +
                            '<label for="email">E-mail</label>' +
                            '<input type="email" class="form-control" id="email" placeholder="E-mail" required>' +
                            '</div>' +
                            '<div class="form-group">' +
                            '<label for="mdp">Mot de passe</label>' +
                            '<input type="password" class="form-control" id="mdp" placeholder="Mot de passe" required>' +
                            '</div>' +
                            '<div class="form-group">' +
                            '<label for="cmdp">Confirmer mot de passe</label>' +
                            '<input type="password" class="form-control" id="cmdp" placeholder="Confirmer Mot de Passe" required>' +
                            '</div>' +
                            '<button id="inscrire" type="submit" class="btn btn-default">S\'inscrire</button>' +
                            '</fieldset>' +
                            '</form>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], CompteComponent);
                return CompteComponent;
            }());
            exports_1("CompteComponent", CompteComponent);
        }
    }
});
//# sourceMappingURL=compte.component.js.map