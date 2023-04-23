// ** React Imports
import ReactDOM from 'react-dom/client'

// ** Components Imports
import App from './App.tsx'

// ** Store Imports
import { Provider } from 'react-redux'
import { store } from './store/index.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
