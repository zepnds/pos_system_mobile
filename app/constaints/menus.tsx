import React from 'react'
import { ImageSourcePropType } from 'react-native'
interface Menus {
  id: number
  icon: ImageSourcePropType
  label: string
}

const menus: Array<Menus> = [
  {
    id: 2,
    icon: require('../assets/icons/account.png'),
    label: 'profile',
  },
  {
    id: 3,
    icon: require('../assets/icons/settings.png'),
    label: 'settings',
  },
  {
    id: 4,
    icon: require('../assets/icons/product.png'),
    label: 'product',
  },
]

export default menus
