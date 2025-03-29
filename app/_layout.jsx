import { Stack } from 'expo-router';
import { View } from 'react-native';

const Layout = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#6200EE' },
          headerTintColor: '#FFF',
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen name="index" options={{ title: 'QR Wallet' }} />
        <Stack.Screen name="add-money" options={{ title: 'Add Money' }} />
        <Stack.Screen name="generate-qr" options={{ title: 'Generate QR' }} />
        <Stack.Screen name="scan-qr" options={{ title: 'Scan QR' }} />
        <Stack.Screen name="payment-confirm" options={{ title: 'Confirm Payment' }} />
      </Stack>
    </View>
  );
};

export default Layout;
