import './App.css';

import { useDispatch } from 'react-redux';
import {useEffect} from 'react';

import { bindActionCreators } from 'redux';

import { sharedActionCreators } from './actions/index';

import routes from './routes'

function App() {
  const dispatch = useDispatch();

  const { handleInitialData } = bindActionCreators(
      sharedActionCreators,
      dispatch
  );

  useEffect(() => {
    handleInitialData();
  }, [handleInitialData]);
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
