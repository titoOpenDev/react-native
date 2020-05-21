import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  content: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  grid: {
    flexDirection: "column"
  },
  title: {
    fontSize: 30,
    fontWeight: "400"
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginBtn: {
    backgroundColor: '#e75300',
  },
  losePasswordBtn: {
    borderColor: '#e75300'
  },
  logUpBtn :{
    borderColor: '#ecf0f1'
  },
  wrapperImg: {
    flex: 2,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: '#ecf0f1'
  },
  img : {
    width: 180,
    height: 60
  },


  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    flex: 1,
  },
  
});
