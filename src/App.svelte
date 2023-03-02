<script>
  import Header from "./Comps/header.svelte";
  import Drawer from "svelte-drawer-component";
  import {
    login_result,
    loginIsOpen,
    accessToken,
    getRefreshToken,
  } from "./lib/store";

  import Startmessage from "./Comps/startMessage.svelte";

  import Cookies from "js-cookie";

  import Login from "./Comps/login.svelte";
  import StartMessage from "./Comps/startMessage.svelte";

  const cookieName = "api_token";
  let startCookie = Cookies.get(cookieName);

  if (startCookie) {
    let expires = new Date(JSON.parse(startCookie)["expires_in"]);
    // console.log("exp??", expires);
    // let d = new Date(2023, 5, 1);
    // if (d < expires) {
    let access_token = JSON.parse(startCookie)["access_token"];
    accessToken.set(access_token); //??
    // } else {
    //   debugger;
    //   getRefreshToken(JSON.parse(startCookie)["refresh_token"]);
    // }
  }

  console.log("Cookies.get-App-Startmessage", startCookie);

  const toggleLoginForm = () => {
    loginIsOpen.set(!$loginIsOpen);
  };

  let openDrawer = false;
  const TurnDrawer = () => {
    if ($login_result) openDrawer = !openDrawer;
    else loginIsOpen.set(true);
  };

  $: if ($login_result) {
    openDrawer = true;
  }
</script>

<svelte:head>
  <title>Личный кабинет</title>
</svelte:head>
<main>
  <div>
    <Header
      toggleLogin={toggleLoginForm}
      on:keydown={null}
      onBurgerClick={TurnDrawer}
    />
  </div>

  <Drawer
    open={openDrawer}
    on:clickAway={() => (openDrawer = false)}
    size="null"
  >
    <button on:click={() => (openDrawer = false)}>Close</button>
  </Drawer>

  {#if !startCookie && !$loginIsOpen}
    <StartMessage toggleLogin={toggleLoginForm} />
  {/if}
  <!-- {$accessToken} -->

  {#if $loginIsOpen}
    <Login toggleLogin={toggleLoginForm} />
  {/if}

  <!-- {:else if loginIsOpen}
    <Login toggleLogin={toggleLoginForm} />
  {/if} -->

  <div />
</main>

<style lang="scss">
  :global(body) {
    font-family: Montserrat, sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    // margin: 0;
    // display: flex;
    // justify-content: center;
    // place-items: center;
    // min-width: 320px;
    min-height: 100vh;
    border: 3px solid blue;
  }

  main {
    min-width: 320px;
    max-width: 960px;
    margin: 0 auto;
  }

  main :global(.drawer .panel) {
    transition: transform 1s ease;
    color: rgb(141, 128, 203);
  }
  main :global(.drawer .panel .notification) {
    background-color: #fff;
    height: 100%;
    font-size: 0.9em;
  }
  @media (min-width: 500px) {
    main :global(.drawer .panel) {
      max-width: 350px !important;
    }
  }
  @media (max-width: 500px) {
    :global(.drawer .panel) {
      max-width: 80% !important;
    }
  }
  :global(.active-group) {
    background-color: #9cc87d;
    color: white;
  }
</style>
