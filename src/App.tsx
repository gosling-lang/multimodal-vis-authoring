import React from 'react';
import './index.css';
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

const Data = _data as Datum[];

function App() {
	return (
		<div className="h-full">
			<nav className="h-10 font-bold bg-black/10">
				<h1>Multimodal Visualization Authoring</h1>
			</nav>
			<div className="flex flex-rows outline outline-1 outline-black/20">
				<div className="flex-none w-[200px] outline outline-1 outline-black/20"></div>
				<div className="flex-1 outline outline-1 outline-black/20">
					{Data.map((datum) => (
						<div key={datum.id}>
							<h2>{datum.title}</h2>
						</div>
					))}
				</div>
			</div>
      <footer className="h-10 font-bold bg-black/10">
      </footer>
		</div>
	);
}

export default App;
