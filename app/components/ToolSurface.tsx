"use client";

import {
  AlignLeft,
  ChevronsDown,
  ChevronsUp,
  Maximize2,
  MessageSquareText,
  PanelBottom,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { selections, type SelectionId } from "../data/prototypeData";
import { IconButton } from "./IconButton";

export type ToolState = "collapsed" | "compact" | "expanded";

type ToolSurfaceProps = {
  selectedId: SelectionId;
  state: ToolState;
  onStateChange: (state: ToolState) => void;
  onOpenContext: () => void;
};

export function ToolSurface({
  selectedId,
  state,
  onStateChange,
  onOpenContext,
}: ToolSurfaceProps) {
  const selected = selections[selectedId];
  const SelectionIcon = selected.icon;

  return (
    <section className="tool-surface" data-tool-state={state} aria-label="Инструменты текущего процесса">
      <div className="tool-grip" />
      <div className="tool-main">
        <div className="tool-context">
          <div className="tool-context-icon"><SelectionIcon size={17} /></div>
          <div className="tool-context-copy">
            <strong>{selected.toolLabel}</strong>
            <span>{selected.toolHint}</span>
          </div>
        </div>

        <div className="tool-actions">
          <button type="button" className="tool-action" onClick={onOpenContext}>
            <MessageSquareText size={15} />
            <span>Контекст</span>
          </button>
          <button type="button" className="tool-action">
            <AlignLeft size={15} />
            <span>Структура</span>
          </button>
          <button type="button" className="tool-action is-primary">
            <WandSparkles size={15} />
            <span>Применить</span>
          </button>
          <div className="tool-state-control" aria-label="Размер инструментальной поверхности">
            <IconButton
              icon={ChevronsDown}
              label="Свернуть инструменты"
              active={state === "collapsed"}
              onClick={() => onStateChange("collapsed")}
            />
            <IconButton
              icon={PanelBottom}
              label="Компактные инструменты"
              active={state === "compact"}
              onClick={() => onStateChange("compact")}
            />
            <IconButton
              icon={state === "expanded" ? ChevronsUp : Maximize2}
              label="Развернуть инструменты"
              active={state === "expanded"}
              onClick={() => onStateChange("expanded")}
            />
          </div>
        </div>
      </div>

      <div className="tool-expanded" aria-hidden={state !== "expanded"}>
        <div className="tool-detail">
          <strong>Действия для «{selected.label}»</strong>
          <div className="tool-preset-row">
            <button type="button" className="tool-preset is-selected">Уточнить ритм</button>
            <button type="button" className="tool-preset">Связать с фазой</button>
            <button type="button" className="tool-preset">Добавить критерий</button>
            <button type="button" className="tool-preset">Собрать резюме</button>
          </div>
        </div>
        <div className="tool-detail">
          <strong>Интенсивность процесса</strong>
          <div className="mini-timeline" aria-hidden="true">
            {[32, 55, 82, 66, 44].map((height, index) => (
              <i
                key={height}
                style={{ "--height": `${height}%`, "--n": index } as React.CSSProperties}
              />
            ))}
          </div>
          <div className="tool-preset-row">
            <span className="tool-preset"><Sparkles size={10} /> AI-подсказки включены</span>
          </div>
        </div>
      </div>
    </section>
  );
}
