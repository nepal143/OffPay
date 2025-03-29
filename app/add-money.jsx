import { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddMoney = () => {
  const [amount, setAmount] = useState('');

  const handleAddMoney = async () => {
    if (!amount) return Alert.alert('Enter an amount');

    const storedBalance = await AsyncStorage.getItem('walletBalance');
    const currentBalance = storedBalance ? parseFloat(storedBalance) : 0;
    const newBalance = currentBalance + parseFloat(amount);

    await AsyncStorage.setItem('walletBalance', newBalance.toString());
    Alert.alert('Success', `Added ₹${amount} to wallet`);
    setAmount('');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Enter Amount:</Text>
      <TextInput
        placeholder="₹ Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        style={{ borderWidth: 1, marginVertical: 10, padding: 5 }}
      />
      <Button title="Add Money" onPress={handleAddMoney} />
    </View>
  );
};

export default AddMoney;
