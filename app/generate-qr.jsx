import { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const GenerateQR = () => {
  const [amount, setAmount] = useState('');
  const [qrData, setQrData] = useState('');

  const handleGenerateQR = () => {
    if (!amount) return Alert.alert('Enter amount to generate QR');
    setQrData(JSON.stringify({ amount, timestamp: Date.now() }));
  };

  return (
    <View style={{ padding: 20, alignItems: 'center' }}>
      <Text style={{ fontSize: 18 }}>Enter Amount for QR Code:</Text>
      <TextInput
        placeholder="₹ Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        style={{ borderWidth: 1, marginVertical: 10, padding: 5, width: 200, textAlign: 'center' }}
      />
      <Button title="Generate QR" onPress={handleGenerateQR} />

      {qrData ? <QRCode value={qrData} size={150} /> : null}
    </View>
  );
};

export default GenerateQR;
