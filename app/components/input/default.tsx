import { Input } from '@rneui/base'
import { Control, Controller } from 'react-hook-form'
import { FormLogin } from '../forms/auth/login'

type nameSpace = 'email' | 'password'

type Props<T, U> = {
  sx: {
    input: U
    title: U
  }
  control: Control<FormLogin>
  placeholder: string
  name: T
}

export default function AppInput({
  sx,
  control,
  placeholder,
  name,
}: Props<nameSpace, Record<string, number | string>>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({
        field: { onChange, value, onBlur },
        formState: { errors },
      }) => (
        <Input
          errorMessage={errors[name] ? errors[name].message : ''}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          style={sx.input}
          placeholder={placeholder}
        />
      )}
    />
  )
}
