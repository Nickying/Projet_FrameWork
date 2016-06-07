<?php

namespace RestBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

class RestController extends Controller {
    
    
    
    public function indexAction() {
        $PDO = new \PDO('mysql:host=localhost;dbname=Blog','root','root');
	
	
        
        $sth = $PDO->prepare('SELECT *
                                FROM Internaute');
	
        
        $sth->execute();
        
        
        return new JsonResponse($sth->fetchAll(\PDO::FETCH_ASSOC));
    }
    
    public function testpseudoAction(Request $request) {
        $PDO = new \PDO('mysql:host=localhost;dbname=Blog','root','root');
	$pseudo=$request->request->get('pseudo');
	
        
        $sth = $PDO->prepare("SELECT count(pseudo) as existe
                                FROM Internaute 
                                where pseudo='$pseudo'");
	
        
        $sth->execute();
        
        
        return new JsonResponse($sth->fetchAll(\PDO::FETCH_ASSOC));
    }


    public function adduserAction(Request $request) {
        try {
        $pseudo=$request->request->get('pseudo');
        $nom=$request->request->get('nom');
        $prenom=$request->request->get('prenom');
        $email=$request->request->get('email');
        $mdp=$request->request->get('mdp');
        $PDO = new \PDO('mysql:host=localhost;dbname=Blog','root','root');
	$PDO->setAttribute(\PDO::ATTR_ERRMODE,\PDO::ERRMODE_WARNING);
        $PDO->setAttribute(\PDO::ATTR_DEFAULT_FETCH_MODE,\PDO::FETCH_OBJ);
	
        


        $sth = $PDO->prepare("INSERT INTO Internaute (pseudo,mdp,nom,prenom,email,dateinscription) VALUES('$pseudo',password('$mdp'),'$nom','$prenom','$email',Now());");
        
	
        
        $sth->execute();
        }
        
        catch (PDOException $e) {
    echo 'Échec lors de la connexion : ' . $e->getMessage();
}
        
        
        return '$sth->rowCount()';
    }
    
    public function arAction() {
        
        $PDO = new \PDO('mysql:host=localhost;dbname=Blog','root','root');
	
	
        
        $sth = $PDO->prepare('SELECT *
                                FROM Internaute');
	
        
        $sth->execute();
        
        
        return new JsonResponse($sth->fetchAll(\PDO::FETCH_ASSOC));
    }
}
