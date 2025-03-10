import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
	const [selectedTopic, setSelectedTopic] = useState();

	function handleSelect(selectedButton) {
		// selectedButton => 'components', 'jsx', 'props', 'state'
		setSelectedTopic(selectedButton);
	}

	let tabContent = <p>Please select a topic.</p>;

	if (selectedTopic) {
		tabContent = (
			<div id='tab-content'>
				<h3>{EXAMPLES[selectedTopic].title}</h3>
				<p>{EXAMPLES[selectedTopic].description}</p>
				<pre>
					<code>{EXAMPLES[selectedTopic].code}</code>
				</pre>
			</div>
		);
	}

	return (
		<>
			<Header />
			<main>
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
				<section id='examples'>
					<h2>Examples</h2>
					<menu>
						<TabButton
							isSelected={selectedTopic === 'components'}
							onSelect={() => {
								handleSelect('components');
							}}>
							Components
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'jsx'}
							onSelect={() => {
								handleSelect('jsx');
							}}>
							JSX
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'props'}
							onSelect={() => {
								handleSelect('props');
							}}>
							Props
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'state'}
							onSelect={() => {
								handleSelect('state');
							}}>
							State
						</TabButton>
					</menu>
					{tabContent}
				</section>
			</main>
		</>
	);
}

export default App;
