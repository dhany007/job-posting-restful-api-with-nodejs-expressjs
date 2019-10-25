-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 25, 2019 at 02:52 AM
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
(1, 'Programmer'),
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
(1, 'Arkademy', 'This is the logo', 'This is the description'),
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
(12, 'Senior Designer', 'At leas 4 year experience. Fresh garaduate are welcome to apply', 2, 14000000, 'Medan', 3, '2019-10-21 12:14:29', '2019-10-21 12:14:29'),
(13, 'Senior Technical', 'Fresh garaduate are welcome to apply', 1, 9000000, 'Medan', 2, '2019-10-21 23:54:34', '2019-10-22 03:57:45'),
(22, 'A JOB', 'This is a description of Job A', 2, 9000000, 'Medan', 1, '2019-10-25 07:45:45', '2019-10-25 07:45:45'),
(23, 'B JOB', 'This is a description of Job A', 3, 9000000, 'Medan', 1, '2019-10-25 07:46:12', '2019-10-25 07:46:12'),
(24, 'C JOB', 'This is a description of Job A', 3, 9000000, 'Medan', 2, '2019-10-25 07:46:19', '2019-10-25 07:46:19'),
(25, 'D Job', 'This is a description of Job A', 3, 9000000, 'Medan', 3, '2019-10-25 07:46:27', '2019-10-25 07:46:27'),
(26, 'E Job', 'This is a description of Job A', 1, 9000000, 'Medan', 3, '2019-10-25 07:47:37', '2019-10-25 07:47:37');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `salt` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name_user` varchar(255) NOT NULL,
  `date_created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `salt`, `password`, `name_user`, `date_created`) VALUES
(15, '1', '4f0401db63851615', '46903fc699da833aa12bbb8edead383b2fbddff07ce682e60db0472948b48ef1b25b012d48eac1993073086e74e194e2072c7e70d2d69cdd56928e0c3c9d07cb', '1', '2019-10-23 13:55:48'),
(16, '2', '9486ee47ef5b317b', 'a26ad9ab3c8ba53ed7b3f5710ee0803f991c3c61e9ebc59f0ee124c6177068bfdc9b85d7bc3e874fee8a90fc00edbe226ecf71f7507859fc3a4b9e0f49ff4d0f', '2', '2019-10-23 13:56:02'),
(17, '5', 'b364a7856e27dbc5', '7246fbc876395e27149db66cb680753aa3c0d44f22c626c0b0ba6a572d9309e84f5b3d992a5c69461bd4f1047578a78c168dd60ea94405be938caf440f05fdb1', '5', '2019-10-25 07:40:25');

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
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `id_company` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `job`
--
ALTER TABLE `job`
  MODIFY `id_job` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
