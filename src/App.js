import React, { useState, useEffect } from 'react'

const App = (props) => {
  const [state, setState] = useState(props)
  const { name, price } = state

  useEffect(() => {
    console.log('This is like componentDidMount or componentDidUpdate')
  })

  // 一度だけ呼ぶことができる
  useEffect(() => {
    console.log('This is like componentDidMount')
  }, [])
  // 指定の変更だけ呼ぶことができる
  useEffect(() => {
    console.log('This callback is for name only')
  }, [name])

  return (
    <React.Fragment>
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={() => setState({...state, price: price + 1000})}>+1000</button>
      <button onClick={() => setState({...state, price: price - 1000})}>-1000</button>
      <button onClick={() => setState(props)}>reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value})}/>
    </React.Fragment>
  )
}

App.defaultProps = {
  name: 'ken',
  price: 1000
}

export default App
