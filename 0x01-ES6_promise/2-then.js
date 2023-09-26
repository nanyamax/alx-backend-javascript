export default function handleResponseFromAPI(promise) {
  promise = new Promise((resolve, reject) => {
    resolve({ status: 200, body: 'Success' });
    reject(new Error());
  });
  promise.then(function Success() {
    console.log('Got a response from the API');
  });
}
