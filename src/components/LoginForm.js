import React, {Component } from 'react';
import { Text, TextInput, Alert } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Button, Card, CardSection, Spinner } from '../ortak'; // tek bir dosyadan import işlemini yaptık

class LoginForm extends Component {
  state = { email: '', password: '', loading: false };

  clickLogin() {
      const { email, password } = this.props;
      this.props.loginUser({ email, password });
  }

  loginSuccess() {
    console.log('başarılı');
    this.setState({ loading: false });
  }

  loginFail() {
    console.log('başarısız');
    this.setState({ loading: false });
    Alert.alert(
      'Mesaj',
      'Kullanıcı Adı veya Şifreniz Hatalı..!',
      [
        { text: 'Tamam', onPress: () => null }
      ]
    );
  }

  renderButton() {
    if (!this.props.loading) {
      return <Button onPress={this.clickLogin.bind(this)}> Giriş Yap </Button>;
    }

    return <Spinner size="small" />;
  }

  render() {
    console.log("response email " + this.props.email);
    console.log("response password " + this.props.password);
    const { containerStyle, subContainerStyle, inputStyle } = styles;
    return (
      <Card>
        <CardSection>
          <TextInput
            placeholder="E-mail"
            style={inputStyle}
            value={this.props.email}
            onChangeText={email => this.props.emailChanged(email)}
          />
        </CardSection>

        <CardSection>
        <TextInput
          secureTextEntry
          placeholder="Şifre"
          style={inputStyle}
          value={this.props.password}
          onChangeText={password => this.props.passwordChanged(password)}
        />
        </CardSection>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  }
};

const mapStateToProps = ({ kimlikdogrulamaResponse }) => {
  const { email, password, loading } = kimlikdogrulamaResponse;
  return {
    email,
    password,
    loading
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
