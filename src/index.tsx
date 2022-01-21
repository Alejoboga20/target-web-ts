import React from 'react';
import ReactDOM from 'react-dom';
import locales from 'locales/en.json';
import flatten from 'flat';
import { IntlProvider } from 'react-intl';
import { App } from './App';
import './styles/styles.scss';

const DEFAULT_LANGUAGE: string = 'en';
const messages = locales['en'];

ReactDOM.render(
	<React.StrictMode>
		<IntlProvider messages={flatten(messages)} locale={'en'} defaultLocale={DEFAULT_LANGUAGE}>
			<App />
		</IntlProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
