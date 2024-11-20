<script lang="ts">
  export let tags: string[];
</script>

{#if tags && tags.length > 0}
  <div class="blog-post-tags">
    {#each tags as tag}
      <span class="tag">{tag}</span>
    {/each}
  </div>
{/if}

<style>
  .blog-post-tags {
    margin-bottom: 0.2rem;
    background-color: #222;
    color: white;
  }

  .tag {
    background-color: var(--tag-bg-color, #f0f0f0);
    color: var(--tag-text-color, #333);
    padding: 5px 10px;
    border-radius: 20px;
    margin-right: 8px;
    font-size: 0.8em;
  }
</style>
