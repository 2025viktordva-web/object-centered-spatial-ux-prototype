"use client";

import type { LucideIcon } from "lucide-react";

type IconButtonProps = {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  signal?: boolean;
  onClick?: () => void;
};

export function IconButton({
  icon: Icon,
  label,
  active = false,
  signal = false,
  onClick,
}: IconButtonProps) {
  return (
    <button
      type="button"
      className={`icon-button${active ? " is-active" : ""}${signal ? " has-signal" : ""}`}
      aria-label={label}
      aria-pressed={active || undefined}
      title={label}
      onClick={onClick}
    >
      <Icon size={16} strokeWidth={1.8} />
    </button>
  );
}
