"use client";

import { Check, X } from "lucide-react";
import { IconButton } from "./IconButton";

type SystemActivityProps = {
  visible: boolean;
  onClose: () => void;
};

export function SystemActivity({ visible, onClose }: SystemActivityProps) {
  return (
    <aside className={`system-activity${visible ? " is-visible" : ""}`} aria-live="polite">
      <header className="activity-head">
        <div className="activity-agent">
          <div className="agent-orbit" aria-hidden="true" />
          <div>
            <strong>Агент «Контур»</strong>
            <span>Проверяет связанные объекты</span>
          </div>
        </div>
        <IconButton icon={X} label="Скрыть активность агента" onClick={onClose} />
      </header>
      <div className="activity-progress"><i /></div>
      <p className="activity-note">
        <Check size={11} /> 12 из 18 критериев сопоставлены с последней схемой развёртывания.
      </p>
    </aside>
  );
}
