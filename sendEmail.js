function sendMail(contactForm) {
    emailjs.send("service_maridel","template_gj1sxvn", {
        "from_name": contactForm.name.value,
        "project_request": contactForm.projectsummary.value
    })
    
    .then(
        function(response) {
        contactForm.name.value = '';
        contactForm.projectsummary.value = '';
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}


(function(){
  emailjs.init("user_93XvYuauScjvUY6m1p5YR");
})();