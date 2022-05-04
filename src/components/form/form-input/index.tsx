import { FC } from "react";

import { FormInputProps } from "./types";

import { Group, FormInputLabel, Input } from "./styles";

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => (
  <Group>
    <Input {...otherProps} />
    {label && (
      <FormInputLabel
        shrink={Boolean(
          otherProps.value &&
            typeof otherProps.value === "string" &&
            otherProps.value.length
        )}>
        {label}
      </FormInputLabel>
    )}
  </Group>
);

export default FormInput;
