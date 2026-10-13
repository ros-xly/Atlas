import { dashboard } from "@/lib/dashboard";
export default function Dashboard() {
  return (
    <main className="p-4 max-w-md">
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="border rounded-lg p-4 shadow-sm">
      <h2 className="font-semibold mb-2">
        Goals
      </h2>

      <p>
        {dashboard.goalsTracked} Goals Tracked
      </p>

      <p>
        {dashboard.goalsCompleted} Goals Completed
      </p>

      <p>
        {dashboard.exerciseCount} Exercises Saved
        </p>

      <p>
        {dashboard.workoutCount} Workouts Saved
      </p>

      <p>
         {dashboard.completedWorkouts} Workouts Completed
      </p>

      <p>
        Suggested Increase: {dashboard.suggestedIncrease}
      </p>

      <p>
        {dashboard.runCount} Runs Logged
      </p>

      <p>
         {dashboard.runningPlans} Running Plans
      </p>

      <p>
          {dashboard.totalDistance}km Logged
      </p>

      <p>
          {dashboard.eventCount} Upcoming Events
      </p>

      <p>
          {dashboard.linkedEvents} Goal Linked Event
      </p>

      <p>
          {dashboard.skillCount} Skills Stored
        </p>

        <p>
          {dashboard.conditioningTemplates} Conditioning Templates
        </p>

      </div>


      <div className="border rounded-lg p-4 shadow-sm mt-4">
        <h2 className="font-semibold mb-2">
          Activities
        </h2>

        <p>
        {dashboard.activitiesToday} Activities Today
        </p>
      </div>

      <div className="border rounded-lg p-4 shadow-sm mt-4">
        <h2 className="font-semibold mb-2">
          Weekly Progress
       </h2>

        <p>
          {dashboard.weeklyProgress}% Complete
        </p>
        </div>

      <div className="border rounded-lg p-4 shadow-sm mt-4">
        <h2 className="font-semibold mb-2">
          Recent Activity
        </h2>

        <ul>
          <li>Run 10k completed</li>
          <li>Bench progress updated</li>
          <li>Invert goal created</li>
        </ul>
      </div>

      <div className="border rounded-lg p-4 shadow-sm mt-4">
       <h2 className="font-semibold mb-2">
         Today's Training
      </h2>

      <ul>
        <li>Gym Session</li>
        <li>Stretching</li>
      </ul>
    </div>


    </main>
  );
}