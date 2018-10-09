import React from 'react'
export default class BaseComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentWillMount() {
    console.log('====')
    console.log(this)
    setInterval(() => {
      this.testFn()
    }, 1000)
  }
  testFn66 = () => {
    console.log(99999)
    console.log(this)
    this.testFn()
  }
}
