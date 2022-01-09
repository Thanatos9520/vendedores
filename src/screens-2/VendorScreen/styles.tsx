import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cajas: {
    //width: 150,
    //height: 150,
    //width: '',
    width: '35%',
    alignItems: 'center',
    alignContent: 'space-around',
    margin: 20,
  },
  texto: {
    textAlign: 'center',
    fontSize: 100,
    color: 'white',
  },
  centeredPressable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalPressable: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    height: 400,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    elevation: 2,
    justifyContent: 'center',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'red',
    width: 100,
    height: 40,
  },
  buttonSend: {
    backgroundColor: 'blue',
    width: 100,
    height: 40,
    padding: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 20,
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  formHeading: {
    color: '#ffffff',
  },
  buttonModalContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  inputContainer: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  vendorsContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
