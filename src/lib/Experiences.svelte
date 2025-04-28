<script>
  import Experience from './components/Experience.svelte';
  import MicrosoftLogo from './assets/microsoft.png';
  import MitreLogo from './assets/mitre-attack-logo.png';
  import CalderaLogo from './assets/caldera-logo.png';
  import WraithWatchLogo from './assets/wraithwatch-logo.png';
</script>

<div class="experiences-section">
  <h3 class="section-title text-outline-lg">Experience</h3>

  <div class="experiences-container">
    <Experience
      image={WraithWatchLogo}
      link="https://www.wraithwatch.com/"
      name="Wraithwatch"
      description="Security Engineering | Machine Learning Engineering"
      descriptionLong="Wraithwatch is a cybersecurity startup building the next generation of AI/ML-informed cyber defense. As an early member of the team, I've had the opportunity to build the product, own infrastructure management, and develop customer relationships."
      notes={[
        "Lead the design, development, and implementation of resilient infrastructure, decreasing product downtime by over 8 times.",
        "Developed core backend services, allowing the product to scale from hundreds to millions of entities under analysis.",
      ]}
    />
    <Experience
      image={MicrosoftLogo}
      link="https://www.microsoft.com/en-us/microsoft-365/government/"
      name="Microsoft"
      description="Software Engineering | Engineering Operations"
      descriptionLong="As a member of the developer platform team, I designed, built and accelerated shared release and observability tooling for the Microsoft Defender ecosystem."
      notes={[
        "Scaled and optimized k8s cluster topology and configuration to increase microservice reliability.",
        "Decreased time-to-release across dedicated cloud environments by a factor of four through automated configuration and service validation.",
        "Led development and evaluation of medium- and long-term forecasting models for cloud storage and compute demand to aid in long-term strategic planning.",
        "Developed automated monitoring and observability pipelines to capture and report cross-service health and availability.",
      ]}
    />
    <Experience
      image={MitreLogo}
      link="https://www.mitre.org"
      name="The MITRE Corporation"
      description="Machine Learning Engineering | Data Science"
      descriptionLong="Supported The Veteran's Benefits Administration, the United States Marine Corps, and Intelligence Community as an engineer and consultant, delivering deep technical analyses in support of intelligence automation."
      notes={[
        "Developed prototype AI/ML-informed quality assurance tools for Public-sector Data Scientists which scale to hundreds of millions of transactions.",
        "Doubled the frequency of cross-organization engagements through agile project management and customer-centric design.",
        "Advised Public-sector institutions on the application of open-source AI/ML tools and models in signal processing and data analysis.",
      ]}
    />
    <Experience
      image={CalderaLogo}
      link="https://caldera.mitre.org"
      name="CALDERA: Automated Adversary Emulation"
      description="Engineering Manager"
      descriptionLong="CALDERA is an open-source framework for automated adversary emulation. It offers a powerful combination of atomic abilities, automated attack planning, and stealth-focused C2 capabilities to make cyber risk analysis accessible. CALDERA is used both by the open source community and a range of Government, DoD, IC, and university sponsors. Building experience as a leader helped me to understand the importance of effective management in successful product development. In planning the future of CALDERA, I learned effective product management in the context of competing customer interests and priorities."
      notes={[
        "Product lead for CALDERA's cyber ontological mapping capability, interfaced with a range of DoD sponsors to ensure wide interoperability and wider use of CALDERA as a cyber analytic tool.",
        "Led a team of four (3 engineers, 1 data scientist) to develop novel offensive cyber planning capabilities and data management solutions, resulting in a software patent and new opportunities for Government partnership.",
        "Built closed-source AI-ML enabled cyber posture analysis capabilities deployed on AWS.",
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
