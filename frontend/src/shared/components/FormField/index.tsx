import { BaseSyntheticEvent, ReactElement } from "react";
import { FormFieldContainer, FormFieldInput, FormFieldLabel, StyledSelect, StyledTextArea } from "./styles";
import DragDropFiles from "../DragDropFile";
import { SelectChangeEvent } from "@mui/material";

const FormField = (
    {
        label, 
        type, 
        options, 
        placeHolder, 
        onChange, 
        value,
        maxLength,
    }:{
        label: string, 
        type?: string, 
        options?: ReactElement[], 
        placeHolder?: string, 
        value?:string, 
        onChange?: any,
        maxLength?: number
    }) => {

    const renderField = (fieldType: string, options?: ReactElement[]): ReactElement => {
        switch(fieldType){
            case "select": {
                return <StyledSelect onChange={handleSelectChange}>
                    {options}
                </StyledSelect>
            }
            case "file": {
                return <DragDropFiles />
            }
            case "textarea": {
                return <StyledTextArea onChange={handleChange} />
            }
            default: {
                return <FormFieldInput 
                            type={fieldType} 
                            placeholder={placeHolder} 
                            onChange={handleChange} 
                            value={value}
                            maxLength={maxLength} 
                        />
            }
        }
    }

    const handleChange = (e:BaseSyntheticEvent) => {
        if(e.target.type == "date") {
            onChange(new Date(e.target.value).toISOString());
        } else {
            onChange(e.target.value);
        }
    }

    const handleSelectChange = (e:SelectChangeEvent<unknown>) => {
        onChange(e.target.value)
    }

    return (
        <FormFieldContainer>
            <FormFieldLabel>{label}</FormFieldLabel>
            { type && renderField(type, options) }
        </FormFieldContainer>
    )
}

export default FormField;