"use client";

import { useEffect } from "react";

export default function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const user =
      localStorage.getItem(
        "atlasUser"
      );

    if (!user) {
      window.location.href =
        "/login";
    }
  }, []);

  return <>{children}</>;
}