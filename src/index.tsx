import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import reducer from './store/reducer';
import { Provider } from 'react-redux';

const store: Store & {
	dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
