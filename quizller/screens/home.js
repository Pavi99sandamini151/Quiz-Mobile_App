import React from 'react';
import { StyleSheet , Text , View , TouchableOpacity , Image} from 'react-native';
import Title from '../components/title';

const Home = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Title titleText = 'QUIZZLER'/>
      <View style={styles.bannerContainer}>
        <Image source={{uri:'https://storyset.com/illustration/exams/bro'}}
        style= {styles.banner} 
        resizeMode= "contain" />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("Quiz")}  style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container:{
    paddingTop:40,
    paddingHorizontal:20,
    height:'100%',
  },
  banner:{
    height:300,
    width:300,

  },
  bannerContainer:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
  },
  button:{
    width:'100%',
    backgroundColor:"#007200",
    padding:16,
    borderRadius:16,
    alignItems:"center",
    marginBottom:30,
  },
  buttonText:{
    fontSize:24,
    fontWeight:'600',
    color:'#fff',

  }
});