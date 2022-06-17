import Cookies from 'universal-cookie';
import { generateId } from '../idGenerator/idGenerator';
import { MAX_DATE } from '../../Constants/constants';

const session_id = generateId;

const daysToExpire = new Date(MAX_DATE);

const cookies = new Cookies();
const sessionIdExists = cookies.get('session_id') 

if(sessionIdExists) {
    cookies.set('session_id', session_id, { path: '/', expires: daysToExpire }); 
    localStorage.sessionId = session_id
}

export default session_id;

export function ifUserIsLogged () {
    if (sessionIdExists){
        return true
    } else {
        return false
    }
}