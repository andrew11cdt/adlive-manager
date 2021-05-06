import { parseCookies, setCookie, destroyCookie } from "nookies";

class CookieUtil {
  getCookie(field: string) {
    return parseCookies(null)[field];
  }

  updateCookie = (field: string, value: string) => {
    setCookie(null, field, value, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
  };

  deleteCookie = (field: string) => {
    destroyCookie(null, field, { path: "/" });
  };
}

export default new CookieUtil();
