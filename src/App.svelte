<script>
  import Header from "./Comps/header.svelte";
  import Drawer from "svelte-drawer-component";
  import { login_result, loginIsOpen } from "./lib/store";

  import Startmessage from "./Comps/startMessage.svelte";

  // import svelteLogo from "./assets/svelte.svg";
  // import Counter from "./lib/Counter.svelte";дщ

  //https://github.com/js-cookie/js-cookie
  import Cookies from "js-cookie";
  // import Fa from "svelte-fa";
  // import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

  //https://github.com/svelte-add/bulma
  // alert(window.ttt);

  import Login from "./Comps/login.svelte";
  import StartMessage from "./Comps/startMessage.svelte";

  const cookieName = "api_token";
  let startCookie = Cookies.get(cookieName);
  // let loginIsOpen = false;

  const toggleLoginForm = () => {
    loginIsOpen.set(!$loginIsOpen);
  };

  // const closeLogin = () => {
  //   loginIsOpen = false;
  // };
  // const openLogin = () => {
  //   loginIsOpen = true;
  // };

  console.log("Cookies.get-App-Startmessage", Cookies.get());
  // let b = Cookies.get("SL_G_WPT_TO"); //   "SL_G_WPT_TO");
  // console.log("api ", b);

  // Cookies.set("mycookie", "??!!", { expires: 7, path: "" });
  // let c = Cookies.get("mycookie");
  // console.log("c", c);

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
