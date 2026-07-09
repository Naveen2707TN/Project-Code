
interface data{
    type: string,
    value: string,
    onchange: React.ChangeEventHandler<HTMLInputElement>,
    placeholder: string,
    fieldName: string,
    fieldShow: boolean,
    name: string
}

function InputField(props : data) {
  return (
    <div>
        {props.fieldShow && (<label>{props.fieldName}</label>)}
        <input type={props.type} value={props.value} placeholder={props.placeholder} onChange={props.onchange} name={props.name} />
    </div>
  )
}

export default InputField