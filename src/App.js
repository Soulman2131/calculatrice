import React, { useState } from "react";

function App() {
	const [result, setResult] = useState("");

	const handleClick = e => {
		setResult(result.concat(e.target.value));
	};

	const handleClear = () => {
		setResult("");
	};

	const handleResult = () => {
		setResult(eval(result).toString());
	};

	return (
		<>
			<div className="calculatrice">
				<h1>Calculatrice</h1>
				<input type="text" id="main" placeholder="0" value={result} />
				<input type="button" value="0" onClick={handleClick} />
				<input type="button" value="1" onClick={handleClick} />
				<input type="button" value="2" onClick={handleClick} />
				<input type="button" value="3" onClick={handleClick} />
				<input type="button" value="4" onClick={handleClick} />
				<input type="button" value="5" onClick={handleClick} />
				<input type="button" value="6" onClick={handleClick} />
				<input type="button" value="7" onClick={handleClick} />
				<input type="button" value="8" onClick={handleClick} />
				<input type="button" value="9" onClick={handleClick} />
				<input type="button" value="." onClick={handleClick} />
				<input type="button" value="%" onClick={handleClick} />
				<input type="button" value="+" onClick={handleClick} />
				<input type="button" value="-" onClick={handleClick} />
				<input type="button" value="*" onClick={handleClick} />
				<input type="button" value="/" onClick={handleClick} />

				<input type="button" className="btn" value="Supprimer" onClick={handleClear} />
				<input type="button" className="btn" value="=" onClick={handleResult} />
			</div>
		</>
	);
}

export default App;
