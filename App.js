/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import { Alert, ListItem } from '@mui/material';
import { orange } from '@mui/material/colors';
import { border, borderRadius, style } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App  = () => {
  const [textInput , setTextInput]  = useState('')
  const [todos,setTodos] = useState([])
  const ListItem =({todo})=>{
    return (
    <View style = {styles.listItem}>
      <View style = {{flex:1}}>
        <Text style = {{fontWeight : 'bold' , fontSize : 15,color : 'black' , textDecorationLine :todo?.completed?'line-through' : 'none'}}>{todo?.task}</Text></View>
        <TouchableOpacity>
          <Text onPress={()=>deleteTodo(todo?.id)}>Delete</Text>
        </TouchableOpacity>
    </View>
    )
  }
  const addTodo = ()=>{
    if(textInput === ''){
      Alert.alert('Error' , 'please input todo')
    }else {
      const newTodo = {
        id : Math.random(),
        task : textInput,
        completed : false,
      };
      setTodos([...todos , newTodo]);
      setTextInput('');
    }
    }
   const deleteTodo =  todoId =>{
    const newTodos = todos.filter(item => item.id != todoId);
      setTodos(newTodos)
   }
   const clearTodos =  ()=>{
    Alert.alert('confirm' , 'Clear todos ?',[{
      text : 'yes',
      onPress : () => setTodos ([])
    },
    {text : 'No'}
  ] )
    setTodos ([])
   }
  return (
    <SafeAreaView>
  <View style = {styles.header}>
    <Text style = {{fontWeight : 'bold' , fontSize : 20 , color : "white" , backgroundColor:"orange"}}>TO DO APP  </Text>
    < TouchableOpacity>
    <Text title = "Delete" onPress={clearTodos}/>
    </TouchableOpacity>
  </View>
  <View style={styles.footer}>
    <View style = {styles.inputContainer}>
      <TextInput placeholder='Add Todo' onChangeText={text=>setTextInput(text)} 
      value = {textInput}
      />
      </View>
      <TouchableOpacity>
    <View style = {styles.add}>
    <Text  onPress={addTodo}   style = {{color : "white" , padding : 12}}
    >Add</Text>
    </View>
    </TouchableOpacity>
    </View>
    <FlatList 
    showsVerticalScrollIndicator = {false}
    contentContainerStyle = {{padding : 20 , paddingBottom : 100}}
    data = {todos} renderItem = {({item})=><ListItem todo ={item}/>}/>
  </SafeAreaView>
  );
};
const styles =StyleSheet.create({
  header :{
    padding:20,
    flexDirection : 'row',
    alignItems:'center',
    justifyContent : 'space-between'
  },
  footer :{
     position : 'absolute' ,
     top : 60,
     color :"white",
     width : "100%",
     flexDirection : 'row',
     alignItems : 'center',
     paddingHorizontal : 20,

  },
  inputContainer:{
    borderRadius : 30,
    marginRight : 20,
    height:50,
    flex : 1,
    marginVertical : 20,
    elevation : 40,
    backgroundColor : "white",
    paddingHorizontal : 20,
  },
  add:{
    height : 50,
    width : 50,
    backgroundColor : "black",
    borderRadius : 25,
    elevation : 40,
  },
  listItem:{
    padding : 20,
    color : "white",
    flexDirection : 'row',
    elevation : 12,
    borderRadius : 7,
    marginVertical : 10,
  }
})

export default App;
