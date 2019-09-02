import React from 'react'
import logo from './logo.svg'
import './App.css'
import TextTestFixture from './dojo/gildedrose/TextTestFixture'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <article>
        <h1>
          问题描述
        </h1>
        <p>
          欢迎来到”镶金玫瑰"！
          <br />
          这是一家魔兽世界里的小商店，但地段超好。老板叫艾利森，是个友善的人。我们出售的商品也都是高质量的。
          <br />
          但不妙的是，随着商品逐渐接近保质期，它们的质量也不断下滑。具体的质量下滑的逻辑，可以在 <code>GildedRose.md</code> 文件中找到。
          <br />
          我们用一个IT系统来更新库存信息。开发这个系统的程序员叫勒罗伊，他已经不在我们公司了。现在，你的任务就是要在这个系统中添加新的特性，这样我们可以销售新的商品。
          <br />
          请查看 <code>GildedRose.md</code> 文件，了解更详细的情况。
        </p>
      </article>
      <section>
        <h1>库存结果</h1>
        <p>{TextTestFixture.generate()}</p>
      </section>
    </div>
  )
}

export default App
