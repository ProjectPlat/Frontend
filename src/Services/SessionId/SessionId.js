import cookieRepository from '../../Infrastructure/Repositories/Cookies/CookieRepository';
import { generateId } from '../idGenerator/idGenerator';
import { MAX_DATE, COOKIE_SESSION_NAME } from '../../Constants/constants';

const daysToExpire = new Date(MAX_DATE);

const sessionIdExists = cookieRepository.get(COOKIE_SESSION_NAME);

if (!sessionIdExists) {
    const session_id = generateId;

    cookieRepository.save({
        expiration: daysToExpire,
        name: COOKIE_SESSION_NAME,
        value: session_id
    });
}
