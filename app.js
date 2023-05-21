// Variáveis dos botões
let BotaoAdicionar = document.querySelector('.btn-adicionar')
let BotaoRemover = document.querySelector('.btn-remover')
let container2 = document.querySelector('.container2')
let sumirbotao = document.querySelector('.adicionar')
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

  // Remove a div da encomenda 2
  BotaoRemover.addEventListener('click', function() {
    if (container2.style.display === 'none') {
      container2.style.display = 'block'
    } else {
      container2.style.display = 'none';
      sumirbotao.style.display = 'flex'
    }
  })
  
  const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Encomenda enviada!</h1>",
    error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
  });
  formSubmit.init();