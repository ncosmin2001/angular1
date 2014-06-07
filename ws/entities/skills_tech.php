<?php

class SkillsTech{
    
    private $_idSkills;
    private $_idTech;
    private $_weight;
    
    public function __construct($array)
    {
        if(!empty($array))
        {
            $this->setIdSkills($array['id_skill']);
            $this->setIdTech($array['id_tech']);
            $this->setWeight($array['weight']);
        }
    }
    
    public function getIdSkills()
    {
        return $this->_idSkills;
    }
    
    public function getIdTech()
    {
        return $this->_idTech;
    }
    
    public function getWeight()
    {
        return $this->_weight;
    }
    
    public function setIdSkills($idSkills)
    {
        $this->_idSkills = $idSkills;
    }
    
    public function setIdTech($idTech)
    {
        $this->_idTech = $idTech;
    }
    
    public function setWeight($weight)
    {
        $this->_weight = $weight;
    }
}