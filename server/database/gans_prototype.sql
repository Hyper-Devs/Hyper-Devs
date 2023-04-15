-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 15, 2023 at 12:26 PM
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
-- Table structure for table `attendance_log`
--

CREATE TABLE `attendance_log` (
  `sID` int(11) NOT NULL,
  `sName` char(30) NOT NULL,
  `time_in` time NOT NULL,
  `time_out` time NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `attendance_log`
--

INSERT INTO `attendance_log` (`sID`, `sName`, `time_in`, `time_out`, `date`) VALUES
(1001, 'Kienth Tan', '04:30:53', '05:30:53', '2023-04-06');

-- --------------------------------------------------------

--
-- Table structure for table `sections`
--

CREATE TABLE `sections` (
  `id` int(11) NOT NULL,
  `section_name` text NOT NULL,
  `grade_level` int(11) NOT NULL,
  `section_teacher` text NOT NULL,
  `school_year` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `sections`
--

INSERT INTO `sections` (`id`, `section_name`, `grade_level`, `section_teacher`, `school_year`) VALUES
(1, 'Commodity', 9, 'Jack Sparrow', '2023-2024'),
(2, 'Mlue', 10, 'Michael Jackson', '2022-2023'),
(3, 'Einstein', 11, 'Nikola Tesla', '2023-2024'),
(4, 'Mink', 10, 'Bruno Mars', '2022-2023'),
(5, 'Supply', 9, 'Tony Stark', '2023-2024'),
(6, 'Kolmogorov', 11, 'Dmitri Mendeleev', '2023-2024'),
(7, 'Commodity', 7, 'John Mynar', '2022-2023'),
(8, 'Commodity', 7, 'Kienth Matthew', '2023-2024'),
(9, 'Sleepy', 8, 'Robin Warren', '2022-2023'),
(10, 'Awake', 8, 'Roasted Curry', '2023-2024'),
(11, 'Heineken', 9, 'Okay Rako', '2022-2023'),
(12, 'Reynbow', 10, 'Jong Ganda', '2023-2024'),
(13, 'Easter', 11, 'Gee Sauce', '2022-2023'),
(14, 'Sunday', 12, 'Sorry Lord', '2022-2023'),
(15, 'Reading', 12, 'Mao Daw', '2022-2023'),
(16, 'Break', 12, 'John Wreck', '2023-2024');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `first_name` text NOT NULL,
  `middle_name` text NOT NULL,
  `last_name` text NOT NULL,
  `grade_level` text NOT NULL,
  `section_name` text NOT NULL,
  `parent_fn` text NOT NULL,
  `parent_mn` text NOT NULL,
  `parent_ln` text NOT NULL,
  `relationship` text NOT NULL,
  `contact_num` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `first_name`, `middle_name`, `last_name`, `grade_level`, `section_name`, `parent_fn`, `parent_mn`, `parent_ln`, `relationship`, `contact_num`) VALUES
(1, 'Jonas', 'Yves', 'Rosales', '9', 'Commodity', 'Myra', 'Bato', 'Limpada', 'Mother', 2147483647),
(2, 'Zenno', 'Drake', 'Doja', '9', 'Commodity', 'Myra', 'Bato', 'Limpada', 'Mother', 2147483647),
(3, 'Mynar', 'Laquinta', 'John', '10', 'Mlue', 'Joana', 'Mynar', 'Laquinta', 'Mother', 2147483647),
(4, 'John', 'Cedic', 'Laquinta', '11', 'Einstein', 'Man', 'Woman', 'Human', 'Parent', 2147483647),
(5, 'Juan', 'Dela', 'Cruz', '11', 'Einstein', 'Juanito', 'Juanita', 'Cruz', 'parent', 909090),
(6, 'John Mynar', 'Cemine', 'Laquinta', '10', 'Reynbow', 'Jack', 'The', 'Reaper', 'Friend', 12345678),
(7, 'John Mynar', 'Cemine', 'Laquinta', '10', 'Reynbow', 'Jack', 'The', 'Reaper', 'Friend', 12345678),
(8, 'John Mynar', 'Cemine', 'Laquinta', '10', 'Reynbow', 'Jack', 'The', 'Reaper', 'Friend', 12345678),
(9, 'Optimus', 'Optimas', 'Prime', '9', 'Supply', 'Quintessa', 'The', 'Deceiver', 'Maker of Transformers kuno', 900001242);

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
-- Indexes for table `attendance_log`
--
ALTER TABLE `attendance_log`
  ADD PRIMARY KEY (`sID`);

--
-- Indexes for table `sections`
--
ALTER TABLE `sections`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT for table `attendance_log`
--
ALTER TABLE `attendance_log`
  MODIFY `sID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1002;

--
-- AUTO_INCREMENT for table `sections`
--
ALTER TABLE `sections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
