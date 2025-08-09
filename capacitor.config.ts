import { CapacitorConfig } from '@capacitor/cli';  
  
const config: CapacitorConfig = {  
  appId: 'net.mayswind.ezbookkeeping',  
  appName: 'ezBookkeeping',  
  webDir: 'dist',  
  server: {  
    // 指向您的Docker服务地址  
    url: 'http://47.110.45.32:5457/',  
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#ffffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
      // splashFullScreen: true,
      // splashImmersive: true,
    },
  },
};  
  
export default config;