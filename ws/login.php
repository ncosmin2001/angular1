<?php
session_start();
include('database.php');
include('factory.php');

$database = new Database();

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

if(!empty($request))
{
    $username = $request->username;
    $password = $request->password;
    $query = "Select * from users where username='".$username."' and password='".$password."'";
    $sth = $database->dbh->query($query);
    $result = $sth->fetch();
}
else
{
    echo json_encode($_SESSION);
    return;
}

if($result)
{
    $response['logged'] = true;
    $response['idUser'] = $result['id'];
    $response['username'] = $result['username'];
    $response['role'] = $result['Role'];
}
else
{
    $response['logged'] = false;
    $response['username'] = '';
    $response['role'] = '';  
    $response['errors'] = 'Invalid Credentials';
}

$_SESSION['logged'] = $response['logged'];
$_SESSION['id'] = $result['id'];
$_SESSION['username'] = $result['username'];
$_SESSION['role'] = $result['Role'];
echo(json_encode($response));

//$factory->objectGenerator());