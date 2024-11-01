import 'react-native-gesture-handler';

import "@/global.css";
import { GluestackUIProvider } from './components/ui/gluestack-ui-provider';

import RootStack from './navigation';

export default function App() {
  return <GluestackUIProvider mode="light"><RootStack /></GluestackUIProvider>;
}
