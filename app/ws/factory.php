<?php

include('entities\skills.php');
include('entities\skills_tech.php');
include('entities\users.php');
include('entities\tech.php');

class Factory{
    
    private $_type;
    private $_array;
    
    public function __construct($type, $array){
        $this->_type = $type;
        $this->_array = $array;
    }
    
    public function objectGenerator()
    {
        switch($this->_type)
        {
          case 'users':
            $product = new Users($this->_array);
            break;

           case 'skills':
            $product = new Skills($this->_array);
            break; 

           case 'tech':
            $product = new Tech($this->_array);
            break;

           case 'skills_tech':
            $product = new SkillsTech($this->_array);
            break;        
        }
        return $product;
    }

}