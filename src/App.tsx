import Layout from './components/Layout'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore
function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}

export default App
