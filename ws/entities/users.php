<?php

class Users{
    
    private $_id;
    private $_firstname;
    private $_lastname;
    private $_username;
    private $_location;
    private $_password;
    private $_roles;
    
    public function __construct($array)
    {
        if(!empty($array))
        {
            $this->setFirstname($array['firstname']);
            $this->setLastname($array['lastname']);
            $this->setUsername($array['username']);
            $this->setLocation($array['location']);
            $this->setPassword($array['password']);
            $this->setRoles($array['roles']);
        }
    }
    
    public function getId()
    {
        return $this->_id;
    }
    
    public function getFirstname()
    {
        return $this->_firstname;
    }
    
    public function getLastname()
    {
        return $this->_lastname;
    }
    
    public function getLocation()
    {
        return $this->_location;
    }
    
    public function getUsername()
    {
        return $this->_username;
    }
    
    public function getPassword()
    {
        return $this->_password;
    }
    
    public function getRoles()
    {
        return $this->_roles;
    }
    
    public function setId($id)
    {
        $this->_id = $id;
    }
    
    public function setFirstname($firstname)
    {
        $this->_firstname = $firstname;
    }
    
    public function setLastname($lastname)
    {
        $this->_lastname = $lastname;
    }
    
    public function setLocation($location)
    {
        $this->_location = $location;
    }
    
    public function setUsername($username)
    {
        $this->_username = $username;
    }
    
    public function setPassword($password)
    {
        $this->_password = $password;
    }
    
    public function setRoles($role)
    {
        $this->_roles = $role;
    }
}