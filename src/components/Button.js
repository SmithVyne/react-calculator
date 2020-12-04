import PropTypes from 'prop-types';

function Button({ name, clickHandler }) {
  return (
    <button type="button" onClick={() => clickHandler(name)}>{name}</button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
