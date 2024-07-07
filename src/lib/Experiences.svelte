<script>
  import Experience from './components/Experience.svelte';
  import MicrosoftLogo from './assets/microsoft.png';
  import MitreLogo from './assets/mitre-attack-logo.png';
  import CalderaLogo from './assets/caldera-logo.png';
</script>

<div class="experiences-section">
  <h3 class="section-title text-outline-lg">Experience</h3>

  <div class="experiences-container">
    <Experience
      image={MicrosoftLogo}
      link="https://www.microsoft.com/en-us/microsoft-365/government/"
      name="Microsoft"
      description="Software Engineer II | Microsoft"
      descriptionLong="As a member of the developer platform team, I designed, built and accelerated shared release and observability tooling for the Microsoft Defender ecosystem."
      notes={[
        "Scaled and optimized k8s clusters to increase microservice reliability.",
        "Automated configuration and release validation across multiple dedicated cloud environments.",
        "Built and deployed containerized APIs to accelerate and empower data scientists.",
        "Developed forecasting models for cloud storage and compute capacity demand to aid in long-term strategic planning.",
        "Architected monitoring and observability improvements to capture cross-service health and availability.",
      ]}
    />
    <Experience
      image={MitreLogo}
      link="https://www.mitre.org"
      name="The MITRE Corporation"
      description="Software Engineering | Machine Learning Engineering"
      descriptionLong="In my time with MITRE, I've supported The Veteran's Benefits Administration, the United States Marine Corps, and Intelligence Community as an engineer and leader. I've learned first-hand the importance of building a strong understanding of customer needs, clear communication, and strategic planning. Leading the development of software prototypes allowed me to craft a product through the full development lifecycle, from roadmapping to ticketing to delivery and every step in between."
      notes={[
        "Developed AI/ML-informed analytic prototypes for quality assurance at scale.",
        "Designed and built a RESTful API, integrating with existing data pipelines, which enabled repeatable, scalable analysis.",
        "Led Agile SCRUM meetings, wrote and tracked tickets, and executed on rapid, customer-centric design.",
        "Built and evaluated custom CNN models for over-the-air radio signal processing and classification.",
      ]}
    />
    <Experience
      image={CalderaLogo}
      link="https://caldera.mitre.org"
      name="CALDERA: Automated Adversary Emulation"
      description="Product Lead | Engineering Manager"
      descriptionLong="CALDERA is an open-source framework for automated adversary emulation. It offers a powerful combination of atomic abilities, automated attack planning, and stealth-focused C2 capabilities to make cyber risk analysis accessible. CALDERA is used both by the open source community and a range of Government, DoD, IC, and university sponsors. Building experience as a leader helped me to understand the importance of effective management in successful product development. In planning the future of CALDERA, I learned effective product management in the context of competing customer interests and priorities."
      notes={[
        "Product lead for CALDERA's cyber ontological mapping capability, interfaced with a range of DoD sponsors to ensure wide interoperability and wider use of CALDERA as a cyber analytics tool.",
        "Led a team of four (3 engineers, 1 data scientist) to develop novel offensive cyber planning capabilities and data management solutions.",
        "Built closed-source AI-ML enabled cyber posture analysis capabilities deployed on AWS.",
        "Developed a strong understanding of agile project management and continuous delivery for a range of end-users and sponsors.",
      ]}
    />
  </div>
</div>

<style>
.experiences-section {
  background-color: #222;
  color: white;
  padding: 2rem 1rem;
}

.section-title {
  text-align: center;
  margin-bottom: 1rem;
}

.experiences-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Media Query for Larger Screens */
@media (min-width: 768px) {
  .experiences-container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
		align-items: center;
		display: flex;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
</style>
