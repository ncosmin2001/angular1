<?php
include('database.php');
include('factory.php');

$database = new Database();

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);



$response = array();
if(isset($_GET["update"]))
{
    $userId = $request->userid;
    $skills = $request->skills;
    
    $query = "update users_skills set  where IdUser=".(int)$userId;
}else{
    $userId = $request->userid;
    $query = "Select users_skills.Id, users_skills.IdSkill , skills.name as skillName,users_skills.Weight as skillLvl from users_skills left join skills on IdSkill=skills.id where IdUser=".(int)$userId;
    $sth = $database->dbh->query($query);
    while($result = $sth->fetch(PDO::FETCH_ASSOC))
    {
        $response[] = $result;
    }
}
echo(json_encode($response));

