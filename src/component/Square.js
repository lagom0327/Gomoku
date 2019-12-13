import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Square extends PureComponent {
  handleClick = () => {
    const { x, y, onClick } = this.props;
    onClick(x, y);
  }

  render() {
    const { value } = this.props;
    let stoneColor = '';
    if (value) {
      stoneColor = value === 1 ? 'black' : 'white';
    }
    return (
      <button
        type="button"
        className="board-row__square"
        onClick={this.handleClick}
      >
        <span className={`board-row__stone board-row__stone--${stoneColor}`} />
      </button>
    );
  }
}

Square.defaultProps = {
  value: null,
};

Square.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  value: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

export default Square;
