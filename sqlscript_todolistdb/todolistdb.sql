-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema todolistdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema todolistdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `todolistdb` DEFAULT CHARACTER SET utf8 ;
USE `todolistdb` ;

-- -----------------------------------------------------
-- Table `todolistdb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `todolistdb`.`users` (
  `user_id` INT(11) NOT NULL AUTO_INCREMENT,
  `full_name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(150) NULL DEFAULT NULL,
  `password` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `todolistdb`.`task_list`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `todolistdb`.`task_list` (
  `task_id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_id` INT(11) NOT NULL,
  `date_added` DATE NOT NULL,
  `task` VARCHAR(100) NOT NULL,
  `completed` TINYINT(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`task_id`, `user_id`),
  INDEX `user_id` (`user_id` ASC),
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `todolistdb`.`users` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `todolistdb`.`to_dos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `todolistdb`.`to_dos` (
  `task_id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `date_added` VARCHAR(255) NULL DEFAULT NULL,
  `task` VARCHAR(255) NULL DEFAULT NULL,
  `task_status` BIT(1) NULL DEFAULT NULL,
  `user_id` BIGINT(20) NULL DEFAULT NULL,
  PRIMARY KEY (`task_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `todolistdb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `todolistdb`.`user` (
  `user_id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
