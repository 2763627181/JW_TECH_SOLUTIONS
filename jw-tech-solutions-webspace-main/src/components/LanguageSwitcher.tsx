import { Globe } from "lucide-react";
import { useLanguage, type Language } from "@/i18n/LanguageContext";

// Los nombres de idioma se muestran en su propio idioma (convención estándar).
const OPTIONS: { code: Language; short: string; name: string }[] = [
  { code: "en", short: "EN", name: "English" },
  { code: "es", short: "ES", name: "Español" },
];

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.language.label}
      className={[
        "inline-flex items-center gap-0.5 rounded-xl border border-white/10 bg-white/5 p-1",
        className,
      ].join(" ")}
    >
      <Globe className="mx-1.5 h-4 w-4 text-white/60" aria-hidden="true" />
      {OPTIONS.map((o) => {
        const active = lang === o.code;
        return (
          <button
            key={o.code}
            type="button"
            lang={o.code}
            title={o.name}
            aria-label={o.name}
            aria-pressed={active}
            onClick={() => setLang(o.code)}
            className={[
              "rounded-lg px-2.5 py-1 text-xs font-semibold tracking-wide transition outline-none",
              "focus-visible:ring-2 focus-visible:ring-[hsl(var(--primary))]",
              active
                ? "bg-[hsl(var(--primary))] text-white shadow-[0_6px_18px_hsl(var(--primary)/0.3)]"
                : "text-white/70 hover:text-white hover:bg-white/10",
            ].join(" ")}
          >
            {o.short}
          </button>
        );
      })}
    </div>
  );
}
