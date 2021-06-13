const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = 'AIzaSyAU6naO8H2vdpuJJljWfampJx3uhjP3mO0';

const searchAddressHandler = (event: Event) => {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  // send this to Google's API!
};

form.addEventListener('submit', searchAddressHandler);
