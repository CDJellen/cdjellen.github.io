<script>
    import Publication from './components/Publication.svelte';
</script>

 <!-- Publications -->
<div class="
    bg-gray-800 items-center gap-20 px-10 sm:px-20 overflow-hidden
    grid lg:grid-cols-1 xs:grid-cols-1">
	<div class="items-center">
		<h3 class="text-center text-gray-50 text-outline-lg text-3xl sm:text-6xl">Publications</h3>
	</div>
	<div class="grid grid-cols-1 gap-4">
		<Publication
			title="Machine learning informed predictor importance measures of environmental parameters in maritime optical turbulence."
			notes="Appl. Opt. 59, 6379-6389 (2020)"
			abstract="Prediction of the index of refraction structure constant Cn2 in the low-altitude maritime environment is challenging. 
			To improve predictive models, deeper understanding of the relationships between environmental parameters and optical turbulence is required. 
			To that end, a robust data set of Cn2 as well as numerous meteorological parameters were collected over a period of approximately 15 months along the Chesapeake Bay adjacent to the Severn River in Annapolis, Maryland. 
			The goal was to derive new insights into the physical relationships affecting optical turbulence in the near-maritime environment. 
			Using data-driven machine learning feature selection approaches, the relative importance of 12 distinct, measurable environmental parameters was analyzed and evaluated. 
			Random forest nodal purity analysis was the primary machine learning approach to relative importance determination. 
			The relative feature importance results indicated that air temperature and pressure were important parameters in predicting Cn2 in the maritime environment. 
			In addition, the relative importance findings suggest that the air-water temperature difference, temporal hour weight, and time of year, as measured through seasonality, have strong associations with Cn2 and could be included to improve model prediction accuracy."
			linkIcon=""
			link="https://doi.org/10.1364/AO.397325"
			linkText="Published in Applied Optics."
		/>
		<Publication
			title="Hybrid models for Optical Turbulence."
			notes="Applied Optics 62 (18), 4880-4890"
			abstract="Accurate prediction of atmospheric optical turbulence in localized environments is essential for
			estimating the performance of free-space optical systems. Macro-meteorological models developed
			to predict turbulent effects in one environment may fail when applied in new environments. However,
			existing macro-meteorological models are expected to offer some predictive power. Building a new
			model from locally-measured macro-meteorology and scintillometer readings can require significant
			time and resources, as well as a large number of observations. These challenges motivate the
			development of a machine-learning informed hybrid model framework. By combining some baseline
			macro-meteorological model with local observations, hybrid models were trained to improve upon the
			predictive power of each baseline model. Comparisons between the performance of the hybrid models,
			the selected baseline macro-meteorological models, and machine-learning models trained only on
			local observations highlight potential use cases for the hybrid model framework when local data is
			expensive to collect. Both the hybrid and data-only models were trained using the Gradient Boosted
			Decision Tree (GBDT) architecture with a variable number of in-situ meteorological observations.
			The hybrid and data-only models were found to outperform three baseline macro-meteorological
			models, even for low numbers of observations, in some cases as little as one day. For the first baseline
			macro-meteorological model investigated, the hybrid model achieves an estimated 29% reduction in
			mean absolute error (MAE) using only one days-equivalent of observation, growing to 41% after only
			two days, and 68% after 180 days-equivalent training data. The data-only model generally showed
			similar but slightly lower performance as compared to the hybrid model. Notably, the hybrid model's
			performance advantage over the data-only model dropped below 2% near the 24 days-equivalent
			observation mark and trended towards 0% thereafter. The number of days-equivalent training data
			required by both the hybrid model and the data-only model is potentially indicative of the seasonal
			variation in the local microclimate and its propagation environment."
			linkIcon=""
			link="https://doi.org/10.1088/2633-1357/abba45"
			linkText="Published as a prepirn tin arXiv 2310.17829 and in Applied Optics."
		/>
		<Publication
			title="Measurement and analysis of atmospheric optical turbulence in a near-maritime environment."
			notes="IOP SciNotes 1 (2020) 02400"
			abstract="The index of refraction structure constant, Cn2 characterizing the intensity of optical turbulence,
			describes the disruption of a propagating electromagnetic beam passing through an inhomogeneously
			heated turbulent environment. In order to improve predictive models, it is critical to develop a deeper
			understanding of the relationships between environmental parameters and optical turbulence. To that
			end, an over water, 890 m scintillometer link was established along the Chesapeake Bay adjacent to the
			Severn River in Annapolis, Maryland. Specifically, Cn2 data from the scintillometer, as well, as
			numerous meteorological parameters were collected over the period of approximately 15 months to
			characterize a scintillometer link in the near-maritime environment. The characteristics of this near-maritime link were distinct from those observed in prior over-land and open ocean links. Further,
			existing macro-meteorological models for predicting Cn2 from environmental parameters developed
			for open-ocean links were shown to perform poorly in the near-maritime environment. While the
			offshore adapted macro-meteorological model demonstrated lower prediction error, this study
			suggests that new models could be developed to reduce Cn2 prediction error in the near-maritime
			environment. The complete data set, including Cn2 measurements, and to our knowledge, one of the
			first to extend beyond one year, is available."
			linkIcon=""
			link="https://doi.org/10.1088/2633-1357/abba45"
			linkText="Published in IOP SciNotes."
		/>
		<Publication
			title="Machine-learning informed macro-meteorological models for the near-maritime environment."
			notes="Appl. Opt. 60, 2938-2951 (2021)"
			abstract="Macro-meteorological models predict optical turbulence as a function of weather data. 
			Existing models often struggle to accurately predict the rapid fluctuations in Cn2 in near-maritime environments. 
			Seven months of Cn2 field measurements were collected along an 890 m scintillometer link over the Severn River in Annapolis, Maryland. 
			This time series was augmented with local meteorological measurements to capture bulk-atmospheric weather measurements. 
			The prediction accuracy of existing macro-meteorological models was analyzed in a range of conditions. 
			Next, machine-learning techniques were applied to train new macro-meteorological models using the measured Cn2 and measured environmental parameters. 
			Finally, the Cn2 predictions generated by the existing macro-meteorological models and new machine-learning informed models were compared for four representative days from the data set. 
			These new models, under most conditions, demonstrated a higher overall Cn2 prediction accuracy, and were better able to track optical turbulence. 
			Further tuning and machine-learning architectural changes could further improve model performance."
			linkIcon=""
			link="https://doi.org/10.1364/AO.416680"
			linkText="Published in Applied Optics."
		/>
	</div>
</div>