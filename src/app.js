import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, HashRouter, Route, withRouter} from 'react-router-dom';
import IndexBox from './containers/IndexBox'

class App extends React.Component {
    render() {
        return (
            <IndexBox/>
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
