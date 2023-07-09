<?php header('Content-Type: text/javascript');

if(!isset($_REQUEST['nojquery'])) @include_once(__DIR__.'/../jquery/jquery-3.6.4.min.js');

/* if(!isset($_REQUEST['nodatatable'])) {
    echo 'document.write(`<style class="datatablelibcss" type="text/css">';
    echo str_replace('\\','\\\\', @file_get_contents(__DIR__.'/../datatables/datatables.min.css'));
    echo '</style>`);';
    @include_once(__DIR__.'/../datatables/datatables.min.js');
} */

if(!isset($_REQUEST['nostyle'])) {
    echo 'document.write(`<style class="polarislibcss" type="text/css">';
    echo str_replace('\\','\\\\', @file_get_contents(__DIR__.'/style.css'));
    echo '</style>`);';
}

if(!isset($_REQUEST['noscript'])) @include_once(__DIR__.'/script.js');

if(!isset($_REQUEST['nofontawesome'])) echo 'document.write(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />`);';

if(isset($_REQUEST['noautoicon'])) exit;

if(isset($_REQUEST['nojquery'])) exit;

if(isset($_REQUEST['noicons'])) exit; ?>

$(document).ready(function(){
    if($('.material-icons').length)
        $('body').prepend(`<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`);
});