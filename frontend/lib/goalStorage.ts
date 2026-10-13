import fs from "fs";
import path from "path";

const filePath = path.join(
  process.cwd(),
  "data",
  "goals.json"
);

export function getGoals() {
  const data = fs.readFileSync(
    filePath,
    "utf8"
  );

  return JSON.parse(data);
}

export function saveGoals(goals: any) {
  fs.writeFileSync(
    filePath,
    JSON.stringify(goals, null, 2)
  );
}