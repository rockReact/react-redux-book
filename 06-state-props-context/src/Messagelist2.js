import React, { Component, PropTypes } from 'react';

function Button(props, context) {{1.1}
  return (
    <button style={{ background: context.color }}>{1.2}
      {props.children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired
};
{1.3}
Button.contextTypes = {
  color: PropTypes.string.isRequired
};

function Message(props) {
  return (
    <li>
      {props.text} <Button>Delete</Button>
    </li>
  );
}

Message.propTypes = {
  text: PropTypes.string.isRequired
};

class MessageList extends Component {
  getChildContext() {     {2.1}
    return { color: 'gray' };
  }

  render() {
    const messages = [
      { text: 'Hello React' },
      { text: 'Hello Redux' }
    ];
    const children = messages.map((message, key) =>
      <Message key={key} text={message.text}/>
    );
    return (
      <div>
        <p>通过context将color跨级传递给里面的Button组件</p>
        <ul>
          {children}
        </ul>
      </div>
    );
  }
}
{2.2}
MessageList.childContextTypes = {
  color: PropTypes.string.isRequired
};

export default MessageList;
