import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import CommentApp from './CommentApp'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
	<div>
		<App />
		<CommentApp />
	</div>,
	document.getElementById('root'))
registerServiceWorker()
