<script lang="ts">
  import PostPreview from '$lib/components/PostPreview.svelte';
  import TridentProject from '$lib/assets/posts/trident-project.png';

  let blogPosts = [
      {
          imageUrl: TridentProject,
          title: 'A blog for the ages',
          summary: 'Dive into the powerful features of SvelteKit and learn how to build modern web applications with ease. This post covers routing, data fetching, and more.',
          slug: 'trident-project-reflections',
      },
      {
          imageUrl: TridentProject,
          title: 'A blog for the ages',
          summary: 'Dive into the powerful features of SvelteKit and learn how to build modern web applications with ease. This post covers routing, data fetching, and more.',
          slug: 'trident-project-reflections',
      },
      {
          imageUrl: TridentProject,
          title: 'A blog for the ages',
          summary: 'Dive into the powerful features of SvelteKit and learn how to build modern web applications with ease. This post covers routing, data fetching, and more.',
          slug: 'trident-project-reflections',
      },
      {
          imageUrl: TridentProject,
          title: 'A blog for the ages',
          summary: 'Dive into the powerful features of SvelteKit and learn how to build modern web applications with ease. This post covers routing, data fetching, and more.',
          slug: 'trident-project-reflections',
      },
      {
          imageUrl: TridentProject,
          title: 'A blog for the ages',
          summary: 'Dive into the powerful features of SvelteKit and learn how to build modern web applications with ease. This post covers routing, data fetching, and more.',
          slug: 'trident-project-reflections',
      },
      {
          imageUrl: TridentProject,
          title: 'A blog for the ages',
          summary: 'Dive into the powerful features of SvelteKit and learn how to build modern web applications with ease. This post covers routing, data fetching, and more.',
          slug: 'trident-project-reflections',
      },
      {
          imageUrl: TridentProject,
          title: 'A blog for the ages',
          summary: 'Dive into the powerful features of SvelteKit and learn how to build modern web applications with ease. This post covers routing, data fetching, and more.',
          slug: 'trident-project-reflections',
      },
      {
          imageUrl: TridentProject,
          title: 'A blog for the ages',
          summary: 'Dive into the powerful features of SvelteKit and learn how to build modern web applications with ease. This post covers routing, data fetching, and more.',
          slug: 'trident-project-reflections',
      },
      {
          imageUrl: TridentProject,
          title: 'A blog for the ages',
          summary: 'Dive into the powerful features of SvelteKit and learn how to build modern web applications with ease. This post covers routing, data fetching, and more.',
          slug: 'trident-project-reflections',
      },
      {
          imageUrl: TridentProject,
          title: 'A blog for the ages',
          summary: 'Dive into the powerful features of SvelteKit and learn how to build modern web applications with ease. This post covers routing, data fetching, and more.',
          slug: 'trident-project-reflections',
      },
  ];
</script>

<div class="post-previews-section">
  <div class="post-previews-container">
    <h2 class="section-title text-outline-lg">Latest Posts</h2>
      <div class="blog-grid">
        {#each blogPosts as post}
            <PostPreview 
                imageUrl={post.imageUrl} 
                title={post.title} 
                summary={post.summary} 
                link={`/posts/${post.slug}`} 
            />
        {/each}
      </div>  
  </div>
</div>

<style>
  .blog-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
      gap: 20px;
      max-width: 1200px;
      margin: 0 auto; 
      padding: 20px;
  }

  .post-previews-section {
    background-color: #222;
    color: white;
    padding: 2rem 1rem; 
  }

  .section-title {
    text-align: center;
    margin-bottom: 1rem;
  }

  .post-previews-container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>