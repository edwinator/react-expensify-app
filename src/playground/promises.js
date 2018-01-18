import { setTimeout } from "timers";

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name:'somebody',
      age:99
    });
    reject('oops');
  }, 1500)
});

console.log('before');

promise.then((data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my other promise');
    }, 5000)
  });
}).then((str) => {
  console.log('run after with passed data', str);
}).catch((error) => {
  console.log('error', error)
});

console.log('after');