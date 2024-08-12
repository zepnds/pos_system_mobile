import { Text } from '@rneui/base'
import { View } from 'react-native'
import useStyles from '../../../hooks/useStyles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginValidation } from '../validation'
import AppButton from '../../buttons/default'
import AppInput from '../../input/default'

export type FormLogin = {
  email: string
  password: string
}

export default function AuthLogin() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormLogin>({
    resolver: yupResolver(loginValidation),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const sx = useStyles()

  const onPress = () => {}

  return (
    <View style={sx.container}>
      <View style={sx.content}>
        <Text style={sx.title}>POS LOGIN</Text>
        <AppInput
          sx={{ input: sx.input, title: sx.title }}
          placeholder="Please enter your email"
          name="email"
          control={control}
        />
        <AppInput
          sx={{ input: sx.input, title: sx.title }}
          placeholder="Please enter your password"
          name="password"
          control={control}
        />
        <View style={{ marginTop: 15 }}>
          <AppButton sx={sx.button} onPress={onPress} title="Login" />
        </View>
      </View>
    </View>
  )
}
