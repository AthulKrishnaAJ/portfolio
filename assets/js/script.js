var count = 0;
function validate() {
    document.getElementById("send").style.display = "none";
    var name = document.getElementById("name").value;
    if (name.length < 2) {
        document.getElementById("namep").innerHTML = "Please Enter at least 2 Characters"
    }
    else {
        document.getElementById("namep").innerHTML = " "
        count = 1;
    }}





    function validateem(){
        var email = document.getElementById("email").value;
    if (email.match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)) {
        document.getElementById("emailp").innerHTML = " "
        count = 2
    }
    else {
        document.getElementById("emailp").innerHTML = "Enter a valid Email address"
    }
    }






   function validatesub() {
        var sub = document.getElementById("subject").value;
    if (sub.length < 3) {
        document.getElementById("subp").innerHTML = "Please enter at least 3 characters"
    }
    else {
        document.getElementById("subp").innerHTML = " "
        count = 3
    }
        
    }


    function validatemsg() {
        var msg = document.getElementById("message").value;
    if (msg.length < 5) {
        document.getElementById("msgp").innerHTML = "Please enter atleast 5 characters"
    }
    else {
        document.getElementById("msgp").innerHTML = ""
        count = 4
    }
    console.log(count)

        
    }


function send() {
    if (count === 4) {
        $("#submit-form").submit((e) => {
            e.preventDefault();
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbwg0k5uAKid23ZOmOiXKywR8rwt9sFt9ZsmyNS6sA8S--fAcS45tTFP_qBYjFpMMwcyJA/exec",
                data: $("#submit-form").serialize(),
                method: "post",
                beforeSend: function () {
                    $("#load").show();
                },
                success: function () {
                    $("#load").hide();
                    $("#send").css({ display: "block", backgroundColor: "green" });
                    $("#send").html("Your message has been sent successfully");

                    setTimeout(function () {
                        window.location.reload();
                    }, 3000);
                },
                error: function (err) {
                    $("#load").hide();
                    $("#error").show();
                    $("#error").html("Something went wrong. Try again");

                    setTimeout(function () {
                        window.location.reload();
                    }, 3000);
                }
            });
        });
    } else {
        $("#send").css({ display: "block", backgroundColor: "red" });
        $("#send").html("Please fill all fields");
    }
}
