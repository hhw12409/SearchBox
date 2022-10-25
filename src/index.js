import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Globalstyle from './GlobalStyle'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start({ onUnhandledRequest: 'bypass' })
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Globalstyle />
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
