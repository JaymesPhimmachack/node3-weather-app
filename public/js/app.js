console.log('Client side js file is loaded!')

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const location = search.value;

  messageOne.textContent = 'Loading...';
  messageTwo.textContent = '';

  fetch(`https://0a4bab96e4ee44dfac8aa896fa62b423.vfs.cloud9.us-east-2.amazonaws.com/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      }
      else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    })
  }).catch(error => {
    console.log(error)
  })
})
