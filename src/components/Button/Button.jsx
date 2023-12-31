import s from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ onClick, disabled }) {
  console.log(disabled);
  return (
    <button type="button" className={s.button} onClick={onClick} disabled={disabled}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}; 