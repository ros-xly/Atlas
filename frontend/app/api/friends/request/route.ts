import {
  getFriends,
  saveFriends,
} from "@/lib/friendStorage";

export async function POST(
  request: Request
) {
  const data =
    await request.json();

  const friends =
    getFriends();

  friends.push({
    id: Date.now(),
    requester:
      data.requester,
    friendEmail:
      data.friendEmail,
    status: "pending",
  });

  saveFriends(friends);

  return Response.json({
    success: true,
  });
}
``