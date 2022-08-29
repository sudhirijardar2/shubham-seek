/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  TouchableOpacity

} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Drop from 'react-native-vector-icons/AntDesign';
const Register = ({ navigation }) => {
  const des = "An OTP will be sent on given number for verification. \n"
  return (<>
    <ScrollView>
      <View
        style={{
          top: 125,

          justifyContent: "center",
          alignItems: "center"
        }}>
        <Image style={{ width: 140, height: 28 }}

          source={require('../assets/Logo.png')}
        />
      </View>

      <View style={{ marginHorizontal: 20 }} >
        <View style={{
          flexDirection: 'row', marginTop: 60, justifyContent: 'space-between', justifyContent: "center",
          alignItems: "center", top: 125, borderColor: '#79747E', borderWidth: 1, borderRadius: 12, padding: 5
        }}>
          <Image style={{ marginLeft: 355, bottom: -1.0, left: 7 }}

            source={require('../assets/🇮🇳.png')}
          />
          <Text style={{ fontSize: 16, fontWeight: "400", marginLeft: 12 }}>+91</Text>
          <Drop name="caretdown" size={13} color="#757575" style={{ left: 3, bottom: 0.3 }} />
          {/* <Text style={{fontSize:30}}>|</Text> */}

          <View style={{ borderLeftWidth: 1, borderColor: '#79747E', marginLeft: 10, height: '120%' }}>

          </View>
          <View style={{ marginRight: 450, marginLeft: 15, width: '40%' }}>
            <TextInput placeholder='Mobile Number' keyboardType='number-pad'></TextInput>
          </View>


        </View>
        <View style={{
          marginTop: 20, justifyContent: 'space-between',
          top: 125, borderColor: '#79747E', borderWidth: 1, borderRadius: 12, padding: 5
        }}>
          <TextInput style={{ marginLeft: 10 }} placeholder='Referral code (Optional)' keyboardType='number-pad'></TextInput>
        </View>

        <View style={{
          marginTop: 20,
          top: 120
        }} >
          <Text style={{ fontSize: 13, color: '#757575', lineHeight: 18 }}>{des}</Text>
          <Text style={{ bottom: 10 }}>Standard message and data rates apply</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Otp")}
          style={{ alignItems: 'center', marginTop: 20, borderRadius: 20, padding: 20, backgroundColor: '#3672E9', borderColor: '#5E17EB', width: '100%', top: 125 }}>
          <Text style={{ color: '#ffffff', fontSize: 16, fontFamily: 'Poppins-Regular', fontWeight: '500' }}>Login/Signup</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 20 }}>
          <View style={{ borderColor: '#757575', borderTopWidth: 1, top: 125, marginTop: 20, width: '45%', }}>
            <Text style={{ position: 'absolute', left: 160, top: -10, fontSize: 14, marginLeft: 10 }}>or</Text>

          </View>
          <View style={{ borderColor: '#757575', borderTopWidth: 1, width: '45%', position: 'absolute', left: 170, top: -15, marginLeft: 20, marginTop: 160 }}>

          </View>

        </View>

        <TouchableOpacity style={{ marginTop: 30, borderRadius: 5, padding: 20, backgroundColor: 'white', borderColor: '#E3E3E3', width: '100%', flexDirection: 'row', top: 125, borderRadius: 12, borderWidth: 1 }}>
          <Image
            style={{ height: 25, width: 25 }}
            source={require('../assets/google.png')}
          />
          <Text style={{ color: 'black', fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '500', marginLeft: 70 }}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 10, borderRadius: 5, padding: 20, backgroundColor: 'white', borderColor: '#E3E3E3', width: '100%', flexDirection: 'row', top: 125, borderRadius: 12, borderWidth: 1 }}>
          <Image
            style={{ height: 25, width: 25 }}
            source={require('../assets/facebook.png')}
          />
          <Text style={{ color: 'black', fontSize: 14, fontFamily: 'Poppins-Regular', fontWeight: '500', marginLeft: 70 }}>Continue with Google</Text>
        </TouchableOpacity>

      </View>
      <View style={{ height: 400 }}></View>
    </ScrollView>
  </>
  )
}
export default Register;