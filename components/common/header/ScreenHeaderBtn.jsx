import React from 'react'
import { TouchableOpacity, Image} from 'react-native'

import styles from './screenheader.style'

export default function ScreeHeaderBtn( {iconUrl, dimension, handlePress}) {
   return (
     <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
       <Image 
       source={iconUrl} 
       resizeMode="cover" 
       style={styles.btnImg(dimension)}/>
     </TouchableOpacity>
   );
}