import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import store from './app/store';
import ToggleColorModeProvider from './utils/ToggleColorMode.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ToggleColorModeProvider>
      <App />
    </ToggleColorModeProvider>
  </Provider>,
);
