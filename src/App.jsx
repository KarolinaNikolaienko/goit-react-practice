// import './App.css'
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
