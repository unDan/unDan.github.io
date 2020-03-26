<?php
// собираем данные из формы
$message  = "Имя: " . $_POST['name'] . "<br>";
$message .= "E-mail: " . $_POST['email'] . "<br>";
$message .= "Номер телефона: " . $_POST['phone'] . "<br>";
$message .= "Дата записи: " . $_POST['date'];      
send_mail($message); // отправим письмо
$msg_box = "<span style="color: green;">Вы успешно записались на замер!</span>";

// делаем ответ на клиентскую часть в формате JSON
echo $msg_box;

// функция отправки письма
function send_mail($message){
	// почта, на которую придет письмо
	$mail_to = "warfaceawmtest1@mail.ru"; 
	// тема письма
	$subject = "Запись на замер дверей";
	// заголовок письма
	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
	$headers .= "From: Тестовое письмо <no-reply@undan.github.io>\r\n"; // от кого письмо
	 
	// отправляем письмо 
	mail($mail_to, $subject, $message, $headers);
}
?>
