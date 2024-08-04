<svelte:options customElement="sv-navigation" />

<script>
  export let logo;
  export let navLinks;
  console.log(navLinks);
</script>

<nav class="navigation">
  <a href="/" class="logo">{logo}</a>
  <div class="nav-items">
    {#each navLinks as navLink, i}
      <a href="#">{navLink}</a>
    {/each}
  </div>
</nav>

<style>
  @import "../main.css";

  a {
    text-decoration: none;
    color: inherit;
  }

  .navigation {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    padding: 1.5rem;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .navigation--dark {
    background-color: var(--dark-background-colour);
    color: var(--dark-text-colour);
  }

  .navigation--light {
    background-color: var(--light-background-colour);
    color: var(--light-text-colour);
  }

  .navigation--corporate {
    background-color: var(--corporate-background-colour);
    color: var(--corporate-text-colour);
  }

  .navigation--business {
    background-color: var(--business-background-colour);
    color: var(--business-text-colour);
  }

  .logo {
    font-size: x-large;
  }

  .nav-items {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  .nav-items > a:hover {
    text-decoration: underline;
  }
</style>
