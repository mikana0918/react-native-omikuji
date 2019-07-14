import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button, } from 'react-native';

export default class OmikujiApp extends Component{
  constructor(props){
  super(props)
  this.state = 
  {fortune: 'あなたの運勢',
   unsei:['大吉','中吉','吉','凶'],
   cont:false
  }
  this.onClickListener = this.onClickListener.bind(this)
  this.pickerCont = this.pickerCont.bind(this)
}

render(){
    return (
      <View style={styles.container}>
        <Text>あなたの運勢は...</Text>
        <Text style = {styles.fortuneDisp}>
        {
          this.state.unsei[this.pickerCont()]
        }
        </Text>
        <Button 
        title = 'タップして占う！'
        onPress = {this.onClickListener}/>
      </View>
    )
  
}

//onClick ListenerでボタンONでTRUEにセット
onClickListener =() =>{
  {this.setState({cont:true})}
 
}
//ボタンONで配列の中身をランダムで回し続ける関数
pickerCont = () => {
  if({cont}=true){
    //乱数を生成しつづけ、返し続ける
    const ranNum = Math.floor(Math.random() * 4) 
    return ranNum
  }

}

}

//cssタグは欄外
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fortuneDisp: {
    fontSize: 40,
    marginTop: 20,
    color: '#147efb'

  },
  tapButton: {
    marginTop: 30,
  },
})
