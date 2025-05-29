"use client";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function SignOutButton() {
  const navigate = useRouter();
  return (
    <Button
      onClick={() =>
        authClient.signOut({
          fetchOptions: { onSuccess: () => navigate.push("/authentication") },
        })
      }
    >
      Sair
    </Button>
  );
}
