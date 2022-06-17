import Cookies from 'universal-cookie';
const cookies = new Cookies();

const cookieRepository = {
  save: function ({ name, value, expiration }) {
    cookies.set(name, value, { path: '/', expires: expiration });
  },

  get: function (name) {
    const getCookie = cookies.get(name);
    if (getCookie) {
      return getCookie;
    }

    return null
  }
}

export default cookieRepository;