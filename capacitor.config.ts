import { CapacitorConfig } from '@capacitor/cli';  
  
const config: CapacitorConfig = {  
  appId: 'net.mayswind.ezbookkeeping',  
  appName: 'ezBookkeeping',  
  webDir: 'dist',  
  server: {  
    androidScheme: 'https'  
  }  
};  
  
export default config;