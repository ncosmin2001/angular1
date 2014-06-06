-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               5.5.24-log - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL version:             7.0.0.4053
-- Date/time:                    2014-06-06 15:45:28
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;

-- Dumping database structure for skills
DROP DATABASE IF EXISTS `skills`;
CREATE DATABASE IF NOT EXISTS `skills` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `skills`;


-- Dumping structure for table skills.skills
DROP TABLE IF EXISTS `skills`;
CREATE TABLE IF NOT EXISTS `skills` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table skills.skills: ~0 rows (approximately)
DELETE FROM `skills`;
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;


-- Dumping structure for table skills.skills_tech
DROP TABLE IF EXISTS `skills_tech`;
CREATE TABLE IF NOT EXISTS `skills_tech` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `id_skill` int(10) DEFAULT NULL,
  `id_tech` int(10) DEFAULT NULL,
  `weight` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_skills_tech_skills` (`id_skill`),
  KEY `FK_skills_tech_tech` (`id_tech`),
  CONSTRAINT `FK_skills_tech_skills` FOREIGN KEY (`id_skill`) REFERENCES `skills` (`id`),
  CONSTRAINT `FK_skills_tech_tech` FOREIGN KEY (`id_tech`) REFERENCES `tech` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table skills.skills_tech: ~0 rows (approximately)
DELETE FROM `skills_tech`;
/*!40000 ALTER TABLE `skills_tech` DISABLE KEYS */;
/*!40000 ALTER TABLE `skills_tech` ENABLE KEYS */;


-- Dumping structure for table skills.tech
DROP TABLE IF EXISTS `tech`;
CREATE TABLE IF NOT EXISTS `tech` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table skills.tech: ~0 rows (approximately)
DELETE FROM `tech`;
/*!40000 ALTER TABLE `tech` DISABLE KEYS */;
/*!40000 ALTER TABLE `tech` ENABLE KEYS */;


-- Dumping structure for table skills.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `firstname` char(50) DEFAULT NULL,
  `lastname` char(50) DEFAULT NULL,
  `location` varchar(50) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table skills.users: ~0 rows (approximately)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
/*!40014 SET FOREIGN_KEY_CHECKS=1 */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
