import fs from "fs";
import path from "path";

const filePath = path.join(
  process.cwd(),
  "data",
  "workouts.json"
);

export function getWorkouts() {
  const data = fs.readFileSync(
    filePath,
    "utf8"
  );

  return JSON.parse(data);
}

export function saveWorkouts(
  workouts: any
) {
  fs.writeFileSync(
    filePath,
    JSON.stringify(
      workouts,
      null,
      2
    )
  );
}