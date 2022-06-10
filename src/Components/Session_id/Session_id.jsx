import { v4 as uuid } from 'uuid';
import Cookies from 'universal-cookie';
import { browserName, browserVersion } from "react-device-detect";

const session_id = uuid(browserName + browserVersion);



const daysToExpire = new Date(2147483647 * 1000);

const cookies = new Cookies();
cookies.set('session_id', session_id, { path: '/', expires: daysToExpire });

//const getSessionId = () => { return cookies.get('session_id'); }
console.log(cookies)

