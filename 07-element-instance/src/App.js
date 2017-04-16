/* eslint-disable no-useless-constructor */
import React from 'react';

const suffix = '被调用，this指向：';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // this.handler = this.handler.bind(this)
  }

  componentWillMount(){
    //1.before render . only once
    console.log(`1.0 componentWillMount${suffix}`, this);
  }

  componentDidMount() {
    //after the first time loaded , only once
    console.log(`1.2 componentDidMount${suffix}`, this);
  }

  componentWillReceiveProps() {
    //when received new props, 
    //not fired when the first time render
    console.log(`componentWillReceiveProps${suffix}`, this);
  }

  shouldComponentUpdate() {
    //2.1 when received new props, 
    //not be triggered when initilize or forceUpdate 
    //used when not updating app
    console.log(`2.1 shouldComponentUpdate${suffix}`, this);
    return true;
  }

  componentWillUpdate() {
    //when receiving new props and state but before render.
    console.log(`2.2 componentWillUpdate${suffix}`, this);
  }

  componentDidUpdate() {
    //1.3 when reload or updated
    console.log(`1.3 - 2.3 componentDidUpdate${suffix}`, this);
  }

  componentWillUnmount() {
    console.log(`1.4 componentWillUnmount${suffix}`, this);
  }

  handler() {
    console.log(`handler${suffix}`, this);
  }

  render() {
    console.log(`1.1 in render${suffix}`, this);

    this.handler();
    window.handler = this.handler;
    window.handler();


    return (
      <div>
        <h1 onClick={this.handler}>Hello world</h1>
        <p>不清楚组件、ReactElement、组件实例以及组件中的this是什么？打开控制台看看就明白了！</p>
      </div>
    );
  }
}
