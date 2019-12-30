import 'antd/dist/antd.css'
import React from 'react'
import { CommentBox } from './components/CommentBox'

class App extends React.Component {
  render() {
    return (
      <>
        <h1 data-testid="title">练功房前端脚手架</h1>
        <CommentBox />
      </>
    )
  }
}

export default App
