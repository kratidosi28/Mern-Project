import * as Yup from "yup";
import { Messages } from "./Messages";

export function generateValidationSchema(inputs) {
    let validationObject = {}

    inputs.forEach(input => {
        let { validation, name } = input;
        if (input.validation) {
            // console.log("validation:",validation)
            let yup = (validation.number) ? Yup.number() : (validation.array) ? Yup.array() : (validation.object) ? Yup.object().nullable() : Yup.string();

            /* GENERAL */

            if (validation.required)
                yup = yup.required(Messages.validation[name].required)

            /* NUMBER TYPE */
            if (validation.number)
                yup = yup.typeError(Messages.validation[name].number)

            if (validation.positive)
                yup = yup.positive(Messages.validation[name].positive)

            if (validation.integer)
                yup = yup.integer(Messages.validation[name].integer)

            validationObject[name] = yup;
        }
    });

    return Yup.object(validationObject)
}
