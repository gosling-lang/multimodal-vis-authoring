import React from 'react';
import './index.css';
import { PiGithubLogoFill } from 'react-icons/pi';
import _data from './data.json';

type Datum = {
  id: number;
  name: string;
  title: string;
  authors: string[];
  venue: string;
  index: string;
  year: number;
  url: string;
  abstract: string;
}
const inputIcons = {
	Mouse: '🖱️',
	Speech: '🗣️',
	Pen: '🖊️',
	Touch: '👆',
	Keyboard: '⌨️',
}

const colorMap = {
	NLI: '#CC79A7',
	Code: '#E69F00',
	Template: '#0072B2',
	Shelf: '#009E73',
	'DM & VbD': '#56B4E9',
	VbE: '#D55D00',
	'Visual Builder': '#F0E442',
	WIMP: 'black'
}

const Data = _data as Datum[];

function App() {

	const [selected, setSelected] = React.useState<number | null>(null);

	const selectedTool = React.useMemo(() => {
		if (selected === null) {
			return null;
		}

		const datum = Data.find(d => d.id === selected);
		return (
			<div className="h-full w-screen bg-black/[0.4] z-50 fixed left-0 top-0"
				onClick={() => setSelected(null)}
			>
				<div className="">
					<div className="shadow-2xl p-8 w-[800px] bg-white rounded shadow mx-auto mt-20">
						<h2 className="mb-3 text-2xl font-medium">{datum?.name}</h2>
						<h3 className="mb-3 text-lg font-medium">{datum?.title}</h3>
						<h3 className="mb-3 text-md font">{datum?.venue}, {datum?.publication_year}</h3>
						<h3 className="mb-3 text-md font">{datum?.authors.join(', ')}</h3>
						<div className="w-full border-t"/>
						<h3 className="mt-3 mb-3 text-lg font-medium">Input Modality</h3>
						<div className="mb-6">
							{
								Object.entries(datum?.input).filter(([k, v]) => v).map(([k, v]) => {
									return (
										<span className="mr-4">
											<span key={k} className="" style={{ textShadow: '0 0 2px black'}}>{inputIcons[k]}</span>
											<span className="pl-2">{k}</span>
										</span>
									)
								})
							}
						</div>
						<div className="w-full border-t"/>
						<h3 className="mt-3 mb-3 text-lg font-medium">Input Interface</h3>
						<h4 className="mt-3 mb-3 text-lg font-medium">Any Task</h4>
						<div className="mb-6">
							{
								Object.entries(datum?.interface).filter(([k, v]) => v).map(([k, v]) => {
									return (
										<span>
										  <span className={'text-xs text-[' + colorMap[k] + ']'}>⬤</span>
											<span className={'ml-1 mr-4'}>{k}</span>
										</span>
									)
								})
							}
						</div>
						<h4 className="mt-3 mb-3 text-lg font-medium">Data Transformation</h4>
						<div className="mb-6">
							{ Object.entries(datum?.['data transformation']).filter(([k, v]) => v === true).map(([k, v]) => {
								return (
									<span>
										  <span className={'text-xs text-[' + colorMap[k] + ']'}>⬤</span>
										<span className={'ml-1 mr-4'}>{k}</span>
									</span>
								)
							})}
						</div>
						<h4 className="mt-3 mb-3 text-lg font-medium">Visual Mapping</h4>
						<div className="mb-6">
							{ Object.entries(datum?.['visual mapping']).filter(([k, v]) => v === true).map(([k, v]) => {
								return (
									<span>
										<span className={'text-xs text-[' + colorMap[k] + ']'}>⬤</span>
										<span className={'ml-1 mr-4'}>{k}</span>
									</span>
								)
							})}
						</div>
						<h4 className="mt-3 mb-3 text-lg font-medium">View Transformation</h4>
						<div className="mb-6">
							{ Object.entries(datum?.['view transformation']).filter(([k, v]) => v === true).map(([k, v]) => {
								return (
									<span>
										<span className={'text-xs text-[' + colorMap[k] + ']'}>⬤</span>
										<span className={'ml-1 mr-4'}>{k}</span>
									</span>
								)
							})}
						</div>
						<h4 className="mt-3 mb-3 text-lg font-medium">Styling</h4>
						<div className="mb-6">
							{ Object.entries(datum?.styling).filter(([k, v]) => v === true).map(([k, v]) => {
								return (
									<span>
										<span className={'text-xs text-[' + colorMap[k] + ']'}>⬤</span>
										<span className={'ml-1 mr-4'}>{k}</span>
									</span>
								)
							}
							)}
						</div>
						<div className="w-full border-t"/>
						<h3 className="mt-3 mb-3 text-lg font-medium">Cooperative Interaction</h3>
						<div className="mb-6">
							{
								Object.entries(datum?.cooperation).filter(([k, v]) => v).map(([k, v]) => {
									return (
										<span className="pr-4">{k}</span>
									)
								})
							}
						</div>
						<div className="w-full border-t"/>
						<h3 className="mt-3 mb-3 text-lg font-medium">Output Modality</h3>
						<div className="mb-6">
							{
								Object.entries(datum?.output).filter(([k, v]) => v).map(([k, v]) => {
									return (
										<span className="pr-4">{k}</span>
									)
								})
							}
						</div>
					</div>
				</div>
			</div>
		);
	}, [selected]);


	return (
		<div className="h-full border-t-4 border-[#E69F00]">
			<div className="mx-auto container">
				<nav className="text-black">
					<h1 className="pl-3 pt-[9px] font-bold text-2xl inline-block align-middle ">Multimodal Interaction <small className="font-light">In Visualization Authoring Tools</small></h1>
				</nav>
				<div className="p-8 columns-md gap-8 overflow-none">
					{Data.map((datum) => (
						<div className="p-2 mb-8 pb-3 w-full rounded border border-stone-300 shadow cursor-pointer hover:shadow-lg break-inside-avoid-column" key={datum.id}
							onClick={() => setSelected(datum.id)}
						>
							<h2 className="p-2 pl-3 font-medium text-2xl w-[300px]">{datum.name}</h2>
							<div>
								{
									Object.entries(datum.input).filter(([k, v]) => v).map(([k, v]) => {
										return (
											<span key={k} className="p-1 pl-3 font text-md w-[300px]" style={{ textShadow: '0 0 2px black'}}>{inputIcons[k]}</span>
										)
									})
								}
								<span className="ml-2 border-l border-black/[0.6]"/>
								{
									Object.entries(datum.interface).filter(([k, v]) => v).map(([k, v]) => {
										return (
											<span key={k} className="p-1 pl-2">
												<span className={'text-xs text-[' + colorMap[k] + ']'}>⬤</span>
											</span>
										)
									})
								}
							</div>
							<div className="w-full border-t mt-3"/>
							<h3 className="p-1 pl-3 font text-lg w-[300px]">{datum.title}</h3>
							<h3 className="p-1 pl-3 font text-md w-[300px]">{datum.authors.join(', ')}</h3>
							<h3 className="p-1 pl-3 font text-sm w-[300px]">{datum.venue}</h3>
							<h3 className="p-1 pl-3 font-text-sm w-[300px]">{datum.publication_year}</h3>
						</div>
					))}
				</div>
			</div>
			<footer className="bg-black p-3">
				<div className="container mx-auto p-3">
					<div className="flex gap-3 pl-5 pr-5 relative">
						<a className="text-white underline mr-10 absolute right-0" href="https://github.com/gosling-lang/multimodal-vis-authoring/issues/new" target="_blank" rel="noreferrer">
							<PiGithubLogoFill className="mx-auto inline-block"/>
							{' '}Contrinute
						</a>
						<a className="text-white underline" href="http://hidivelab.org" target="_blank" rel="noreferrer">
          HIDIVE Lab
						</a>
						<a className="text-white underline" href="https://dbmi.hms.harvard.edu/" target="_blank" rel="noreferrer">
          Biomedical Informatics
						</a>
						<a className="text-white underline" href="https://hms.harvard.edu/" target="_blank" rel="noreferrer">
          Harvard Medical School
						</a>
					</div>
				</div>
			</footer>
			{selectedTool}
		</div>
	);
}

export default App;
