import "./App.css"
import React from "react"
import Home from "./pages/Home"
import Footer from "./pages/Footer"
import Header from "./pages/Header"

const App = (): JSX.Element => {
	
	return (
		<div className="App">
			<Header />
			<Home />
			<Footer />
			{/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header> */}
		</div>
	)
}

export default App
