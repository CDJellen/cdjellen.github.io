<script lang="ts">
	import resume from '$lib/assets/Jellen_Resume.pdf';
	import { onMount } from 'svelte';
	let resumeLink = "";

	onMount(() => {
		resumeLink = resume;
	});
</script>

<div class="resume-section">
  <div class="resume-container">
    <a href={resumeLink} target="_blank">
      <button class="resume-download-button">Download Resume</button>
    </a>
  </div>
  <iframe src={resume} title="Chris Jellen's Resume" class="resume-iframe"></iframe>
</div>

<style>
.resume-section {
  background-color: #222;
  color: white;
  padding: 2rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-title {
  margin-bottom: 1rem;
}

.resume-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

/* Resume Iframe Styles */
.resume-iframe {
  width: calc(100vw - 4rem);
  max-width: 1200px;
  height: 90vh;
  border: none;
}

.resume-download-button {
  background-color: #007bff;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
}

/* Hover effect for the button */
.resume-download-button:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  .resume-iframe {
    height: 80vh;
  }
}
</style>