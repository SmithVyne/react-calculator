import PropTypes from 'prop-types';

function Display({ solution }) {
  return (
    <div>
      {solution}
    </div>
  );
}

Display.defaultProps = {
  solution: '0',
};

Display.propTypes = {
  solution: PropTypes.string,
};

export default Display;
