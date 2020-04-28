<?php

  $method = $_SERVER['REQUEST_METHOD'];

  if ($method !== 'POST') {
    exit();
  }

  $project_name = 'PizzaTime';
  $admin_email = '';
  $form_subject = 'Заявка с сайта PizzaTime';
  $message = 'Hello world';

  $message = "<table style='width: 100%;'>
    <tr style='background-color: #f8f8f8;'>
      <td style='padding: 10px; border: 1px solid #e9e9e9;'>Name</td>
      <td style='padding: 10px; border: 1px solid #e9e9e9;'>Value</td>
    </tr>
    <tr>
      <td style='padding: 10px; border: 1px solid #e9e9e9;'>Name</td>
      <td style='padding: 10px; border: 1px solid #e9e9e9;'>Value</td>
    </tr>
  </table>";

  $headers = "MIME-Version: 1.0\r\n";
  $headers = "Content-type: text/html; charset=utf-8\r\n";
  $headers = "From: $admin_email\r\n";
  
  mail($admin_email, $form_subject, $message, $headers);

?>