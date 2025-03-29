import { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ConfirmPayment = () => {
  const [pin, setPin] = useState('');

  const handlePayment = async () => {
    if (!pin) return Alert.alert('Enter PIN to proceed');

    const storedBalance = await AsyncStorage.getItem('walletBalance');
    const currentBalance = storedBalance ? parseFloat(storedBalance) : 0;
    const paymentAmount = 2000; // Assume QR scanned amount

    if (currentBalance < paymentAmount) return Alert.alert('Insufficient balance');

    await AsyncStorage.setItem('walletBalance', (currentBalance - paymentAmount).toString());
    Alert.alert('Payment Successful!', `Paid ₹${paymentAmount}`);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Enter PIN to Confirm Payment:</Text>
      <TextInput
        placeholder="PIN"
        secureTextEntry
        value={pin}
        onChangeText={setPin}
        style={{ borderWidth: 1, marginVertical: 10, padding: 5 }}
      />
      <Button title="Confirm Payment" onPress={handlePayment} />
    </View>
  );
};

export default ConfirmPayment;
