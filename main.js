var typed = new Typed(".text", {
    strings:["Learner", "Coder", "Web Developer","Tech Enthusiast"],
   
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail(){
    const bodyMessage = 'Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}<br>' ;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "codetanks911@gmail.com",
        Password : "4F53C84E094B2F3B02A3746E4F3554C776C9",
        To : 'codetanks911@gmail.com',
        From : "codetanks911@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK"){
            Swal.fire({
                title: "Done!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});


