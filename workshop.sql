-- phpMyAdmin SQL Dump
-- version 3.4.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 06, 2014 at 05:15 PM
-- Server version: 5.5.16
-- PHP Version: 5.3.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `skills`
--

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE IF NOT EXISTS `skills` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `IdCat` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=143 ;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`id`, `name`, `IdCat`) VALUES
(1, 'MS Visio', 36),
(2, 'Booch', 36),
(3, 'HOOD', 36),
(4, 'Jackson', 36),
(5, 'Merise', 36),
(6, 'OMT', 36),
(7, 'Power AMC', 36),
(8, 'Rational Rose', 36),
(9, 'SADT', 36),
(10, 'TortoiseSVN', 36),
(11, 'HP Quality Center', 36),
(12, 'SART', 36),
(13, 'NIAM', 36),
(14, 'Z', 36),
(15, 'CVS', 36),
(16, 'Power Designer', 36),
(17, 'Ant', 36),
(18, 'xDoclet', 36),
(19, 'Rational Unified Process', 36),
(20, 'Junit', 36),
(21, 'Visual Source Safe', 36),
(22, 'Rational - Functional', 36),
(23, 'Rational ClearCase', 36),
(24, 'MEGA', 36),
(25, 'MEGA Designer', 36),
(26, 'WinDesign', 36),
(27, 'Rational TestManager', 36),
(28, 'Rational XDE', 36),
(29, 'ClearCase', 36),
(30, 'Rational Test Manager', 36),
(31, 'JIRA', 36),
(32, 'Cruise Control', 36),
(33, 'Poseidon', 36),
(34, 'Bugzilla', 36),
(35, 'Jcoverage', 36),
(36, 'Mock', 36),
(37, 'Subversion (svn)', 36),
(38, 'Apache Maven', 36),
(39, 'utPL/SQL', 36),
(40, 'Rational Functional Tester', 36),
(41, 'Jdepend', 36),
(42, 'Cobertura', 36),
(43, 'Mercury Quality Center', 36),
(44, 'TestNG', 36),
(45, 'Mantis Bug Tracker', 36),
(46, 'Expect', 36),
(47, 'QTP ', 36),
(48, 'CppUnit', 36),
(49, 'Agile', 36),
(50, 'FogBugz', 36),
(51, 'TestTrack', 36),
(52, 'xUnit', 36),
(53, 'Gradle', 36),
(54, 'JWebUnit', 36),
(55, 'CMVC', 36),
(56, 'DUnit', 36),
(57, 'iMake', 36),
(58, 'GreenPepper', 36),
(59, 'SCADE Suite', 36),
(60, 'NCover', 36),
(61, 'XMLUnit', 36),
(62, 'BuildBot', 36),
(63, 'MbUnit', 36),
(64, 'DDTUnit', 36),
(65, 'Ranorex', 36),
(66, 'JMUnit', 36),
(67, 'DBUnit SVN', 36),
(68, 'QF-Test', 36),
(69, 'CUnit', 36),
(70, 'Testlink', 36),
(71, 'Trac', 36),
(72, 'QuickTest', 36),
(73, 'Selenium', 36),
(74, 'Business Objects', 23),
(75, 'Datastage', 23),
(76, 'ArcGIS', 23),
(77, 'AB Initio', 23),
(78, 'SAS', 23),
(79, 'Crystal Reports', 23),
(80, 'StatGraphicsPlus', 23),
(81, 'StatLab', 23),
(82, 'Sunopsis', 23),
(83, 'Brio Technology', 23),
(84, 'ReportMaker', 23),
(85, 'Cognos Impromptu', 23),
(86, 'SQL Server Business Intelligence Development Studi', 23),
(87, 'OLAP', 23),
(88, 'SPSS', 23),
(89, 'SAP Business Information Warehouse', 23),
(90, 'Jasper Reports', 23),
(91, 'StatBox', 23),
(92, 'Cognos Power Play', 23),
(93, 'Cognos', 23),
(94, 'Unica NetTracker', 23),
(95, 'Wonderware Historian', 23),
(96, 'Oracle Data Integrator', 23),
(97, 'Hyperion Essbase', 23),
(98, 'Hyperion Planning', 23),
(99, 'Hyperion Analyzer', 23),
(100, 'Hyperion Reports', 23),
(101, 'Hyperion Application Link', 23),
(102, 'Informatica PowerCenter', 23),
(103, 'Informatica PowerMart', 23),
(104, 'Oracle Warehouse Builder', 23),
(105, 'SQL Server Report Builder', 23),
(106, 'Hyperion Intelligence', 23),
(107, 'IBM Cognos TM-1 Turbo Integrator', 23),
(108, 'Genio', 23),
(109, 'Hyperion Performance Suite', 23),
(110, 'Spago BI', 23),
(111, 'Talend', 23),
(112, 'Oracle Reports', 23),
(113, 'SQL Server Reporting Services', 23),
(114, 'Eviews', 23),
(115, 'Systat', 23),
(116, 'Netezza', 23),
(117, 'SEM', 23),
(118, 'NX (Unigraphics)', 39),
(119, 'AutoCAD', 39),
(120, 'P-CAD', 39),
(121, 'SolidWorks', 39),
(122, 'PowerMill', 39),
(123, 'Autodesk Inventor Mechanical Desktop', 39),
(124, 'ANSA', 39),
(125, 'CADDS5', 39),
(126, 'OrCAD', 39),
(127, 'Autodesk Inventor', 39),
(128, 'Catia', 39),
(129, 'Architectural Desktop', 39),
(130, 'Freelance 2000', 39),
(131, 'SIEMENS Step 7', 39),
(132, 'SIMATIC', 39),
(133, 'STEP 7 Micro/WIN32', 39),
(134, 'Crouzet Millenium', 39),
(135, 'LabView', 39),
(136, 'PCB', 39),
(137, 'ArchiCAD', 39),
(138, 'CANoe', 39),
(139, 'TargetLink', 39),
(140, 'DataCAD', 39),
(141, 'VectorWorks', 39),
(142, 'Cadelec', 39);

-- --------------------------------------------------------

--
-- Table structure for table `skills_cat`
--

CREATE TABLE IF NOT EXISTS `skills_cat` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=45 ;

--
-- Dumping data for table `skills_cat`
--

INSERT INTO `skills_cat` (`id`, `name`) VALUES
(23, 'Business'),
(24, 'Intelligence'),
(25, 'Office Automation'),
(26, 'IDE'),
(27, 'Languages'),
(28, 'Multimedia Editors'),
(29, 'DBMS'),
(30, 'IT Infrastructure'),
(31, 'Protocols'),
(32, 'Other'),
(33, 'Exploitation'),
(34, 'Industrial automation'),
(35, 'ERP&CRM'),
(36, 'ALM'),
(37, 'ECM'),
(38, 'Middleware'),
(39, 'CAD&CAM'),
(40, 'Multimedia'),
(41, 'Industrial Automation'),
(42, 'Baze de date'),
(43, 'Frameworks'),
(44, 'Mobile Apps');

-- --------------------------------------------------------

--
-- Table structure for table `skills_weight`
--

CREATE TABLE IF NOT EXISTS `skills_weight` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `id_skill` int(10) DEFAULT NULL,
  `id_tech` int(10) DEFAULT NULL,
  `weight` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_skills_tech_skills` (`id_skill`),
  KEY `FK_skills_tech_tech` (`id_tech`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `firstname` char(50) DEFAULT NULL,
  `lastname` char(50) DEFAULT NULL,
  `location` varchar(50) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `skills_weight`
--
ALTER TABLE `skills_weight`
  ADD CONSTRAINT `FK_skills_tech_skills` FOREIGN KEY (`id_skill`) REFERENCES `skills_cat` (`id`),
  ADD CONSTRAINT `FK_skills_tech_tech` FOREIGN KEY (`id_tech`) REFERENCES `skills` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
