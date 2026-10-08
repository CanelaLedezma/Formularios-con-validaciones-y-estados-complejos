import { StyleSheet, Text, View } from 'react-native';

export default function InscripcionScreen() {
  return (
    <View style={styles.container}>
      {/* Título de la pantalla de inscripción */}
      <Text style={styles.titulo}>Inscripción a Sonido Sur</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});