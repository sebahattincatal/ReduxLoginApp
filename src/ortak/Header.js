 import React from 'react';
 import { Text, View } from 'react-native';

 const Header = ({ HeaderText }) => {
   const {textStyle, viewStyle} = styles;
   return (
     <View style={viewStyle}>
        <Text style={textStyle}> {HeaderText} </Text>
     </View>
   );
 };

 const styles = {
   textStyle: {
     fontSize: 40
   },
   viewStyle: {
     backgroundColor: '#a5a5a5',
     height: 40,
     justifyContent: 'center',
     alignItems: 'center',
     marginTop: 15,
     shadowOffset: { widht: 0, height: 2 },
     shadowOpacity: 0.5
   }
 };

export default Header;
