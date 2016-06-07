import {Component} from 'angular2/core';

@Component({
  selector: 'my-accueil',
  template: '<div id="menu">' +
				'<h1>iDeas</h1>' + 
				'<div class="button">' +
					'<button name="btnCreerCompte">Créer un compte</button>' +
					'<button name="btnConnecter">Se connecter</button>' +
				'</div>' +
			'</div>' +
			'<p>Plate Forme de partage d\'idées</p>'+
			'<div class="row">'+
			'<h3> Les plus populaires </h3>'+
			'<div id="populaire">'+
			'<p> Idée 1 </p>'+
			'<p> Idée 3 </p>'+
			'</div>'+
			'<div class="row">'+
			'<h3> Les plus récentes </h3>'+
			'<div id="recent">'+
			'<p> Idée 345 </p>'+
			'<p> Idée 346 </p>'+
			'</div>'
})
export class AccueilComponent{ }
