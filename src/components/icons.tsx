// Icônes SVG légères (aucune bibliothèque externe).
type P = React.SVGProps<SVGSVGElement>;

const base = (props: P) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export const FlameIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 22c4 0 7-2.7 7-6.8 0-3.6-2.4-6-4.2-8.2-.4 1.9-1.4 3.2-2.8 3.9.2-3-1-6-3.5-8.4C8.3 6.7 5 9.6 5 15.2 5 19.3 8 22 12 22Z" />
    <path d="M12 22c-1.7 0-3-1.2-3-3 0-2 1.7-3.2 3-4.7 1.3 1.5 3 2.7 3 4.7 0 1.8-1.3 3-3 3Z" />
  </svg>
);
export const TruckIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 6h11v10H3zM14 9h4l3 3.5V16h-7" />
    <circle cx="7" cy="17.5" r="1.8" />
    <circle cx="17" cy="17.5" r="1.8" />
  </svg>
);
export const ShieldIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3 5 6v5.5c0 4.3 3 7.9 7 9.5 4-1.6 7-5.2 7-9.5V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
export const PhoneIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);
export const MailIcon = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
export const TreeIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 2 6 10h3l-4 6h14l-4-6h3l-6-8ZM12 16v6" />
  </svg>
);
export const DocumentIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M14 3H6v18h12V7l-4-4Z" />
    <path d="M14 3v4h4M9 12h6M9 16h6" />
  </svg>
);
export const CartIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 4h2l2.4 11.2a1 1 0 0 0 1 .8h9.2a1 1 0 0 0 1-.8L20 8H6.2" />
    <circle cx="9" cy="20" r="1.3" />
    <circle cx="17" cy="20" r="1.3" />
  </svg>
);
export const MenuIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);
export const CloseIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const TrashIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" />
  </svg>
);
export const CheckIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);
export const ChevronIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);
export const ClockIcon = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
export const MapPinIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

export const LogIcon = (p: P) => (
  <svg {...base(p)}>
    <ellipse cx="6.5" cy="12" rx="3.5" ry="5" />
    <ellipse cx="6.5" cy="12" rx="1.2" ry="1.8" />
    <path d="M6.5 7h11c1.9 0 3.5 2.2 3.5 5s-1.6 5-3.5 5h-11" />
  </svg>
);
export const RulerIcon = (p: P) => (
  <svg {...base(p)}>
    <rect x="2.5" y="8" width="19" height="8" rx="1.5" />
    <path d="M6 8v3M9.5 8v4.5M13 8v3M16.5 8v4.5" />
  </svg>
);
export const TagIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 12V4h8l10 10-8 8L3 12Z" />
    <circle cx="7.5" cy="8.5" r="1.5" />
  </svg>
);

/** Drapeau français (couleurs officielles). */
export const FrenchFlag = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 3 2" className={className} aria-hidden="true">
    <rect width="1" height="2" x="0" fill="#002654" />
    <rect width="1" height="2" x="1" fill="#fff" />
    <rect width="1" height="2" x="2" fill="#CE1126" />
  </svg>
);

export const WhatsAppIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.4 5 5.2-1.4A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.1.82.83-3-.2-.31a8.2 8.2 0 1 1 6.97 3.82Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.22-.08-.39-.12-.55.12-.16.25-.63.8-.78.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.32-2.9c-.25-.43.25-.4.72-1.33.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.66.31 2.77 2.77 0 0 0-.86 2.06c0 1.21.88 2.39 1 2.55.13.16 1.74 2.66 4.22 3.73 1.57.68 2.18.74 2.97.62.48-.07 1.46-.6 1.67-1.17.2-.58.2-1.07.14-1.17-.06-.11-.22-.17-.47-.29Z" />
  </svg>
);
export const FacebookIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden="true" {...p}>
    <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.25-1.46 1.5-1.46h1.5V4.46A20 20 0 0 0 14.3 4.3c-2.2 0-3.7 1.34-3.7 3.8v2.4H8.1v3h2.5V21h2.9Z" />
  </svg>
);
export const TikTokIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden="true" {...p}>
    <path d="M16.6 3c.3 2.2 1.6 3.6 3.8 3.8v2.7a6.6 6.6 0 0 1-3.8-1.2v5.9A5.3 5.3 0 1 1 11.3 9v2.8a2.6 2.6 0 1 0 2.6 2.6V3h2.7Z" />
  </svg>
);
export const InstagramIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
  </svg>
);

/* ---------- Moyens de paiement (pictogrammes génériques, sans logo de marque) ---------- */
export const CardIcon = (p: P) => (
  <svg {...base(p)}>
    <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
    <path d="M2.5 10h19M6.5 15h4" />
  </svg>
);
export const BankIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 10 12 4l9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18" />
  </svg>
);
export const ChequeIcon = (p: P) => (
  <svg {...base(p)}>
    <rect x="2.5" y="6" width="19" height="12" rx="2" />
    <path d="M6 10.5h7M6 14h4M14 14.5c1-1.6 1.7-1.6 2.3 0s1.3 1.4 2.2-.6" />
  </svg>
);
export const CashIcon = (p: P) => (
  <svg {...base(p)}>
    <rect x="2.5" y="6.5" width="19" height="11" rx="2" />
    <circle cx="12" cy="12" r="2.6" />
    <path d="M6 12h.01M18 12h.01" />
  </svg>
);
export const LockIcon = (p: P) => (
  <svg {...base(p)}>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);
/** Dos de carte avec repère du cryptogramme. */
export const CvcIcon = (p: P) => (
  <svg {...base(p)}>
    <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
    <path d="M2.5 9.5h19" />
    <rect x="13" y="13" width="5.5" height="3" rx="1" fill="currentColor" stroke="none" />
  </svg>
);
