import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function QuickstartScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Szybki start */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Szybki start</Text>
        <Link href='/workout/create' asChild>
          <TouchableOpacity style={styles.quickStartButton}>
            <Text style={styles.quickStartText}>Nowy trening</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  section: {
    padding: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  quickStartButton: {
    backgroundColor: '#5280e2',
    borderRadius: 12,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quickStartText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});
