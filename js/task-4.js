const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault(); 
  const { email, password } = event.currentTarget.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  if (emailValue === '' || passwordValue === '') {
  alert('All form fields must be filled in'); 
  return;
  }
  const formData = {
  email: emailValue,
  password: passwordValue,
  };
  console.log(formData); 
  form.reset();
}

