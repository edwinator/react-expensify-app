import * as firebase from 'firebase';
import moment from 'moment';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();

export {firebase, database as default};


// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// const expenses = [{
//   description: 'Gum',
//   note: '',
//   amount: 195,
//   createdAt: 0
// },{
//   description: 'rent',
//   note: '',
//   amount: 109500,
//   createdAt: moment(0).subtract(4, 'days').valueOf()
// },{
//   description: 'Credit Card',
//   note: '',
//   amount: 4500,
//   createdAt: moment(0).add(4, 'days').valueOf()
// }]

// const onValueChange = database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//   });
//   console.log(expenses);
// }, (e) => {
//   console.log('error with data fetching', e);
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
//   });


// database.ref('expenses').push(expenses[0]);
// database.ref('expenses').push(expenses[1]);
// database.ref('expenses').push(expenses[2]);

// database.ref('notes/-L30dqYwfFKr8hFkwM3B').remove();

// database.ref('notes').push({  
//   title: 'course topics',
//   body: 'this is aother note'    
// })

// const firebaseNotes = {
//   notes: {
//     fdshfhdsk: {
//       title: 'first note',
//       body: 'this is a note'      
//     },
//     hkhkkjkju: {
//       title: 'anoter note',
//       body: 'this is a note'    
//     }
//   }
// }

// const notes = [{
//   id: '12',
//   title: 'first note',
//   body: 'this is a note'
// },{
//   id: '17dsd',
//   title: 'anoter note',
//   body: 'this is a note'
// }];

// database.ref('notes').set(notes);

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}` );
// }, (e) => {
//   console.log('error with data fetching', e);
// });

// database.ref().set({
//   name: 'andrew',
//   job: {
//     title: 'software developer',
//     company: 'amazon'
//   }
// });


// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(22);
// }, 3000);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 6000);

// setTimeout(() => {
//   database.ref('age').set(37);
// }, 9000);

  // database.ref('location')
  //   .once('value')
  //   .then((snapshot) => {
  //     const val = snapshot.val();
  //     console.log(val);
  //   })
  //   .catch((e) => {
  //     console.log('Error fetching data', e);
  //   });

// database.ref().set({
//   name: 'edwin',
//   age: 51,
//   stressLevel: 6,
//   job: {
//     title: 'developer',
//     company: 'google'
//   },
//   location: {
//     city: 'Oakland',
//     country: 'USA'
//   }
// }).then(() => {
//   console.log('data is saved.');
// }).catch((e) => {
//   console.log('this failed', e);
// })

// // only updates at root level - could lose subdata
// database.ref().update( {
//   stressLevel: 9,
//   'job/company': 'amazon',
//   'location/city': 'seattle'
// })

// .then(() => {
//     console.log('data is deleted.');
//   })
//   .catch((e) => {
//     console.log('delete failed', e);
  // });

// database.ref('isSingle').remove()
// .then(() => {
//     console.log('data is deleted.');
//   })
//   .catch((e) => {
//     console.log('delete failed', e);
//   });