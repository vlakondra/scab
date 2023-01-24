<script>
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";

  //https://github.com/js-cookie/js-cookie
  import Cookies from "js-cookie";
  import Fa from "svelte-fa";
  import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

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
  <h1 class="title">123 Слово ъйюяь! ! ! + Слово 2 ! ! !</h1>
  <div>
    <Fa icon={faArrowCircleUp} color="#6565ed" size="2.5x" />
  </div>

  <Login />

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
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

  .read-the-docs {
    // color: $test-color;
    font-weight: 700;
  }
</style>
