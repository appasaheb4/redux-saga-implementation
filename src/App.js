import {Provider} from 'react-redux';

import MyWork from './my-work.js';

// redux
import makeStore from './redux';

function App() {
  const store = makeStore();
  return (
    <Provider store={store}>
      <MyWork />
    </Provider>
  );
}

export default App;
