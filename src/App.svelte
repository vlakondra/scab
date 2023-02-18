<script>
  import svelteLogo from "./assets/svelte.svg";
  // import Counter from "./lib/Counter.svelte";

  //https://github.com/js-cookie/js-cookie
  import Cookies from "js-cookie";
  // import Fa from "svelte-fa";
  // import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

  //https://github.com/svelte-add/bulma
  // alert(window.ttt);

  import Login from "./Comps/login.svelte";

  console.log(Cookies.get());
  // let b = Cookies.get("SL_G_WPT_TO"); //   "SL_G_WPT_TO");
  // console.log("api ", b);

  // Cookies.set("mycookie", "??!!", { expires: 7, path: "" });
  // let c = Cookies.get("mycookie");
  // console.log("c", c);
</script>

<main>
  <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
  <Login />
</main>

<style lang="scss">
  :global(body) {
    font-family: Montserrat, sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
    border: 3px solid blue;
  }
</style>
