import { StatusBar } from 'expo-status-bar';
import InscripcionScreen from './screens/InscripcionScreen';

export default function App() {
  return (
    <>
      {/* Muestra la pantalla principal */}
      <InscripcionScreen />
      <StatusBar style="auto" />
    </>
  );
}