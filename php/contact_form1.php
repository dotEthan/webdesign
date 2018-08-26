<?php

/* Set e-mail recipient */
$myemail = "estrauss2018@gmail.com";
$subject = "Portfolio Contact Message";

// Fetching Values from URL.
$fname = $_POST['fname1'];
$phone = $_POST['phone1'];
$email = $_POST['email1'];
$inquiry = $_POST['inquiry1'];
$website = $_POST['website1'];
$budget = $_POST['budget1'];
$need = $_POST['need1'];

$email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail.
// After sanitization Validation is performed

/* Validate required fields*/
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    if (!preg_match("/^[a-zA-Z ]*$/",$fname)) {
    echo "<span>* Please Fill Valid Contact No. *</span>";
    } else {
    /* Format form data for email */
    $message = "
    Name: $fname
    E-mail: $email
    Phone #: $phone
    Previous Website: $website
    budget: $budget
    Need: $need

    Comments:
    $inquiry

    End of message";

    /* Send the message using mail() function */
    mail($myemail, $subject, $message);

    echo "Your Query has been received, We will contact you soon.";
    }
    } else {
echo "Invalid Email";
}
?>