import { readable, writable } from 'svelte/store'
export const login_result = writable(null)
export const loginIsOpen = writable(false)

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
        } else {
            loginIsOpen.set(true)
            login_result.set(false)

            const resp_js = await response.json();
            console.log(resp_js)
        }
    }
    authenticate()
}