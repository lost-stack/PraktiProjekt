<?php
// Funktion zur Überprüfung der E-Mail-Domain
function check_email_exists($email) {
    $domain = substr(strrchr($email, "@"), 1); // Domain extrahieren

    // Überprüfen, ob die Domain einen MX-Record hat
    if (checkdnsrr($domain, "MX")) {
        return true; // Domain hat einen Mailserver
    } else {
        return false; // Keine MX-Einträge für diese Domain
    }
}

// Sicherstellen, dass alle Formulardaten vorhanden sind
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Überprüfen, ob die E-Mail-Adresse gültig ist
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Ungültige E-Mail-Adresse!";
        exit;
    }

    // Überprüfen, ob die Domain der E-Mail-Adresse existiert
    if (!check_email_exists($email)) {
        echo "Die E-Mail-Domain existiert nicht!";
        exit;
    }

    // E-Mail-Empfänger (hier gibst du deine eigene E-Mail-Adresse an)
    $to = "mikailkianfar@gmail.com";

    // Betreff der E-Mail
    $subject = "Kontaktformular Webseite Verschachtelt GmbH";

    // E-Mail-Inhalt
    $body = "Name: $name\nE-Mail: $email\nNachricht:\n$message";

    // E-Mail-Header
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // E-Mail senden
    if (mail($to, $subject, $body, $headers)) {
        echo "Die Nachricht wurde erfolgreich gesendet!";
    } else {
        echo "Es gab ein Problem beim Senden der Nachricht.";
    }
}
?>
