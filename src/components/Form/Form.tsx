import React, { Fragment } from 'react';
import {
  Controller,
  ValidationRules,
  FieldError,
  Control,
} from 'react-hook-form';

interface ValidationMap {
  [key: string]: ValidationRules;
}

interface ErrorMap {
  [key: string]: FieldError | undefined;
}

interface Props {
  children: JSX.Element | JSX.Element[];
  control: Control<any>;
  setValue: (
    name: string,
    value: any,
    config?: { shouldValidate: boolean },
  ) => void;
  errors: ErrorMap;
  validation: ValidationMap;
}

const Form = ({ children, control, setValue, errors, validation }: Props) => {
  return (
    <Fragment>
      {(Array.isArray(children) ? children : [children]).map((child, index) => {
        return child.props.name ? (
          <Controller
            key={index}
            control={control}
            render={({ value }) =>
              React.createElement(child.type, {
                ...child.props,
                onChangeText: (text: string) =>
                  setValue(child.props.name, text, { shouldValidate: true }),
                //onBlur: () => triggerValidation(child.props.name),
                blurOnSubmit: false,
                value,
                name: child.props.name,
                error: errors[child.props.name],
              })
            }
            name={child.props.name}
            rules={{ ...validation[child.props.name] }}
            defaultValue=""
          />
        ) : (
          child
        );
      })}
    </Fragment>
  );
};

export default Form;
