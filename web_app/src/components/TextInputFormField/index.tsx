//import isEmpty from 'lodash/isEmpty'
//import get from 'lodash/get'
import { TextInputFormFieldProps } from './types'
import './text-input-form-field.css'

function TextInputFormField(props: TextInputFormFieldProps) {    
    const { name, className, onChange, register, defaultValue, placeholder, inputType } = props

    //const has_error = !isEmpty(error)

    return (
        <div className="main">
          <input
              {...register(name)}
              name={name}
              type={inputType}
              className={className}
              onChange={onChange}
              placeholder={placeholder}              
              defaultValue={defaultValue}

          /> 
        </div>
    )
}

{/* { has_error &&
    <div css={error_message_css} key={1}>
    {   get(error, 'message') }
    </div>
    } */}




export default TextInputFormField


