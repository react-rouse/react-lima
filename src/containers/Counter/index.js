import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import styles from  './index.scss';
import { increment, decrement, changed } from '../../redux/counter.redux';

@connect(
  state => state.counter,
  { increment, decrement, changed  }
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

  handleCountChange = (e) => {
    this.props.changed(e.target.value);
  }

  render() {
    const {count} = this.props;
    return (
      <div>
        <h3>{count}</h3>
        <div>
          <button onClick={this.handleMinusClick}>减少</button>
          <input type="text" value={count} onChange={this.handleCountChange} />
          <button onClick={this.handleAddClick}>增加</button>
        </div>
      </div>
    );
  }
};

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
