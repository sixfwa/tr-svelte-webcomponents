<svelte:options customElement="sv-list" />

<script>
  import { onMount } from "svelte";

  let data = [];
  let loading = true;
  let error = null;

  async function fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      data = await response.json();
    } catch (err) {
      error = err.message;
    } finally {
      loading = false;
    }
  }

  onMount(fetchData);
</script>

<main>
  {#if loading}
    <p>Loading...</p>
  {:else if error}
    <p>Error: {error}</p>
  {:else}
    <h1>API Data</h1>
    <ul>
      {#each data as item}
        <li>{item.name}</li>
      {/each}
    </ul>
  {/if}
</main>
