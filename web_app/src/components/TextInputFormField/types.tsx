export interface TextInputFormFieldProps {
    //onSubmit: () => void;
    name: string,
    className?: string,
    onChange?: () => void,
    register: (name: string) => { name: string },
    defaultValue?: string,
    placeholder?: string,
    inputType?: string
}
