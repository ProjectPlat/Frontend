import { v4 as uuid } from 'uuid';
import Cookies from 'universal-cookie';

const session_id = uuid();
console.log(session_id);

const daysToExpire = new Date(2147483647 * 1000).toUTCString();

const cookies = new Cookies();
cookies.set('session_id', session_id, { path: '/', expires: daysToExpire });