
function text(x) {
    if (x==1) document.getElementById("HourlyRate").style.display = "block";
    else document.getElementById("HourlyRate").style.display = "none";
    return;
}



function sendEmail(){
    Email.send({
        Host : "Ahmad Seyam",
        Username : "Ahmadseyam30@gmail.com",
        Password: "54216432",
        To : 'Ahmadseyam30@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("Name").value
        + "<br> Email: " + document.getElementById("Email Address").value
        + "<br> Address: " + document.getElementById("Address").value
        + "<br> City: " + document.getElementById("City").value
        + "<br> Message: " + document.getElementById("Enter Message").value
        + "<br> Phone: " + document.getElementById("Phone Number").value
    }).then(
        message => alert("Sent")
    )

}
