import fs from "fs";
import path from "path";

const filePath = path.join(
  process.cwd(),
  "data",
  "exercises.json"
);

export function getExercises() {
  const data = fs.readFileSync(
    filePath,
    "utf8"
  );

  return JSON.parse(data);
}

export function saveExercises(
  exercises: any
) {
  fs.writeFileSync(
    filePath,
    JSON.stringify(
      exercises,
      null,
      2
    )
  );
}