class LogInController {
  constructor() {
    this.logInForm = document.querySelector('#app');

    this.run();
  }

  render() {
    return `
    <form class="form" method='post'>
    <p class="title">LogIn </p>
    <p class="message">Content de te revoir. </p> 
            
    <label>
        <input class="input" type="email" placeholder="" required="">
        <span>Email</span>
    </label> 
        
    <label>
        <input class="input" type="password" placeholder="" required="">
        <span>Password</span>
    </label>
    
    <button class="submit">Submit</button>
    <p class="signin">Vous n'avez pas encore de compte ? <a href="/RegisterController">S'inscrire</a> </p>
</form>
    `;
  }

  run() {
    this.logInForm.innerHTML = this.render();
  }
}

export default LogInController;
