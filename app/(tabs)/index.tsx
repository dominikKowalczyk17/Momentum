import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

// Przykładowe dane (później zastąpimy rzeczywistymi danymi)
const lastWorkout = {
  name: 'Upper Body Strength',
  date: new Date(2025, 2, 10), // 10 marca 2025
  exercises: 5,
  duration: 65, // minut
};

const workoutTemplates = [
  { id: '1', name: 'Push Day' },
  { id: '2', name: 'Pull Day' },
  { id: '3', name: 'Leg Day' },
  { id: '4', name: 'Full Body' },
];

const stats = {
  totalWorkouts: 42,
  thisMonth: 8,
  streak: 3,
  volume: '+5% w tym tygodniu',
};

export default function HomeScreen() {
  // Formatowanie daty w stylu: "10 mar"
  const formatDate = (date: Date) => {
    return `${date.getDate()} ${date.toLocaleString('pl-PL', {
      month: 'short',
    })}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Nagłówek */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name='person-circle-outline' size={24} color='#ccc' />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Momentum</Text>
          <TouchableOpacity>
            <Ionicons name='notifications-outline' size={24} color='#ccc' />
          </TouchableOpacity>
        </View>

        {/* Sekcja z ostatnim treningiem */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ostatni trening</Text>
          <TouchableOpacity style={styles.lastWorkoutCard}>
            <View>
              <Text style={styles.workoutName}>{lastWorkout.name}</Text>
              <Text style={styles.workoutDate}>
                {formatDate(lastWorkout.date)}
              </Text>
            </View>
            <View style={styles.workoutStats}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{lastWorkout.exercises}</Text>
                <Text style={styles.statLabel}>Ćwiczeń</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{lastWorkout.duration}</Text>
                <Text style={styles.statLabel}>Minut</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Szablony treningowe */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Twoje szablony</Text>
            <Link href='/workouts' asChild>
              <TouchableOpacity>
                <Text style={styles.seeAllText}>Zobacz wszystkie</Text>
              </TouchableOpacity>
            </Link>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {workoutTemplates.map((template) => (
              <TouchableOpacity key={template.id} style={styles.templateCard}>
                <Text style={styles.templateName}>{template.name}</Text>
                <Ionicons name='chevron-forward' size={20} color='#aaa' />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Twoje statystyki */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Twoje statystyki</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statsCard}>
              <Text style={styles.statsValue}>{stats.totalWorkouts}</Text>
              <Text style={styles.statsLabel}>Wszystkie treningi</Text>
            </View>
            <View style={styles.statsCard}>
              <Text style={styles.statsValue}>{stats.thisMonth}</Text>
              <Text style={styles.statsLabel}>W tym miesiącu</Text>
            </View>
            <View style={styles.statsCard}>
              <Text style={styles.statsValue}>{stats.streak}</Text>
              <Text style={styles.statsLabel}>Seria</Text>
            </View>
            <View style={styles.statsCard}>
              <Text style={styles.statsValue}>{stats.volume}</Text>
              <Text style={styles.statsLabel}>Objętość</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // tło ciemne
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // biały tekst
  },
  section: {
    padding: 16,
    marginBottom: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  seeAllText: {
    color: '#5280e2',
    fontSize: 14,
  },
  lastWorkoutCard: {
    backgroundColor: '#1c1c1e', // ciemny szary dla kart
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  workoutName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  workoutDate: {
    fontSize: 14,
    color: '#aaa',
  },
  workoutStats: {
    flexDirection: 'row',
  },
  statItem: {
    alignItems: 'center',
    marginLeft: 16,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  statLabel: {
    fontSize: 12,
    color: '#aaa',
  },
  templateCard: {
    backgroundColor: '#1c1c1e',
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    minWidth: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  templateName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statsCard: {
    backgroundColor: '#1c1c1e',
    borderRadius: 12,
    padding: 12,
    width: '48%',
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  statsValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  statsLabel: {
    fontSize: 12,
    color: '#aaa',
  },
});
