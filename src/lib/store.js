import { add } from 'date-fns'
import Cookies from "js-cookie";

import { readable, writable } from 'svelte/store'
export const login_result = writable(null)
export const loginIsOpen = writable(false)
export const accessToken = writable('')

const cookieName = 'api_token'

export default function (formData) {
    let url = "https://api-1.ursei.su/access_token";

    async function authenticate() {
        let response = await fetch(url, {
            method: "post",
            mode: "cors", // no-cors, *cors, same-origin,
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin",
            headers: {
                Accept: "1.0",
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData,
        });

        if (response.status === 200) {
            loginIsOpen.set(false)
            login_result.set(true)

            const resp_js = await response.json();
            console.log(resp_js)

            //добавляется 1 час к тек.дате 
            let now = new Date()
            let expiresIn = new Date(now.getTime() + resp_js['expires_in'] * 1000);
            let expiresIn_1 = add(new Date(), { hours: 1 })
            resp_js['expires_in'] = expiresIn_1.toString()  //  `${expiresIn}`;

            //добавляется 1 мес к тек.дате
            var expires = new Date(now.setMonth(now.getMonth + 1)); //!!! ????
            let expires_1 = add(new Date(), { months: 1 }) //???

            debugger
            //  accessToken.set(resp_js['access_token'])


            Cookies.set(cookieName,
                JSON.stringify(resp_js),
                { path: '/', expires: 30, sameSite: 'Lax' });

            //document.cookie = `${cookieName}=${JSON.stringify(resp_js)};expires=${expires_1};samesite=lax;path=/`
        } else {
            loginIsOpen.set(true)
            login_result.set(false)

            const resp_js = await response.json();
            console.log(resp_js)
        }
    }
    authenticate()
}


export async function getRefreshToken(refr_token) {
    let url = "https://api-1.ursei.su/access_token";

    // const data = buildRefreshData();
    // cookie = JSON.parse(value)
    const data = new URLSearchParams();
    data.append('grant_type', 'refresh_token')//); //'authorization_code','Bearer')
    data.append('client_id', 'studentlk');
    data.append('client_secret', 'studentlk');
    //data.append('refresh_token', refr_token);
    debugger
    const response = await fetch(
        url,
        {
            method: 'POST',
            mode: "cors",
            headers: {
                'Accept': '1.0',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: data
        }
    );
    try {
        if (response.status == 200) {
            console.log("200!!", 200)
            // response.json().then(data => {
            //     var expiresIn = new Date(now.getTime() + data['expires_in'] * 1000);
            //     var expires = new Date(now.setMonth(now.getMonth + 1));
            //     data['expires_in'] = `${expiresIn}`;
            //     document.cookie = `${cookieName}=${JSON.stringify(data)};expires=${expires};samesite=lax;path=/`
            //     setupUI();
            // });
        }
        else {
            console.log("error;", 400)
            response.text().then(text => {
                alert(text);
            });
            // doLogout();
        }
    }
    catch (e) {
        console.log(e);
    }
}
