<?php 
    mail(
        //Ivan's Email Address
        'ivanbaradi@gmail.com',
        //Subject 
        'Personal Website', 
        //Message
        'First Name: ' . $_POST['firstName'] . '\n' . 
        'Last Name: ' . $_POST['lastName'] . '\n' .
        'Email: ' . $_POST['email'] . '\n\n' .
        $_POST['message']
    )
?>