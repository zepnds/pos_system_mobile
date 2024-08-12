import { StyleSheet, Text, TouchableOpacity } from 'react-native'

type Props = {
  title: string
  onPress: () => void
  sx: Record<string, string | number>
}
const AppButton = (props: Props) => {
  return (
    <TouchableOpacity style={props.sx} onPress={props.onPress}>
      <Text style={sx.title}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default AppButton

const sx = StyleSheet.create({
  title: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
})
