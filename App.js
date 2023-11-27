import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { CheckBox, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';






export default function App() {


  const [text, onChangeText] = React.useState('Eg.Mumbai ');
  const [number, onChangeNumber] = React.useState('');

  const [isSelected, setSelection] = useState(false);
  const [fontsLoaded] = useFonts({
    'ReenieBeanie-Regular': require('./assets/font/Reenie_Beanie/ReenieBeanie-Regular.ttf'),
    'KumbhSans-SemiBold': require('./assets/font/Kumbh_Sans/static/KumbhSans-SemiBold.ttf'),
    'KumbhSans-Bold': require('./assets/font/Kumbh_Sans/static/KumbhSans-Bold.ttf'),
    'KumbhSans-ExtraBold': require('./assets/font/Kumbh_Sans/static/KumbhSans-ExtraBold.ttf'),
    'KumbhSans-Black': require('./assets/font/Kumbh_Sans/static/KumbhSans-Black.ttf'),
  });
  const onPress = () => {
    // Define the action to take when the button is pressed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>easyshirdi.com</Text>
      <Text style={styles.text2}>Luxurious travel experience</Text>
      <View style={styles.imageContainer}>
        <View >
          <Text style={styles.textv}>How are you planning to commute?</Text>
        </View>
        <View style={styles.imageRow2}>

          <TouchableOpacity style={styles.d}>
            <Image source={require('./assets/grey.png')} style={styles.imagel} />
            <Text style={styles.t}>Personal  </Text><Text style={styles.tq}>Car</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.d}>
            <Image source={require('./assets/blue.png')} style={styles.imagel} />
            <Text style={styles.t}>Rented </Text><Text style={styles.tq}>Car</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.d}>
            <Image source={require('./assets/plane.png')} style={styles.imagel} />
            <Text style={styles.t}>Train </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.d}>
            <Image source={require('./assets/train.png')} style={styles.imagel} />
            <Text style={styles.t}>Flight  </Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.imageRow3}>
      <View style={styles.checkboxContainer}  >
      
        <CheckBox  title='Do you need our car booking service?'
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox} 
         />
      </View>
      </View> */}
        <View style={styles.imageRow3}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              // checked={isSelected}
              // onPress={() => setSelection(!isSelected)}
              // containerStyle={{ padding: 0, margin: 0, borderWidth: 0, backgroundColor: 'transparent' }}

              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.checkboxTitle}>Do you need our car booking service?</Text>
          </View>
          <View>
            <Text style={styles.travel}>where are you travelling from?</Text>
            <SafeAreaView  style={styles.tl}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
              />
              {/* <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="  "
        keyboardType="numeric"
      /> */}
            </SafeAreaView>
          </View>
        </View>
        <View>
          <Text style={styles.tra}>what kind car are you looking for?</Text>
          <View style={styles.imageRow}>
            <TouchableOpacity style={styles.o}>
              <Image source={require('./assets/simple.png')} style={styles.imagee} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.o}>
              <Image source={require('./assets/twoc.png')} style={styles.imagee} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.o}>
              <Image source={require('./assets/big.png')} style={styles.imagee} />
            </TouchableOpacity>
          </View>
        </View>
        
        <TouchableOpacity onPress={onPress} style={styles.button}  >
        <Text style={styles.buttonText}>Choose Stay Options <Image source={require('./assets/R.png')}
            style={styles.image223} /></Text>
        </TouchableOpacity>

        <View style={styles.imageRow}>
          <TouchableOpacity style={styles.sd}>
            <Image source={require('./assets/cal.png')} style={styles.image228} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sd}>
            <Image source={require('./assets/car.png')} style={styles.image222} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.sd}>
            <Image source={require('./assets/stay.png')} style={styles.image222} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sd}>
            <Image source={require('./assets/food2.png')} style={styles.image2222} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sd}>
            <Image source={require('./assets/temple2.png')} style={styles.image222} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.textgrey}>Rest assured. We make sure it is luxurious</Text>
        </View>
        <View>
          <Text style={styles.textblack}>Made in Paregaon <Text style={styles.textred}> Live  </Text><Text style={styles.textexblack}>by the baap company</Text></Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tl:{
 marginLeft:0,
 marginRight:90
  },
  imagee: {
    width: 36,
    height: 36,
    marginLeft:0,
    marginRight:10
  },

  tra: {
    fontFamily: 'KumbhSans-SemiBold'
  },
  travel: {
    fontFamily: 'KumbhSans-SemiBold'
  },
  imageRow3: {
    // Add your styles for the image row container
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50
  },
  checkboxTitle: {
    marginRight: 100,
    fontFamily: 'KumbhSans-Bold',
    width: 264,
    height: 19

    // Adjust the margin as needed
  },
  checkboxContainer: {

  },
  tf: {
    fontFamily: 'KumbhSans-Bold',
    height: 19,
    width: 264,
    marginTop: 40
  },
  tq: {
    height: 32,
    width: 53,
    marginLeft: 25,
    marginTop: 0,

  },
  t: {
    height: 32,
    width: 53,
    marginLeft: 15

  },
  textv: {
    marginLeft:50
  },
  imageRow2: {
    flexDirection: 'row',


  },
  d: {
    height: 80,
    width: 84,
    backgroundColor: '#DEDEDE',
    marginRight: 5,
    marginTop: 30
  },
  imagel: {
    height: 48,
    width: 48,
    opacity: 100,
    marginLeft: 10
  },
  textv: {
    fontFamily: 'KumbhSans-Bold'
  },
  sd: {
    width: 50, // Set the desired width
    height: 50, // Set the desired height
    borderRadius: 50, // 50% border radius to make it rounded
    backgroundColor: 'white', // Background color
    shadowColor: '#00000029', // Shadow color
    shadowOffset: { width: 6, height: 6 }, // Shadow offset
    shadowRadius: 12, // Shadow radius
    shadowOpacity: 2, // Shadow opacity
    elevation: 8,
    marginTop: 60,
    marginLeft: 20// For Android shadow

  },
  image222: {
    width: 30, // Set the desired width for the image
    height: 30, // Set the desired height for the image
    resizeMode: 'contain',
    marginTop: 6,
    marginLeft: 9

  },
  image2222: {
    width: 30, // Set the desired width for the image
    height: 30, // Set the desired height for the image
    resizeMode: 'contain',
    marginTop: 9,
    marginLeft: 10

  },
  image223: {
    width: 45, // Set the desired width for the image
    height: 13, // Set the desired height for the image
    resizeMode: 'contain',
    marginTop: 20,
    // marginLeft: 5

  },
  image228: {
    width: 25, // Set the desired width for the image
    height:25, // Set the desired height for the image
    resizeMode: 'contain',
    marginTop: 15,
    marginLeft:12

  },
  container: {
    flex: 1,
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textgrey: {
    color: 'grey',
    fontSize: 15,
    marginTop: 70,
    fontFamily: 'KumbhSans-SemiBold',
    marginLeft:40
  },
  textblack: {
    color: 'black',
    fontSize: 14,
    marginTop: 10,
    fontWeight: 'bold',
    fontFamily: 'KumbhSans-SemiBold',
    marginLeft:20
  },
  textred: {
    color: 'red',
    fontSize: 14,
    fontFamily: 'KumbhSans-ExtraBold'
  },
  textexblack: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'KumbhSans-Black'
  },
  text: {
    fontWeight: 'normal',
    fontFamily: 'ReenieBeanie-Regular',
    fontSize: 41,
    color: '#06B9D1',
    marginTop: 40,
    width: 185,
    height: 41,
  },
  text2: {
    fontWeight: 'normal',
    fontFamily: 'ReenieBeanie-Regular',
    fontSize: 16,
    color: 'black',
    width: 150,
    height: 16,
  },
  imageContainer: {
    marginLeft:25,
    marginTop: 30,
    opacity: 1,
  },
  imageContainer2: {
   alignItems:'center',
   justifyContent:'center',
    opacity: 1,
  },
  image: {
    width: 402,
    height: 402,
  },
  imageRow: {
    flexDirection: 'row',
    alignItems: 'center',


  },

  text9: {
    backgroundColor: 'white',
    borderRadius: 28,
    borderWidth: 1,
    borderColor: 'black',
    width: 167,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#EDEDED',
    padding: 10,
    borderRadius: 50,
    marginTop:120,
    shadowColor: '#00000029',
    shadowOffset: { width: 12, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 16.00,
    elevation: 24,
    width: 242,
    height: 50,
    marginLeft:50
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'KumbhSans-Bold',
    marginLeft: 18,
    margin:-12
    // padding:10
    

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#CECECE',
    padding: 10,
    color: '#CECECE'
  },

  r1: {
    width: 34,
    height: 34,
    marginRight: 30,
    marginTop: 40,
    backgroundColor: 'white',
    borderRadius: 48,
    borderWidth: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});








