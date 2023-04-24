<script>
    import Project from './components/Project.svelte';
	import NdbcApi from './assets/ndbc-api-readme.png';
	import ExploreGithub from './assets/egh-large.png'
	import TridentProj from './assets/trident-project-03.jpg';
	import CapstoneProj from './assets/capstone-project-01.png';

</script>

 <!-- Projects -->
<div class="
    bg-gray-800 items-center gap-20 px-10 sm:px-20 overflow-hidden
    grid lg:grid-cols-1 xs:grid-cols-1">
	<div class="items-center">
		<h3 class="text-center text-gray-50 text-outline-lg text-3xl sm:text-6xl">Projects</h3>
	</div>
	<div class="flex flex-col rounded-2xl">
		<Project
			image={ExploreGithub}
			name="Explore GitHub | Graph-based search of GiHub projects and contributors"
			description="A containerized application for traversing GitHub's implicit graph of contributors and repositories. Built using gRPC, redis cache, and GraphQL to make GitHub more accessible, engaging, and social."
			badges={[
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg",

			]}
			linkIcon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-plain.svg"
			link="https://www.explore-github.com"
			linkText="Explore GitHub"
			githunIcon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
			github="https://github.com/cdjellen/discover"
			githubText="GitHub Repository"
		/>
	</div>
	<div class="flex flex-col rounded-2xl">
		<Project
			image={NdbcApi}
			name="National Data Buoy Center API"
			description="A Python API for querying oceanographic and atmospheric data from the National Data Buoy Center.
			The ndbc-api makes climate research data more accessible by parsing whitespace-delimited data files.
			Measurements are typically distributed as utf-8 encoded, station-by-station, fixed-period text files.
			More information on the measurements and methodology are available on the NDBC website."
			badges={[
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg",
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",

			]}
			linkIcon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg"
			link="https://pypi.org/project/ndbc-api/"
			linkText="PyPi Link"
			githunIcon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
			github="https://github.com/cdjellen/ndbc-api"
			githubText="GitHub Repository"
		/>
	</div>
	<div class="flex flex-col rounded-2xl">
		<Project
			image={TridentProj}
			name="USNA Trident Research Project"
			description="Developed a machine-learning model for prediction of optical turbulence in near-maritime environments."
			badges={[
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",

			]}
			linkIcon=""
			link="https://www.usna.edu/TridentProgram/VirtualConference/Jellen.php"
			linkText="Conference Presentation"
			githunIcon=""
			github="https://discover.dtic.mil/"
			githubText="DTIC Archive"
		/>
	</div>
	<div class="flex flex-col rounded-2xl">
		<Project
			image={CapstoneProj}
			name="Capstone Design Competition"
			description="Lead a team to design, integrate, and build a semi-autonomous corrosion detection robot for a national design competition.
			The team was funded by the Office of Naval Research (ONR), and provided an excellent opportunity to plan and execute a long-term, product-focused development project.
			Placed first in the 2019 University Students Applied Design and Soltions Compeition, sponsored by the National Ascociation of Corrosion Engineers (NACE)."
			badges={[
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",

			]}
			linkIcon=""
			link="https://www.usna.edu/AeroDept/_files/documents/2019_Capstone_Day_Program_v6.pdf"
			linkText="Capstone Day"
			githunIcon=""
			github="http://www.usdasc.com/the-challenge"
			githubText="Competition Summary"
		/>
	</div>
</div>