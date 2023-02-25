<script>
    // import { onMount } from "svelte";
    import { login_result, loginIsOpen } from "../lib/store";

    export let onBurgerClick;
    export let toggleLogin;

    import Fa from "svelte-fa";

    import { faBars } from "@fortawesome/free-solid-svg-icons";
    import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
    import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
</script>

<div id="header" class="header">
    <div class="caption-wrapp">
        <div class="kv-burger" on:keydown={null} on:click={onBurgerClick}>
            <Fa icon={faBars} />
        </div>
        <div class="caption-full">Личный кабинет студента</div>
        <div class="caption-small">Личный кабинет</div>
    </div>
    <div>
        {#if !$loginIsOpen}
            <div
                on:click={toggleLogin()}
                on:keydown={null}
                class="signin-icon"
                title="Вход"
            >
                {#if !$login_result}
                    <Fa icon={faArrowRightToBracket} />
                {:else}
                    <Fa icon={faArrowRightFromBracket} />
                {/if}
            </div>
        {/if}
        <!-- {#if $login_result == null || $login_result == false} -->
        {#if !$loginIsOpen}
            {#if !$login_result}
                <div
                    on:click={toggleLogin()}
                    on:keydown={null}
                    class="signin-text"
                >
                    Вход
                </div>
            {:else}
                <div
                    on:click={toggleLogin()}
                    on:keydown={null}
                    class="signin-text"
                >
                    Выход
                </div>
            {/if}
        {/if}
    </div>
</div>

<style>
    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: #bea5f5;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: space-between;
        padding: 10px 0;
        margin-top: 5px;
        margin-bottom: 25px;
        box-shadow: 1px 2px 6px 0px #5a3c3c;
        border-radius: 5px;
    }

    @media (min-width: 220px) and (max-width: 520px) {
        .caption-full {
            display: none;
        }
        .caption-small {
            display: block;
            font-size: 1.55em;
        }
        .signin-icon {
            display: block;
        }
        .signin-text {
            display: none;
        }
        .kv-burger {
            font-size: 1.6em;
        }
    }
    @media (min-width: 520px) and (max-width: 2200px) {
        .header {
            justify-content: space-around;
        }
        .caption-full {
            display: block;
            font-size: 1.65em;
        }
        .caption-small {
            display: none;
        }
        .signin-icon {
            display: none;
        }
        .signin-text {
            display: block;
        }
        .kv-burger {
            font-size: 1.6em;
        }
    }

    .kv-burger {
        width: 50px;
        text-align: center;
        color: #fff;
        cursor: pointer;
    }

    .signin-icon {
        width: 50px;
    }
    .signin-text {
        letter-spacing: 1px;
        color: #fbefd3;
    }

    .signin-icon,
    .signin-text {
        text-align: center;
        color: #fff;
        cursor: pointer;
        text-shadow: 1px 1px 1px rgb(75 50 31);
        font-size: 1.25em;
    }

    .caption-full,
    .caption-small {
        text-align: left;
        text-shadow: 1px 1px 1px rgb(75 50 31);
        color: #fff;
        line-height: 1em;
        /* font-size: 1.75em; */
        font-weight: 400;
    }

    .caption-wrapp {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
    }
</style>
