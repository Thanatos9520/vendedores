import axios from 'axios';
import React, {useState} from 'react';
import {
  Alert,
  Modal,
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import styles from './styles';

//const baseUrl = 'http://localhost:3000/';
const baseUrl = 'https://jsonplaceholder.typicode.com';

const CustomPress = ({
  id,
  setCurrent,
  setModalVisible,
  text,
  color = 'red',
}) => {
  return (
    <Pressable
      style={{
        ...styles.cajas,
        ...styles.buttonOpen,
        backgroundColor: `${color}`,
      }}
      onPress={() => {
        setCurrent(id);
        setModalVisible(true);
      }}>
      <Text style={styles.texto}>{text}</Text>
    </Pressable>
  );
};
const VendedoresScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [number, setNumber] = useState('');
  const [currentClick, setCurrentClick] = useState(null);

  const onChangeNumberHandler = (i: string) => {
    setNumber(i);
  };
  const onSubmitFormHandler = async () => {
    if (!number.trim()) {
      Alert.alert('Cantidad no puede ser vacio');
      return;
    }
    // setIsLoading(false);
    try {
      const response = await axios.post(`${baseUrl}/posts`, {
        number,
        idM: currentClick,
      });
      if (response.status === 201) {
        Alert.alert(` You have created: ${JSON.stringify(response.data)}`);
        //setIsLoading(false);
        setNumber('');
      } else {
        throw new Error('An error has occurred');
      }
    } catch (error) {
      //Alert.alert('Ha ocurrido un error!');
      Alert.alert(`${error}`);
      //setIsLoading(false);
    }
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredPressable}>
            <View style={styles.modalPressable}>
              <View style={styles.inputContainer}>
                <Text style={styles.modalText}>Cantidad: </Text>
                <TextInput
                  style={styles.textInput}
                  value={number}
                  onChangeText={onChangeNumberHandler}
                  placeholder="Monto"
                  keyboardType="numeric"
                />
              </View>

              <View style={styles.buttonModalContainer}>
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
              </View>
              {/* https://www.npmjs.com/package/tp-react-native-bluetooth-printer */}
              {/* <View>
              <Button title="Submit" onPress={onSubmitFormHandler} />
            </View> */}
            </View>
          </View>
        </Modal>
        <View style={styles.vendorsContainer}>
          <CustomPress
            color={'red'}
            id={1}
            text={1}
            setModalVisible={() => setModalVisible(true)}
            setCurrent={setCurrentClick}
          />
          <CustomPress
            color={'blue'}
            id={2}
            text={2}
            setModalVisible={() => setModalVisible(true)}
            setCurrent={setCurrentClick}
          />
          <CustomPress
            color={'gray'}
            id={3}
            text={3}
            setModalVisible={() => setModalVisible(true)}
            setCurrent={setCurrentClick}
          />
          <CustomPress
            color={'black'}
            id={4}
            text={4}
            setModalVisible={() => setModalVisible(true)}
            setCurrent={setCurrentClick}
          />
          <CustomPress
            color={'green'}
            id={5}
            text={5}
            setModalVisible={() => setModalVisible(true)}
            setCurrent={setCurrentClick}
          />
          <CustomPress
            color={'orange'}
            id={6}
            text={6}
            setModalVisible={() => setModalVisible(true)}
            setCurrent={setCurrentClick}
          />
          <CustomPress
            color={'gray'}
            id={7}
            text={7}
            setModalVisible={() => setModalVisible(true)}
            setCurrent={setCurrentClick}
          />
          <CustomPress
            color={'silver'}
            id={8}
            text={8}
            setModalVisible={() => setModalVisible(true)}
            setCurrent={setCurrentClick}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default VendedoresScreen;
