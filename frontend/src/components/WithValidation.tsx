import * as React from "react";
import { InputType } from "../types/input";
import { InputValidatorType } from "../types/inputValidator";

interface RequiredInputProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  error?: string;
  value?: InputType;
}

interface RequiredTextAreaProps {
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  error?: string;
  value?: InputType;
}

interface ValidatedInputState {
  finalized: boolean;
}

interface ValidatedTextAreaState {
  finalized: boolean;
}

function withValidationInput<InputProps extends RequiredInputProps>(
  InputComponent: React.ComponentType<InputProps>,
  validators: InputValidatorType[] = []
) {
  return class InputWithValidation extends React.Component<
    InputProps,
    ValidatedInputState
  > {
    state: ValidatedInputState = {
      finalized: false
    };

handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ finalized: false });
      if (this.props.onChange) {
        this.props.onChange(e);
      }
    };

handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      this.setState({ finalized: true });
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    };

render() {
const { error, value } = this.props;
      
const firstInvalidValidator = validators.find(
        validate => !!validate(value)
      );
      
const validationError =
        this.state.finalized && firstInvalidValidator
          ? firstInvalidValidator(value)
          : undefined;
return (
        <InputComponent
          {...this.props}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          error={error || validationError}
        />
      );
    }
  };
}

function withValidationTextArea<TextAreaProps extends RequiredTextAreaProps>(
  InputComponent: React.ComponentType<TextAreaProps>,
  validators: InputValidatorType[] = []
) {
  return class InputWithValidation extends React.Component<
    TextAreaProps,
    ValidatedTextAreaState
  > {
    state: ValidatedTextAreaState = {
      finalized: false
    };

handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      this.setState({ finalized: false });
      if (this.props.onChange) {
        this.props.onChange(e);
      }
    };

handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      this.setState({ finalized: true });
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    };

render() {
const { error, value } = this.props;
      
const firstInvalidValidator = validators.find(
        validate => !!validate(value)
      );
      
const validationError =
        this.state.finalized && firstInvalidValidator
          ? firstInvalidValidator(value)
          : undefined;
return (
        <InputComponent
          {...this.props}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          error={error || validationError}
        />
      );
    }
  };
}
export {
  withValidationInput,
  withValidationTextArea
};