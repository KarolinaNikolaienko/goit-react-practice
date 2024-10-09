// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import data from './data.json'
import Post from './components/Post'

function App() {
	return (
		<div>
			{data.map((post) => (
				<Post post={post} key={post.id} />
			))}
		</div>
	)
}

export default App
