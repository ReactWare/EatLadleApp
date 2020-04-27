import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import stripe from 'tipsi-stripe'
import Button from '../components/Button'
import axios from 'axios';

export default class CardFormScreen extends PureComponent {
  static title = 'Card Form'

  state = {
    loading: false,
    token: null,
    success: null,
    response: null
  }

  // this function requests the backend to charge the credit card passing the token we got previously
  doPayment = async () => {
    const { token } = this.state;
    axios.post('https://us-central1-copper-eye-264307.cloudfunctions.net/api/create-charge/', { 
      source: token 
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          success: responseJson.status == 'succeeded' ? true : false,
          response: responseJson
        })
      })
      .catch((error) => {
        console.error(error);
      });;
  }

  // this function opens an input form to take card details, and requests a token to Stripe's server
  handleCardPayPress = async () => {
    try {
      this.setState({ loading: true, token: null })
      const token = await stripe.paymentRequestWithCardForm({
        // Only iOS support this options
        smsAutofillDisabled: true,
        requiredBillingAddressFields: 'full',
        prefilledInformation: {
          billingAddress: {
            name: 'Gunilla Haugeh',
            line1: 'Canary Place',
            line2: '3',
            city: 'Macon',
            state: 'Georgia',
            country: 'US',
            postalCode: '31217',
            email: 'ghaugeh0@printfriendly.com',
          },
        },
      });

      this.setState({ loading: false, token });
    } catch (error) {
      this.setState({ loading: false })
    }
  }

  render() {
    const { loading, token, success } = this.state

    return (
      <View style={styles.container}>
        <Button
          text="Enter Card"
          loading={loading}
          onPress={this.handleCardPayPress}
        />
        <View
          style={styles.token}
        >
          
          <View>
            <Button
              text="Make Payment"
              loading={loading}
              onPress={this.doPayment}
            />
          </View>
          {token && <Text style={styles.instruction}>
              Token: {token.tokenId}
            </Text>}
          {success &&
            <View>
              <Text style={styles.instruction}>
                Status: {response.status}
              </Text>
              <Text style={styles.instruction}>
                ID: {response.id}
              </Text>
              <Text style={styles.instruction}>
                Amount: {response.amount}
              </Text>
            </View>
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instruction: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  token: {
    height: 20,
  },
})