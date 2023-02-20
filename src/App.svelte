<script>
  import Header from "./Comps/header.svelte";
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
  let loginIsOpen = false;

  const closeLogin = () => {
    loginIsOpen = false;
  };
  const openLogin = () => {
    loginIsOpen = true;
  };

  console.log("api_token", Cookies.get());
  // let b = Cookies.get("SL_G_WPT_TO"); //   "SL_G_WPT_TO");
  // console.log("api ", b);

  // Cookies.set("mycookie", "??!!", { expires: 7, path: "" });
  // let c = Cookies.get("mycookie");
  // console.log("c", c);

  let openDrawer = false;
  const TurnDrawer = () => {
    openDrawer = !openDrawer;
  };
</script>

<svelte:head>
  <title>Личный кабинет</title>
</svelte:head>
<main>
  <div>
    <Header {openLogin} on:keydown={null} onBurgerClick={TurnDrawer} />
  </div>

  {#if !startCookie && !loginIsOpen}
    <StartMessage {openLogin} />
  {:else if loginIsOpen}
    <Login {closeLogin} />
  {/if}

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
</style>
