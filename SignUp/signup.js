document.addEventListener('DOMContentLoaded', function() {
  const signupForm = document.getElementById('signup-form');

  signupForm.addEventListener('submit', function(event) {
      event.preventDefault(); 
      
      const nameValue = document.getElementById('name').value.trim();
      const surnameValue = document.getElementById('surname').value.trim();
      const emailValue = document.getElementById('email').value.trim();
      const passwordValue = document.getElementById('password').value.trim();
      const confirmPasswordValue = document.getElementById('confirm-password').value.trim();
      
      let isValid = true;
      clearErrors();

      if (nameValue === '') {
          displayError('name-error', 'Name is required.');
          isValid = false;
      }

      if (surnameValue === '') {
          displayError('surname-error', 'Surname is required.');
          isValid = false;
      }

      if (emailValue === '') {
          displayError('email-error', 'Email address is required.');
          isValid = false;
      } else if (!isValidEmail(emailValue)) {
          displayError('email-error', 'Please enter a valid email format.');
          isValid = false;
      }

      const passwordCheckResult = isValidPassword(passwordValue);

      if (passwordCheckResult !== true) {
          displayError('password-error', passwordCheckResult); 
          isValid = false;
      }

      if (confirmPasswordValue === '') {
          displayError('confirm-password-error', 'Please confirm your password.');
          isValid = false;
      } else if (passwordValue !== confirmPasswordValue) {
          displayError('confirm-password-error', 'Passwords do not match.');
          isValid = false;
      }

      if (isValid) {
          signupForm.submit();
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