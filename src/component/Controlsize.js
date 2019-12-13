import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import '../scss/Controlsize.scss';

const CustomInput = ({ x, y, handleClickCustom }) => (
  <form
    className="customSize-form"
    name="customSize"
  >
    <input
      type="number"
      className="customSize-form__input"
      value={x}
      min="5"
      max="24"
      name="x"
      onChange={handleClickCustom}
    />
    <span className="customSize-form__multi-sign">X</span>
    <input
      type="number"
      className="customSize-form__input"
      value={y}
      name="y"
      min="5"
      max="24"
      onChange={handleClickCustom}
    />
  </form>
);

CustomInput.propTypes = {
  x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  y: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  handleClickCustom: PropTypes.func.isRequired,
};

class Controlsize extends PureComponent {
  render() {
    const {
      whichsize, x, y, handleChangeSize, handleClickCustom,
    } = this.props;

    return (
      <div className="controlsize">
        <button
          type="button"
          value="19"
          className={`controlsize__item ${whichsize === 19 ? 'controlsize__item--active' : ''}`}
          onClick={handleChangeSize}
        >
          19 X 19
        </button>
        <button
          type="button"
          value="10"
          className={`controlsize__item ${whichsize === 10 ? 'controlsize__item--active' : ''}`}
          onClick={handleChangeSize}
        >
          10 X 10
        </button>
        <button
          type="button"
          className={`controlsize__item ${whichsize === 'custom' ? 'controlsize__item--active' : ''}`}
          onClick={handleClickCustom}
        >
          <h4 className="customSize-form__title">Custom Size</h4>
          {x && <CustomInput x={x} y={y} handleClickCustom={handleClickCustom} />}
        </button>
      </div>
    );
  }
}

Controlsize.propTypes = {
  whichsize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  y: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  handleChangeSize: PropTypes.func.isRequired,
  handleClickCustom: PropTypes.func.isRequired,
};

export default Controlsize;
