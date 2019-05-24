/*sql code*/

CREATE DATABASE  IF NOT EXISTS `test` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `test`;
-- MySQL dump 10.13  Distrib 5.7.25, for Linux (x86_64)
--
-- Host: localhost    Database: test
-- ------------------------------------------------------
-- Server version	5.7.25-0ubuntu0.18.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `notes`
--

DROP TABLE IF EXISTS `notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `text` varchar(250) NOT NULL,
  `image` varchar(100) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` varchar(60) NOT NULL,
  `updated_at` varchar(60) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_notes_1_idx` (`created_by`),
  CONSTRAINT `fk_notes_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notes`
--

LOCK TABLES `notes` WRITE;
/*!40000 ALTER TABLE `notes` DISABLE KEYS */;
INSERT INTO `notes` VALUES (1,'hai','abc','uploads/undefined.jpeg',1,'2019-05-24T19:52:33+05:30','2019-05-24T19:52:33+05:30'),(2,'hai','abc','uploads/ambedkar1.jpg.jpeg',1,'2019-05-24T19:55:33+05:30','2019-05-24T19:55:33+05:30'),(3,'hai','abc','uploads/ambedkar1.jpg',1,'2019-05-24T19:59:36+05:30','2019-05-24T19:59:36+05:30'),(4,'hai','abc','uploads/ambedkar1.jpg',1,'2019-05-24T20:07:52+05:30','2019-05-24T20:07:52+05:30');
/*!40000 ALTER TABLE `notes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `address` varchar(100) NOT NULL,
  `password` varchar(125) NOT NULL,
  `token` varchar(256) DEFAULT NULL,
  `created_at` varchar(100) NOT NULL,
  `token_created_at` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'m.srijithsri@gmail.com','sreejith','m','abc','994b958548224c7fe442861286b8bfc12c265e613bf54e7844295656bfb9f975','02b5a1b3fcd86a3a716f6975f41a94cabe5cad1905e9ba87f941ead6cf469cba','2019-05-23T22:29:24+05:30','2019-05-24T21:53:51+05:30'),(45,'m.srijithsri@gmaitl.com','sreejith','m','abc','994b958548224c7fe442861286b8bfc12c265e613bf54e7844295656bfb9f975','d56e4c9c7425fb388bb79897a8ea3c2aea8195fcab14867eb19048765411a7ff','2019-05-23T22:48:10+05:30','2019-05-23T22:48:10+05:30'),(46,'m.srgijithsri@gmaitl.com','sreejith','m','abc','994b958548224c7fe442861286b8bfc12c265e613bf54e7844295656bfb9f975','7aac7955cf4f2855fc819c9ec2611150fb0573724a456f8b1a62eeaf84910b25','2019-05-24T15:38:31+05:30','2019-05-24T15:38:31+05:30'),(47,'m.srgijfithsri@gmaitl.com','sreejith','m','abc','994b958548224c7fe442861286b8bfc12c265e613bf54e7844295656bfb9f975','0143e048bfe637f9bd42376dd7c7ab0f1bd91e0d0a1dffc8f8b0812d3045ddc3','2019-05-24T18:36:34+05:30','2019-05-24T18:36:34+05:30'),(48,'m.srgijithsri@gma','sreejith','m','abc','ef09eeb3fc06c24b7953635ffafe5655ad9e95edf824903f4e08f230943b47fa','a24bf3fbb622bf68f6937a37848adce8aa7c0482125d13ffa52f668f144a8117','2019-05-24T20:48:36+05:30','2019-05-24T20:48:36+05:30'),(49,'m.srgijithsri@gmail','sreejith','m','abc','ef09eeb3fc06c24b7953635ffafe5655ad9e95edf824903f4e08f230943b47fa','74e67d242a1c6e30160ae21f24bed78ef1b56b92368b841e4854949aecd480c5','2019-05-24T20:49:47+05:30','2019-05-24T20:49:47+05:30');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-25  0:03:10