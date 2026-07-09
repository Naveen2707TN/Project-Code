import React, { useState } from "react"
import InputField from "../Component/InputField/InputField"

interface initalData {
    email: string,
    pass: string,
    name: string,
}

function MainPage() {
  const [form, setData] = useState<initalData>({email: '', pass: '', name: ''});

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((prev) => ({...prev, [name]: value}));
    console.log(form);
  }

  return (
    <div>
      <InputField placeholder={"Enter the name"} value={form.name} type={'text'} fieldName="name" fieldShow={false}  onchange={onChange} name={'name'}/>
    </div>
  )
}

export default MainPage