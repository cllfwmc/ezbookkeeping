import { CapacitorConfig } from '@capacitor/cli';  
  
const config: CapacitorConfig = {  
  appId: 'net.mayswind.ezbookkeeping',  
  appName: 'ezBookkeeping',  
  webDir: 'dist',  
  server: {  
    // 指向您的Docker服务地址  
    url: 'http://47.110.45.32:5457/',  
    cleartext: true,
    allowNavigation: ['*']  
  },
  android: {  
    iconPath: 'public/img/ezbookkeeping-512.png'  
  }    
};  
  
export default config;