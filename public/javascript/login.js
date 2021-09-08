myStorage=window.sessionStorage;

async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    // if (email && password) {
    //   const response = await fetch('/api/users/login', {
    //     method: 'post',
    //     body: JSON.stringify({
    //       email,
    //       password
    //     }),
    //     headers: { 'Content-Type': 'application/json' }
    //   });
  
    //   if (response.ok) {
       
    //     document.location.replace('/dashboard/');
    //   } else {
    //     alert(response.statusText);
    //   }
    // }

    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        const usernameFetch = await fetch('/api/users/email', {
          method: 'get',
          body: JSON.stringify({
            email
          }),
          headers: { 'Content-Type': 'application/json' }
        });
        // set username as variable to get passed through below
        myStorage.setItem('username',email)
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
  