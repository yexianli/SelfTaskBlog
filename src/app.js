import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, HashRouter, Route, withRouter} from 'react-router-dom';
import IndexBox from './containers/IndexBox'
<<<<<<< HEAD
=======
import Login from './components/Login/Login'
import HomeIndex from './components/HomeIndex/HomeIndex'
import configureStore from './redux/configureStore';
import Register from "./components/Register/Register";
import WriteBlog from "./components/WriteBlog/WriteBlog"
const store = configureStore();
>>>>>>> 4d81f796cb07ad44f181bfbc51eb195631cafb49

class App extends React.Component {
    render() {
        return (
<<<<<<< HEAD
            <IndexBox/>
=======
            <Provider store={store}>

                <div>

                    <Route exact path="/" component={IndexBox}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/index" component={HomeIndex}/>
                    <Route path="/writeBlog" component={WriteBlog}/>
                    {/*<Route exact path='/' component={LoginBox}/>*/}
                    {/*<Route path='/register' component={RegisterBox}/>*/}
                    {/*<Route path='/home' component={HomeLayout}/>*/}

                </div>

            </Provider>
>>>>>>> 4d81f796cb07ad44f181bfbc51eb195631cafb49
        );
    }
}

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('app'));

// 热替换HMR，需要加入这段代码才会进行生效
if (module.hot) {
	module.hot.accept();
}
