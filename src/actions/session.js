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
    sessionStorage.setItem("ID_TOKEN", data.id_token);
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
    sessionStorage.removeItem("ID_TOKEN");
};