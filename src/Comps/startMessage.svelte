<script>
    import { login_result, loginIsOpen } from "../lib/store";
    export let toggleLogin;
</script>

{#if $login_result === null}
    <!-- {#if !$loginIsOpen} -->
    <div class="start-message">
        <p class="subtitle is-5">Личный кабинет студента</p>
        <p>
            Здесь должно быть подробное описание всех возможностей, которые
            предоставляет личный кабинет.
        </p>
        <p>Возможно, нужно написать о том, как получить пароль</p>
        <ul>
            <li>Посещаемость</li>
            <li>Успеваемость</li>
            <li>Литература</li>
        </ul>
        <p>Для получения доступа нужно зарегистрироваться</p>
        <div>
            <button on:click={toggleLogin()} class="button is-success"
                >Регистрация в кабинете</button
            >
        </div>
    </div>
{/if}

<style>
    .start-message {
        max-width: 400px;
        margin: 0 auto;
        background-color: cyan;
        padding: 24px;
        border-radius: 10px;
    }
</style>
