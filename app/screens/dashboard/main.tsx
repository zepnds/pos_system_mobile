import { View, Image, Text } from 'react-native'
import menus from '../../constaints/menus'
import useStyles from '../../hooks/useStyles'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function MainDashboard() {
  const sx = useStyles()
  return (
    <View style={sx.iconSection}>
      {menus.map((men) => (
        <TouchableOpacity style={[sx.ImageSection, sx.shadowProp]} key={men.id}>
          <Image style={sx.dashboardImage} source={men.icon} alt={men.label} />
          <Text style={sx.imageText}>{men.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}
