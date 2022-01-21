import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#EEEEEE',
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 20,
    borderRadius:50,
    fontSize: 30,
    width: 80,
    height: 80,
    textAlign: 'center',
  },
  Text: {
    padding: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
  },
  textinput:{
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 50, 
    padding: 8,
    width: 300,
    backgroundColor: 'lightgray',
  },
  Inputlabel:{
    padding: 5,
    fontSize: 17,
    fontWeight : 'bold',
    color: 'black',
  }


});

const listStyle = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  text:{
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 20,
    padding: 15, margin: 15,
    color : 'red',
    fontWeight: 'bold',
    backgroundColor: 'skyblue',
    flex: 1,
    justifyContent: 'center'
  },

})

export {styles, listStyle};
