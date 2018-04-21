import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import App from './containers/App';

import '../assets/style.css';

const name = process.env.APP_NAME!;
const version = process.env.APP_VERSION!;

ReactDOM.render(
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#000000" />
      <title>{name}</title>
    </Helmet>
    <App name={name} version={version} />
  </div>,
  document.getElementById('root') as HTMLElement
);
