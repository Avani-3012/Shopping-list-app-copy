import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Alert,
} from "react-native";

export default class WelcomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastName: "",
      email: "",
      password: "",
      isModalVisible: true,
    };
  }

  showModal = () => {
    <Modal animationType="fade" isModalVisible={this.state.isModalVisible}>
     <View></View>
      <TouchableOpacity
        style={Styles.button}
        onPress={() =>
          this.setState({
            isModalVisible: false,
          })
        }
      >
        <Text>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.button}
        onPress={() => {
          this.setState({
            isModalVisible: false,
          });
        }}
      >
        <Text>Cancel</Text>
      </TouchableOpacity>
    </Modal>;
  };

  render() {
    return (
      <View style={{ backgroundColor: "#EEF6E9" }}>
        <View style={Styles.container}>
          <Text style={Styles.title}>SHOPPING LIST APP</Text>
        </View>
        <View style={{ backgroundColor: "#EEF6E9", marginBottom: 130 }}>
          <Image
            source={require("../assets/shoppingBag.jpg")}
            style={{
              alignSelf: "center",
              width: 300,
              height: 300,
              marginTop: 100,
            }}
          />
          <TextInput
            style={Styles.formTextInput}
            placeholder="Enter Email-ID"
            keyboardType={"email-address"}
          />
          <TextInput
            style={Styles.formTextInput}
            placeholder="Enter Password"
            secureTextEntry={true}
          />

          <TouchableOpacity style={Styles.button}>
            <Text>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.button} onPress={()=>{
            this.setState({
              isModalVisible:true
            })
          }}>
            <Text>SIGNUP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#62C4DC",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 10,
  },
  title: {
    fontSize: 65,
    fontWeight: "300",
    paddingBottom: 30,
    color: "black",
  },
  loginBox: {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: "#ff8a65",
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
  },
  button: {
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 640,
    marginTop: 30,
    borderRadius: 25,
    backgroundColor: "#62C4DC",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  formTextInput: {
    width: "25%",
    height: 35,
    alignSelf: "center",
    borderColor: "green",
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },
});
