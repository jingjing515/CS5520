import { View, TextInput } from 'react-native'
import {useState} from 'react'

export default function Input({sendChangedText}) {  
    const [text, setText]= useState();

    return (
    <View>
    <TextInput 
    value ={text} 
    onChangeText={(changedText)=>{
        setText(changedText);
        sendChangedText(changedText);
    }}
    style ={{ backgroundColor:"#eee"}}
    />
    </View>
  );
}