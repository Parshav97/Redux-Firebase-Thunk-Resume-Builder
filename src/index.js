import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './redux/reducers/rootReducer';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore} from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBPH_EmpgOMiZMyqDhM2A2ACeuwSXyrRKI",
  authDomain: "resume-final.firebaseapp.com",
  projectId: "resume-final",
  storageBucket: "resume-final.appspot.com",
  messagingSenderId: "411717291070",
  appId: "1:411717291070:web:fa65a49300c16e12c0d56f"
};
firebase.initializeApp(firebaseConfig)
firebase.firestore()
const reduxStore = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),reduxFirestore(firebase)))



ReactDOM.render(

    <BrowserRouter>

      <Provider store={reduxStore}>
        {/* due to this thunk got extra arguments firebase and firestore besides the dispatch */}
        <ReactReduxFirebaseProvider
          firebase={firebase}
          config={firebaseConfig}
          dispatch={reduxStore.dispatch}
          createFirestoreInstance={createFirestoreInstance}
        >
        <App />
        </ReactReduxFirebaseProvider>
      </Provider>
  
    </BrowserRouter>
,
  document.getElementById('root')
);