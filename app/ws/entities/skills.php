<?php

class Skills{
    
    private $_id;
    private $_name;
    
    public function __construct($array)
    {
        if(!empty($array))
        {
            $this->setId($array['id']);
            $this->setName($array['name']);
        }
    }
    
    public function getId()
    {
        return $this->_id;
    }
    
    public function getName()
    {
        return $this->_name;
    }
    
    public function setId($id)
    {
        $this->_id = $id;
    }
    
    public function setName($name)
    {
        $this->_name = $name;
    }

}