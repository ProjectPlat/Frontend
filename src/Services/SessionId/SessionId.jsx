import Cookies from 'universal-cookie';
import { generateId } from '../../Services/IdGenerator/IdGenerator';
import { MAX_DATE } from '../../Constants/constants';

const session_id = generateId;

var loggedIn = false;

const daysToExpire = new Date(MAX_DATE);

const cookies = new Cookies();

const sessionIdExists = cookies.get('session_id')

if(sessionIdExists) {
    loggedIn = true;
} else {
    loggedIn = false;
    cookies.set('session_id', session_id, { path: '/', expires: daysToExpire }); 
}



