<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");


if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];

  // Send the user's information to the business
  // Replace the code below with the code to send the information to the business

  $to = "Guya1106@gmail.com";
  $subject = "New Contact Form Submission";
  $message = "Name: " . $name . "\nEmail: " . $email . "\nPhone: " . $phone;
  $headers = "From: " . $email;

  if (mail($to, $subject, $message, $headers)) {
    echo "יצירת הקשר הוצלחה, נחזור אלייך בהמשך";
  } else {
    echo "יש בעיה ביצירת הקשר, אנא נסה שוב מאוחר יותר";
  }
}
?>
