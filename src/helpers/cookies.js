import Cookies from "universal-cookie";
import { CONFIG } from "../config";

const cookies = new Cookies();

/**
 * Sets a cookie when the name, value and path is passed in.
 *
 * @param cookieName - Name of the cookie.
 * @param cookieValue - Value of the cookie.
 * @param cookiePath - Path of the cookie. Defaults to "/".
 */
export function setCookie(cookieName, cookieValue, cookiePath = CONFIG.COOKIE_PATH) {
    cookies.set(cookieName, cookieValue,
        {
            path: cookiePath,
            expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
            secure: true
        },
    );
}

/**
 * Removes a cookie when the name and the path is passed in.
 *
 * @param cookieName - Name of the cookie.
 * @param cookiePath - Path of the cookie. Defaults to "/".
 */
export function removeCookie(cookieName, cookiePath = CONFIG.COOKIE_PATH) {
    cookies.remove(
        cookieName,
        {
            path: cookiePath
        }
    );
}

/**
 * Retrieves a cookie.
 *
 * @param cookieName - Name of the cookie.
 * @return {any}
 */
export function getCookie(cookieName) {
    return cookies.get(cookieName);
}
