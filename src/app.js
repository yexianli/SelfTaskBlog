import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import IndexBox from './containers/IndexBox';
=======
import ToDoAppContainer from './containers/ToDoAppContainer';
>>>>>>> b242a123b87a49c822019a2ba1aa24e0a8cee558
import configureStore from './redux/configureStore';

const store = configureStore();

class App extends React.Component {
  render(){
    return(
      <Provider store={store}>
<<<<<<< HEAD
        <IndexBox />
=======
        <ToDoAppContainer />
>>>>>>> b242a123b87a49c822019a2ba1aa24e0a8cee558
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// 热替换HMR，需要加入这段代码才会进行生效
if(module.hot)
    module.hot.accept();