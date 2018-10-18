let form = $(".form-contact");

form.validate({
    errorElement: "li",
    rules: {
      email: {
        required: true,
        email: true
      },
      name: "required",
      subject: "required",
      message: "required"
    },
    messages: {
      email: {
        required: "We need your email address to contact you / Precisamos do seu e-mail para entrar em contato.",
        email: "Your email address must be in the format of name@domain.com / Seu e-mail deve ser no formato nome@dominio.com."
      },
        name: "Please specify your name / Por favor, digite seu nome.",
        subject: "Please write a subject / Por favor, escreva o assunto.",
        message: "Please, write a message / Por favor, escreva uma mensagem."
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