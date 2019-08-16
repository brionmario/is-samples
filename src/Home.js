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

import React from "react";
import logo from "./logo.svg";
import ISLogo from "./wso2_is.svg";
import { sendAuthorizationRequest, sendTokenRequest } from "./actions/sign-in";
import ReactJson from 'react-json-view'
import {dispatchLogout} from "./actions/sign-out";

class HomeComponent extends React.Component {
    state = {
        isTokenRequestSuccess: false,
        idToken: {},
        accessToken: {},
        isLoggedIn: false
    };

    componentWillMount() {
        const code = new URL(window.location.href).searchParams.get("code");

        if (code) {
            sendTokenRequest(code)
                .then(response => {
                    console.log("TOKEN REQUEST SUCCESS", response);
                    this.setState({
                        isTokenRequestSuccess: true,
                        accessToken: response[0],
                        idToken: response[1],
                        isLoggedIn: true
                    })
                })
                .catch((error => {
                    this.setState({ isTokenRequestSuccess: false });
                    console.log("TOKEN REQUEST ERROR", error);
                }));
        }
    }

    handleLoginBtnClick = () => {
        sendAuthorizationRequest();
    };

    handleLogoutBtnClick = () => {
        dispatchLogout();
    };

    render() {
        const { isTokenRequestSuccess, accessToken, idToken, isLoggedIn } = this.state;
        return (
            <div className="container home-container">
                <div className="wso2-logo-block">
                    <img src={logo} className="wso2-logo" alt="logo" />
                    <br />
                    <img src={ISLogo} className="wso2-is-logo" alt="is_logo"/><span>OIDC SPA React Demo</span>
                </div>
                <br />
                {
                    isTokenRequestSuccess?
                        <>
                            <h2>Access Token</h2>
                            <div className="card access-request-block">
                                <ReactJson src={accessToken} collapseStringsAfterLength={50} />
                            </div>
                            <br />
                            <h2>ID Token Request</h2>
                            <div className="card token-request-block">
                                <ReactJson src={idToken} collapseStringsAfterLength={50} />
                            </div>
                        </>
                        : null
                }
                <br />
                {
                    isLoggedIn?
                        <button className="btn btn-danger" onClick={this.handleLogoutBtnClick}>LOGOUT</button>
                        :
                        <button className="btn btn-primary" onClick={this.handleLoginBtnClick}>LOGIN</button>
                }

            </div>
        )
    }
}

export default HomeComponent;