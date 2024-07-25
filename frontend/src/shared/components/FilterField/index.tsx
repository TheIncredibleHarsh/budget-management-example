import { BaseSyntheticEvent } from "react"
import { FormFieldInput, StyledSelect } from "../FormField/styles"
import { FilterFieldContainer, StyledSpan } from "./Styles"
import { SelectChangeEvent } from "@mui/material"

const FilterField = ({label, type, onChange, options}:{label: string, type: string, onChange?: (value: any)=>void, options?: any}) => {
    
    const handleChange = (e: BaseSyntheticEvent<any>) => {
        onChange && onChange(e.target.value)
    }

    const handleSelectChange = (e:SelectChangeEvent) => {
        onChange && onChange(e.target.value)
    }

    let fieldInputParams = {
        type: type,
        height: 20,
        width: type == 'checkbox' ? 25 : 80,
        onChange: type == 'select' ? handleSelectChange : handleChange,
        options: options
    }
    return <FilterFieldContainer>
        <StyledSpan>{label}</StyledSpan>
        {renderInputField(type, fieldInputParams)}
    </FilterFieldContainer>
}

const renderInputField = (type: string, fieldInputParams: any) => {
    
    switch(type) {
        case 'select': {
            fieldInputParams.height = 30
            return <StyledSelect {...fieldInputParams}>{fieldInputParams.options}</StyledSelect>
            break
        }
        case 'checkbox': {
            return <FormFieldInput {...fieldInputParams}></FormFieldInput>
            break
        }
        default: {
            return <FormFieldInput {...fieldInputParams}></FormFieldInput>
        }
    }
}
export default FilterField