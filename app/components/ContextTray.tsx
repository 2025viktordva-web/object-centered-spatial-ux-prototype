"use client";

import { MessageCircleMore, X } from "lucide-react";

type ContextTrayProps = {
  open: boolean;
  onToggle: () => void;
};

export function ContextTray({ open, onToggle }: ContextTrayProps) {
  return (
    <aside className={`context-tray${open ? " is-open" : ""}`} aria-label="Контекстный лоток">
      <button
        type="button"
        className="context-trigger"
        onClick={onToggle}
        aria-expanded={open}
        aria-label={open ? "Свернуть контекст" : "Открыть контекст"}
      >
        {open ? <X size={16} /> : <MessageCircleMore size={17} />}
      </button>
      <div className="context-body">
        <strong>Заметка группы допуска</strong>
        <span>Сверить окно проверки с маршрутом 04-B</span>
      </div>
    </aside>
  );
}
