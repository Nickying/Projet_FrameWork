
-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Mar 31 Mai 2016 à 10:53
-- Version du serveur: 10.0.20-MariaDB-log
-- Version de PHP: 5.2.17

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `u491634746_blog`
--

-- --------------------------------------------------------

--
-- Structure de la table `Commentaire`
--

CREATE TABLE IF NOT EXISTS `Commentaire` (
  `id` int(20) NOT NULL,
  `ididée` int(20) NOT NULL,
  `idinternaute` int(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Communauté`
--

CREATE TABLE IF NOT EXISTS `Communauté` (
  `id` int(20) NOT NULL,
  `nom` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Idée`
--

CREATE TABLE IF NOT EXISTS `Idée` (
  `id` int(20) NOT NULL,
  `titre` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `auteur` int(20) NOT NULL,
  `datecreation` date NOT NULL,
  `datemodif` date NOT NULL,
  `nbvu` int(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Idéecommunautaire`
--

CREATE TABLE IF NOT EXISTS `Idéecommunautaire` (
  `id` int(20) NOT NULL,
  `idcommunauté` int(20) NOT NULL,
  `ididée` int(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Internaute`
--

CREATE TABLE IF NOT EXISTS `Internaute` (
  `id` int(20) NOT NULL,
  `pseudo` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `mdp` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `nom` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `prenom` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `dateinscription` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `pseudo` (`pseudo`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `Internaute`
--

INSERT INTO `Internaute` (`id`, `pseudo`, `mdp`, `nom`, `prenom`, `email`, `dateinscription`) VALUES
(1, 'guigui', 'gsq', 'goubin', 'guillaume', 'gui@gmail.com', '2016-05-25');

-- --------------------------------------------------------

--
-- Structure de la table `Membre`
--

CREATE TABLE IF NOT EXISTS `Membre` (
  `id` int(20) NOT NULL,
  `idinternaute` int(20) NOT NULL,
  `idcommunauté` int(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Vote`
--

CREATE TABLE IF NOT EXISTS `Vote` (
  `id` int(20) NOT NULL,
  `idinternaute` int(20) NOT NULL,
  `aime` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Votecommentaire`
--

CREATE TABLE IF NOT EXISTS `Votecommentaire` (
  `id` int(20) NOT NULL,
  `idcommentaire` int(20) NOT NULL,
  `idvote` int(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Voteidée`
--

CREATE TABLE IF NOT EXISTS `Voteidée` (
  `id` int(20) NOT NULL,
  `ididée` int(20) NOT NULL,
  `idvote` int(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
