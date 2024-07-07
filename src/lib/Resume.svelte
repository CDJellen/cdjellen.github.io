<script>
  import Resume from './components/Resume.svelte';
</script>

<div class="resume-section">
  <h3 class="section-title text-outline-lg">Resume</h3>
  <div class="resume-container">
    <Resume />
  </div>
</div>

<style>
/* General Styles */
.resume-section {
  background-color: #222;
  color: white;
  padding: 2rem 1rem;
  text-align: center;
}

.section-title {
  margin-bottom: 1rem;
}

.resume-container {
  width: 90%;
  max-width: 1800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
