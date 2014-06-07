<?php

include('database.php');
include('factory.php');

$database = new Database();

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$username = $request->username;
$password = $request->password;

$query = "Select * from users where username='".$username."' and password='".$password."'";
$sth = $database->dbh->query($query);
$result = $sth->fetch();

$factory = new Factory('users',$result);

if($result)
{
    echo(json_encode($result));
}
else
{
    
}

//$factory->objectGenerator());