import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../chunks/index.js";
const logo = "/_app/immutable/assets/logo-c9e87fa7.png";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<div class="${"h-14 w-screen fixed z-10 top-0 bg-gray-700 text-gray-50 grid grid-cols-2"}"><div class="${"h-full flex items-center justify-left gap-2 text-xl sm:text-2xl px-6"}"><img${add_attribute("src", logo, 0)} alt="${"Logo"}" class="${"object-cover w-[48px] h-[48px] rounded-full"}">
        <a href="${"#navbar"}" class="${""}"><span class="${"whitespace-nowrap"}">Chris Jellen</span></a>
        <a href="${"https://github.com/cdjellen"}"><img src="${"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"}" alt="${"GitHub"}" style="${"width:24px;height:24px;"}" class="${"footer-icon"}"></a>
        <a href="${"https://www.linkedin.com/in/cdjellen/"}"><img src="${"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"}" alt="${"LinkedIn"}" style="${"width:24px;height:24px;"}" class="${"footer-icon"}"></a></div>
    <nav class="${"text-md sm:text-xl text-gray-50 flex items-center justify-center gap-6"}"><a href="${"#experiences"}" class="${""}">Experience</a>
        <a href="${"#projects"}" class="${""}">Projects</a>
        <a href="${"#publications"}" class="${""}">Publications</a>
        <a href="${"#resume"}" class="${""}">Resume</a></nav></div>`;
});
const background = "/_app/immutable/assets/background01-79e8f51b.jpg";
const profile = "/_app/immutable/assets/profile00-f9884011.png";
const Banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<div class="${"h-screen w-screen flex justify-center items-center bg-pose bg-no-repeat bg-cover bg-center bg-blend-overlay bg-opacity-75 bg-fixed"}" style="${"background-image: url('" + escape(background, true) + "');"}" id="${"banner"}"><div class="${"flex flex-col items-center gap-1 sm:gap-3"}"><img class="${"object-cover w-[200px] h-[200px] rounded-full border-4 border-solid border-gray-900"}"${add_attribute("src", profile, 0)} alt="${"profile"}"></div>
    <div class="${"flex flex-col items-center gap-1 sm:gap-1"}"><h1 class="${"text-center text-gray-50 text-outline-lg font-bold text-3xl sm:text-6xl"}">Chris Jellen</h1>
        <h5 class="${"text-center text-gray-50 text-outline text-md sm:text-xl"}">Software Engineer | Product Manager</h5></div></div>`;
});
const Experience = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  let { link } = $$props;
  let { name } = $$props;
  let { description } = $$props;
  let { descriptionLong } = $$props;
  let { notes } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.descriptionLong === void 0 && $$bindings.descriptionLong && descriptionLong !== void 0)
    $$bindings.descriptionLong(descriptionLong);
  if ($$props.notes === void 0 && $$bindings.notes && notes !== void 0)
    $$bindings.notes(notes);
  return `<div class="${"bg-gray-800 items-center gap-20 px-5 sm:px-5 overflow-hidden grid grid-flow-row-dense grid-cols-7 grid-rows-2"}"><div class="${"col-span-2"}"><a${add_attribute("href", link, 0)}><img${add_attribute("src", image, 0)} alt="${"Experience"}"></a></div>
	<div class="${"col-span-5 row-span-2 text-gray-50 text-md"}"><h3 class="${"text-left text-gray-50 text-outline-sm text-lg font-bold text-6xl"}">${escape(name)}</h3>
		<div class="${"text-gray-50 text-outline text-md sm:text-xl"}"><h3 class="${"my-3 font-bold"}">${escape(description)}</h3>
			<h5 class="${"my-3"}">${escape(descriptionLong)}</h5>
			<div class="${"grid lg:flex lg:justify-left grid-cols-2 sm:grid-cols-3"}"><table class="${"table-fixed"}"><thead><tr><th class="${"px-1 py-2 text-left"}"><div class="${""}"><p style="${"font-size:30px"}">\u{1F680}</p></div></th>
							<th class="${"text-left font-bold text-2xl"}">Key Accomplishments:</th></tr></thead>
					<tbody>${each(notes, (note) => {
    return `<tr><td><p style="${"font-size:20px"}">\u{1F4CC}</p></td>
							<td>${escape(note)}</td>
						</tr>`;
  })}</tbody></table></div></div></div></div>`;
});
const MitreLogo = "/_app/immutable/assets/mitre-attack-logo-3ae6a7bf.png";
const CalderaLogo = "/_app/immutable/assets/caldera-logo-ae81c5fa.png";
const Experiences = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<div class="${"bg-gray-800 items-center gap-20 px-10 sm:px-20 overflow-hidden grid lg:grid-cols-1 xs:grid-cols-1"}"><div class="${"items-center"}"><h3 class="${"text-center text-gray-50 text-outline-lg text-3xl sm:text-6xl"}">Expereince</h3></div>
	<div class="${"flex flex-col rounded-2xl"}">${validate_component(Experience, "Experience").$$render(
    $$result,
    {
      image: MitreLogo,
      link: "https://www.mitre.org",
      name: "The MITRE Corporation",
      description: "Software Engineering | Machine Learning Engineering",
      descriptionLong: "In my time with MITRE, I've supported The Veteran's Benefits Administration, the United States Marine Corps, and Intellegence Community as an engineer and leader.  I've learned first-hand the importance of building a strong understanding of customer needs, clear communication, and strategic planning.  Leading the development of software prototypes allowed me to carft a product through the full development lifecycle, from roadmapping to ticketing to delivery and every step in between.",
      notes: [
        "Developed AI/ML-informed analytic prototypes for quality assurance at scale, leading to the award of a multi-million dollar contract.",
        "Designed and built a RESTful API, integrating with existing data pipelines, which enabled repeatable, scalable analysis.",
        "Lead Agile SCRUM meetings, wrote and tracked tickets, and executed on rapid, customer-centric design.",
        "Built and evaluated custom CNN models for over-the-air radio signal processing and classification."
      ]
    },
    {},
    {}
  )}</div>
	<div class="${"flex flex-col rounded-2xl"}">${validate_component(Experience, "Experience").$$render(
    $$result,
    {
      image: CalderaLogo,
      link: "https://caldera.mitre.org",
      name: "CALDERA: Automated Adversary Emulation",
      description: "Product Lead | Engineering Manager",
      descriptionLong: "CALDERA is an open-source framework for automated adversary emulation.  It offers a powerful combination of atomic abilities, automated attack planning, and stealth-focused C2 capabilities to make cyber risk analysis accessible.  CALDERA is used both by the open source community and a range of Governemnt, DoD, IC, and university spsonsors.  Builing experience as a leader helped me to understand the importance of effective management in sucessful product development.  In planning the future of CALDERA, I learned effective product management in the context of competing customer interests and priorities.",
      notes: [
        "Product lead for CALDERA's cyber ontological mapping capability, interfaced with a range of DoD sponsors to ensure wide interoperability and wider use of CALDERA as a cyber analytic tool.",
        "Led a team of four (3 engineers, 1 data scientist) to develop novel offensive cyber planning capabilities and data management solutions.",
        "Built closed-source AI-ML enabled cyber posture analysis capabilities deployed on AWS.",
        "Developed a strong understanding of agile project management and continuous delivery for a range of end-users and sponsors."
      ]
    },
    {},
    {}
  )}</div></div>`;
});
const Badge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { logo: logo2 } = $$props;
  if ($$props.logo === void 0 && $$bindings.logo && logo2 !== void 0)
    $$bindings.logo(logo2);
  return `<div class="${"py-2 mx-4 text-white flex justify-left"}"><img${add_attribute("src", logo2, 0)} class="${"h-10"}" alt="${"Logo"}"></div>`;
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon } = $$props;
  let { link } = $$props;
  let { text } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<a class="${"bg-slate-100 hover:bg-slate-200 text-gray-800 inline-flex py-2 px-4 border border-gray-400 rounded shadow"}"${add_attribute("href", link, 0)} role="${"button"}">${icon ? `<img${add_attribute("src", icon, 0)} class="${"h-8 px-1"}" alt="${"Logo"}">` : ``}
	<h3 class="${"text-left text-gray-50 text-md font-bold text-button-sm"}">${escape(text)}</h3></a>`;
});
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  let { name } = $$props;
  let { description } = $$props;
  let { badges } = $$props;
  let { linkIcon } = $$props;
  let { link } = $$props;
  let { linkText } = $$props;
  let { githunIcon } = $$props;
  let { github } = $$props;
  let { githubText } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.badges === void 0 && $$bindings.badges && badges !== void 0)
    $$bindings.badges(badges);
  if ($$props.linkIcon === void 0 && $$bindings.linkIcon && linkIcon !== void 0)
    $$bindings.linkIcon(linkIcon);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.linkText === void 0 && $$bindings.linkText && linkText !== void 0)
    $$bindings.linkText(linkText);
  if ($$props.githunIcon === void 0 && $$bindings.githunIcon && githunIcon !== void 0)
    $$bindings.githunIcon(githunIcon);
  if ($$props.github === void 0 && $$bindings.github && github !== void 0)
    $$bindings.github(github);
  if ($$props.githubText === void 0 && $$bindings.githubText && githubText !== void 0)
    $$bindings.githubText(githubText);
  return `<div class="${"bg-gray-800 items-center gap-20 px-5 sm:px-5 overflow-hidden grid lg:grid-cols-2 xs:grid-cols-1"}"><a${add_attribute("href", github, 0)}><img${add_attribute("src", image, 0)} alt="${"Project"}"></a>
	<div class="${"flex justify-center items-center"}"><div class="${"text-gray-50 text-outline text-md sm:text-xl"}"><h3 class="${"text-left text-gray-50 text-outline-sm text-lg font-bold text-6xl"}">${escape(name)}</h3>
			<h4 class="${"my-3"}">${escape(description)}</h4>
			<div class="${"grid lg:flex lg:justify-center grid-cols-2 sm:grid-cols-3"}">${each(badges, (badge) => {
    return `${validate_component(Badge, "Badge").$$render($$result, { logo: badge }, {}, {})}`;
  })}</div>
			<br>
			<div class="${"grid lg:flex lg:justify-center grid-cols-2 sm:grid-cols-3"}"><div class="${"flex justify-right px-5"}">${validate_component(Button, "Button").$$render($$result, { icon: linkIcon, link, text: linkText }, {}, {})}</div>
				<div class="${"flex justify-left px-5"}">${validate_component(Button, "Button").$$render(
    $$result,
    {
      icon: githunIcon,
      link: github,
      text: githubText
    },
    {},
    {}
  )}</div></div></div></div></div>`;
});
const NdbcApi = "/_app/immutable/assets/ndbc-api-readme-25d2db54.png";
const TridentProj = "/_app/immutable/assets/trident-project-03-c59deb72.jpg";
const CapstoneProj = "/_app/immutable/assets/capstone-project-01-1b0250ec.png";
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<div class="${"bg-gray-800 items-center gap-20 px-10 sm:px-20 overflow-hidden grid lg:grid-cols-1 xs:grid-cols-1"}"><div class="${"items-center"}"><h3 class="${"text-center text-gray-50 text-outline-lg text-3xl sm:text-6xl"}">Projects</h3></div>
	<div class="${"flex flex-col rounded-2xl"}">${validate_component(Project, "Project").$$render(
    $$result,
    {
      image: NdbcApi,
      name: "National Data Buoy Center API",
      description: "A Python API for querying oceanographic and atmospheric data from the National Data Buoy Center.\n			The ndbc-api makes climate research data more accessible by parsing whitespace-delimited .\n			Measurements are typically distributed as utf-8 encoded, station-by-station, fixed-period text files.\n			More information on the measurements and methodology are available on the NDBC website.",
      badges: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
      ],
      linkIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg",
      link: "https://pypi.org/project/ndbc-api/",
      linkText: "PyPi Link",
      githunIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      github: "https://github.com/cdjellen/ndbc-api",
      githubText: "GitHub Repository"
    },
    {},
    {}
  )}</div>
	<div class="${"flex flex-col rounded-2xl"}">${validate_component(Project, "Project").$$render(
    $$result,
    {
      image: TridentProj,
      name: "USNA Trident Research Project",
      description: "Developed a machine-learning model for prediction of optical turbulence in near-maritime environments.",
      badges: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg"
      ],
      linkIcon: "",
      link: "https://www.usna.edu/TridentProgram/VirtualConference/Jellen.php",
      linkText: "Conference Presentation",
      githunIcon: "",
      github: "https://discover.dtic.mil/",
      githubText: "DTIC Archive"
    },
    {},
    {}
  )}</div>
	<div class="${"flex flex-col rounded-2xl"}">${validate_component(Project, "Project").$$render(
    $$result,
    {
      image: CapstoneProj,
      name: "Capstone Design Competition",
      description: "Lead a team to design, integrate, and build a semi-autonomous corrosion detection robot for a national design competition.\n			The team was funded by the Office of Naval Research (ONR), and provided an excellent opportunity to plan and execute a long-term, product-focused development project.\n			Placed first in the 2019 University Students Applied Design and Soltions Compeition, sponsored by the National Ascociation of Corrosion Engineers (NACE).",
      badges: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
      ],
      linkIcon: "",
      link: "https://www.usna.edu/AeroDept/_files/documents/2019_Capstone_Day_Program_v6.pdf",
      linkText: "Capstone Day",
      githunIcon: "",
      github: "http://www.usdasc.com/the-challenge",
      githubText: "Competition Summary"
    },
    {},
    {}
  )}</div></div>`;
});
const Publication = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { linkIcon } = $$props;
  let { link } = $$props;
  let { linkText } = $$props;
  let { abstract } = $$props;
  let { notes } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.linkIcon === void 0 && $$bindings.linkIcon && linkIcon !== void 0)
    $$bindings.linkIcon(linkIcon);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.linkText === void 0 && $$bindings.linkText && linkText !== void 0)
    $$bindings.linkText(linkText);
  if ($$props.abstract === void 0 && $$bindings.abstract && abstract !== void 0)
    $$bindings.abstract(abstract);
  if ($$props.notes === void 0 && $$bindings.notes && notes !== void 0)
    $$bindings.notes(notes);
  return `<div class="${"bg-gray-800 items-center gap-20 px-5 sm:px-5 overflow-hidden grid lg:grid-cols-1 xs:grid-cols-1"}"><div class="${"flex justify-left items-center"}"><div class="${"text-gray-50 text-outline text-md sm:text-xl"}"><h3 class="${"text-left text-gray-50 text-outline-sm text-lg font-bold text-6xl"}">${escape(title)}</h3>
			<br>
			<h4 class="${"my-3 text-pub-sm"}">${escape(abstract)}</h4>
			<div class="${"flex justify-left"}">${validate_component(Button, "Button").$$render($$result, { icon: linkIcon, link, text: linkText }, {}, {})}</div>
			<h4 class="${"my-3"}">${escape(notes)}</h4>
			<br></div></div></div>`;
});
const Publications = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<div class="${"bg-gray-800 items-center gap-20 px-10 sm:px-20 overflow-hidden grid lg:grid-cols-1 xs:grid-cols-1"}"><div class="${"items-center"}"><h3 class="${"text-center text-gray-50 text-outline-lg text-3xl sm:text-6xl"}">Publications</h3></div>
	<div class="${"grid grid-cols-1 gap-4"}">${validate_component(Publication, "Publication").$$render(
    $$result,
    {
      title: "Machine learning informed predictor importance measures of environmental parameters in maritime optical turbulence.",
      notes: "Appl. Opt. 59, 6379-6389 (2020)",
      abstract: "Prediction of the index of refraction structure constant Cn2 in the low-altitude maritime environment is challenging. \n			To improve predictive models, deeper understanding of the relationships between environmental parameters and optical turbulence is required. \n			To that end, a robust data set of Cn2 as well as numerous meteorological parameters were collected over a period of approximately 15 months along the Chesapeake Bay adjacent to the Severn River in Annapolis, Maryland. \n			The goal was to derive new insights into the physical relationships affecting optical turbulence in the near-maritime environment. \n			Using data-driven machine learning feature selection approaches, the relative importance of 12 distinct, measurable environmental parameters was analyzed and evaluated. \n			Random forest nodal purity analysis was the primary machine learning approach to relative importance determination. \n			The relative feature importance results indicated that air temperature and pressure were important parameters in predicting Cn2 in the maritime environment. \n			In addition, the relative importance findings suggest that the air-water temperature difference, temporal hour weight, and time of year, as measured through seasonality, have strong associations with Cn2 and could be included to improve model prediction accuracy.",
      linkIcon: "",
      link: "https://doi.org/10.1364/AO.397325",
      linkText: "Published in Applied Opics"
    },
    {},
    {}
  )}
		${validate_component(Publication, "Publication").$$render(
    $$result,
    {
      title: "Measurement and analysis of atmospheric optical turbulence in a near-maritime environment.",
      notes: "IOP SciNotes 1 (2020) 02400",
      abstract: "The index of refraction structure constant, Cn2 characterizing the intensity of optical turbulence,\n			describes the disruption of a propagating electromagnetic beam passing through an inhomogeneously\n			heated turbulent environment. In order to improve predictive models, it is critical to develop a deeper\n			understanding of the relationships between environmental parameters and optical turbulence. To that\n			end, an overwater, 890 m scintillometer link was established along the Chesapeake Bay adjacent to the\n			Severn River in Annapolis, Maryland. Specifically, Cn2 data from the scintillometer, as well, as\n			numerous meteorological parameters were collected over the period of approximately 15 months to\n			characterize a scintillometer link in the near-maritime environment. The characteristics of this nearmaritime link were distinct from those observed in prior over-land and open ocean links. Further,\n			existing macro-meteorological models for predicting Cn2 from environmental parameters developed\n			for open-ocean links were shown to perform poorly in the near-maritime environment. While the\n			offshore adapted macro-meteorological model demonstrated lower prediction error, this study\n			suggests that new models could be developed to reduce Cn2 prediction error in the near-maritime\n			environment. The complete data set, including Cn2 measurements, and to our knowledge, one of the\n			first to extend beyond one year, is available.",
      linkIcon: "",
      link: "https://doi.org/10.1088/2633-1357/abba45",
      linkText: "Published in IOP SciNotes"
    },
    {},
    {}
  )}
		${validate_component(Publication, "Publication").$$render(
    $$result,
    {
      title: "Machine-learning informed macro-meteorological models for the near-maritime environment.",
      notes: "Appl. Opt. 60, 2938-2951 (2021)",
      abstract: "Macro-meteorological models predict optical turbulence as a function of weather data. \n			Existing models often struggle to accurately predict the rapid fluctuations in Cn2 in near-maritime environments. \n			Seven months of Cn2 field measurements were collected along an 890 m scintillometer link over the Severn River in Annapolis, Maryland. \n			This time series was augmented with local meteorological measurements to capture bulk-atmospheric weather measurements. \n			The prediction accuracy of existing macro-meteorological models was analyzed in a range of conditions. \n			Next, machine-learning techniques were applied to train new macro-meteorological models using the measured Cn2 and measured environmental parameters. \n			Finally, the Cn2 predictions generated by the existing macro-meteorological models and new machine-learning informed models were compared for four representative days from the data set. \n			These new models, under most conditions, demonstrated a higher overall Cn2 prediction accuracy, and were better able to track optical turbulence. \n			Further tuning and machine-learning architectural changes could further improve model performance.",
      linkIcon: "",
      link: "https://doi.org/10.1364/AO.416680",
      linkText: "Published in Applied Optics"
    },
    {},
    {}
  )}</div></div>`;
});
const resume = "/_app/immutable/assets/Jellen_Resume-60cbf9ec.pdf";
const Resume = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"bg-gray-800 items-center gap-20 px-5 sm:px-5 overflow-hidden grid lg:grid-cols-1 xs:grid-cols-1"}"><div class="${"flex justify-center items-center"}"><section id="${"resume"}"><embed${add_attribute("src", resume, 0)} width="${"1200"}" height="${"1200"}"></section></div></div>`;
});
const Resume_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<div class="${"bg-gray-800 items-center gap-20 px-10 sm:px-20 overflow-hidden grid lg:grid-cols-1 xs:grid-cols-1"}"><div class="${"items-center"}"><h3 class="${"text-center text-gray-50 text-outline-lg text-3xl sm:text-6xl"}">Resume</h3>
        <br>
        ${validate_component(Resume, "Resume").$$render($$result, {}, {}, {})}</div></div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<footer class="${"bg-gray-800 text-gray-400 text-base"}"><div class="${"flex justify-center items-center"}">Made with <img src="${"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"}" alt="${"sveltekit"}" href="${"https://kit.svelte.dev/"}" style="${"width:24px;height:24px;"}" class="${"footer-icon"}"> <a href="${"https://kit.svelte.dev/"}">SvelteKit</a> \xA0by\xA0 <a href="${"https://github.com/cdjellen/"}">Chris Jellen</a></div></footer>`;
});
const spacer = "/_app/immutable/assets/layered-waves-haikei-b007de7b.svg";
const spacerSm = "/_app/immutable/assets/layered-waves-haikei-sm-dbfecfb0.svg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="${"navbar"}"></div>
${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
${validate_component(Banner, "Banner").$$render($$result, {}, {}, {})}
<div id="${"experiences"}" class="${"spacer-sm rotate-180 flex"}" style="${"background-image: url('" + escape(spacerSm, true) + "');"}"></div>
<div style="${"background-image: url('" + escape(spacer, true) + "');"}"></div>
${validate_component(Experiences, "Experiences").$$render($$result, {}, {}, {})}
<div class="${"spacer-sm flex"}" style="${"background-image: url('" + escape(spacerSm, true) + "');"}"></div>
<div id="${"projects"}" class="${"spacer-sm rotate-180 flex"}" style="${"background-image: url('" + escape(spacerSm, true) + "');"}"></div>
<div style="${"background-image: url('" + escape(spacer, true) + "');"}"></div>
${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}
<div class="${"spacer-sm flex"}" style="${"background-image: url('" + escape(spacerSm, true) + "');"}"></div>
<div id="${"publications"}" class="${"spacer-sm rotate-180 flex"}" style="${"background-image: url('" + escape(spacerSm, true) + "');"}"></div>
<div style="${"background-image: url('" + escape(spacer, true) + "');"}"></div>
${validate_component(Publications, "Publications").$$render($$result, {}, {}, {})}
<div class="${"spacer-sm flex"}" style="${"background-image: url('" + escape(spacerSm, true) + "');"}"></div>
<div id="${"resume"}" class="${"spacer-sm rotate-180 flex"}" style="${"background-image: url('" + escape(spacerSm, true) + "');"}"></div>
<div style="${"background-image: url('" + escape(spacer, true) + "');"}"></div>
${validate_component(Resume_1, "Resume").$$render($$result, {}, {}, {})}
<div class="${"spacer-sm flex"}" style="${"background-image: url('" + escape(spacerSm, true) + "');"}"></div>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
