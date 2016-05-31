<?php

namespace RestBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;

class RestController extends Controller
{
    
    
    
    public function indexAction()
    {
        $PDO = new \PDO('mysql:host=localhost;dbname=Blog','root','root');
        
        $sth = $PDO->prepare('SELECT *
                                FROM Internaute');
        
        $sth->execute();
        
        
        return new JsonResponse($sth->fetchAll());
    }
}
