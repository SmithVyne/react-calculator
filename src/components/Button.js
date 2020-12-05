import PropTypes from 'prop-types';

function Button({ name, clickHandler, orange }) {
  return (
    <button className={orange ? 'orangeBg' : ''} type="button" onClick={() => clickHandler(name)}>{name}</button>
  );
}

Button.defaultProps = {
  orange: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  orange: PropTypes.bool,
};

export default Button;
