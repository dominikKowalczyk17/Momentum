import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

// Przykładowe dane (później zastąpimy rzeczywistymi danymi)
const workoutTemplates = [
  { id: "1", name: "Push Day", exercises: 7 },
  { id: "2", name: "Pull Day", exercises: 6 },
  { id: "3", name: "Leg Day", exercises: 8 },
  { id: "4", name: "Full Body", exercises: 10 },
];

const workoutHistory = [
  { id: "1", name: "Push Day", date: new Date(2025, 2, 10), duration: 67 },
  { id: "2", name: "Pull Day", date: new Date(2025, 2, 8), duration: 72 },
  { id: "3", name: "Leg Day", date: new Date(2025, 2, 6), duration: 65 },
  { id: "4", name: "Full Body", date: new Date(2025, 2, 3), duration: 85 },
];

export default function WorkoutsScreen() {
  const [activeTab, setActiveTab] = useState("templates");

  const formatDate = (date: Date) => {
    return `${date.getDate()} ${date.toLocaleString("pl-PL", {
      month: "short",
    })}`;
  };

  const renderTemplateItem = ({
    item,
  }: {
    item: (typeof workoutTemplates)[0];
  }) => (
    <Link
      href={{
        pathname: "/workout/[id]",
        params: { id: item.id },
      }}
      asChild
    >
      <TouchableOpacity style={styles.listItem}>
        <View>
          <Text style={styles.itemTitle}>{item.name}</Text>
          <Text style={styles.itemSubtitle}>{item.exercises} ćwiczeń</Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color="#ccc" />
      </TouchableOpacity>
    </Link>
  );

  const renderHistoryItem = ({
    item,
  }: {
    item: (typeof workoutHistory)[0];
  }) => (
    <Link
      href={{
        pathname: "/workout/[id]",
        params: { id: item.id },
      }}
      asChild
    >
      <TouchableOpacity style={styles.listItem}>
        <View>
          <Text style={styles.itemTitle}>{item.name}</Text>
          <Text style={styles.itemSubtitle}>
            {formatDate(item.date)} • {item.duration} min
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color="#ccc" />
      </TouchableOpacity>
    </Link>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Treningi</Text>
        <Link href="/workout/create" asChild>
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={24} color="white" />
          </TouchableOpacity>
        </Link>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "templates" && styles.activeTab]}
          onPress={() => setActiveTab("templates")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "templates" && styles.activeTabText,
            ]}
          >
            Szablony
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "history" && styles.activeTab]}
          onPress={() => setActiveTab("history")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "history" && styles.activeTabText,
            ]}
          >
            Historia
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === "templates" ? (
        <FlatList
          data={workoutTemplates}
          renderItem={renderTemplateItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <FlatList
          data={workoutHistory}
          renderItem={renderHistoryItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  addButton: {
    backgroundColor: "#5280e2",
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  tabContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginRight: 8,
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: "rgba(82, 128, 226, 0.1)",
  },
  tabText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#888",
  },
  activeTabText: {
    color: "#5280e2",
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  listItem: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  itemSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  createTemplateButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    margin: 16,
    backgroundColor: "rgba(82, 128, 226, 0.1)",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(82, 128, 226, 0.3)",
    borderStyle: "dashed",
  },
  createTemplateText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#5280e2",
    marginLeft: 8,
  },
});
