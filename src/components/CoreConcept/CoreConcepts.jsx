import CoreConcept from './CoreConcept.jsx';
import { CORE_CONCEPTS } from '../../data.js';

export default function CoreConcepts() {
	return (
		<section id='core-concepts'>
			<h2>Core Concepts</h2>
			<ul>
				{/* Dymaniczna wersja, nie musimy szukać po indeksie */}

				{CORE_CONCEPTS.map((conceptItem) => (
					<CoreConcept key={conceptItem.title} {...conceptItem} />
				))}

				{/* PEŁNA, DŁUŻSZA WERSJA (MNIEJ OPTYMALNA)
                        <CoreConcept
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}
                        />

                        SKRÓCONA, OPTYMALNA WERSJA
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} /> */}
			</ul>
		</section>
	);
}
