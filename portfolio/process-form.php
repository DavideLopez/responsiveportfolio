<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["firstName"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "davidelopez7@gmail.com";
    $subject = "Messaggio dal modulo di contatto";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    mail($to, $subject, $message, $headers);

    header("Location: grazie.html");
    exit();
}
?>
