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

console.log(
  `Me llamo ${user.name} ${user.surname}, tengo ${user.age} años. Tengo ${user.pets[0].type} llamado ${user.pets[0].name} y un ${user.pets[1].type} llamado ${user.pets[1].name}. Mis hobbies son ${user.hobbies}. Mi estudio es ${user.education} y soy ${user.occupation}. Mi calle es ${user.address.street}, la ciudad es ${user.address.city}, en el estado de ${user.address.state}, el código postal es ${user.address.postalCode} y el país es ${user.address.country}. Puedes ponerte en contacto conmigo a través de mi teléfono: ${user.phone}, o a través del email: ${user.email}`
);

const reciveData = (user, email) => {
  console.log(user[email]);
};
reciveData();
