$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$date = $_POST['date'];

$adress = "elgoogecaf@gmail";
$subject = "Запись на замер дверей";
$message = "Имя: $name\nEmail: $email\n Номер телефона: $phone\n Дата записи: $date"; 
mail($adress, $subject, $message, "Content-type:text/plain; charset = utf-8\r\nFrom: $email");
