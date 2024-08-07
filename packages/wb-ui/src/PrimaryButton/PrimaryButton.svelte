<svelte:options
  customElement={{
    tag: "sv-primarybutton",
  }}
/>

<script>
  export let label;
  export let size;
</script>

<button class={["button", `button--${size}`].join(" ")}>
  {label}
</button>

<style>
  .button {
    font-weight: 300;
    border-radius: 0.1rem;
    border: 0;
    cursor: pointer;
    display: inline-block;
    width: fit-content;
    color: white;
    letter-spacing: 0.05rem;
    background-color: #0119;
  }

  .button:hover {
    background-color: #00235c;
  }

  .button--small {
    padding: 0.75rem 1.1rem;
  }

  .button--medium {
    padding: 0.75rem 1.1rem;
    font-size: medium;
  }

  .button--large {
    padding: 0.75rem 1.1rem;
    font-size: large;
  }
</style>
