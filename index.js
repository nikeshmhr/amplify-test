import { Auth } from 'aws-amplify';

Auth.configure();

const sayHello = () => {
    console.log('say hello');
}

export default sayHello;