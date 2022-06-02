import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import getFirestoreApp from './FireBase/config'
// import './index.css'

getFirestoreApp()


ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)