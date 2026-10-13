import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

// Genel stiller, bileşen stillerinden önce yüklenmeli ki bileşenler onları ezebilsin.
import '@fontsource-variable/inter';
import './assets/css/theme.css';
import './assets/css/base.css';
import './assets/css/buttons.css';
import './assets/css/scrollbar.css';

import App from './App';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
);
