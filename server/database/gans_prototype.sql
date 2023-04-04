-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 03, 2023 at 05:10 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gans prototype`
--

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `first_name` text NOT NULL,
  `middle_name` text NOT NULL,
  `last_name` text NOT NULL,
  `age` int(11) NOT NULL,
  `sex` char(1) NOT NULL,
  `birthdate` date NOT NULL,
  `grade_level` text NOT NULL,
  `section` text NOT NULL,
  `parent_fn` text NOT NULL,
  `parent_mn` text NOT NULL,
  `parent_ln` text NOT NULL,
  `relationship` text NOT NULL,
  `contact_num` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `first_name`, `middle_name`, `last_name`, `age`, `sex`, `birthdate`, `grade_level`, `section`, `parent_fn`, `parent_mn`, `parent_ln`, `relationship`, `contact_num`) VALUES
(1, 'Jonas', 'Yves', 'Rosales', 19, 'M', '2008-09-10', '9', 'Comodity', 'Myra', 'Bato', 'Limpada', 'Mother', 2147483647),
(2, 'Zenno', 'Drake', 'Doja', 22, 'M', '2001-12-01', '9', 'Comodity', 'Myra', 'Bato', 'Limpada', 'Mother', 2147483647),
(3, 'Mynar', 'Laquinta', 'John', 20, 'M', '2001-08-20', '10', 'Mlue', 'Joana', 'Mynar', 'Laquinta', 'Mother', 2147483647),
(4, 'John ', 'C', 'Laquinta', 20, 'M', '2023-03-01', 'Third Year', 'Einstein', 'Man', 'Woman', 'Human', 'Parent', 2147483647);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `position` varchar(50) NOT NULL,
  `access_id` int(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `position`, `access_id`, `password`) VALUES
(1, 'Joshamee Gibbs', 'Clerk', 111001, 'black_pearl');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
