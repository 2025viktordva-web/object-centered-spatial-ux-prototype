"use client";

import { CheckCircle2, Minus, MousePointer2, Users } from "lucide-react";
import type { SelectionId } from "../data/prototypeData";

type ObjectCanvasProps = {
  selectedId: SelectionId;
  onSelect: (id: SelectionId) => void;
};

export function ObjectCanvas({ selectedId, onSelect }: ObjectCanvasProps) {
  return (
    <main className="canvas-shell" aria-label="Холст документа">
      <div className="canvas-meta">
        <MousePointer2 size={13} />
        <strong>Полотно / 84%</strong>
        <span><Users size={11} /> 3 участника</span>
      </div>
      <div className="canvas-stage">
        <article className="document-object" aria-label="Протокол полевого запуска">
          <div className="doc-spine" aria-hidden="true" />
          <header className="doc-header">
            <div>
              <div className="doc-eyebrow">Протокол · версия 7</div>
              <h1>Полевой запуск комплекса H-12</h1>
              <p className="doc-lead">
                Рабочая последовательность развёртывания наземного контура,
                проверки связности и передачи системы полевой группе.
              </p>
            </div>
            <div className="doc-code">
              <span>Статус выпуска</span>
              <strong>Готов к допуску</strong>
              <i />
            </div>
          </header>

          <button
            type="button"
            className={`doc-section${selectedId === "overview" ? " is-selected" : ""}`}
            onClick={() => onSelect("overview")}
          >
            <div className="section-index"><b>01</b> Контур</div>
            <div className="section-content">
              <h2>Контур запуска</h2>
              <p>
                Система выходит в поле как связанный набор станций, каналов
                связи и контрольных точек. Готовность фиксируется на уровне
                целого контура, а не отдельных устройств.
              </p>
              <div className="metric-row">
                <div className="metric-cell"><strong>06</strong><span>станций</span></div>
                <div className="metric-cell"><strong>18</strong><span>проверок</span></div>
                <div className="metric-cell"><strong>92%</strong><span>порог допуска</span></div>
              </div>
            </div>
            {selectedId === "overview" && <i className="object-tether" aria-hidden="true" />}
          </button>

          <button
            type="button"
            className={`doc-section${selectedId === "sequence" ? " is-selected" : ""}`}
            onClick={() => onSelect("sequence")}
          >
            <div className="section-index"><b>02</b> Порядок</div>
            <div className="section-content">
              <h2>Порядок развёртывания</h2>
              <p>
                Каждая фаза сохраняет собственную ответственность, но передаёт
                состояние следующей без разрыва общей операционной картины.
              </p>
              <div className="phase-map">
                <div className="phase" style={{ "--phase-color": "#ff805c" } as React.CSSProperties}>
                  <strong>Подготовка</strong><span>Проверка состава и маршрута</span>
                </div>
                <div className="phase" style={{ "--phase-color": "#3155d9" } as React.CSSProperties}>
                  <strong>Связность</strong><span>Синхронизация всех станций</span>
                </div>
                <div className="phase" style={{ "--phase-color": "#1f705a" } as React.CSSProperties}>
                  <strong>Передача</strong><span>Допуск полевой команды</span>
                </div>
              </div>
            </div>
            {selectedId === "sequence" && <i className="object-tether" aria-hidden="true" />}
          </button>

          <button
            type="button"
            className={`doc-section${selectedId === "verification" ? " is-selected" : ""}`}
            onClick={() => onSelect("verification")}
          >
            <div className="section-index"><b>03</b> Допуск</div>
            <div className="section-content">
              <h2>Контроль готовности</h2>
              <p>
                Перед выпуском рабочая группа подтверждает энергоснабжение,
                устойчивость канала и актуальность полевых инструкций.
              </p>
              <div className="metric-row">
                <div className="metric-cell"><strong>18/18</strong><span>пройдено</span></div>
                <div className="metric-cell"><strong>04:20</strong><span>окно проверки</span></div>
                <div className="metric-cell"><strong>H12-A</strong><span>контур</span></div>
              </div>
            </div>
            {selectedId === "verification" && <i className="object-tether" aria-hidden="true" />}
          </button>

          <footer className="doc-section" aria-label="Статус документа">
            <div className="section-index"><CheckCircle2 size={18} /><Minus size={13} /></div>
            <div className="section-content">
              <h2>Контур готов к выпуску</h2>
              <p>Последнее согласование: группа допуска · сегодня, 16:42</p>
            </div>
          </footer>
        </article>
      </div>
    </main>
  );
}
