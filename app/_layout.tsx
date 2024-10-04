import { Stack,useRouter } from 'expo-router';
import { useEffect } from 'react';
// import { Login } from './Login'

export default function RootLayout() {
  const router = useRouter();
  useEffect(() => {
    // Redirect to the Login page when the app mounts
    router.replace('./Login'); // Assuming the Login page is at /login
  }, []);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}