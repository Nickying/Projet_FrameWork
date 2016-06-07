import {Component} from 'angular2/core';

@Component({
  selector: 'my-connecter',
  template: '<div id="menu">' +
				'<h1>iDeas</h1>' + 
				'<div class="button">' +
					'<button name="btnCreerCompte">Créer un compte</button>' +
					'<button name="btnConnecter">Se connecter</button>' +
				'</div>' +
			'</div>' +
			'<h3> Se connecter </h3>' +
				'<div id="connexion">' + 
					'<form method="POST">' +
						'<div class="form-group">' + 
						'<label for="email">E-mail</label>' + 
							'<input type="email" class="form-control" id="email" placeholder="E-mail" required>'+
						'</div>'+
						'<div class="form-group">'+
						'<label for="mdp">Mot de passe</label>'+
							'<input type="password" class="form-control" id="mdp" placeholder="Mot de passe" required>'+
						'</div>'+
						'<input type="submit" value="Se connecter">'+
					'</form>'+
				'</div>'
})
export class ConnecterComponent{ }
