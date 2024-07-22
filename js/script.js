const form = document.getElementById('link-form');
const input = document.getElementById('link-input');
const errorMsg = document.getElementById('error-msg');

const validateURL = (url) => {
  const urlRegex =
    /^(?:(?:https?|ftp):\/\/)?(?:(?:[a-zA-Z0-9_\-\.]+\.)+[a-zA-Z]{2,}|localhost|(?:[0-9]{1,3}\.){3}[0-9]{1,3})(?::\d+)?(?:\/(?:[^\s\/#\?]{0,255}(?:\/[^\s\/#\?]{0,255})*)*)?(?:\?[^\s+&@#/%=]*=[^\s+&@#/%=]*(?:&[^\s+&@#/%=]*=[^\s+&@#/%=]*)*)?(?:#[^\s+]*?)?$/;
  return urlRegex.test(url);
};

const formSubmit = (event) => {
  event.preventDefault();

  if (input.value === '') {
    input.classList.add('border-red');
    errorMsg.innerHTML = 'Please enter a URL';
  } else if (!validateURL(input.value)) {
    input.classList.add('border-red');
    errorMsg.innerHTML = 'Please enter a valid URL';
  } else {
    input.classList.remove('border-red');
    errorMsg.innerHTML = '';
  }
};

form.addEventListener('submit', formSubmit);
