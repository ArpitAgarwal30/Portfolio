import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { secondaryButton } from "./styles";

type Status = "idle" | "copied" | "failed";

const COPY_TIMEOUT_MS = 2000;

const messages: Record<Status, string> = {
  idle: "",
  copied: "Email address copied.",
  failed: "Couldn't copy. Use the email link instead.",
};

export function CopyEmailButton({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timer = setTimeout(() => setStatus("idle"), 2500);
    return () => clearTimeout(timer);
  }, [status]);

  async function copy() {
    try {
      // Throws when the Clipboard API is unavailable (e.g. insecure context) or permission is denied.
      // The browser can also leave the request pending (e.g. while the window lacks focus), so cap the wait.
      await Promise.race([
        navigator.clipboard.writeText(email),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Clipboard timed out")), COPY_TIMEOUT_MS)),
      ]);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button type="button" onClick={copy} className={secondaryButton}>
        {status === "copied" ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
        {status === "copied" ? "Copied" : "Copy email"}
      </button>
      <span role="status" className="text-sm text-muted">
        {messages[status]}
      </span>
    </div>
  );
}
