import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    paddingTop: '20',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
  }
})