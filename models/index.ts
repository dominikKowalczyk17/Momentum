// Modele danych
interface Exercise {
  id: string;
  name: string;
  muscleGroup: string;
  description?: string;
  videoUrl?: string;
}

interface WorkoutSet {
  id: string;
  weight: number;
  reps: number;
  completed: boolean;
  rpe?: number; // Rate of Perceived Exertion
  notes?: string;
}

interface ExerciseInstance {
  id: string;
  exerciseId: string;
  sets: WorkoutSet[];
}

interface Workout {
  id: string;
  name: string;
  date: Date;
  duration: number; // w minutach
  exercises: ExerciseInstance[];
  notes?: string;
  isCompleted: boolean;
}

interface WorkoutTemplate {
  id: string;
  name: string;
  description?: string;
  exercises: {
    exerciseId: string;
    targetSets: number;
    targetReps: string; // np. "8-12"
    restTime?: number; // w sekundach
  }[];
}
