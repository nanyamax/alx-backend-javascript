export default function handleResponseFromAPI(promise) {
  promise = new Promise(function (resolve, reject) {
    if (promise) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error());
    }
  });
  promise.then(function Success() {
    console.log('Got a response from the API');
  });
}
