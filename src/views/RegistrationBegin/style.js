import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";
const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  grid: {
    flexDirection: "column"
  },
  spaceAround: {
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 30,
    fontWeight: "400"
  },
  loginBtn: {
    backgroundColor: '#e75300',
  },
  imageContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: '#ecf0f1'
  },
  img : {
    width: 180,
    height: 60
  },
  message: {
    padding: 5,
    width : width / 1.5,
    
  }
  
});
