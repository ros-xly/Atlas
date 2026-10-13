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

  const requestToAccept =
    friends.find(
      (f: any) =>
        f.id === data.id
    );

  if (requestToAccept) {
    requestToAccept.status =
      "accepted";

    saveFriends(friends);
  }

  return Response.json({
    success: true,
  });
}