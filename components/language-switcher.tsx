"use client";

import { Button } from "@/components/ui/button";
import { locales } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";
import { useState } from "react";

export default function LanguageSwitcher({
  className,
}: {
  className?: string;
}) {
  const [currentLocale, setCurrentLocale] = useState<"en" | "vi">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("locale") as "en" | "vi") || "en";
    }
    return "en";
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleLocaleChange = (locale: "en" | "vi") => {
    setCurrentLocale(locale);
    setIsOpen(false);

    // Dispatch custom event to trigger locale change
    const event = new CustomEvent("localeChange", {
      detail: { locale },
    });
    window.dispatchEvent(event);
  };

  return (
    <div className={cn("relative", className)}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2"
      >
        <Globe size={16} />
        {locales[currentLocale]}
      </Button>

      {isOpen && (
        <div className="absolute w-28 top-full mt-2 right-0 bg-background border border-border rounded-md shadow-lg py-2 z-50">
          {Object.entries(locales).map(([code, name]) => (
            <button
              key={code}
              onClick={() => handleLocaleChange(code as "en" | "vi")}
              className={cn(
                "w-full px-4 py-2 text-left hover:bg-muted transition-colors",
                currentLocale === code && "bg-muted font-medium"
              )}
            >
              {name}
            </button>
          ))}
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
