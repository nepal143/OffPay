import { Link } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Welcome to QR Wallet</Text>

      <Link href="/add-money" asChild>
        <Button title="Add Money" />
      </Link>

      <Link href="/generate-qr" asChild>
        <Button title="Generate QR" />
      </Link>

      <Link href="/scan-qr" asChild>
        <Button title="Scan QR" />
      </Link>
    </View>
  );
}
