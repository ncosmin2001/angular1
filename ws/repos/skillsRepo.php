<?php

include('entities\skills.php');
include('..\database.php');

class SkillsRepo{
    
    public function getAllSkills()
    {
        $database = new Database();
        $sth = $database->dbh->query('Select * from skills');
        $result = $sth->fetch();
        return $result;
    }
}

$repo = new SkillsRepo();
echo json_encode($repo->getAllSkills);