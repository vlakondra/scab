<script>
    import Fa from "svelte-fa";
    import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
    import { faLock } from "@fortawesome/free-solid-svg-icons";
    import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

    import {
        useForm,
        Hint,
        HintGroup,
        validators,
        email,
        required,
        minLength,
    } from "svelte-use-form";

    import Cookies from "js-cookie";

    export let closeLogin;
    const form = useForm();

    let result;
    let login_err;
    let rjson;
    $: if (login_err) {
        //delta --password
        console.log("reserr", login_err);
        //сделать здесь cookie???
        // if (rjson) console.log("res", rjson);
    }
    async function authenticate() {
        // Gathered from: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        let url = "https://api-1.ursei.su/access_token";
        const data = new URLSearchParams();

        const clientId = "studentlk";
        const clientSecret = "studentlk";
        const scopes = "basic studentlk";

        data.append("grant_type", "password");
        data.append("client_id", clientId);
        data.append("client_secret", clientSecret);
        data.append("scope", scopes);
        data.append("username", $form.email.value);
        data.append("password", $form.password.value);

        let response = await fetch(url, {
            method: "post",
            mode: "cors", // no-cors, *cors, same-origin,
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: "same-origin",
            headers: {
                Accept: "1.0",
                "Content-Type": "application/x-www-form-urlencoded",
                //'Content-Type': 'application/json'
            },
            body: data,
        });
        console.log("resp", response.status);
        console.log("api_token??", Cookies.get());
        // One additional option is to use:
        // ... = await response.json();
        // But since we're printing out the response in an HTML element,
        // it is convenient to await the `.text()` promise.
        //??rjson = await response.json(); //text();

        // This next line is verbose, but it's meant to demonstrate
        // what happens when we want to use a reactive value change
        // to bind our new information using `$: if(data) {...}`
        //let resp = text;
        return response.json();
    }

    function submitHandler() {
        //https://sveltesociety.dev/recipes/design-patterns/authentication-with-svelte
        /* This promise needs to be awaited somewhere --
         * either in the HTML body via `{#await}` tags,
         * in a `<script>` tag, or in an imported `.js` module.
         */
        try {
            console.log("api_token submit", Cookies.get());
            result = authenticate();
            console.log("api_token", Cookies.get());
        } catch (error) {
            console.log("EE", error.message);
        }

        // authenticate()
        //     .then((data) => {
        //         result = data;
        //         console.log("data", data);
        //     })
        //     .catch((error) => {
        //         login_err = error.message;
        //         console.log("err", error);
        //     });
    }
</script>

<div class="login-wrapper block">
    <p on:click={closeLogin()} on:keydown={null} class="close-login delete">
        &times;
    </p>
    <form on:submit|preventDefault={submitHandler} class="login-form" use:form>
        <div class="field">
            <label for="email" class="label">Email:</label>
            <div class="control has-icons-left has-icons-right">
                <input
                    class="input is-danger"
                    type="email"
                    name="email"
                    use:validators={[required, email]}
                    placeholder="Email"
                />
                <span class="icon is-small  is-left">
                    <Fa icon={faEnvelope} />
                </span>
                <span class="icon is-small is-right test-color">
                    <Fa icon={faExclamationTriangle} />
                </span>
            </div>
            <div class="hint-container">
                <HintGroup for="email">
                    <Hint class="help is-danger" on="required">
                        Это обязательное поле
                    </Hint>
                    <Hint class="help is-danger" on="email" hideWhenRequired>
                        Введен некорректный адрес
                    </Hint>
                </HintGroup>
            </div>
        </div>

        <div class="field">
            <label for="password" class="label">Пароль:</label>
            <div class="control has-icons-left has-icons-right">
                <input
                    class="input is-danger"
                    type="password"
                    name="password"
                    use:validators={[required]}
                    placeholder="Пароль"
                />
                <span class="icon is-small  is-left">
                    <Fa icon={faLock} />
                </span>
                <span class="icon is-small is-right">
                    <Fa icon={faExclamationTriangle} />
                </span>
            </div>
            <div class="hint-container">
                <Hint class="help is-danger" for="password" on="required">
                    Это обязательное поле
                </Hint>
            </div>
        </div>

        <button class="button is-info" disabled={!$form.valid}>Вход</button>
    </form>
</div>
<div>
    {#if result === undefined}
        <p>???</p>
    {:else}
        {#await result}
            <div><span>Logging in...</span></div>
        {:then value}
            <div><span>{value["access_token"]}</span></div>
        {:catch error}
            <div>!!!<span>{error}</span></div>
        {/await}
    {/if}
</div>

<style lang="scss">
    // :global(.svelte-use-form-hint) {
    //     color: blue;
    // }

    :global(.help.is-danger) {
        color: blue;
    }

    .test-color {
        color: #d9534f;
    }

    label.label {
        text-align: left;
        font-weight: 400;
        margin-bottom: 0;
    }
    .login-form {
        display: flex;
        flex-direction: column;

        padding: 20px;
        border: 1px solid yellow;
        // tmp
        // background-color: $background;
        max-width: 450px;
        margin: 0 auto;
    }
    .hint-container {
        height: 20px;
    }
    .login-form button {
        align-self: flex-end;
        width: 25%;
        // margin-top: 1rem;
    }
    .login-wrapper {
        position: relative;
        max-width: 450px;
        margin: 0 auto;
    }
    .close-login {
        position: absolute;
        right: 0;
        top: 0;
    }
</style>
