import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import IndexBox from './containers/IndexBox';


import configureStore from './redux/configureStore';

const store = configureStore();

class App extends React.Component {
  render(){
    return(
      <Provider store={store}>

        <IndexBox />

      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// 热替换HMR，需要加入这段代码才会进行生效
if(module.hot)
    module.hot.accept();