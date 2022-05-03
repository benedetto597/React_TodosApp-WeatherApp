import {withValidationTextArea} from "./WithValidation";
import TextArea from "./TextArea";

const requiredValidator = (value?: string | string[] | undefined) =>
  !value ? "Required" : undefined;

const minLengthValidator = (value?: string | string[] | undefined) =>
  value && value.length < 4 ? "Too Short" : undefined;

const maxLengthValidator = (value?: string | string[] | undefined) =>
  value && value.length > 255 ? "Too Long" : undefined;

/*
const difficultyValidator = (value?: string) =>
  value && !/^(?=.*\d)(?=.*[A-Za-z]).*$/.test(value)
    ? "Must contain at least one number and letter"
    : undefined;
*/

const DescriptionInput = withValidationTextArea(TextArea, [
  requiredValidator,
  minLengthValidator,
  maxLengthValidator,
]);

export default DescriptionInput;