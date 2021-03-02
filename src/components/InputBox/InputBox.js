import React from 'react';
import Proptypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

/**
 * Home
 * @param {Object} props
 * @returns {Node}
 */
const InputBox = (props) => {
  const { type, onChange, helperText, autoFocus, onBlur, id } = props;
  return (
    <section>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label={type}
        name={type}
        autoComplete={type}
        type={type}
        autoFocus={autoFocus}
        onChange={onChange}
        helperText={helperText}
        error={!!helperText}
        onBlur={onBlur}
        id={id}
      />
    </section>
  );
};

InputBox.propTypes = {
  type: Proptypes.string.isRequired,
  onChange: Proptypes.func.isRequired,
  helperText: Proptypes.string,
  autoFocus: Proptypes.bool,
  onBlur: Proptypes.func.isRequired,
  id: Proptypes.string.isRequired,
};

InputBox.defaultProps = {
  autoFocus: false,
  helperText: '',
};

export default InputBox;
