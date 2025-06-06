
"use client";

import * as React from "react";
import { Globe, Check } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import type { Locale } from "@/lib/translations";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder to prevent layout shift and hydration mismatch
    return <div className="h-10 w-10" />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Change language">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuLabel>{t.languageLabel}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={language} onValueChange={(value) => setLanguage(value as Locale)}>
          <DropdownMenuRadioItem value="vn">
            Tiếng Việt
            {language === 'vn' && <Check className="ml-auto h-4 w-4" />}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="en">
            English
            {language === 'en' && <Check className="ml-auto h-4 w-4" />}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
