/**
 * Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import {getCookie, removeCookie, setCookie} from "../helpers/cookies";

/**
 * Initialize authenticated user session.\
 */
export const initAuthenticatedSession = (data) => {
    setCookie("ACCESS_TOKEN", data.access_token);
    setCookie("REFRESH_TOKEN", data.refresh_token);
    setCookie("SCOPE", data.scope);
    setCookie("ID_TOKEN", data.id_token);
    setCookie("TOKEN_TYPE", data.token_type);
    setCookie("EXPIRES_IN", data.expires_in);
};

/**
 * Get session parameter from cookie storage.
 *
 * @param key
 * @return {string}
 */
export const getSessionParameter = (key) => {
    return getCookie(key);
};

/**
 * Reset authenticated session.
 */
export const resetAuthenticatedSession = () => {
    removeCookie("ACCESS_TOKEN");
    removeCookie("REFRESH_TOKEN");
    removeCookie("SCOPE");
    removeCookie("ID_TOKEN");
    removeCookie("TOKEN_TYPE");
    removeCookie("EXPIRES_IN");
};

/**
 * Returns whether session is valid.
 *
 * @return {boolean}
 */
export const isValidSession = () => {
    const token = getCookie("ACCESS_TOKEN");
    return !!token;
};

/**
 * Get all session parameters.
 *
 * @returns {{}}
 */
export const getAllSessionParameters = () => {
    const session = {};

    session["ACCESS_TOKEN"] = getCookie("ACCESS_TOKEN");
    session["REFRESH_TOKEN"] = getCookie("REFRESH_TOKEN");
    session["SCOPE"] = getCookie("SCOPE");
    session["ID_TOKEN"] = getCookie("ID_TOKEN");
    session["TOKEN_TYPE"] = getCookie("TOKEN_TYPE");
    session["EXPIRES_IN"] = getCookie("EXPIRES_IN");

    return session;
};

/**
 * Base64 decodes the ID token
 *
 * @param token id token
 * @return {any}
 */
export const decodeIdToken = (token) => {
    return JSON.parse(atob(token.split(".")[1]));
};
