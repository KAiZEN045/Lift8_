import { Stack } from 'expo-router';

export default function Tabs(){
    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="login" options={{ headerTitle: 'Login'}} />
        </Stack>
    );
}
