"use client";

import {
  useEffect,
  useState,
} from "react";

import FloatCard from "@/components/FloatCard";

export default function Friends() {
  const [requests, setRequests] =
    useState<any[]>([]);

  const [friendEmail,
    setFriendEmail] =
    useState("");

  useEffect(() => {
    loadRequests();
  }, []);

  async function loadRequests() {
    const stored =
      localStorage.getItem(
        "atlasUser"
      );

    if (!stored) return;

    const user =
      JSON.parse(stored);

    const response =
      await fetch(
        "/api/friends"
      );

    const data =
      await response.json();

    setRequests(
      data.filter(
        (request: any) =>
          request.friendEmail ===
          user.email
      )
    );
  }

  async function sendRequest() {
    const stored =
      localStorage.getItem(
        "atlasUser"
      );

    if (!stored) return;

    const user =
      JSON.parse(stored);

    await fetch(
      "/api/friends/request",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          requester:
            user.email,
          friendEmail,
        }),
      }
    );

    setFriendEmail("");
  }

  async function accept(
    id: number
  ) {
    await fetch(
      "/api/friends/accept",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      }
    );

    loadRequests();
  }

  async function decline(
    id: number
  ) {
    await fetch(
      "/api/friends/decline",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      }
    );

    loadRequests();
  }

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-6">
        👯 Friends
      </h1>

      <input
        className="float-input"
        placeholder="Friend Email"
        value={friendEmail}
        onChange={(e) =>
          setFriendEmail(
            e.target.value
          )
        }
      />

      <button
        className="float-button mb-6"
        onClick={sendRequest}
      >
        Send Request 💖
      </button>

      <div className="space-y-4">
        {requests.map(
          (request: any) => (
            <FloatCard
              key={request.id}
            >
              <p>
                {request.requester}
              </p>

              <p>
                Status:
                {" "}
                {request.status}
              </p>

              {request.status ===
                "pending" && (
                <div className="flex gap-2 mt-3">
                  <button
                    className="float-button"
                    onClick={() =>
                      accept(
                        request.id
                      )
                    }
                  >
                    Accept
                  </button>

                  <button
                    className="float-button"
                    onClick={() =>
                      decline(
                        request.id
                      )
                    }
                  >
                    Decline
                  </button>
                </div>
              )}
            </FloatCard>
          )
        )}
      </div>
    </main>
  );
}