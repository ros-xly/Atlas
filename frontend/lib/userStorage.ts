import fs from "fs";
import path from "path";

const filePath = path.join(
  process.cwd(),
  "data",
  "users.json"
);

export function getUsers() {
  const data = fs.readFileSync(
    filePath,
    "utf8"
  );

  return JSON.parse(data);
}

export function saveUsers(
  users: any
) {
  fs.writeFileSync(
    filePath,
    JSON.stringify(
      users,
      null,
      2
    )
  );
}