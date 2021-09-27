-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema DHTube
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema DHTube
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `DHTube` DEFAULT CHARACTER SET utf8 ;
USE `DHTube` ;

-- -----------------------------------------------------
-- Table `DHTube`.`Likes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHTube`.`Likes` (
  `id_Like` INT NOT NULL AUTO_INCREMENT,
  `like` TINYINT(1) NOT NULL,
  `fecha_like` DATETIME NOT NULL,
  PRIMARY KEY (`id_Like`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHTube`.`Paises`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHTube`.`Paises` (
  `id_Pais` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_Pais`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHTube`.`Canales`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHTube`.`Canales` (
  `id_Canales` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(150) NOT NULL,
  `fecha_creacion` DATE NOT NULL,
  PRIMARY KEY (`id_Canales`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHTube`.`Avatar`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHTube`.`Avatar` (
  `id_Avatar` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `url` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_Avatar`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHTube`.`Usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHTube`.`Usuarios` (
  `id_Usuario` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `fecha_nacimiento` DATE NOT NULL,
  `codigo_postal` VARCHAR(45) NOT NULL,
  `Likes_id_Like` INT NOT NULL,
  `Paises_id_Pais` INT NOT NULL,
  `Canales_id_Canales` INT NOT NULL,
  `Avatar_id_Avatar` INT NOT NULL,
  PRIMARY KEY (`id_Usuario`),
  INDEX `fk_Usuarios_Likes1_idx` (`Likes_id_Like` ASC) VISIBLE,
  INDEX `fk_Usuarios_Paises1_idx` (`Paises_id_Pais` ASC) VISIBLE,
  INDEX `fk_Usuarios_Canales1_idx` (`Canales_id_Canales` ASC) VISIBLE,
  INDEX `fk_Usuarios_Avatar1_idx` (`Avatar_id_Avatar` ASC) VISIBLE,
  CONSTRAINT `fk_Usuarios_Likes1`
    FOREIGN KEY (`Likes_id_Like`)
    REFERENCES `DHTube`.`Likes` (`id_Like`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuarios_Paises1`
    FOREIGN KEY (`Paises_id_Pais`)
    REFERENCES `DHTube`.`Paises` (`id_Pais`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuarios_Canales1`
    FOREIGN KEY (`Canales_id_Canales`)
    REFERENCES `DHTube`.`Canales` (`id_Canales`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuarios_Avatar1`
    FOREIGN KEY (`Avatar_id_Avatar`)
    REFERENCES `DHTube`.`Avatar` (`id_Avatar`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHTube`.`Videos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHTube`.`Videos` (
  `id_Video` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(255) NOT NULL,
  `tamano` VARCHAR(45) NOT NULL,
  `nombre_archivo` VARCHAR(45) NOT NULL,
  `duracion` TIME NOT NULL,
  `imagen` VARCHAR(255) NOT NULL,
  `numro_reproduccion` INT NOT NULL,
  `caracteristicas` TINYINT(1) NOT NULL,
  `id_Usuario` INT NOT NULL,
  `fecha_publicacion` DATE NOT NULL,
  `Likes_id_Like` INT NOT NULL,
  `contador_likes` BIGINT NOT NULL,
  `contador_dislikes` BIGINT NOT NULL,
  `Canales_id_Canales` INT NOT NULL,
  PRIMARY KEY (`id_Video`),
  INDEX `FK_Videos_Usuarios_idx` (`id_Usuario` ASC) VISIBLE,
  INDEX `fk_Videos_Likes1_idx` (`Likes_id_Like` ASC) VISIBLE,
  INDEX `fk_Videos_Canales1_idx` (`Canales_id_Canales` ASC) VISIBLE,
  CONSTRAINT `FK_Videos_Usuarios`
    FOREIGN KEY (`id_Usuario`)
    REFERENCES `DHTube`.`Usuarios` (`id_Usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Videos_Likes1`
    FOREIGN KEY (`Likes_id_Like`)
    REFERENCES `DHTube`.`Likes` (`id_Like`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Videos_Canales1`
    FOREIGN KEY (`Canales_id_Canales`)
    REFERENCES `DHTube`.`Canales` (`id_Canales`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHTube`.`Reacciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHTube`.`Reacciones` (
  `id_Reaccion` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_Reaccion`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHTube`.`Reacciones_Videos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHTube`.`Reacciones_Videos` (
  `id_Reaccion_Video` INT NOT NULL AUTO_INCREMENT,
  `id_Reaccion` INT NOT NULL,
  `id_Video` INT NOT NULL,
  `fecha_reacion` DATETIME NOT NULL,
  `tipo_reaccion` VARCHAR(45) NOT NULL,
  `Usuarios_id_Usuario` INT NOT NULL,
  PRIMARY KEY (`id_Reaccion_Video`),
  INDEX `FK_Reacciones_Videos_Videos_idx` (`id_Video` ASC) VISIBLE,
  INDEX `FK_Reacciones_Videos_Reacciones_idx` (`id_Reaccion` ASC) VISIBLE,
  INDEX `fk_Reacciones_Videos_Usuarios1_idx` (`Usuarios_id_Usuario` ASC) VISIBLE,
  CONSTRAINT `FK_Reacciones_Videos_Videos`
    FOREIGN KEY (`id_Video`)
    REFERENCES `DHTube`.`Videos` (`id_Video`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_Reacciones_Videos_Reacciones`
    FOREIGN KEY (`id_Reaccion`)
    REFERENCES `DHTube`.`Reacciones` (`id_Reaccion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Reacciones_Videos_Usuarios1`
    FOREIGN KEY (`Usuarios_id_Usuario`)
    REFERENCES `DHTube`.`Usuarios` (`id_Usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHTube`.`Etiquetas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHTube`.`Etiquetas` (
  `id_Etiqueta` INT NOT NULL AUTO_INCREMENT,
  `codigo` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_Etiqueta`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHTube`.`Playlists`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHTube`.`Playlists` (
  `id_Playlists` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `fecha_creacion` DATE NOT NULL,
  `estado` TINYINT(1) NOT NULL,
  `Usuarios_id_Usuario` INT NOT NULL,
  PRIMARY KEY (`id_Playlists`),
  INDEX `fk_Playlists_Usuarios1_idx` (`Usuarios_id_Usuario` ASC) VISIBLE,
  CONSTRAINT `fk_Playlists_Usuarios1`
    FOREIGN KEY (`Usuarios_id_Usuario`)
    REFERENCES `DHTube`.`Usuarios` (`id_Usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHTube`.`Videos_Etiquetas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHTube`.`Videos_Etiquetas` (
  `id_Video_Etiqueta` INT NOT NULL,
  `Videos_id_Video` INT NOT NULL,
  `Etiquetas_id_Etiqueta` INT NOT NULL,
  PRIMARY KEY (`id_Video_Etiqueta`),
  INDEX `fk_Videos_Etiquetas_Videos1_idx` (`Videos_id_Video` ASC) VISIBLE,
  INDEX `fk_Videos_Etiquetas_Etiquetas1_idx` (`Etiquetas_id_Etiqueta` ASC) VISIBLE,
  CONSTRAINT `fk_Videos_Etiquetas_Videos1`
    FOREIGN KEY (`Videos_id_Video`)
    REFERENCES `DHTube`.`Videos` (`id_Video`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Videos_Etiquetas_Etiquetas1`
    FOREIGN KEY (`Etiquetas_id_Etiqueta`)
    REFERENCES `DHTube`.`Etiquetas` (`id_Etiqueta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DHTube`.`Playlis_Videos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DHTube`.`Playlis_Videos` (
  `idPlaylis_Videos` INT NOT NULL,
  `Playlists_id_Playlists` INT NOT NULL,
  `Videos_id_Video` INT NOT NULL,
  PRIMARY KEY (`idPlaylis_Videos`),
  INDEX `fk_Playlis_Videos_Playlists1_idx` (`Playlists_id_Playlists` ASC) VISIBLE,
  INDEX `fk_Playlis_Videos_Videos1_idx` (`Videos_id_Video` ASC) VISIBLE,
  CONSTRAINT `fk_Playlis_Videos_Playlists1`
    FOREIGN KEY (`Playlists_id_Playlists`)
    REFERENCES `DHTube`.`Playlists` (`id_Playlists`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Playlis_Videos_Videos1`
    FOREIGN KEY (`Videos_id_Video`)
    REFERENCES `DHTube`.`Videos` (`id_Video`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
