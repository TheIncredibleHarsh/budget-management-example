import { ReactElement } from "react";
import { FormFieldContainer, FormFieldInput, FormFieldLabel, StyledSelect, StyledTextArea } from "./styles";
import DragDropFiles from "../DragDropFile";

const FormField = ({label, type, options}:{label: string, type?: string, options?: ReactElement[]}) => {

    return (
        <FormFieldContainer>
            <FormFieldLabel>{label}</FormFieldLabel>
            { type && renderField(type, options) }
        </FormFieldContainer>
    )
}

const renderField = (fieldType: string, options?: ReactElement[]): ReactElement => {
    console.log(options)
    switch(fieldType){
        case "select": {
            return <StyledSelect>
                {options}
            </StyledSelect>
        }
        case "file": {
            return <DragDropFiles />
        }
        case "textarea": {
            return <StyledTextArea />
        }
        default: {
            return <FormFieldInput type={fieldType}/>
        }
    }
}

export default FormField;