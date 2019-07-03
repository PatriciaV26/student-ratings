-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2019 at 10:52 PM
-- Server version: 10.1.40-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ratings`
--

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `firstname` text NOT NULL,
  `lastname` text NOT NULL,
  `email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `firstname`, `lastname`, `email`) VALUES
(2, 'Berbecar', 'Dan', 'berbecardan@yahoo.com'),
(4, 'Berendi', 'Paul', 'berendipaul@yahoo.com'),
(5, 'Chira', 'Claudia', 'claudiachira@yahoo.com'),
(6, 'Popa', 'Adrian', 'popaadrian@yahoo.com'),
(7, 'Sontu', 'Elena', 'sontuelena@yahoo.com'),
(8, 'Butnariu', 'Marius', 'mariusbutnariu@yahoo.com'),
(9, 'Socaci ', 'Beatrix', 'socaciabea@yahoo.com'),
(10, 'Ploscar', 'Andrei', 'andreip@yahoo.com'),
(11, 'Sabau', 'Ana', 'anasabau@yahoo.com'),
(12, 'Veres', 'Patricia', 'verespatricia@yahoo.com'),
(13, 'Botan', 'Anca', 'ancabotan@yahoo.com'),
(14, 'Vasilovschi', 'Florentina', 'florentinav@yahoo.com'),
(15, 'Cozmuta', 'Lidia', 'lidiacozmuta@yahoo.com'),
(16, 'Popan', 'Ionut', 'popanionu@yahoo.com'),
(17, 'Papoi', 'Raluca', 'ralupapoi@yahoo.com'),
(18, 'Vonica', 'Denisa', 'vonicadenisa@yahoo.com'),
(19, 'Varga ', 'Zsombor', 'vargaz@yahoo.com');

-- --------------------------------------------------------

--
-- Table structure for table `students_tests`
--

CREATE TABLE `students_tests` (
  `student_id` int(11) NOT NULL,
  `test_id` int(11) NOT NULL,
  `grades` int(11) NOT NULL,
  `owner` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `students_tests`
--

INSERT INTO `students_tests` (`student_id`, `test_id`, `grades`, `owner`) VALUES
(2, 1, 8, ''),
(2, 3, 10, 'Vonica Denisa'),
(2, 2, 9, ''),
(2, 3, 8, 'Ana Sabau'),
(8, 3, 7, ''),
(8, 2, 10, 'Veres Patricia'),
(17, 3, 9, 'Socaci Beatrix');

-- --------------------------------------------------------

--
-- Table structure for table `tests`
--

CREATE TABLE `tests` (
  `id` int(11) NOT NULL,
  `description` text NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tests`
--

INSERT INTO `tests` (`id`, `description`, `date`) VALUES
(1, 'test introductiv', '2019-06-04'),
(2, 'test final', '2019-06-18'),
(3, 'stars', '2019-07-08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students_tests`
--
ALTER TABLE `students_tests`
  ADD KEY `stundet_id` (`student_id`),
  ADD KEY `event_id` (`test_id`);

--
-- Indexes for table `tests`
--
ALTER TABLE `tests`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `tests`
--
ALTER TABLE `tests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `students_tests`
--
ALTER TABLE `students_tests`
  ADD CONSTRAINT `students_tests_ibfk_1` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  ADD CONSTRAINT `students_tests_ibfk_2` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
