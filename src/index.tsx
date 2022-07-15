import React from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import flatten from 'flat';
import locales from 'locales/en.json';

import { App } from './App';
import './styles/styles.scss';

const DEFAULT_LANGUAGE: string = 'en';
const messages = locales['en'];

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<IntlProvider messages={flatten(messages)} locale={'en'} defaultLocale={DEFAULT_LANGUAGE}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</IntlProvider>
	</React.StrictMode>
);
