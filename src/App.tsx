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
		<div className="h-full bg-[#F6F6F6]">
			<nav className="text-white h-[80px] bg-[#0072B2] shadow-md">
				<h1 className="pl-3 pt-[9px] font-bold text-lg inline-block align-middle">Multimodal Interaction</h1>
        <br/>
				<h2 className="pl-3 pt-[4px] font-light text-sm inline-block align-middle">In Visualization Authoring Tools</h2>
			</nav>
			<div className="p-3 flex flex-wrap gap-4 h-[calc(100%-110px)] overflow-y-auto overflow-x-none">
        {Data.map((datum) => (
          <div className="m-0 border border-[grey] bg-[#F0F0F0] shadow cursor-pointer hover:shadow-lg" key={datum.id}
            onClick={() => {
              window.open(datum.url, '_blank');
            }}
          >
            <h2 className="p-2 pl-3 font-medium text-xl w-[300px]">{datum.name}</h2>
            <h3 className="p-2 pl-3 font text w-[300px]">{datum.title}</h3>
            <h3 className="p-2 pl-3 font text-xs w-[300px]">{datum.authors.join(', ')}</h3>
            <h3 className="p-2 pl-3 font text-xs w-[300px]">{datum.venue}, {datum.index}</h3>
            <h3 className="p-2 pl-3 font-bold text-xs w-[300px]">{datum.year}</h3>
          </div>
        ))}
      </div>
      <footer className="h-[30px] font-bold bg-black sticky bottom-0">
      </footer>
      </div>
      );
}

export default App;
