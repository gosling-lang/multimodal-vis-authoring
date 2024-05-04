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

const colorMap = {

}

const Data = _data as Datum[];

function App() {

	return (
    <div className="h-full border-t-4 border-[#E69F00]">
		<div className="mx-auto container">
			<nav className="text-black">
				<h1 className="pl-3 pt-[9px] font-bold text-2xl inline-block align-middle ">Multimodal Interaction <small className="font-light">In Visualization Authoring Tools</small></h1>
			</nav>
			<div className="p-8 columns-md gap-8 overflow-none">
        {Data.map((datum) => (
          <div className="p-2 mb-8 pb-3 w-full rounded border border-stone-300 shadow cursor-pointer hover:shadow-lg break-inside-avoid-column" key={datum.id}
            onClick={() => {
              window.open(datum.url, '_blank');
            }}
          >
            <h2 className="p-2 pl-3 font-medium text-2xl w-[300px]">{datum.name}</h2>
            <div>
              {
                Object.entries(datum.input).filter(([k, v]) => v).map(([k, v]) => {
                  const inputIcons = {
                    Mouse: '🖱️',
                    Speech: '🗣️',
                    Pen: '🖊️',
                    Touch: '👆',
                    Keyboard: '⌨️',
                  }
                  return (
                    <span key={k} className="p-1 pl-3 font text-md w-[300px]" style={{ textShadow: '0 0 2px black'}}>{inputIcons[k]}</span>
                  )
                })
              }
            </div>
            <div>
            {

            }
            </div>
            <h3 className="p-1 pl-3 font text-lg w-[300px]">{datum.title}</h3>
            <h3 className="p-1 pl-3 font text-md w-[300px]">{datum.authors.join(', ')}</h3>
            <h3 className="p-1 pl-3 font-text-md w-[300px]">{datum.publication_year}</h3>
          </div>
        ))}
      </div>
      </div>
      <footer className="h-[100px] bg-black p-3">
        <div className="container mx-auto">
        <div className="text-center">
        <a className="text-white underline" href="https://github.com/gosling-lang/multimodal-vis-authoring/issues/new" target="_blank">
          Contrinute
        </a>
        </div>
        </div>
      </footer>
      </div>
  );
}

export default App;
