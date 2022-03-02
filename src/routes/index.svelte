<script lang="ts">
  import type { Corner, Program } from "$lib/types";
  export let programs: Program[];
  let corners: Corner[] | null = null
  let program: Program | null = null
  let corner: Corner | null = null
  
  function handleSubmit() {
    window.location.href = `mailto:${program.mail}?subject=${corner.subject}`
  }

  const handleChange = () => {
    corners = program.corners
  }
</script>

<h2>コーナーメールをつくる</h2>
<form on:submit|preventDefault={handleSubmit}>
  <p>
    <label>番組を選択する</label>
    <br>
    <select bind:value={program} on:change={handleChange}>
    {#each programs as program}
      <option value={program}>
        {program.title}
      </option>
    {/each}
    </select>
  </p>
  <p>
    <select disabled={!program} bind:value={corner}>
      {#if corners}
        {#each corners as c}
          <option value={c}>
            {c.title}
          </option>
        {/each}
      {/if}
    </select>
  </p>
  <p><button disabled={!corner} type=submit>メールを送る</button></p>
</form>
