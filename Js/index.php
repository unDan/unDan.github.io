<?php
// собираем данные из формы
$message  = "Имя: " . $_POST['name'] . "<br/>";
$message .= "E-mail: " . $_POST['email'] . "<br/>";
$message .= "Номер телефона: " . $_POST['phone'] . "<br/>";
$message .= "Дата записи: " . $_POST['date'];      
send_mail($message); // отправим письмо

// функция отправки письма
function send_mail($message){
	// почта, на которую придет письмо
	$mail_to = "alienterrorblade@gmail.com"; 
	// тема письма
	$subject = "Запись на замер дверей";
	// заголовок письма
	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
	$headers .= "From: Тестовое письмо <no-reply@test.com>\r\n"; // от кого письмо
	 
	// отправляем письмо 
	mail($mail_to, $subject, $message, $headers);
}
?>
