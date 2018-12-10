<?php
  require("phpmailer/phpMailer.php");
  require("phpmailer/smtp.php");
 
    
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    $mail->IsSMTP(); // enable SMTP
    
    $mail->SMTPDebug = 0; // debugging: 1 = errors and messages, 2 = messages only
    $mail->SMTPAuth = true; // authentication enabled
    $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
    $mail->Host = "smtp.gmail.com";
    $mail->Port = 465; // or 587
    $mail->IsHTML(true);
    $mail->Username = "***";
    $mail->Password = "***";
    $mail->From = $_POST["email"]; //pessoa que vai enviar
    $mail->FromName = $_POST["nome"];
    $mail->Subject = $_POST["assunto"]; //Assunto
    $mail->Body = $_POST["mensagem"]."<br><br>"."<b>Enviado por:</b> ".$_POST["email"]; //Mensagem
    $mail->AddAddress("***", "***"); //Quem vai receber
    $mail->Send();
     if(!$mail->Send()) {
        echo "<script>alert('erro');</script>";
     } else {
      echo "<script>alert('enviado, viado');</script>";
       echo "<script>window.location.replace('index.php');</script>";
       
     }
?>