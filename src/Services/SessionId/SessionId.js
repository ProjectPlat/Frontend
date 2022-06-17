import Cookies from 'universal-cookie';

import { generateId } from '../idGenerator/idGenerator';
import { MAX_DATE } from '../../Constants/constants';

const daysToExpire = new Date(MAX_DATE);

const cookies = new Cookies();
const sessionIdExists = cookies.get('session_id') 

if(!sessionIdExists) {
    const session_id = generateId;
    cookies.set('session_id', session_id, { path: '/', expires: daysToExpire }); 
    localStorage.sessionId = session_id
}
