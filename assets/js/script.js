function emailSubmit() {
    var name = document.getElementById("name").value;

    var company = document.getElementById("company").value;

    var email = document.getElementById("email").value;

    var phone = document.getElementById("phone").value;

    var subject = document.getElementById("subject").value;

    var message = document.getElementById("message").value;

    var body = "Name : " + name + "<br/>" + "Company : " + company + "<br/>" + "Email : " + email + "<br/>" + "Contact Number : " + phone + "<br/>" + "Subject : " + subject + "<br/>" + "Message : " + message;

    Email.send({
        SecureToken: "538f8558-6e45-443b-bf7e-2f3cfbcd7e6d",
        To: 'iamawaneesh@gmail.com',
        From: "iamawaneesh007@gmail.com",
        Subject: "contact enquiry form ",
        Body: body,
    }).then(
        message => {
            if (message == "OK") {
                document.location.href = "/vishawaneeshportfolio/successful";
            } else {

            }
        }
    );
}

window.onscroll = function () { myFunction() };
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
