"use client";

import { useEffect, useState } from "react";

export default function InviteFriend() {
  const [inviteLink, setInviteLink] =
    useState("");

  useEffect(() => {
    setInviteLink(
      window.location.origin
    );
  }, []);

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-pink-500 mb-6">
        👯 Invite Friends
      </h1>

      <p className="mb-4">
        Invite friends to join Float.
      </p>

      {inviteLink && (
        <a
          className="float-button"
          href={`https://wa.me/?text=Join Float ✨ ${inviteLink}`}
          target="_blank"
          rel="noreferrer"
        >
          Share on WhatsApp 💖
        </a>
      )}
    </main>
  );
}