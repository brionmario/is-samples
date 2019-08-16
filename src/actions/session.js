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

/**
 * Initialize authenticated user session.\
 */
export const initAuthenticatedSession = (data) => {
    sessionStorage.setItem("ACCESS_TOKEN", data.access_token);
    sessionStorage.setItem("REFRESH_TOKEN", data.refresh_token);
    sessionStorage.setItem("SCOPE", data.scope);
    sessionStorage.setItem("ID_TOKEN", data.id_token);
    sessionStorage.setItem("TOKEN_TYPE", data.token_type);
    sessionStorage.setItem("EXPIRES_IN", data.expires_in);
};

/**
 * Get parameter from session storage.
 *
 * @param key
 * @return {string}
 */
export const getSessionParameter = (key) => {
    return sessionStorage.getItem(key);
};

/**
 * Reset authenticated session.
 */
export const resetAuthenticatedSession = () => {
    sessionStorage.removeItem("ACCESS_TOKEN");
    sessionStorage.removeItem("REFRESH_TOKEN");
    sessionStorage.removeItem("SCOPE");
    sessionStorage.removeItem("ID_TOKEN");
    sessionStorage.removeItem("TOKEN_TYPE");
    sessionStorage.removeItem("EXPIRES_IN");
};

/**
 * Returns whether session is valid.
 *
 * @return {boolean}
 */
export const isValidSession = () => {
    const token = sessionStorage.getItem("ACCESS_TOKEN");
    return !!token;
};

/**
 * Get all session parameters.
 *
 * @returns {{}}
 */
export const getAllSessionParameters = () => {
    const session = {};

    session["ACCESS_TOKEN"] = sessionStorage.getItem("ACCESS_TOKEN");
    session["REFRESH_TOKEN"] = sessionStorage.getItem("REFRESH_TOKEN");
    session["SCOPE"] = sessionStorage.getItem("SCOPE");
    session["ID_TOKEN"] = sessionStorage.getItem("ID_TOKEN");
    session["TOKEN_TYPE"] = sessionStorage.getItem("TOKEN_TYPE");
    session["EXPIRES_IN"] = sessionStorage.getItem("EXPIRES_IN");

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
