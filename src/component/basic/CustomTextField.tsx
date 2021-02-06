import React from 'react';
import TextField from '@material-ui/core/TextField';

interface CustomTextFieldProps {
    label: string;
    text: string;
    value: string;
    onChange: any;
    name: string;
    helperText?: string;
    
}



function CustomTextField(props: CustomTextFieldProps) {

    

    return (
        <TextField
            fullWidth
            label= { props.label }
            helperText={props.helperText}
            value= {props.value}
            margin="dense"
            variant="outlined"
            onChange={props.onChange}
            name = { props.name}
            
        />
    )
}

export default CustomTextField
