import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Amplify } from 'aws-amplify';
import awsconfig from './amplifyconfiguration.json'
Amplify.configure(awsconfig)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
