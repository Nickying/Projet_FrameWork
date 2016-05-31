import {Component} from 'angular2/core';

@Component({
  selector: 'my-accueil',
  template: '<div id="menu"><h1>iDeas</h1><button name="btnCreerCompte">Créer un compte</button><button name="btnConnecter">Se connecter</button></div>'+
      '<p>Plate Forme de partage didées</p>'
})
export class AccueilComponent{ }
