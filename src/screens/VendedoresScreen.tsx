import axios from 'axios';
import React, {useState} from 'react';
import {
  Alert,
  Modal,
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  Button,
} from 'react-native';

//const baseUrl = 'http://localhost:3000/';
const baseUrl = 'https://jsonplaceholder.typicode.com';

const CustomPress = ({id, setCurrent, setModalVisible, text, color = 'red'}) => {

  return (
    <Pressable
    style={{...styles.cajas, ...styles.buttonOpen, backgroundColor: `${color}`}}
    onPress={() => {
      setCurrent(id);
      setModalVisible(true);
    }}>
    <Text style={styles.texto}>{text}</Text>
  </Pressable>
  )
}
export const VendedoresScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [number, setNumber] = useState('');
  const [currentClick, setCurrentClick] = useState(null);

  const onChangeNumberHandler = number => {
    setNumber(number);
  };
  const onSubmitFormHandler = async event => {
    if (!number.trim()) {
      alert('Cantidad no puede ser vacio');
      return;
    }
    // setIsLoading(false);
    try {
      const response = await axios.post(`${baseUrl}/posts`, {
        number,
        idM: currentClick,
      });
      if (response.status === 201) {
        alert(` You have created: ${JSON.stringify(response.data)}`);
        //setIsLoading(false);
        setNumber('');
      } else {
        throw new Error('An error has occurred');
      }
    } catch (error) {
      //alert('Ha ocurrido un error!');
      alert(error);
      //setIsLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <Pressable style={styles.centeredPressable}>
          <Pressable style={styles.modalPressable}>
            <Text style={styles.modalText}>Cantidad: </Text>
            <TextInput
              style={styles.textInput}
              value={number}
              onChangeText={onChangeNumberHandler}
              placeholder="Monto"
              keyboardType="numeric"
            />

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonSend]}
              onPress={onSubmitFormHandler}>
              <Text style={styles.textStyle}>Enviar</Text>
            </Pressable>
            {/* <View>
              <Button title="Submit" onPress={onSubmitFormHandler} />
            </View> */}
          </Pressable>
        </Pressable>
      </Modal>
      <Pressable
        style={{...styles.cajas, ...styles.buttonOpen, backgroundColor: 'red'}}
        onPress={() => {
          setCurrentClick(1);
          setModalVisible(true);
        }}>
        <Text style={styles.texto}>1</Text>
      </Pressable>
      <CustomPress
        color={'green'}
        id={1}
        text={1}
        setModalVisible={() => setModalVisible(true)}
        setCurrent={setCurrentClick}
      />
      <Pressable
        style={{...styles.cajas, ...styles.buttonOpen, backgroundColor: 'blue'}}
        onPress={() => {
          setCurrentClick(2);
          setModalVisible(true);
        }}>
        <Text style={styles.texto}>2</Text>
      </Pressable>
      <Pressable
        style={{...styles.cajas, ...styles.buttonOpen, backgroundColor: 'gray'}}
        onPress={() => {
          setCurrentClick(3);
          setModalVisible(true);
        }}>
        <Text style={styles.texto}>3</Text>
      </Pressable>
      <Pressable
        style={{
          ...styles.cajas,
          ...styles.buttonOpen,
          backgroundColor: 'black',
        }}
        onPress={() => {
          setCurrentClick(4);
          setModalVisible(true);
        }}>
        <Text style={styles.texto}>4</Text>
      </Pressable>
      <Pressable
        style={{
          ...styles.cajas,
          ...styles.buttonOpen,
          backgroundColor: 'green',
        }}
        onPress={() => {
          setCurrentClick(5);
          setModalVisible(true);
        }}>
        <Text style={styles.texto}>5</Text>
      </Pressable>
      <Pressable
        style={{
          ...styles.cajas,
          ...styles.buttonOpen,
          backgroundColor: 'purple',
        }}
        onPress={() => {
          setCurrentClick(6);
          setModalVisible(true);
        }}>
        <Text style={styles.texto}>6</Text>
      </Pressable>
      <Pressable
        style={{
          ...styles.cajas,
          ...styles.buttonOpen,
          backgroundColor: 'orange',
        }}
        onPress={() => {
          setCurrentClick(7);
          setModalVisible(true);
        }}>
        <Text style={styles.texto}>7</Text>
      </Pressable>
      <Pressable
        style={{
          ...styles.cajas,
          ...styles.buttonOpen,
          backgroundColor: 'silver',
        }}
        onPress={() => {
          setCurrentClick(8);
          setModalVisible(true);
        }}>
        <Text style={styles.texto}>8</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cajas: {
    width: 150,
    height: 150,
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
    marginTop: 22,
  },
  modalPressable: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: '12%',
    height: 400,
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
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'red',
    right: 100,
    top: 120,
    width: 100,
    height: 40,
  },
  buttonSend: {
    backgroundColor: 'blue',
    left: 100,
    top: 80,
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
    marginBottom: 15,
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
});
