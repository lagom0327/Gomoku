import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Board from './component/Board';
import Controlsize from './component/Controlsize';
import GameSteps from './component/GameSteps';
import './reset.css';
import './scss/index.scss';

const calculateWinner = (squares, x, y, player) => {
  const num = 5;
  const calcuNum = (dx, dy) => {
    let i;
    for (i = 1; i < num; i++) {
      if (!squares[y + dy * i] || !squares[y + dy * i][x + dx * i]
        || player !== squares[y + dy * i][x + dx * i]) return i - 1;
    }
    return i;
  };

  const checkDirec = (first, second) => {
    const firstN = calcuNum(first.x, first.y);
    const secondN = calcuNum(second.x, second.y);
    return (secondN === num || firstN === num
      || (secondN + firstN) >= num - 1)
      ? player : null;
  };

  const directions = [
    // 檢查水平連續相同的棋子數目
    { fist: { x: -1, y: 0 }, second: { x: 1, y: 0 } },
    // 檢查垂直連續相同的棋子數目
    { fist: { x: 0, y: 1 }, second: { x: 0, y: -1 } },
    // 檢查 m = -1 連續相同的棋子數目
    { fist: { x: -1, y: -1 }, second: { x: 1, y: 1 } },
    // 檢查 m = -1 連續相同的棋子數目
    { fist: { x: -1, y: 1 }, second: { x: 1, y: -1 } },
  ];

  const isWinner = directions.find(direction => checkDirec(direction.fist, direction.second));

  if (isWinner) return player;
  return null;
};

const NextStone = ({ oneIsNext }) => (
  <div className="player">
    <p className="player__info">Next</p>
    <div className={`player__stone player__stone-${oneIsNext ? 'black' : 'white'}`} />
  </div>
);

NextStone.propTypes = {
  oneIsNext: PropTypes.bool.isRequired,
};

const WinnerStone = ({ isBlack }) => (
  <div className="player player-winner">
    <p className="player__info">Winner</p>
    <div className={`player__stone player__stone-${isBlack ? 'black' : 'white'}`} />
  </div>
);

WinnerStone.propTypes = {
  isBlack: PropTypes.bool.isRequired,
};


class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(19).fill().map(() => Array(19).fill(null)),
      }],
      stepNumber: 0,
      oneIsNext: true,
      winner: null,
      custom: {
        x: '',
        y: '',
      },
    };
  }

  handleClick = (x, y) => {
    const { oneIsNext, stepNumber, winner } = this.state;
    let { history } = this.state;
    history = history.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = JSON.parse(JSON.stringify(current.squares.slice()));
    if (winner || squares[y][x]) {
      return;
    }

    squares[y][x] = oneIsNext ? 1 : 2;
    this.setState({
      history: history.concat([{ squares }]),
      stepNumber: history.length,
      oneIsNext: !oneIsNext,
      winner: calculateWinner(squares, x, y, squares[y][x]),
    });
  }


  handleChangeSize = e => {
    const size = Number(e.target.value);
    this.setState({
      history: [{
        squares: Array(size).fill().map(() => Array(size).fill(null)),
      }],
      stepNumber: 0,
      oneIsNext: true,
      winner: null,
      custom: {
        x: '',
        y: '',
      },
    });
  }

  handleClickCustom = () => {
    const form = document.forms.customSize;
    let x = form ? Number(form.elements.x.value) : 5;
    let y = form ? Number(form.elements.y.value) : 5;
    if (x > 19) x = 19;
    if (y > 24) y = 24;
    const custom = { x, y };
    this.setState({
      history: [{
        squares: Array(y).fill().map(() => Array(x).fill(null)),
      }],
      stepNumber: 0,
      oneIsNext: true,
      winner: null,
      custom,
    });
  }

  jumpTo = step => {
    this.setState({
      stepNumber: step,
      oneIsNext: (step % 2) === 0,
      winner: null,
    });
  }

  render() {
    const {
      history, stepNumber, oneIsNext, winner, custom: { x, y },
    } = this.state;
    const current = history[stepNumber];
    const whichsize = x ? 'custom' : history[0].squares.length;

    return (
      <div className="game">
        <h1 className="game_title">Gomoku</h1>
        {winner && <WinnerStone isBlack={winner === 1} />}
        {!winner && <NextStone oneIsNext={oneIsNext} />}
        <div className="game-wrapper">
          <Controlsize
            whichsize={whichsize}
            x={x}
            y={y}
            handleChangeSize={this.handleChangeSize}
            handleClickCustom={this.handleClickCustom}
          />
          <Board
            squares={current.squares}
            onClick={this.handleClick}
          />
          <GameSteps history={history} handleJumpTo={this.jumpTo} />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root'),
);
