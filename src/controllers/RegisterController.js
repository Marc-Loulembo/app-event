class RegisterController {
  constructor() {
    this.registerForm = document.querySelector('#app');

    this.run();
  }

  render() {
    return `
    <form class="form">
    <p class="title">Register </p>
    <p class="message">Signup now and get full access to our app. </p>
        <div class="flex">
        <label>
            <input class="input" name="first_name" type="text" placeholder="" required="">
            <span>Firstname</span>
        </label>

        <label>
            <input class="input" type="text" name="name" placeholder="" required="">
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input class="input" type="email" name="email" placeholder="" required="">
        <span>Email</span>
    </label> 

    <label>
        <input class="input" type="tel" name="numero" placeholder="" required="">
        <span>Numéro de téléphone</span>
    </label> 
        
    <label>
        <input class="input" type="password" placeholder="" required="">
        <span>Password</span>
    </label>
    <label>
        <input class="input" type="password" placeholder="" required="">
        <span>Confirm password</span>
    </label>
    <button class="submit">Submit</button>
    <p class="signin">Vous avez déjà un compte ? <a href="/LogInController">Se connecter</a> </p>
</form>
    `;
  }

  run() {
    this.registerForm.innerHTML = this.render();
  }
}

export default RegisterController;
