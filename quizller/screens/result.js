import React from 'react';
import { StyleSheet , Text , View , Image , TouchableOpacity} from 'react-native';
import Title from '../components/title';

const Result = ({navigation , route}) => {
  const {score} = route.params
  const resultImage = score>40 ? 'https://storyset.com/illustration/winners/bro' : 'https://storyset.com/illustration/no-data/bro'
  return(
    <View>
      <View style={styles.container}>
      <Title titleText = 'RESULTS'/>
      <Text style={styles.scoreText}>{score}</Text>
      </View>
      <View style={styles.bannerContainer}>
      <Image source={{uri:resultImage}}
        style= {styles.banner} 
        resizeMode= "contain" />
      </View>
      <View>
        <TouchableOpacity onPress={()=> navigation.navigate("Home")} style={styles.button}>
          <Text style={styles.buttonText}>Go To Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Result;

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
  },
  button:{
    maxWidth:'25%',
    backgroundColor:"#007200",
    padding:16,
    borderRadius:16,
    alignItems:"center",
    marginBottom:30,
    alignSelf:'center',
  },
  buttonText:{
    fontSize:24,
    fontWeight:'600',
    color:'#fff',

  },
  scoreText:{
    fontSize:24,
    fontWeight:'800',
    alignSelf:'center',
  },
});