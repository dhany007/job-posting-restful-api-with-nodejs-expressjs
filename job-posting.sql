-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 09, 2019 at 09:41 PM
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
  `id_category` varchar(100) NOT NULL,
  `name_category` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id_category`, `name_category`) VALUES
('166e42a4-a766-4d5a-8891-b4bf0ca6f830', 'Education & Science'),
('1e28a2f8-0026-4afa-a65a-bbb426678b41', 'Writer / Media & Journalism / Printing & Publishing'),
('492f012b-8d9a-4cac-b1b2-21e3856d407c', 'Others'),
('4bb21389-8589-4987-a968-b7c91e195737', 'Administrative & Customer Relationship'),
('8dba16fc-92e6-4be9-8fee-f18571ef5e6d', 'Marketing (Technical)'),
('9fad1cd3-2d9f-4efa-9f4a-aca7a504bff2', 'Supply Chain & Logistic'),
('b7cced39-6782-4fde-81e0-0227cd696db6', 'Underwriter'),
('bc7db359-340c-4d00-b539-44eb399344d6', 'Customer Service'),
('f8e8fe7b-a0d2-43a8-bf08-44a4e8d18fdc', 'Sales & Business Development');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `id_company` varchar(100) NOT NULL,
  `name_company` varchar(100) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `description_company` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`id_company`, `name_company`, `logo`, `description_company`) VALUES
('576e5f32-1568-4709-8039-ef69527aa3b8', 'Finmas PT', 'http://freejobpost.site:3001/src/images/logo-1575912772820.png', 'PT. Oriente Mas Sejahtera (FINMAS) adalah perusahaan pemberi pinjaman peer-to-peer yang terdaftar pada Otoritas Jasa Keuangan. Finmas bertujuan menjadi perusahaan platform lending online terkemuka di Indonesia dan berkomitmen untuk membangun masa depan ya'),
('7497320a-b09d-46b0-bb0d-ec985126885b', 'Ruang Raya Indonesia (Ruangguru.Com) PT', 'http://freejobpost.site:3001/src/images/logo-1575900620780.jpg', 'Ruang Raya Indonesia (Ruangguru.Com) PT'),
('840ff0ed-2a9f-4126-ba1e-bb2fdb8dcf61', 'Yayasan Bambini Pelita Bangsa', 'http://freejobpost.site:3001/src/images/logo-1575900189816.jpg', 'Founded in 2002, Yayasan Bambini Pelita Bangsa welcome all children to come and \"work\" in a loving, safe and loving learning environment.\n \nWe are committed to creating a \"work\" environment for all children regardless of religious affiliation, race, color');

-- --------------------------------------------------------

--
-- Table structure for table `job`
--

CREATE TABLE `job` (
  `id_job` varchar(100) NOT NULL,
  `name_job` varchar(100) NOT NULL,
  `description_job` text NOT NULL,
  `category` varchar(255) NOT NULL DEFAULT '0',
  `salary` double NOT NULL,
  `location_job` varchar(255) NOT NULL,
  `company` varchar(255) NOT NULL,
  `date_add` datetime NOT NULL DEFAULT current_timestamp(),
  `date_update` datetime NOT NULL DEFAULT current_timestamp(),
  `logo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `job`
--

INSERT INTO `job` (`id_job`, `name_job`, `description_job`, `category`, `salary`, `location_job`, `company`, `date_add`, `date_update`, `logo`) VALUES
('03e73080-f4d5-4cf0-a2f2-1af4dabfe87d', 'Promotor', 'Deskripsi Pekerjaan\nTanggung Jawab:\nMelakukan penawaran\nAnalisis pelanggan\nInput administra\n Persyaratan\nMembutuhkan Sales Associate Pembiayaan Barang\nPenempatan JABODETABEK (Mall / Department Store)\n \nPersyaratan:\nUsia 19 - 40 Th\nPendidikan minimal SMA/SMK (Sederajat)\nTidak dalam proses perkuliahan / pendidikan\n \nBenefit:\nService Fee / Bulan\nBonus per Bulan tanpa batas\nJenjang karir \nPelatihan untuk Pengembangan Karyawan\nPenempatan di Mall / Department Store  (Bukan Sales Lapangan)\n \nWalk In Interview :\nHari : Senin, 16 Desember 2019\n\nWaktu : 09.00 – 16.00\nWajib membawa CV, Fotocopy KTP, Fotocopy Ijazah/SKL, Fotocopy Kartu Keluarga\nFinmas - Fintech P2P Lending\nGedung CoHive 101 - Lantai 11, Kawasan Mega Kuningan, Jl. DR. Ide Anak Agung Gde Agung No.1, RT.5/RW.2, Kuningan, Kuningan Tim., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950 \n(Sebelah Kedutaan Besar Cina)\n\nStasiun kereta terdekat : Stasiun Tebet \nHalte Transjakarta : Halte Patra Kuningan\nMRT Terdekat : Stasiun Bendungan Hilir\n', 'Sales & Business Development', 4000000, 'Jakarta Raya', '576e5f32-1568-4709-8039-ef69527aa3b8', '2019-12-10 03:29:45', '2019-12-10 03:29:45', 'http://freejobpost.site:3001/src/images/logo-1575912772820.png'),
('1ceae803-2568-4c33-99ed-d1342fd029aa', 'Production Assistant', 'Deskripsi Pekerjaan\nJob Descriptions:\n\nAssemble and set up equipment (camera, clip-on, lighting, etc)\nPlan, prepare and make a breakdown shot from a script\nFollow camera scripts/storyboard\nResponsible for preparing all the equipment and shooting\nMake shooting notes for the editor\nCreate a rough cut video using adobe premiere pro\n Persyaratan\nJob Requirements:\n\nMinimum high school graduate/SMK/MA or equivalent with 1 year of experience as Production Assistant is required.\nA creative individual in camera framing\nHave a good understanding of production and post-production workflow\nHave a good understanding of camera set-up (aperture, focus, speed, iso, etc)\nPossess understanding Adobe After Effects is a plus\nMust be able to work on a team', 'Supply Chain & Logistic', 3000000, 'Jakarta Raya', '7497320a-b09d-46b0-bb0d-ec985126885b', '2019-12-10 03:29:58', '2019-12-10 03:29:58', 'http://freejobpost.site:3001/src/images/logo-1575900620780.jpg'),
('58edc33b-cb3d-4ed0-9c64-b4039a79890d', 'Credit Analyst', 'Deskripsi Pekerjaan\nBertanggung Jawab Untuk mengumpulkan dan menganalisa semua data keuangan Klien, seperti metode/kebiasaan membayar, pendapatan, informasi mengenai tabungan dan aktivitas pembelian klien tersebut\nMengevaluasi data dan merekomenasikan tindakan yang tepat bagi klien\nMelakukan Outbound Call untuk verifikasi data\n Persyaratan\nMinimun pendidikan Diploma\nKandidat harus memiliki setidaknya 1 tahun pengalaman dibidangnya\nmemiliki pengalaman khusus di bidang KYC Agent / Phone Verification / Underwritting / Credit Analyst ', 'Underwriter', 4000000, 'Jakarta Selatan', '576e5f32-1568-4709-8039-ef69527aa3b8', '2019-12-10 03:30:14', '2019-12-10 03:30:14', 'http://freejobpost.site:3001/src/images/logo-1575912772820.png'),
('5930f492-878c-477b-ab84-7a44d0663815', 'Digital Performance Marketing Specialist', 'Deskripsi Pekerjaan\nPlan and execute all digital acquisition activities (for mobile app and website) using ads platform including SEM, social media, display advertising campaigns, affiliate marketing, programmatic, etc.\nWork on a budget to reach maximum KPI keeping the CAC at the optimum level.\nManage communication with multiple vendors and third-party trackers in order to achieve acquisition objectives.\nMeasure and report performance of all digital marketing campaigns, and assess against goals (ROI and KPIs).\nIdentify trends and insights, and optimize spend and performance based on the insights.\nUtilize the strong analytical ability to evaluate end-to-end customer experience across multiple channels and customer touch points.\nDo campaign acquisition fraud monitoring and take actions to minimize the fraud numbers.\nPlan and create a small-scale A-B test campaign to optimize campaign and creative performance better.\nSuggest new digital channels that have the potential to increase new user numbers in an efficient way.\nManage to set up integration of Ruangguru apps with other third parties platform whenever it is required.\n Persyaratan\nBachelor\'s degree (or higher) in any related field with a strong quantitative background.\nProven working experience in digital marketing (Min 2 years), extensive experiences in managing in-house digital performance marketing at technology company (such as e-commerce, online-travel, mobile-gaming, etc) is preferable.\nHighly proficient in using digital ads platform such as Facebook Ads, Google Ads, Twitter Ads\nHave experience in managing Ad Networks for acquisition campaigns.\nHave basic understanding of organic acquisition such as App Store Optimization (ASO) and Search Engine Optimization (SEO).\nExperience in setting up platform integration (for mobile app and website) with third parties (ex-Google, Facebook, Sizmek, Appsflyer) for campaign set-up and tracking purposes.\nCreative in identifying target audiences and devising digital campaigns that engage consumers the most.\nHave a good understanding of mobile attribution tools (e.g. Appsflyer).\nUnderstand the basics of mobile app install fraud methods and its monitoring tool (e.g Appsflyer Protect 360).\nHave basic understanding of Google Analytics.\nStrong analytical skills and data-driven thinking.\nUp-to-date with the latest trends and best practices in online marketing and measurement.\nAble to generate meaningful reports using tools such as Google Data Studio would be a plus.\nExperiences in handling programmatic ad buying would be a plus.', 'Marketing (Technical)', 6000000, 'Jakarta Utara', '7497320a-b09d-46b0-bb0d-ec985126885b', '2019-12-10 03:31:09', '2019-12-10 03:31:09', 'http://freejobpost.site:3001/src/images/logo-1575900620780.jpg'),
('75f61351-16e2-4e55-84fd-f6c7d6fc390d', 'Media Planning Specialist', 'Deskripsi Pekerjaan\nDevelope integrated online and offline media plan to support all marketing campaign of Ruangguru.\nExecute all media implementation for both day to day and tactical campaign of Ruangguru.\nAnalyze and optimizing all Ruangguru paid campaign performance for pre, during, and post-buy period.\nCreate campaign report daily, weekly, monthly, and quarterly to be reviewed by C-level management.\nManage working relationship with third party media agency partner for TV buying.\nNegotiate with other media owners/networks/publishers for direct buying.\nSupervise implementation for creative buying such as TV Built-In, Sponsorship, etc.\nWork closely with in-house creative in developing relevant creative assets and managing deliverable.\nWork closely with all relevant cross-division stakeholder (such as marketing ops team, product team, engineering team, etc) when it is required.\n Persyaratan\nBachelor\'s degree (or higher) in marketing, communications or related field.\nAt least 1-2 years of work experience as a media planner in a media agency or other paid marketing related role.\nHas basic knowledge in planning media across platform both online and offline (understanding of the correlation between reach, frequency, GRP, impression, and all other basic media terminology).\nAble to do quantitative data analyses for media reporting and optimization.\nFast learner and agile worker with ethics that suitable to work in a fast paced start-up environment.\nExtensive experience in brand activation (such as an event, build in, and sponsorship) is a plus.\n', 'Writer / Media & Journalism / Printing & Publishing', 5000000, 'Jakarta Raya', '7497320a-b09d-46b0-bb0d-ec985126885b', '2019-12-10 03:30:34', '2019-12-10 03:30:34', 'http://freejobpost.site:3001/src/images/logo-1575900620780.jpg'),
('77f9df7b-8346-4275-a5d7-af8268d605fd', 'IT Teacher', 'Yayasan Bambini Pelita Bangsa is a community that finds joy in work and in the discovery and realization of personal potential.\n\nThe quality of a school is defined by the people who work there. For this reason, we are committed to hiring individuals who support the development of children to reach their full potential. \n \nWe are looking for enthusiastic and committed IT Teacher & Staff to complement our qualified workforce of IT Teacher & Staff.\nUnderstand about; teaching computer for Elementary Level, programming software, troubleshooting computer (hardware). \n\nWe welcome you to learn more about what it’s like to work in our school and hope to see you soon!\nQualifications and Skills:\nCandidate must possess at least Diploma, Bachelor\'s Degree in Computer Science/Information Technology, or equivalen.\nRequired language(s): Bahasa Indonesia, English.\nAt least 1 Year(s) of working experience in the related field is required for this position.\nFresh graduate are welcome.\nRequired Skill(s): Microsoft Office, programming software, troubleshooting computer (hardware).\nHardworking, open minded, flexible, eager to grow and contribute to culture learning.\nPreferably Staff (non-management & non-supervisor) specialized in Education or equivalent.', 'Education & Science', 6000000, 'Jakarta Utara', '840ff0ed-2a9f-4126-ba1e-bb2fdb8dcf61', '2019-12-10 03:31:47', '2019-12-10 03:31:47', 'http://freejobpost.site:3001/src/images/logo-1575900189816.jpg'),
('b8886cfd-155e-4477-90af-bc22910544a3', 'Sales Associate', 'Deskripsi Pekerjaan\nMembutuhkan Sales Associate Pembiayaan Barang\nPenempatan JABODETABEK (Mall / Department Store)\n \nTanggung Jawab:\nMelakukan penawaran\nAnalisis pelanggan\nInput administrasi\n \nBenefit:\nService Fee / Bulan\nBonus per Bulan tanpa batas\nJenjang karir \nPelatihan untuk Pengembangan Karyawan\nPenempatan di Mall / Department Store  (Bukan Sales Lapangan)\n \nWalk In Interview :\nHari : Kamis, 12 Desember 2019\n\nWaktu : 09.00 – 16.00\nWajib membawa CV, Fotocopy KTP, Fotocopy Ijazah/SKL, Fotocopy Kartu Keluarga\n \nFinmas - Fintech P2P Lending\nGedung CoHive 101 - Lantai 11, Kawasan Mega Kuningan, Jl. DR. Ide Anak Agung Gde Agung No.1, RT.5/RW.2, Kuningan, Kuningan Tim., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950 \n(Sebelah Kedutaan Besar Cina)\n\nStasiun kereta terdekat : Stasiun Tebet \nHalte Transjakarta : Halte Patra Kuningan\nMRT Terdekat : Stasiun Bendungan Hilir\n Persyaratan\nPersyaratan:\n\nUsia 19 - 40 Th\nPendidikan minimal SMA/SMK (Sederajat)\nTidak dalam proses perkuliahan / pendidikan', 'Sales & Business Development', 5000000, 'Jakarta Raya', '576e5f32-1568-4709-8039-ef69527aa3b8', '2019-12-10 03:28:00', '2019-12-10 03:28:00', 'http://freejobpost.site:3001/src/images/logo-1575912772820.png'),
('c7db4607-cc1d-463c-9075-2d2cf9e0285d', 'Project Officer', 'Deskripsi Pekerjaan\n \nAct as person in charge in GA projects such as procurement, setting up new office, telephone line, internet, electricity installation, etc\nManage relationships, negotiate and collaborate with vendors at different levels\nManage and maintain company\'s assets and stationary\n Persyaratan\nBachelor degree in Civil Engineering Experience in telephone, internet, and electricity installation\nHave connection with all those vendors is preferred\nA good team player with good communication and negotiation skills (verbal and written)\nA responsive individual with can-do attitude\nAble to work under pressure and juggle with multiple priorities', '492f012b-8d9a-4cac-b1b2-21e3856d407c', 5000000, 'Jakarta Raya', '7497320a-b09d-46b0-bb0d-ec985126885b', '2019-12-10 03:25:52', '2019-12-10 03:25:52', 'http://freejobpost.site:3001/src/images/logo-1575900620780.jpg'),
('d1773164-18c9-4c2e-9658-7bb98a79f7ed', 'Area Sales Manager', 'Deskripsi Pekerjaan\nEffectively leads the team of sales officer’s, manage sales officer performance, set targets in weekly and/or monthly basis\nMaximally utilize the potential of the area of responsibility (achieve targets, grow sales)\nVisit Point of Sales twice a week, maintain good relationship with dealers, solve their inquiries\nControl of quality of sales performance, drive quality initiatives\nControl and manage sales points efficiency\nExecute risk control to drive out fraud\nShift planning for Sales Officer (max staff during weekends and high season)\nCheck the compliance of Sales Officer follow the Company’s regulations about working at Point of Sales\nPeriodical meeting with Sales Officer\nManage Point of Sales supplies (Point of Sales marketing materials, Point of Sales equipment)\nPrepare regular reporting with team of Sales Network; tracking sales reports and analyze daily data\nSales Officer coaching & mentoring to achieve productivity\n Persyaratan\nDesired qualifications and requirements\nMinimum High School/Vocational degree holder, bachelor degree is an advantage\nHave minimum 2 years of experience in retail sales area, cooperation with retailers or experience in distribution of products and services\nGood understanding of retail market and competition in relevant district\nExperience in retail sales and knowledge in sales finance products an advantage\nSales-driven personality, self-confident\nCoaching and management talent\nAbility to influence others & to take a dominant role\nExcellent communication abilities, negotiation and presentation skills\nDrive and initiative, self-motivated, results and actions oriented\nResponsible and committed\nEffective problem-solving skills\nAble to multitask and deliver output on a given deadline', 'Sales & Business Development', 4000000, 'Jakarta Raya', '576e5f32-1568-4709-8039-ef69527aa3b8', '2019-12-10 03:30:49', '2019-12-10 03:30:49', 'http://freejobpost.site:3001/src/images/logo-1575912772820.png'),
('db62d6d9-9baf-42c7-8b83-3ee1bc696837', 'Inbound Education Consultant', 'Deskripsi Pekerjaan\nHandle day to day customer service operations for Ruangguru, resolve issue or queries from customer to ensure a high customer satisfaction level\nIdentify queries from customers to gather insights and recommend improvement suggestions and initiatives to other teams in Ruangguru like Product, Tech and Content teams\nHelp to improve the conversion of different products/services by convincing inbound inquiries, cross-selling, up-selling\n Persyaratan\nDiploma/Bachelor Degree from any major\nGood logical and structural thinking, with a strong sense of responsibility and result oriented\nSelf-starter, proactive and able to work in a face paced environment\nAttention to detail, good problem-solving/multi-tasking skill\nPrevious experience in customer service / inbound marketing will be a big plus\nPrevious experience working with startup/tech company will be a big plus\nGood in managing communication through multiple channels: e-mail, chat software, telephone, social media particularly Instagram\nExcellent communication skills, able to convey information in a clear and concise manner, communicate effectively and accurate to our customer\n', 'Customer Service', 4000000, 'Jakarta Raya', '7497320a-b09d-46b0-bb0d-ec985126885b', '2019-12-10 03:28:47', '2019-12-10 03:28:47', 'http://freejobpost.site:3001/src/images/logo-1575900620780.jpg'),
('debe5301-3e1d-4b2d-abba-78f8f3d5ea4b', 'Sound Engineer', 'Be a part of Content Production team for editing sound and video in the post-production process.\nJob Requirements:\n\nMinimum high school graduate/SMK/MA or equivalent with a year of experience in the same field\nProficient in operating DAW (protools/cubase/logic pro, audition, premiere)\nAble to work under target (short deadline)\nCapable of working with shooting production tools (zoom, clip-on, mic boom, audio interface)', 'Administrative & Customer Relationship', 6000000, 'Jakarta Utara', '7497320a-b09d-46b0-bb0d-ec985126885b', '2019-12-10 03:31:27', '2019-12-10 03:31:27', 'http://freejobpost.site:3001/src/images/logo-1575900620780.jpg');

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
(61, 'senin@gmail.com', '2920d995bd2df309', '7b6bd29d9256f9d8fd127547404de1a79f452be604ee9333154209626b6753bf1466818afbbc7315bea10e91d59f97d996f8ebd1a95ab1266f97a329364ffd5f', 'senin', '2019-11-07 21:38:39'),
(66, 'selasa@gmail.ceom', 'dcbb0e8860b58e42', '82e15e0684bb6bd3072ecb2fa9da5ddddb93fa32d5a5883b0c1ebcebf5b7973d0cfe6e9dfc64906f3fc9165700fd912a9b1597a378a514bbbe9bff1e0c2170e5', 'selasa', '2019-12-05 01:09:49');

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
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
