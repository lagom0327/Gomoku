import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import '../scss/Board.scss';

class Board extends PureComponent {
  renderSquare(x, y) {
    const { squares, onClick } = this.props;
    return (
      <Square
        key={`${x}-${y}`}
        x={x}
        y={y}
        value={squares[y][x]}
        onClick={onClick}
      />
    );
  }

  render() {
    const { squares } = this.props;
    return (
      <section className="board">
        {
          squares.map((row, y) => (
            (
              // 要用甚麼當 key ?
              // eslint-disable-next-line react/no-array-index-key
              <div key={y} className="board-row">
                {row.map((col, x) => this.renderSquare(x, y))}
              </div>
            )
          ))
        }
      </section>
    );
  }
}

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;
