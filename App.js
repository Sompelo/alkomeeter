import { useState } from 'react';
import { Alert, Button, ScrollView, Text, TextInput, View } from 'react-native';
import styles from './styles';
import RadioButton from './components/RadioButton';
import { useFonts } from 'expo-font';
import { Picker } from '@react-native-picker/picker';



export default function App() {
  const [ weight, setWeight ]   = useState(0);
  const [ bottles, setBottles ] = useState(1);
  const [ time, setTime ]       = useState(1);
  const [ gender, setGender ]   = useState('');
  const [ result, setResult ]   = useState(0);
  const [ colour, setColour ]   = useState("green");

  const [ loaded ] = useFonts({
    BungeeSpice: require('./assets/fonts/BungeeSpice-Regular.ttf')
  });

  let options = [
    {
      label: "Male", 
      value: "Male"
    }, 
    {
      label: "Female", 
      value: "Female"
    }
  ];

  const calculateAlko = () => {
    let liters    = calculateLiters( bottles );
    let grams     = calculateGrams( liters );
    let burning   = calculateBurning( weight );
    let gramsLeft = calculateGramsLeft( grams, burning )

    if( gender === 'Male' && weight > 0 && weight < 1000) {
      return gramsLeft / ( weight * 0.7 );
    } 
    else if ( gender === 'Female' && weight > 0 && weight < 1000){
      return gramsLeft / ( weight * 0.6 );
    } 
    else {
      showAlert();
      return;
    }
  }

  const calculateResult = () => {
    let resultAlko = calculateAlko();
    setResult( resultAlko );
    setColour(colourPicker( resultAlko ));
    console.log(colour);
  }

  const calculateLiters = ( bottles ) => {
    if (bottles * 0.33 < 0) return 0;
    return bottles * 0.33;
  }

  const calculateGrams = ( liters ) => {
    if (liters * 8 * 4.5 < 0) return 0;
    return liters * 8 * 4.5;
  }

  const calculateBurning = ( weight ) => {
    if (weight / 10 < 0) return 0;
    return weight / 10;
  }

  const calculateGramsLeft = ( grams, burning ) => {
    return grams - (burning * time);
  }

  const colourPicker = ( resultAlko ) => {
    console.log( resultAlko );
    if( resultAlko < 0.5 )                          return "green";
    else if (resultAlko > 0.51 && resultAlko < 1.5) return "yellow";
    else                                            return "red";
  }

  const showAlert = () => {
    Alert.alert(
      "Alert!",
      "Please give a proper values to all inputs",
      [
        {
          text: "Ok lol",
        }
      ]
    )
  }

  

  if(!loaded) {
    return null
  }
  return (
    <View style = { styles.container }>
      <ScrollView >
        <Text style = { styles.title }>Alkomeeter</Text>
        <View style = { styles.formContainer }>
          <Text style = { styles.textBold }>Weight</Text>
          <TextInput style = { styles.textNormal } keyboardType='numeric' onChangeText = { text => setWeight(text) }>{ weight }</TextInput>
          <Text style = { styles.textBold }>Bottles</Text>
          <Picker style = { styles.picker } selectedValue = { bottles } onValueChange = {( value, index ) => setBottles( value )}>
            <Picker.Item label = "1" value = "1" />
            <Picker.Item label = "2" value = "2" />
            <Picker.Item label = "3" value = "3" />
            <Picker.Item label = "4" value = "4" />
            <Picker.Item label = "5" value = "5" />
            <Picker.Item label = "6" value = "6" />
            <Picker.Item label = "7" value = "7" />
            <Picker.Item label = "8" value = "8" />
            <Picker.Item label = "9" value = "9" />
            <Picker.Item label = "10" value = "10" />
            <Picker.Item label = "11" value = "11" />
            <Picker.Item label = "12" value = "12" />
          </Picker>
          <Text style = { styles.textBold }>Time</Text>
          <Picker style = { styles.picker } selectedValue = { time } onValueChange = {( value, index ) => setTime( value )}>
            <Picker.Item label = "1" value = "1" />
            <Picker.Item label = "2" value = "2" />
            <Picker.Item label = "3" value = "3" />
            <Picker.Item label = "4" value = "4" />
            <Picker.Item label = "5" value = "5" />
            <Picker.Item label = "6" value = "6" />
            <Picker.Item label = "7" value = "7" />
            <Picker.Item label = "8" value = "8" />
            <Picker.Item label = "9" value = "9" />
            <Picker.Item label = "10" value = "10" />
            <Picker.Item label = "11" value = "11" />
            <Picker.Item label = "12" value = "12" />
          </Picker>
          <Text style = { styles.textBold }>Gender</Text>
          <RadioButton options = { options } onPress = {( value ) => setGender(value)}/>
          <Button color = { "#aa55ee" } onPress = { calculateResult } title = { "Calculate" }></Button>
            <Text style = {[ styles.result, { color: colour }]} >
              { result > 0 && result ? result.toFixed(2) : 0}
            </Text>
        </View>
      </ScrollView>
    </View>
    
  );
}