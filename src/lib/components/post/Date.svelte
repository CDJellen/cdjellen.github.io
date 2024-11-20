<script lang="ts">
  import { format } from 'date-fns';

  export let date: Date | string; 
</script>

<p class="blog-post-date">
  {format(typeof date === 'string' ? new Date(date) : date, 'MMMM d, yyyy')} 
</p>

<style>
  .blog-post-date {
    font-size: 0.9em;
    background-color: #222;
    color: white;
  }
</style>