<?php
if ($_SERVER["REQUEST_METHOD"] === "get") {
  $message = "
  الاسم: ".$_GET["name"]."
  البريدالإلكتروني: ".$_GET["email"]."
  الهاتف: ".$_GET["phone"]."
  الهاتف الأخر: ".$_GET["phone1"]."
  العنوان: ".$_GET["location"]."
  معلومات اضافية: ".$_GET["email-message"];
  $url = "https://api.whatsapp.com/send/?phone=201015791302&text=".$message;
  header('REFRESH:1;URL:'.$url);
} else {
  echo "Hero";
}