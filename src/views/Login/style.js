import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";

const { width } = Dimensions.get("window");

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
    marginTop: 15,
    width: width / 1.5,
    height: 45,
    justifyContent: "center",
    backgroundColor: '#e75300',
  },
  losePasswordBtn: {
    marginTop: 15,
    width: width / 1.5,
    height: 45,
    justifyContent: "center",
    borderColor: '#e75300'
  },
  logUpBtn :{
    marginTop: 15,
    width: width / 1.5,
    height: 45,
    justifyContent: "center",
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
  }
  
});
