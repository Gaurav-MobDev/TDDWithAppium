import React from "react";
import { View, KeyboardAvoidingView, Platform } from "react-native";
import Style from "./style";
import CInputField from "../components/CInputField";
import CButton from "../components/CButton";
import { Constants } from "../utilities";
const { testIds, strings } = Constants;
class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  doLogin = () => {
    alert("Logged In");
  };
  render() {
    return (
      <View style={Style.container}>
        <KeyboardAvoidingView
          style={Style.keyboardAvoidingView}
          behavior={Platform.OS === "ios" ? "position" : "height"}
          keyboardVerticalOffset={Style.keyboardVerticalOffset.top}
        >
          <View style={Style.innerContainer}>
            <View style={Style.inputContainer}>
              <CInputField
                title={strings.emailPlaceholder}
                accessibilityLabel={testIds.email}
                blurOnSubmit={false}
                placeHolderText={strings.emailPlaceholder}
              />
              <CInputField
                title={strings.passwordPlaceholder}
                accessibilityLabel={testIds.password}
                blurOnSubmit={true}
                placeHolderText={strings.passwordPlaceholder}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
        <View style={Style.buttonsContainer}>
          <CButton
            accessibilityLabel={testIds.login}
            text={strings.loginButton}
            textStyle={Style.whiteText}
            onPress={this.doLogin}
          />
        </View>
      </View>
    );
  }
}

export default SignIn;
