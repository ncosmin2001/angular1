<?php

include('database.php');
include('factory.php');

$database = new Database();

$credentials = filter_input(INPUT_POST, 'credentials', FILTER_SANITIZE_SPECIAL_CHARS);
$credentials = json_decode($credentials);

$query = "Select * from users where username='".$credentials['username']."' and password='".$credentials['password']."'";
$sth = $database->dbh->query($query);
$result = $sth->fetch();

$factory = new Factory('users',$result);

var_dump($factory->objectGenerator());