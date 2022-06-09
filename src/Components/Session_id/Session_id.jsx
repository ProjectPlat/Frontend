import { v4 as uuid } from 'uuid';
import Cookies from 'universal-cookie';

const session_id = uuid();
console.log(session_id);

const cookies = new Cookies();
cookies.set('session_id', session_id, { path: '/' });