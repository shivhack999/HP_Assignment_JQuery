$(document).ready(function() {

    $("#submitBtn").click(function(){
        var email = $("#email").val();
        var password = $("#password").val();
        var confirmPassword = $("#confirmPassword").val();
        var status = true;
        if(email === ""){
            status = false;
            alert("Enter the email !");
        }
        if(password === ""){
            status = false;
            alert("Enter the password");
        }
        if(confirmPassword === ""){
            status = false;
            alert("Enter the confirm password!");
        }
        if(password != confirmPassword){
            status = false;
            alert("Password not match !");
        }
        if(!$("#tAndC").prop("checked")){
            status = false;
            alert("Agree to trems and conditions");
        }
        if(status){
            alert("Successfully form submited.");
        }
    });

});