-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema ChangingLifeDB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ChangingLifeDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ChangingLifeDB` DEFAULT CHARACTER SET utf8 ;
USE `ChangingLifeDB` ;

-- -----------------------------------------------------
-- Table `ChangingLifeDB`.`quote`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ChangingLifeDB`.`quote` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quote` VARCHAR(800) NOT NULL,
  `image` VARCHAR(400) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE USER 'userMentality' IDENTIFIED BY 'T3CH-T3ST#3xp3r1m3nt4l1ty';

-- Create User in order to be consistent with the API.
GRANT ALL ON `ChangingLifeDB`.* TO 'userMentality';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;