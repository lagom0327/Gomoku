import React from 'react';
import PropTypes from 'prop-types';
import '../scss/GameSteps.scss';

const GameSteps = ({ history, handleJumpTo }) => {
  const moves = history.map((step, move) => {
    const desc = move ? `Go to move # ${move}` : 'Go to game start';
    return (
      // eslint-disable-next-line react/no-array-index-key
      <li key={move} className="game-step">
        <button
          type="button"
          onClick={() => handleJumpTo(move)}
        >
          {desc}
        </button>
      </li>
    );
  });

  return (
    <div className="game_steps">
      <ol>{moves}</ol>
    </div>
  );
};

GameSteps.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    squares: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  })).isRequired,
  handleJumpTo: PropTypes.func.isRequired,
};

export default GameSteps;
