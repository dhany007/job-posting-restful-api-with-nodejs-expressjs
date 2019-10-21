-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 21, 2019 at 09:10 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `job-posting`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id_category` int(11) NOT NULL,
  `name_category` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id_category`, `name_category`) VALUES
(1, 'Koder'),
(2, 'Designer'),
(3, 'Data Analyst');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `id_company` int(11) NOT NULL,
  `name_company` varchar(100) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `description_company` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`id_company`, `name_company`, `logo`, `description_company`) VALUES
(1, 'Campung', 'This is the logo', 'This is the description'),
(2, 'Google', 'This is the Google logo ', 'This is the Google description'),
(3, 'Facebook', 'This is the Facebook logo ', 'This is the Facebook description');

-- --------------------------------------------------------

--
-- Table structure for table `job`
--

CREATE TABLE `job` (
  `id_job` int(11) NOT NULL,
  `name_job` varchar(100) NOT NULL,
  `description_job` varchar(255) NOT NULL,
  `category` int(11) NOT NULL DEFAULT 0,
  `salary` double NOT NULL,
  `location_job` varchar(255) NOT NULL,
  `company` int(11) NOT NULL,
  `date_add` datetime NOT NULL DEFAULT current_timestamp(),
  `date_update` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `job`
--

INSERT INTO `job` (`id_job`, `name_job`, `description_job`, `category`, `salary`, `location_job`, `company`, `date_add`, `date_update`) VALUES
(8, 'Junior Backend Developer', 'At leas 1 year experience. Fresh garaduate are welcome to apply', 1, 6000000, 'Bandung', 1, '2019-10-21 11:55:13', '2019-10-21 11:55:13'),
(9, 'Junior Frontend Developer', 'At leas 1 year experience. Fresh garaduate are welcome to apply', 1, 6000000, 'Bandung', 1, '2019-10-21 11:55:23', '2019-10-21 11:55:23'),
(10, 'Designer', 'At leas 1 year experience. Fresh garaduate are welcome to apply', 2, 8000000, 'Medan', 2, '2019-10-21 11:55:51', '2019-10-21 11:55:51'),
(12, 'Senior Designer', 'At leas 4 year experience. Fresh garaduate are welcome to apply', 2, 14000000, 'Medan', 3, '2019-10-21 12:14:29', '2019-10-21 12:14:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id_category`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id_company`);

--
-- Indexes for table `job`
--
ALTER TABLE `job`
  ADD PRIMARY KEY (`id_job`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `id_company` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `job`
--
ALTER TABLE `job`
  MODIFY `id_job` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
