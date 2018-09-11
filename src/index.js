import { render } from 'inferno'
import './assets/styles/index.css'

const App = () =>
  <h1>Hello from infernojs</h1>

render(
  <App />,
  document.getElementById('app')
)
