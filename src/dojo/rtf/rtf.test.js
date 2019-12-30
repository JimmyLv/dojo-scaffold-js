import { isEmpty } from 'lodash'
import path from 'path'

const rtfParse = require('rtf-parse')

const filterChildren = i => {
  // if (!i.name || isEmpty(i.children)) {
  //   return
  // }
  return {
    name: i.name,
    value: i.value,
    children: i.children && i.children.map(i => filterChildren(i)),
  }
}

const mergeChildren = i => {
  if (i.name === undefined && i.value !== undefined) {
    // const stringValue = i.value.replace(/\n/gi, ' ')
    // if (stringValue !== '' && stringValue !== ';') {
    return { value: i.value }
    // }
  } else if (i.name === undefined && i.value === undefined) {
    if (!isEmpty(i.children)) {
      return { children: i.children.map(mergeChildren).filter(i => i) }
    }
  }
}

test('should print', async () => {
  const filepath = path.resolve('src/dojo/rtf/index.rtf')
  console.log('filepath', filepath)
  await rtfParse.parseFile(filepath).then(doc => {
    // Do anything you like with rtf.model.Document instance of your document.
    const child = doc.children[0].children
      .map(filterChildren)
      .map(mergeChildren)
      .filter(i => i)
    // .filter(i => i.children)
    // .filter(i => !i.name)
    // .map(i => i.children)
    // .filter(i => i.children.length !== 0)
    // .forEach(i => console.log('i', i))
    console.log('doc', JSON.stringify(child))
  })
})
