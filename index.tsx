import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Text, Button, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import messaging from '@react-native-firebase/messaging'
import {Platform, Alert} from 'react-native'

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [key, setKey] = useState(0);

  const handleReload = () => {
    setHasError(false)
    setKey(prevKey => prevKey + 1);
  };

  useEffect(()=>{
    const requestPermission = async () =>{
      const authStatus = await messaging().requestPermission()
      const enabled = 
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL

      if(enabled){
        console.log('Authorization status', authStatus)
      }
    };

    requestPermission()

    messaging().getToken().then(token =>{
      console.log("FCM Token", token)
    });

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert("New FCM Message", JSON.stringify(remoteMessage.notification))
    })

    return unsubscribe
  },[])

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="#007AFF" style={styles.loader} />}
      {hasError ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Failed to load content</Text>
          <Button title="Retry" onPress={handleReload} />
        </View>
      ) : (
        <WebView
          key={key}
          source={{ uri: 'https://nextjs-auth-app-2mnb.vercel.app' }}
          onNavigationStateChange={(event) =>{
           if(
            event.url.includes('accounts.google.com') || 
            event.url.includes('googleusercontent.com') 
           ) {
            Linking.openURL(event.url)
            return false
           }
          }}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
          onError={(syntheticEvent) => {
            const { nativeEvent } = syntheticEvent
            console.warn('Webview error', nativeEvent)
            setHasError(true);
            setLoading(false);
          }}
          onHttpError={(syntheticEvent) =>{
            const {nativeEvent} = syntheticEvent;
            console.warn("HTTP error:", nativeEvent.statusCode)
          }}
          style={styles.webview}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  loader: { position: 'absolute', top: '50%', left: '50%', zIndex: 1 },
  webview: { flex: 1 },
  errorContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  errorText: { fontSize: 18, marginBottom: 10, color: 'red' },
});
