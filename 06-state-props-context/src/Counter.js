import React, { Component, PropTypes } from 'react';

function Content(props) {
  return <p>Content组件的props.value：{props.value}</p>;
}

Content.propTypes = {
  value: PropTypes.number.isRequired
  //P33

  /**
  React.PropTypes.array           // 陣列

React.PropTypes.bool.isRequired // Boolean 且必要。

React.PropTypes.func            // 函式

React.PropTypes.number          // 數字

React.PropTypes.object          // 物件

React.PropTypes.string          // 字串

React.PropTypes.node            // 任何類型的: numbers, strings, elements 或者任何這種類型的陣列

React.PropTypes.element         // React 元素

React.PropTypes.instanceOf(XXX) // 某種XXX類別的實體

React.PropTypes.oneOf(['foo', 'bar']) // 其中一個字串

React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.array]) // 其中一種格式類型

React.PropTypes.arrayOf(React.PropTypes.string)  // 某種類型的陣列(字串類型)

React.PropTypes.objectOf(React.PropTypes.string) // 具有某種屬性類型的物件(字串類型)

React.PropTypes.shape({                          // 是否符合指定格式的物件

  color: React.PropTypes.string,
  fontSize: React.PropTypes.number
});
React.PropTypes.any.isRequired  // 可以是任何格式，且必要。


// 自定義格式(當不符合的時候，會顯示Error) 

// 不要用`console.warn` 或者 throw, 因为它在`oneOfType` 的情况下無效。






PropTypes.array.isRequired
PropTypes.bool.isRequired
PropTypes.func.isRequired
PropTypes.number.isRequired
PropTypes.object.isRequired
PropTypes.string.isRequired

PropTypes.node.isRequired

PropTypes.element.isRequired

PropTypes.instanceOf(Message).isRequired

PropTypes.oneOf(['New', 'Photo'])

PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
    React.PropTypes.instanceOf(Message)
  ])

PropTypes.PropTypes..arrayOf(React.PropTypes.number);

TODO
  */
};

export default class Counter extends Component {
  constructor() {
    super();
    this.state = { value: 0 };
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ value: this.state.value + 1 })}>
          INCREMENT
        </button>
        <br/><br/>
        Counter组件的内部状态：
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <Content value={this.state.value}/>
      </div>
    );
  }
}
