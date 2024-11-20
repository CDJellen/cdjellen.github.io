<script lang="ts">
  export let src: string;
  export let alt: string;
  export let caption: string = "";
</script>

<figure class="blog-post-image">
  <img {src} {alt} />
  {#if caption}
    <figcaption>{caption}</figcaption>
  {/if}
</figure>

<style>
  .blog-post-image {
    text-align: center;
    margin-bottom: 1.5em;
  }

  @media (min-width: 768px) {
    .blog-post-image img {
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
        align-items: center;
        display: flex;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }

  .blog-post-image figcaption {
    font-size: 0.9em;
    color: var(--secondary-text-color, #666);
    margin-top: 0.5em;
  }
</style>
