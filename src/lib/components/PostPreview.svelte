<script lang="ts">
  export let imageUrl: string;
  export let title: string;
  export let summary: string;
  export let link: string;
</script>

<div class="blog-post-preview">
  <a href={link}>
      <img src={imageUrl} alt={title} class="preview-image" />
      <h2 class="preview-title">{title}</h2>
      <p class="preview-summary">{summary}</p>
  </a>
</div>

<style>
  .blog-post-preview {
      border: 2px solid #ccc;
      border-radius: 5px;
      padding: 15px;
      margin-bottom: 20px;
      cursor: pointer;
  }

  .preview-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 5px;
      margin-bottom: 10px;
  }

  .preview-title {
      font-size: 1.2em;
      font-weight: bold;
      margin-bottom: 5px;
  }

  .preview-summary {
      font-size: 0.9em;
  }
</style>
