/* eslint-disable no-useless-constructor */
import React from 'react';

const suffix = '被调用，this指向：';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // this.handler = this.handler.bind(this)
  }

  componentWillMount(){
    //1.before render 
    console.log(`1.1 componentWillMount${suffix}`, this);
  }

  componentDidMount() {
    //after the first time loaded 
    console.log(`1.2 componentDidMount${suffix}`, this);
  }

  componentWillReceiveProps() {
    //when received new props, 
    //not fired when the first time render
    console.log(`componentWillReceiveProps${suffix}`, this);
  }

  shouldComponentUpdate() {
    //when received new props, 
    //not be triggered when initilize or forceUpdate 
    //used when not updating app
    console.log(`shouldComponentUpdate${suffix}`, this);
    return true;
  }

  componentWillUpdate() {
    //when receiving new props and state but before render.
    console.log(`componentWillUpdate${suffix}`, this);
  }

  componentDidUpdate() {
    console.log(`componentDidUpdate${suffix}`, this);
  }

  componentWillUnmount() {
    console.log(`1.4 componentWillUnmount${suffix}`, this);
  }

  handler() {
    console.log(`handler${suffix}`, this);
  }

  render() {
    console.log(`1.0 in render${suffix}`, this);

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
