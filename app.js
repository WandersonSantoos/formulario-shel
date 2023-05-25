// Variáveis dos botões das encomendas

let BotaoAdicionar = document.querySelector('.btn-adicionar2')
let BotaoAdicionar3 = document.querySelector('.btn-adicionar3')
let BotaoAdicionar4 = document.querySelector('.btn-adicionar4')
let BotaoAdicionar5 = document.querySelector('.btn-adicionar5')

let BotaoRemover = document.querySelector('.btn-remover')
let BotaoRemover3 = document.querySelector('.btn-remover3')
let BotaoRemover4 = document.querySelector('.btn-remover4')
let BotaoRemover5 = document.querySelector('.btn-remover5')

// container encomendas
let container2 = document.querySelector('.container2')
let container3 = document.querySelector('.container3')
let container4 = document.querySelector('.container4')
let container5 = document.querySelector('.container5')

// variaveis que some o botão após o click
let sumirbotao = document.querySelector('.adicionar')
let sumirbotao3 = document.querySelector('.adicionar3')
let sumirbotao4 = document.querySelector('.adicionar4')
let sumirbotao5 = document.querySelector('.adicionar5')
class FormSubmit {
    constructor(settings) {
      this.settings = settings;
      this.form = document.querySelector(settings.form);
      this.formButton = document.querySelector(settings.button);
      if (this.form) {
        this.url = this.form.getAttribute("action");
      }
      this.sendForm = this.sendForm.bind(this);
    }
  
    displaySuccess() {
      this.form.innerHTML = this.settings.success;
    }
  
    displayError() {
      this.form.innerHTML = this.settings.error;
    }
  
    getFormObject() {
      const formObject = {};
      const fields = this.form.querySelectorAll("[name]");
      fields.forEach((field) => {
        formObject[field.getAttribute("name")] = field.value;
      });
      return formObject;
    }
  
    onSubmission(event) {
      event.preventDefault();
      event.target.disabled = true;
      event.target.innerText = "Enviando encomenda...";
    }
  
    async sendForm(event) {
      try {
        this.onSubmission(event);
        await fetch(this.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(this.getFormObject()),
        });
        this.displaySuccess();
      } catch (error) {
        this.displayError();
        throw new Error(error);
      }
    }
  
    init() {
      if (this.form) this.formButton.addEventListener("click", this.sendForm);
      return this;
    }
  }

  // Adiciona a div da encomenda 2
  BotaoAdicionar.addEventListener('click', function() {
    if (container2.style.display === 'block') {
      container2.style.display = 'block'
      sumirbotao.style.display = 'none'
    } else {
      sumirbotao.style.display = 'none'
      container2.style.display = 'block';
    }
  })

  // Adiciona a div da encomenda 3
  BotaoAdicionar3.addEventListener('click', function() {
    if (container3.style.display === 'block') {
      container3.style.display = 'block'
      sumirbotao3.style.display = 'none'
    } else {
      sumirbotao3.style.display = 'none'
      container3.style.display = 'block';
    }
  })

  // Adiciona a div da encomenda 4
  BotaoAdicionar4.addEventListener('click', function() {
      if (container4.style.display === 'block') {
        container4.style.display = 'block'
        sumirbotao4.style.display = 'none'
      } else {
        sumirbotao4.style.display = 'none'
        container4.style.display = 'block';
      }
  })

  // Adiciona a div da encomenda5
  BotaoAdicionar5.addEventListener('click', function() {
    if (container5.style.display === 'block') {
      container5.style.display = 'block'
      sumirbotao5.style.display = 'none'
    } else {
      sumirbotao5.style.display = 'none'
      container5.style.display = 'block';
    }
  })

  // Remove a div da encomenda 2
  BotaoRemover.addEventListener('click', function() {
    if (container2.style.display === 'none') {
      container2.style.display = 'block'
    } else {
      container2.style.display = 'none';
      container3.style.display = 'none';
      container4.style.display = 'none';
      container5.style.display = 'none';
    }
  })

  // Remove a div da encomenda 3
  BotaoRemover3.addEventListener('click', function() {
    if (container3.style.display === 'none') {
      container3.style.display = 'block'
    } else {
      container3.style.display = 'none';
      container4.style.display = 'none';
      container5.style.display = 'none';
    }
  })

  // Remove a div da encomenda 4
  BotaoRemover4.addEventListener('click', function() {
    if (container4.style.display === 'none') {
      container4.style.display = 'block'
      container5.style.display = 'none';
    } else {
      container4.style.display = 'none';
    }
  })

  // Remove a div da encomenda 5
  BotaoRemover5.addEventListener('click', function() {
    if (container5.style.display === 'none') {
      container5.style.display = 'block'
    } else {
      container5.style.display = 'none';
    }
  })
  
  const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<div class='sucesso'> <h1 class='success'>Encomenda enviada!</h1> <a class='back' href='http://127.0.0.1:5500/index.html'>Voltar</a> </div>",
    error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
  });
  formSubmit.init();