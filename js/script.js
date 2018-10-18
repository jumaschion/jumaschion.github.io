let form = $(".form-contact");

form.validate({
    errorElement: "li",
    rules: {
      name: "required",
      subject: "required",
      email: {
        required: true,
        email: true
      },
      message: "required",
    },
    messages: {
        name: "Please specify your name",
        subject: "Please write a subject",
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        }
      }
  });

  const button = document.getElementById("arrowTop")
    button.addEventListener("click", function (){
        window.scrollTo(pageYOffset, 0)
})

window.addEventListener("scroll", function () {
        if(pageYOffset > 450){
        button.hidden = false
    } else {
        button.hidden = true
    }
  })