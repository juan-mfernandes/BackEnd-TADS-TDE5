// 2. usando a lib fakerjs (https://www.npmjs.com/package/@faker-js/faker) crie uma função que retorna dados de uma pessoa falsa contendo nome, email e data de nascimento.
import { faker } from '@faker-js/faker/locale/pt_BR';

function createRandomUser() {
    return {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      birthDay: faker.date.birthdate()
    };
}

const person = createRandomUser();

//br data format dd/mm/YY
const dataFormatada = () => { 
    return {
        day: String(person.birthDay.getDay() + 1 ).padStart(2, '0'),
        month: String(person.birthDay.getMonth() + 1 ).padStart(2, '0'),
        year: person.birthDay.getFullYear().toString()
    }
}

const personName = person.name;
const personEmail = person.email;

const birthDay = dataFormatada().day;
const month = dataFormatada().month;
const year = dataFormatada().year;

console.log("Nome: " + personName + "\n" + "Email: " + personEmail + "\n" + "Data de Nascimento: " + birthDay + "/" + month + "/" + year);

