export interface WorkoutLog {
  id: number;
  exerciseName: string;
  sets: number;
  reps: number;
  weight: number;
  completed: boolean;
}