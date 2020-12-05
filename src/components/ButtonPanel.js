import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel(props) {
  function handleClick(buttonName) {
    return props.clickHandler(buttonName);
  }

  return (
    <div className="buttonPanel">
      <div className="topButtons">
        <Button name="AC" clickHandler={handleClick} />
        <Button name="+/-" clickHandler={handleClick} />
        <Button name="%" clickHandler={handleClick} />
        <Button name="÷" clickHandler={handleClick} orange={true} />

        <Button name="7" clickHandler={handleClick} />
        <Button name="8" clickHandler={handleClick} />
        <Button name="9" clickHandler={handleClick} />
        <Button name="x" clickHandler={handleClick} orange={true} />

        <Button name="4" clickHandler={handleClick} />
        <Button name="5" clickHandler={handleClick} />
        <Button name="6" clickHandler={handleClick} />
        <Button name="-" clickHandler={handleClick} orange={true} />

        <Button name="1" clickHandler={handleClick} />
        <Button name="2" clickHandler={handleClick} />
        <Button name="3" clickHandler={handleClick} />
        <Button name="+" clickHandler={handleClick} orange={true} />
      </div>
      <div className="buttomButtons">
        <Button name="0" clickHandler={handleClick} />
        <Button name="." clickHandler={handleClick} />
        <Button name="=" clickHandler={handleClick} orange={true} />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
