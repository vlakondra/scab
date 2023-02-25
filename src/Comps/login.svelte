<script>
    import Auth, { login_result } from "../lib/store";
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

    export let toggleLogin;
    const form = useForm();
    login_result.set(null);

    $: if ($login_result) {
    }

    function submitHandler() {
        try {
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

            login_result.set(null);
            Auth(data);
        } catch (error) {
            console.log("EE", error.message);
        }
    }
</script>

<div class="login-wrapper block">
    <p on:click={toggleLogin()} on:keydown={null} class="close-login delete">
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
                    autocomplete="email"
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
                    autocomplete="current-password"
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
        <div class="login-footer">
            <div class="login-message">
                {#if $login_result}
                    Вход выполнен
                {:else if $login_result == false}
                    Вход не выполнен
                {/if}
            </div>
            <button class="button is-info" disabled={!$form.valid}>Вход</button>
        </div>
    </form>
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

    .login-message {
        padding-right: 10px;
        font-size: 0.85em;
        font-weight: 600;
        color: red;
    }
    .login-footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
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
