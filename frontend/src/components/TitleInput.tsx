import {withValidationInput} from "./WithValidation";
import Input from "./Input";

const requiredValidator = (value?: string | string[] | undefined) =>
  !value ? "Required" : undefined;

const minLengthValidator = (value?: string | string[] | undefined) =>
  value && value.length < 4 ? "Too Short" : undefined;

const maxLengthValidator = (value?: string | string[] | undefined) =>
  value && value.length > 50 ? "Too Long" : undefined;
/*
const difficultyValidator = (value?: string) =>
  value && !/^(?=.*\d)(?=.*[A-Za-z]).*$/.test(value)
    ? "Must contain at least one number and letter"
    : undefined;
*/

const TitleInput = withValidationInput(Input, [
  requiredValidator,
  minLengthValidator,
  maxLengthValidator,
]);

export default TitleInput;