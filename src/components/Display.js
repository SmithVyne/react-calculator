import PropTypes from 'prop-types';

function Display({ total }) {
  return (
    <div>
      {total}
    </div>
  );
}

Display.defaultProps = {
  total: '0',
};

Display.propTypes = {
  total: PropTypes.string,
};

export default Display;
