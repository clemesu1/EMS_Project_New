import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

renderMethod(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</StrictMode>,
	document.getElementById('root')
);
