import Cookies from 'universal-cookie';
import { generateId } from '../../Services/idGenerator';
import { MAX_DATE } from '../../Constants/constants';

const session_id = generateId;

const daysToExpire = new Date(MAX_DATE);

const cookies = new Cookies();

const sessionIdExists = cookies.get('session_id')
if(!sessionIdExists) {
    cookies.set('session_id', session_id, { path: '/', expires: daysToExpire });
}

console.log(cookies)

