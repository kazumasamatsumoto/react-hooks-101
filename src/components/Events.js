import React, { useContext } from 'react'
import Event from './Event'
import AppContext from '../contexts/AppContext'

const Events = () => {
  // Providerからデータを受け取るuseContext
  const { state } = useContext(AppContext)
  return (
    <React.Fragment>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディ</th>
            <th>削除</th>
          </tr>
        </thead>
        <tbody>
          { state.events.map((event, index) => (<Event key={index} event={event} />))}
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default Events