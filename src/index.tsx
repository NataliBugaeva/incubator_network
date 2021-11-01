import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*import {store, StateType} from './redux/state';*/
import store, {RootState} from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./StoreContext";
//import {StateType} from "./types";


let rerenderEntireTree = (state: RootState) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                   {/* <App  store={store}
                          state={store.getState()}
                          dispatch={store.dispatch.bind(store)}/>*/}
                          <App/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
