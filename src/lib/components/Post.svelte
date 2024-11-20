<script lang="ts">  
    import PostTitle from './post/Title.svelte';
    import PostDate from './post/Date.svelte';
    import PostAuthor from './post/Author.svelte';
    import PostImage from './post/Image.svelte';
    import PostTags from './post/Tags.svelte';
  
    export let postData: {
        title: string;
        date: Date;
        author: string;
        content: { type: 'paragraph' | 'image' | 'panel', text?: string, src?: string, alt?: string, caption?: string }[];
        tags: string[];
    };
</script>
  
<article class="blog-post">
    <PostTitle title={postData.title} />
    <PostDate date={postData.date} />
    <PostAuthor author={postData.author} />
  
    <div class="content">
        {#each postData.content as block}
            {#if block.type === 'paragraph'}
                {@html block.text || ''}
            {:else if block.type === 'image'}
                <PostImage src={block.src} alt={block.alt} caption={block.caption} />
            {:else if block.type === 'panel'}
                <div class="panel">
                    <div class="panel-image">
                        <img src={block.src} alt={block.alt} />
                    </div>
                    <div class="panel-text">
                        {@html block.text || ''}
                    </div>
                </div>
            {/if}
        {/each}
    </div>
  
    <PostTags tags={postData.tags} />
</article>

<style>
    .blog-post {
        background-color: #222;
        color: white;
        padding: 2rem 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
   
.content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.panel {
    display: flex;
    gap: 1rem;
  }

  .panel-image {
    flex: 1;
  }

  .panel-image img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }

  .panel-text {
    flex: 2;
  }
</style>
