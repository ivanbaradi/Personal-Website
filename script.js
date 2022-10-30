$(document).ready(function(){

    /**
     * Sends email to the user
     */
    $('.submit').click(function(){


        /**
         * Checks if the input contains at least 1 character
         * @param data: data from the input
         * @returns {true: input is valid, false: input is invalid}
         */
        function validateInput(input){

            //User did not fill in all fields from the form
            if(input.length == 0){
                alert('Please fill in all fields in the contacts form')
                return false
            }

            return true
        }


        /** 
         * Checks if the email address format is correct
         * @param email: user's email address
         * @returns {true: email address format is correct, false: email address format is incorrect}
         */
        function validateEmail(email){

            //User did not enter the email in correct format
            if(!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                alert("Invalid email address")
                return false
            }
            
            return true
        }


        //First name (trimmed, first letter uppercased, other letters lowercased)
        var firstName = $('#firstName').val().trim() 
        if(!validateInput(firstName))return
        firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase()
        // console.log(`First name: ${firstName}`)


        //Last name (trimmed, first letter uppercased, other letters lowercased)
        var lastName = $('#lastName').val().trim() 
        if(!validateInput(lastName))return
        lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase()
        // console.log(`Last name: ${lastName}`)


        //Email address (trimmed, all letters lowercased)
        var email = $('#emailAddress').val().trim().toLowerCase()
        if(!validateInput(email))return
        // console.log(`Email address: ${email}`)


        //Message (trimmed)
        var message = $('#message').val().trim()
        if(!validateInput(message))return
        // console.log(`Message: ${message}`)


        //Validates user's email address
        if(!validateEmail(email))return


        /**
         * Sends data from the contact form to ivanbaradi@gmail.com 
         * 
         * Note: HTTP Request failed due to being blocked by CORS policy (Fix soon)
         */
        $.ajax({
            type: 'POST',
            url: 'sendEmail.php',
            data: `firstName=${firstName}&lastName=${lastName}&email=${email}&message=${message}`,
            success: function(){alert('Your message has been sent!')}
        })
    })


    //Displays copyright info with the current year
    $('.copyright').html(`Copyright &copy; ${new Date().getFullYear()}. All Rights Reserved.`)
})