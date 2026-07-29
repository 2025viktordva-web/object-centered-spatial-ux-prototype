"use client";

import {
  Bell,
  ChevronLeft,
  ChevronRight,
  Command,
  Menu,
  PanelRight,
  Redo2,
  Search,
  Undo2,
} from "lucide-react";
import { IconButton } from "./IconButton";

type TopCommandGroupsProps = {
  leftOpen: boolean;
  propertiesOpen: boolean;
  aiVisible: boolean;
  onToggleLeft: () => void;
  onToggleProperties: () => void;
  onToggleAi: () => void;
};

export function TopCommandGroups({
  leftOpen,
  propertiesOpen,
  aiVisible,
  onToggleLeft,
  onToggleProperties,
  onToggleAi,
}: TopCommandGroupsProps) {
  return (
    <header className="topbar" aria-label="Глобальные команды">
      <div className="command-group brand-command">
        <div className="brand-mark" aria-hidden="true">H</div>
        <div className="brand-copy">
          <strong>Harness Workspace</strong>
          <span>Экспедиция H-12</span>
        </div>
        <IconButton
          icon={leftOpen ? ChevronLeft : Menu}
          label={leftOpen ? "Скрыть структуру" : "Показать структуру"}
          active={leftOpen}
          onClick={onToggleLeft}
        />
      </div>

      <div className="command-group history-command">
        <IconButton icon={Undo2} label="Отменить" />
        <IconButton icon={Redo2} label="Повторить" />
        <IconButton icon={Search} label="Найти в пространстве" />
        <IconButton icon={Command} label="Открыть палитру команд" />
      </div>

      <div className="command-group system-command">
        <button
          type="button"
          className={`ai-command${aiVisible ? " is-active" : ""}`}
          aria-pressed={aiVisible}
          aria-label={aiVisible ? "Скрыть активность AI-агента" : "Показать активность AI-агента"}
          onClick={onToggleAi}
        >
          <i className="status-dot" aria-hidden="true" />
          <span>Агент работает</span>
        </button>
        <IconButton icon={Bell} label="Уведомления" signal />
        <IconButton
          icon={propertiesOpen ? ChevronRight : PanelRight}
          label={propertiesOpen ? "Скрыть свойства" : "Показать свойства"}
          active={propertiesOpen}
          onClick={onToggleProperties}
        />
      </div>
    </header>
  );
}
