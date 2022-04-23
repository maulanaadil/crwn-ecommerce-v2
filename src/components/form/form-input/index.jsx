import PropTypes from "prop-types";

import { Group, FormInputLabel, Input } from "./styles";

const FormInput = ({ label, inputOptions: { ...otherProps } }) => (
  <Group>
    <Input {...otherProps} />
    {label && (
      <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
    )}
  </Group>
);

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  inputOptions: PropTypes.object,
};

export default FormInput;
