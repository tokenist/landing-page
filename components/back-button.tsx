"use client";

import { Trans } from "@lingui/react/macro";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex gap-2 items-center cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
    >
      <ArrowLeft className="w-4 h-4" />
      <Trans>Back</Trans>
    </button>
  );
}
