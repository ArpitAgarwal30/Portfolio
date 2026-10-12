// Shared class strings for link-styled buttons, so CTAs look identical everywhere.
const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-colors";

export const primaryButton = `${base} bg-accent text-accent-contrast hover:opacity-90`;
export const secondaryButton = `${base} border border-border text-text hover:bg-surface-2`;
export const iconButton =
  "inline-flex size-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface-2 hover:text-text";

/** Spread onto <a> elements that open another site. */
export const externalLinkProps = { target: "_blank", rel: "noreferrer" } as const;
