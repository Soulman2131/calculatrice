import React from "react";

function App() {
	return (
		<>
			<div className="calculatrice">
				<input type="text" id="main" placeholder="0" />
				<input type="button" value="0" />
				<input type="button" value="1" />
				<input type="button" value="2" />
				<input type="button" value="3" />
				<input type="button" value="4" />
				<input type="button" value="5" />
				<input type="button" value="6" />
				<input type="button" value="7" />
				<input type="button" value="8" />
				<input type="button" value="9" />
				<input type="button" value="+" />
				<input type="button" value="-" />
				<input type="button" value="*" />
				<input type="button" value="/" />
				<input type="button" value="%" />
				<input type="button" value="." />
				<input type="button" className="btn" value="clear" />
				<input type="button" className="btn" value="=" />
			</div>
		</>
	);
}

export default App;
