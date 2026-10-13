import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { CopyEmailButton } from "./CopyEmailButton";

function mockClipboard(writeText: (text: string) => Promise<void>) {
  Object.defineProperty(navigator, "clipboard", { value: { writeText }, configurable: true });
}

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe("CopyEmailButton", () => {
  it("copies the address and confirms it, then resets", async () => {
    vi.useFakeTimers();
    const writeText = vi.fn(async () => {});
    mockClipboard(writeText);
    render(<CopyEmailButton email="arpit.agarwal67@gmail.com" />);

    await act(async () => fireEvent.click(screen.getByRole("button", { name: "Copy email" })));

    expect(writeText).toHaveBeenCalledWith("arpit.agarwal67@gmail.com");
    expect(screen.getByRole("button").textContent).toBe("Copied");
    expect(screen.getByRole("status").textContent).toBe("Email address copied.");

    await act(async () => vi.advanceTimersByTime(2500));
    expect(screen.getByRole("button").textContent).toBe("Copy email");
  });

  it("explains a failed copy", async () => {
    mockClipboard(async () => Promise.reject(new DOMException("denied", "NotAllowedError")));
    render(<CopyEmailButton email="arpit.agarwal67@gmail.com" />);

    await act(async () => fireEvent.click(screen.getByRole("button", { name: "Copy email" })));

    expect(screen.getByRole("status").textContent).toBe("Couldn't copy. Use the email link instead.");
  });

  it("gives up with an explanation if the browser leaves the request pending", async () => {
    vi.useFakeTimers();
    mockClipboard(() => new Promise<void>(() => {}));
    render(<CopyEmailButton email="arpit.agarwal67@gmail.com" />);

    await act(async () => fireEvent.click(screen.getByRole("button", { name: "Copy email" })));
    await act(async () => vi.advanceTimersByTime(2000));

    expect(screen.getByRole("status").textContent).toBe("Couldn't copy. Use the email link instead.");
  });
});
