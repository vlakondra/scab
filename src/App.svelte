<script>
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";

  //https://github.com/js-cookie/js-cookie
  import Cookies from "js-cookie";
  import Fa from "svelte-fa";
  import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

  //https://github.com/svelte-add/bulma
  // alert(window.ttt);
  let a = 5;
  console.log(Cookies.get());
  let b = Cookies.get("SL_G_WPT_TO"); //   "SL_G_WPT_TO");
  console.log("api ", b);

  Cookies.set("mycookie", a.toString(), { expires: 7, path: "" });
  let c = Cookies.get("mycookie");
  console.log("c", c);
</script>

<main>
  <div>
    {a}

    <p>{b}</p>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer"
      ><img src="/vite.svg" class="logo" alt="Vite Logo" /></a
    ><a href="https://svelte.dev" target="_blank" rel="noreferrer"
      ><img src={svelteLogo} class="logo svelte" alt="Svelte Logo" /></a
    >
  </div>
  <h1 class="title">123 Слово ъйюяь! ! ! + Слово 2 ! ! !</h1>
  <div class="totop-box">
    <Fa icon={faArrowCircleUp} color="#6565ed" size="2.5x" />
  </div>

  <div class="card"><Counter /></div>
  <p on:click={() => (a += 5)} on:keypress={() => null}>
    Check out <a
      href="https://github.com/sveltejs/kit#readme"
      target="_blank"
      rel="noreferrer">SvelteKit</a
    >, the official Svelte app framework powered by Vite !
  </p>
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

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }

  .read-the-docs {
    color: $text-color;
    font-weight: 700;
  }
</style>
