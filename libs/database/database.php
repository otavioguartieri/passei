<?php
    $conn->query("CREATE TABLE IF NOT EXISTS `chat` (
        `id` int NOT NULL AUTO_INCREMENT,
        `users` varchar(200) NULL DEFAULT NULL,
        `dados` longtext DEFAULT NULL,
        `ativo` int DEFAULT 1,
        `inclusao` int DEFAULT NULL,
        PRIMARY KEY (`id`))");
?>
    