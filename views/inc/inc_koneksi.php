<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "db_kucluck_web";

$koneksi = mysqli_connect($host,$user,$pass,$db);
if(!$koneksi){
    die("Gagal terhubung!");
}else{
    echo "Berhasil terhubung!";
}