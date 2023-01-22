<script>
  let count = 0;
  const increment = () => {
    count += 1;
  };
</script>

<div class="place">
  <button class="button is-primary" on:click={increment}>
    count is {count}
  </button>
</div>

<style lang="scss">
  .place {
    background-color: $background;
    padding: 20px;
  }
  /*??? .button {
    font-family: Montserrat;
  } */
</style>
