import React, {Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import "./index.scss";
import BaseRouter from './routes';
import BaseLayout from './containers/commons/Layout';

class App extends Component {

  render() {
    return (
      <div >
      <BrowserRouter>
      <BaseLayout>
      <BaseRouter />
      </BaseLayout>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;