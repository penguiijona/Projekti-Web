document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); 
      
      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');
      
      const emailValue = emailInput.value.trim();
      const passwordValue = passwordInput.value.trim();
      
      let isValid = true;

      clearErrors();

      if (emailValue === '') {
          displayError('email-error', 'Email address is required.');
          isValid = false;
      } else if (!isValidEmail(emailValue)) {
          displayError('email-error', 'Please enter a valid email format (e.g., user@example.com).');
          isValid = false;
      }

      const passwordCheckResult = isValidPassword(passwordValue);

      if (passwordCheckResult !== true) {
          displayError('password-error', passwordCheckResult); 
          isValid = false;
      }

      if (isValid) {
          loginForm.submit(); 
      }
  });

  function displayError(elementId, message) {
      const errorElement = document.getElementById(elementId);
      if (errorElement) {
          errorElement.textContent = message;
          errorElement.style.display = 'block';
      }
  }

  function clearErrors() {
      const errors = document.querySelectorAll('.error-message');
      errors.forEach(error => {
          error.textContent = '';
          error.style.display = 'none';
      });
  }

  function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }
  
  function isValidPassword(password) {
      if (password.length === 0) {
          return 'Password is required.';
      }
      
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]|:;"'<,>.?/~`]).{8,}$/;
      
      if (passwordRegex.test(password)) {
          return true;
      } else {
          return 'Password must be 8+ characters, include uppercase, lowercase, a number, and a symbol.';
      }
  }
});