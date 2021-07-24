<?php
'test';
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';




//Подписка newsletter
if (trim(!empty($_POST['subs']))) {
    $title = "Новая подписка";
    $body.='<p><strong>Почта:</strong> '.$_POST['subs'].'</p>';
    header('location: sendsubscribe.html');
}


// footer-message
if (trim(!empty($_POST['name']))) {
    $title = "Новое обращение Best Tour Plan";
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    $body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
    $body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
    //Вывод результата после отправки
    header('location: sendmessage.html');
}

// modal-booking
if (trim(!empty($_POST['booking-name']))) {
    $title = "Бронирование номера Best Tour Plan";
    $body.='<p><strong>Имя:</strong> '.$_POST['booking-name'].'</p>';
    $body.='<p><strong>Телефон:</strong> '.$_POST['booking-phone'].'</p>';
    $body.='<p><strong>Почта:</strong> '.$_POST['booking-email'].'</p>';
    $body.='<p><strong>Сообщение:</strong> '.$_POST['booking-message'].'</p>';
    //Вывод результата после отправки
    header('location: sendbooking.html');
}

// modal-feedback
if (trim(!empty($_POST['feedback-name']))) {
    $title = "Новый отзыв";
    $body.='<p><strong>Имя:</strong> '.$_POST['feedback-name'].'</p>';
    $body.='<p><strong>Телефон:</strong> '.$_POST['feedback-phone'].'</p>';
    $body.='<p><strong>Почта:</strong> '.$_POST['feedback-email'].'</p>';
    $body.='<p><strong>Сообщение:</strong> '.$_POST['feedback-message'].'</p>';
    //Вывод результата после отправки
    header('location: sendfeedback.html');
}


 
// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'liron7489@gmail.com'; // Логин на почте
    $mail->Password   = 'adrik05061989'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('liron7489@gmail.com', 'Сообщение с сайта'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('support@li-ron.ru');  
    
    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

    // Проверяем отправленность сообщения
    if ($mail->send()) {$result = "success";} 
    else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата

 //echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]); 