import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import { Button, InputItem } from 'antd-mobile';
import { increment, decrement, changed } from '@/redux/counter';
import styles from './index.scss';

@connect(
  state => state.counter,
  { increment, decrement, changed }
)
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleAddClick = () => {
    this.props.increment();
  }

  handleMinusClick = () => {
    this.props.decrement();
  }

  handleCountChange = (value) => {
    this.props.changed(value);
  }

  render() {
    const { count } = this.props;
    return (
      <div>
        <h3>{count}</h3>
        <div>
          <Button onClick={this.handleMinusClick}>减少</Button>
          <InputItem
            type="text"
            placeholder="你也可以输入"
            value={count}
            onChange={this.handleCountChange}
          >数量
          </InputItem>
          <Button type="primary" onClick={this.handleAddClick}>增加</Button>
        </div>
      </div>
    );
  }
}

export default CSSModules(Counter, styles);

// const mapStateToProps = state => state.counter;

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
//     changed: (count) => dispatch(changed(count))
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CSSModules(Counter, styles));
