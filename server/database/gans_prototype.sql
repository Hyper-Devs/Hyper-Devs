-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 18, 2023 at 02:22 PM
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
  `id` int(11) NOT NULL,
  `sID` int(11) NOT NULL,
  `sName` char(30) NOT NULL,
  `time_in` time NOT NULL,
  `time_out` time NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `attendance_log`
--

INSERT INTO `attendance_log` (`id`, `sID`, `sName`, `time_in`, `time_out`, `date`) VALUES
(1, 6, 'John Mynar Laquinta', '01:30:02', '02:45:45', '2023-03-21'),
(2, 1, 'Jonas Rosales', '03:35:20', '05:20:02', '2023-03-23'),
(3, 29, 'Jun Hunt', '04:30:53', '05:30:53', '2023-04-06'),
(4, 29, 'Jun Hunt', '09:20:01', '10:31:02', '2023-04-26'),
(5, 15, 'Jackie Chan', '07:30:00', '09:02:02', '2023-04-18'),
(6, 9, 'Optimus Prime', '03:31:43', '05:26:29', '2023-04-27'),
(7, 6, 'John Mynar Laquinta', '02:21:29', '03:36:43', '2023-04-27'),
(8, 1, 'Jonas Rosales', '04:45:32', '05:30:56', '2023-04-27'),
(9, 29, 'Jun Hunt', '12:30:23', '01:56:29', '2023-04-28'),
(10, 5, 'Juan Cruz', '04:23:05', '05:46:23', '2023-04-29');

-- --------------------------------------------------------

--
-- Table structure for table `override_logs`
--

CREATE TABLE `override_logs` (
  `id` int(11) NOT NULL,
  `Overrider_Name` text NOT NULL,
  `Student_Name` text NOT NULL,
  `Reason` text NOT NULL,
  `Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `override_logs`
--

INSERT INTO `override_logs` (`id`, `Overrider_Name`, `Student_Name`, `Reason`, `Date`) VALUES
(1, 'Noreen Mercado', 'Gustavo Wick', 'Home Emergency', '2023-03-10'),
(2, 'Petrson Malakas', 'Peter Bravo', 'Scholarship event', '2023-03-30'),
(3, 'Joshamee Gibs', 'Optimus Prime', 'Medical emergency', '2023-04-11'),
(4, 'Noreen Mercado', 'John Mynar Laquinta', 'CSG Event Handler', '2023-04-12'),
(6, 'Betty Lee', 'Jonas Rosales', 'Home Emergency', '2023-04-26'),
(7, 'Alan Quezon', 'Optimus Prime', 'Autobots assemble!', '2023-04-26'),
(8, 'Alan Quezon', 'Gustavo Wick', 'Home emergency', '2023-04-27'),
(9, 'Joshamee Gibs', 'Zenno Doja', 'Medical emergency', '2023-04-28'),
(10, 'Noreen Mercado', 'Kant Ten', 'Intramurals Participant', '2023-04-30');

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
(1, 'Obedient', 9, 'Jack Sparrow', '2023-2024'),
(2, 'Mlue', 10, 'Michael Jackson', '2022-2023'),
(3, 'Einstein', 11, 'Nikola Tesla', '2023-2024'),
(4, 'Mink', 10, 'Bruno Mars', '2022-2023'),
(5, 'Supply', 9, 'Tony Stark', '2023-2024'),
(6, 'Kolmogorov', 11, 'Dmitri Mendeleev', '2023-2024'),
(7, 'Commodity', 7, 'John Mynar', '2022-2023'),
(8, 'Onyx', 7, 'Kienth Matthew', '2023-2024'),
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
(5, 'Juan', 'Dela', 'Cruz', '11', 'Kolmogorov', 'Juanito', 'Juanita', 'Cruz', 'parent', 909090),
(6, 'John Mynar', 'Cemine', 'Laquinta', '11', 'Kolmogorov', 'Jack', 'The', 'Reaper', 'Friend', 12345678),
(9, 'Optimus', 'Optimas', 'Prime', '9', 'Supply', 'Quintessa', 'The', 'Deceiver', 'Maker of Transformers kuno', 900001242),
(10, 'John', 'Fookin', 'Wick', '11', 'Kolmogorov', 'Jaime', 'Kingslayer', 'Lannister', 'Ward', 99999),
(11, 'Jack', 'The', 'Sparrow', '11', 'Einstein', 'Jackie', 'Boy', 'Boy', 'Uncle', 9000012),
(12, 'John', 'Fookin', 'Wick', '11', 'Kolmogorov', 'Jaime', 'Kingslayer', 'Lannister', 'Ward', 99999),
(15, 'Jackie', 'Swan', 'Chan', '11', 'Kolmogorov', 'Uncle', '', 'Roger', 'Uncle', 9999888),
(17, 'John', 'Doe', 'Dee', '11', 'Kolmogorov', 'Jean', '', 'Dove', 'Guardian', 999999),
(22, 'John', 'Fookin', 'Wick', '11', 'Kolmogorov', 'Jaime', 'Kingslayer', 'Lannister', 'Ward', 99999),
(23, 'Jaime', 'Fookin', 'Wick', '11', 'Kolmogorov', 'Jaime', 'Kingslayer', 'Lannister', 'Ward', 99999),
(25, 'Juanito', 'Fookin', 'Wick', '10', 'Reynbow', 'Jaime', 'Kingslayer', 'Lannister', 'Ward', 99999),
(26, 'Gustavo', 'Fookin', 'Wick', '10', 'Reynbow', 'Jaime', 'Kingslayer', 'Lannister', 'Ward', 99999),
(27, 'Megatron', 'Cyberpunk', 'Decepticon', '11', 'Kolmogorov', 'Quintessa', 'The', 'Deceiver', 'Maker of Transformers kuno', 900001242),
(28, 'Jamess', 'Fookin', 'Wick', '10', 'Reynbow', 'Jaime', 'Kingslayer', 'Lannister', 'Ward', 99999),
(29, 'Jun', '', 'Hunt', '11', 'Einstein', 'Jose', '', 'Pina', 'Father', 999999),
(30, 'Nick', 'Fookin', 'Wick', '10', 'Reynbow', 'Jaime', 'Kingslayer', 'Lannister', 'Ward', 99999),
(92, 'Jon', '', 'Snow', '8', 'Awake', 'Rhaegar', '', 'Targaryen', 'Father', 912112123),
(93, 'Ramsay', '', 'Snow', '12', 'Break', 'Roose', '', 'Bolton', 'Father', 912112123),
(98, 'Daemon', '', 'Targaryen', '12', 'Break', 'Viserys I', '', 'Targaryen', 'Brother', 9123456),
(99, 'Maegor', '', 'Targaryen', '12', 'Break', 'Aegon I', '', 'Targaryen', 'Father', 9876543);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL,
  `access_id` int(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `role`, `access_id`, `password`) VALUES
(1, 'Joshamee Gibbs', 'Admin', 111001, 'black_pearl'),
(2, 'Noreen Mercado', 'Admin', 111002, 'upamingmahal'),
(3, 'Alan Quezon', 'Admin', 111003, 'comscienjoyer'),
(4, 'Betty Lee', 'Admin', 111004, 'lahuglahugan'),
(5, 'Peterson Malakas', 'User', 111005, 'wheresmypolvoron');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attendance_log`
--
ALTER TABLE `attendance_log`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `override_logs`
--
ALTER TABLE `override_logs`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `override_logs`
--
ALTER TABLE `override_logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT for table `sections`
--
ALTER TABLE `sections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
