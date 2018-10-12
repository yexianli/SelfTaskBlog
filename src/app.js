import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter, HashRouter, Route, withRouter} from 'react-router-dom';
import IndexBox from './containers/IndexBox'
import Login from './components/Login/Login'

import configureStore from './redux/configureStore';
import Register from "./components/Register/Register";

const store = configureStore();

class App extends React.Component {
  render(){
    return(
      <Provider store={store}>

              <div >

                      <Route exact path="/" component={IndexBox}/>
                      <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  {/*<Route exact path='/' component={LoginBox}/>*/}
                  {/*<Route path='/register' component={RegisterBox}/>*/}
                  {/*<Route path='/home' component={HomeLayout}/>*/}

              </div>


      </Provider>
    );
  }
}

ReactDOM.render(
<HashRouter>
    <App/>
</HashRouter>, document.getElementById('app'));

// 热替换HMR，需要加入这段代码才会进行生效
if(module.hot)
    module.hot.accept();
