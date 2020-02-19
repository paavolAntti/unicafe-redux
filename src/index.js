import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }
  const ok = () => {
	  store.dispatch({
		  type: 'OK'
	  })
  }
  const bad = () => {
	  store.dispatch({
		  type:'BAD'
	  })
  }
  const zero = () => {
	  store.dispatch({
		  type: 'ZERO'
	  })
  }
  const showAll = (
	store.getState().good + store.getState().ok + store.getState().bad
  )

  const showAverage = (
	(store.getState().good-store.getState().bad) / showAll
  )

  const showPositivePercent = (
	  (store.getState().good / showAll) * 100
  )
if (showAll <= 0) {
	return (
		<div>
			<button onClick={good}>hyvä</button> 
      		<button onClick={ok}>neutraali </button> 
      		<button onClick={bad}>huono</button>
      		<button onClick={zero}>nollaa tilastot</button>
		</div>
	)
}
  return (
    <div>
      <button onClick={good}>hyvä</button> 
      <button onClick={ok}>neutraali </button> 
      <button onClick={bad}>huono</button>
      <button onClick={zero}>nollaa tilastot</button>
	  <table>
		<tr>
			<th>hyvä</th>
			<td>{store.getState().good}</td>
		</tr>
		<tr>
			<th>neutraali</th>
			<td>{store.getState().ok}</td>
		</tr>
		<tr>
			<th>huono</th>
			<td>{store.getState().bad}</td>
		</tr>
		<tr>
			<th>kaikki</th>
			<td>{showAll}</td>
		</tr>
		<tr>
			<th>keskiarvo</th>
			<td>{showAverage}</td>
		</tr>
		<tr>
			<th>myönteiset</th>
			<td>{showPositivePercent} %</td>
		</tr>
	  </table>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)