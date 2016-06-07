import {Component} from 'angular2/core';

@Component({
  selector: 'my-compte',
  template: '<div id="menu">' +
				'<h1>iDeas</h1>' + 
				'<div class="button">' +
					'<button name="btnCreerCompte">Créer un compte</button>' +
					'<button name="btnConnecter">Se connecter</button>' +
				'</div>' +
			'</div>' +
			'<form>' +
				'<fieldset>' +
				'<h2> Inscription </h2>' +
				'<div class="form-group">' +
				'<label for="pseudo">Pseudonyme</label>'+
				'<input type="text" class="form-control" id="pseudo" placeholder="Pseudonyme" required>'+
				'</div>'+
				'<div class="form-group">'+
				'<label for="nom">Nom</label>'+
				'<input type="text" class="form-control" id="nom" placeholder="Nom" required>'+
				'</div>'+
				'<div class="form-group">'+
				'<label for="prenom">Prénom</label>'+
				'<input type="text" class="form-control" id="prenom" placeholder="Prenom" required>'+
				'</div>'+
				'<div class="form-group">'+
				'<label for="email">E-mail</label>'+
				'<input type="email" class="form-control" id="email" placeholder="E-mail" required>'+
				'</div>'+
				'<div class="form-group">'+
				'<label for="mdp">Mot de passe</label>'+
				'<input type="password" class="form-control" id="mdp" placeholder="Mot de passe" required>'+
				'</div>'+
				'<div class="form-group">'+
				'<label for="cmdp">Confirmer mot de passe</label>'+
				'<input type="password" class="form-control" id="cmdp" placeholder="Confirmer Mot de Passe" required>'+
				'</div>'+
				'<button id="inscrire" type="submit" class="btn btn-default">S\'inscrire</button>'+
				'</fieldset>' +
			'</form>'
})
export class CompteComponent{ }
