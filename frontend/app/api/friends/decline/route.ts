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

  const requestToDecline =
    friends.find(
      (f: any) =>
        f.id === data.id
    );

  if (requestToDecline) {
    requestToDecline.status =
      "declined";

    saveFriends(friends);
  }

  return Response.json({
    success: true,
  });
}