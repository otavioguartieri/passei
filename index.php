<!DOCTYPE html>
<html>
    <head>
        <title>Passei</title>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0">
        <script type="text/javascript" src="libs/polaris/index.php"></script>
        <link rel="stylesheet" href="assets/style.css">
        <script type="text/javascript" src="libs/globals.php"></script>
    </head>
    <body>
        <?php
            if(empty($view = ($_REQUEST['v'] ?? ''))) $view = 'home';
            if(file_exists($vf = __DIR__."/views/$view/index.php"))
            @include_once($vf);
        ?>
    </body>
</html>
<script>
</script>