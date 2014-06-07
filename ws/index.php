<?php

include('database.php');
include('factory.php');

$database = new Database();

$sth = $database->dbh->query("SELECT * FROM users");
$result = $sth->fetch();

$factory = new Factory('users',$result);

var_dump($factory->objectGenerator());

