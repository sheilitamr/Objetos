const user = {
  name: 'John',
  surname: 'Doe',
  age: 25,
  hobbies: ['leer', 'tocar la guitarra', 'pasear con las cabras'],
  pets: [
    { name: 'Max', type: 'perro' },
    { name: 'Whiskers', type: 'gato' }
  ],
  address: {
    street: '123 Main Street',
    city: 'Gotham',
    state: 'California',
    postalCode: '12345',
    country: 'USA'
  },
  phone: '+1234567890',
  email: 'johndoe@example.com',
  occupation: 'Ingeniero de software',
  education: 'Master en ciencia de datos'
};

/* console.log(
  `Me llamo ${user.name} ${user.surname}, tengo ${user.age} años. Tengo ${user.pets[0].type} llamado ${user.pets[0].name} y un ${user.pets[1].type} llamado ${user.pets[1].name}. Mis hobbies son ${user.hobbies}. Mi estudio es ${user.education} y soy ${user.occupation}. Mi calle es ${user.address.street}, la ciudad es ${user.address.city}, en el estado de ${user.address.state}, el código postal es ${user.address.postalCode} y el país es ${user.address.country}. Puedes ponerte en contacto conmigo a través de mi teléfono: ${user.phone}, o a través del email: ${user.email}`
); */

const reciveData = (user, property) => {
  console.log(user[property]);
};
/* reciveData(user, 'email'); */

const birthday = () => {
  user.age = user.age + 1;
};
birthday();

/* console.log(user); */

const data = {
  numbers: [10, 32, 31, 67, 9, 2, 51, 4],
  firstFloor: {
    secondFloor: {
      numbersPlus2: []
    },
    thirdFloor: {
      numbersDouble: []
    }
  },
  fourthFloor: {
    numbersDividedBy2: []
  },
  fifthFloor: {
    onlyEven: [],
    onlyOdd: []
  }
};

for (const number of data.numbers) {
  data.firstFloor.secondFloor.numbersPlus2.push(number + 2);
  data.firstFloor.thirdFloor.numbersDouble.push(number * 2);
  data.fourthFloor.numbersDividedBy2.push(number / 2);
  if (number % 2 === 0) {
    data.fifthFloor.onlyEven.push(number);
  } else {
    data.fifthFloor.onlyOdd.push(number);
  }
}
/* console.log(data); */

const data2 = {
  firstFloor: {
    vowels: []
  },
  secondFloor: {
    consonants: []
  },

  fourthFloor: {
    asciiCode: []
  },
  fifthFloor: {
    //Cada palabra de la frase será una posición del array
    wordsInUppercase: [],
    wordsInLowercase: []
  },
  sixthFloor: {
    // En este nivel codificarás la frase para que sea un secreto.
    // Si el caracter es una vocal, la sustituirás por un número siendo a-1 e-2 i-3 o-4 u-5
    // Si el caracter es una consonante deberás sustituirlo por su consonante anterior, si fuera una c, sería una b y si fuera una p sería una ñ y si fuera una v sería una t
    // Si el caracter es un espacio lo sustituirás por una letra random del alfabeto
    secretCode: ''
  }
};
const fillObject = phrase => {
  const regexVowels = /[aeiouáéíóúÁÉÍÓÚ]/;
  for (const letter of phrase) {
    if (regexVowels.test(letter)) {
      data2.firstFloor.vowels.push(letter);
    } else if (letter !== ' ' && !regexVowels.test(letter)) {
      data2.secondFloor.consonants.push(letter);
    }
  }

  //----
  for (const letter of phrase) {
    data2.fourthFloor.asciiCode.push(letter.charCodeAt());
  }

  data2.fifthFloor.wordsInUppercase.push(phrase.toUpperCase().split(' '));
  data2.fifthFloor.wordsInLowercase.push(phrase.toLowerCase().split(' '));

  //------
  let newPhrase = '';

  newPhrase = phrase.replaceAll(/[aáAÁ]/g, 1);
  newPhrase = newPhrase.replaceAll(/[eéEÉ]/g, 2);
  newPhrase = newPhrase.replaceAll(/[iíIÍ]/g, 3);
  newPhrase = newPhrase.replaceAll(/[oóOÓ]/g, 4);
  newPhrase = newPhrase.replaceAll(/[uúUÚ]/g, 5);

  //----
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  const consonants = [
    'b',
    'c',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'm',
    'n',
    'ñ',
    'p',
    'q',
    'r',
    's',
    't',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  let secretCode = '';
  for (let i = 0; i < newPhrase.length; i++) {
    if (consonants.includes(newPhrase[i].toLowerCase())) {
      let index = consonants.indexOf(newPhrase[i].toLowerCase());
      if (index === 0) {
        index = consonants.length - 1;
      }
      secretCode += consonants[index - 1];
    } else if (newPhrase[i] === ' ') {
      letterRandom = alphabet[Math.floor(Math.random() * alphabet.length)];
      secretCode += letterRandom;
    } else {
      secretCode += newPhrase[i];
    }
  }

  data2.sixthFloor.secretCode = secretCode;
};
fillObject('Si no estudias acabarás como Enrique');
console.table(data2.sixthFloor);
