<?php
    $dbserver = "localhost";
    $dbuser = "root";
    $dbpass = "pk0ay18MchHQZcfl";
    $dbname = "flitch";

    $conn = new mysqli($dbserver, $dbuser, $dbpass);

    $conn->query("CREATE DATABASE IF NOT EXISTS `$dbname` DEFAULT CHARACTER SET utf8 COLLATE utf8mb3_general_ci");

    $conn = mysqli_connect($dbserver, $dbuser, $dbpass, $dbname);
    if (!$conn) {
        echo 'Error DB Connection';
    }
?>