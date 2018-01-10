

// const book = {
//     title: 'Ego is the Enema',
//     author: 'ryan holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name:publisherName = "Self Published"} = book.publisher;


// console.log(publisherName);

const address = [
    '1299 S. Main',
    'Oakland',
    'CA',
    '94609'
];

const [, city, state = 'NY'] = address;

console.log(`You are in ${city} ${state}`)

const item = [
    'coffee (hot)',
    '$2.00',
    '$2.55',
    '$3.00'
];

const [coffee, , price] = item;

console.log(`A ${coffee} costs ${price}`)
