import fs from "fs";
import path from "path";

const filePath = path.join(
  process.cwd(),
  "data",
  "friends.json"
);

export function getFriends() {
  const data = fs.readFileSync(
    filePath,
    "utf8"
  );

  return JSON.parse(data);
}

export function saveFriends(
  friends: any
) {
  fs.writeFileSync(
    filePath,
    JSON.stringify(
      friends,
      null,
      2
    )
  );
}