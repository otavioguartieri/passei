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
        <div id="app">
            <?php
                if(file_exists($header = __DIR__."/assets/header.php"))
                @include_once($header);
            ?>
            <div id="screen">
                <div id="menu">
                    <?php
                        if(file_exists($menu = __DIR__."/assets/menu.php"))
                        @include_once($menu);
                    ?>
                </div>
                <div id="content">
                    <div id="view">
                        <?php
                            if(empty($view = ($_REQUEST['v'] ?? ''))) $view = 'home';
                            if(file_exists($v = __DIR__."/views/$view/index.php"))
                            @include_once($v);
                        ?>
                    </div>
                    <?php
                        if(file_exists($footer = __DIR__."/assets/footer.php"))
                        @include_once($footer);
                    ?>
                </div>
            </div>
        </div>
    </body>
</html>
<script>
    $(`.menu-change`).click(function(){
        $(this).parent().parent().toggleClass('open');
    });
</script>