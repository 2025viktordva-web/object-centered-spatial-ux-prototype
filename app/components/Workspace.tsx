"use client";

import { useEffect, useState } from "react";
import type { CompositionId, SelectionId } from "../data/prototypeData";
import { ContextTray } from "./ContextTray";
import { ObjectCanvas } from "./ObjectCanvas";
import { PropertiesPanel } from "./PropertiesPanel";
import { StructuralPanel } from "./StructuralPanel";
import { SystemActivity } from "./SystemActivity";
import { ToolSurface, type ToolState } from "./ToolSurface";
import { TopCommandGroups } from "./TopCommandGroups";

export function Workspace() {
  const [composition, setComposition] = useState<CompositionId>("balance");
  const [selectedId, setSelectedId] = useState<SelectionId>("sequence");
  const [leftOpen, setLeftOpen] = useState(true);
  const [propertiesOpen, setPropertiesOpen] = useState(true);
  const [toolState, setToolState] = useState<ToolState>("compact");
  const [contextOpen, setContextOpen] = useState(false);
  const [aiVisible, setAiVisible] = useState(false);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 900px)").matches;
    if (mobile) {
      setLeftOpen(false);
      setPropertiesOpen(false);
    }
  }, []);

  const changeComposition = (next: CompositionId) => {
    setComposition(next);
    setToolState(next === "instrument" ? "expanded" : "compact");
  };

  const handleSelection = (next: SelectionId) => {
    setSelectedId(next);
    if (window.matchMedia("(max-width: 900px)").matches) {
      setPropertiesOpen(true);
      setLeftOpen(false);
    }
  };

  const dismissDrawers = () => {
    setLeftOpen(false);
    setPropertiesOpen(false);
  };

  return (
    <div
      className="workspace"
      data-composition={composition}
      data-left={leftOpen ? "open" : "closed"}
      data-properties={propertiesOpen ? "open" : "closed"}
    >
      <TopCommandGroups
        leftOpen={leftOpen}
        propertiesOpen={propertiesOpen}
        aiVisible={aiVisible}
        onToggleLeft={() => {
          setLeftOpen((value) => !value);
          if (!leftOpen && window.matchMedia("(max-width: 900px)").matches) {
            setPropertiesOpen(false);
          }
        }}
        onToggleProperties={() => {
          setPropertiesOpen((value) => !value);
          if (!propertiesOpen && window.matchMedia("(max-width: 900px)").matches) {
            setLeftOpen(false);
          }
        }}
        onToggleAi={() => setAiVisible((value) => !value)}
      />

      <div className="workspace-grid">
        <StructuralPanel onClose={() => setLeftOpen(false)} />
        <ObjectCanvas selectedId={selectedId} onSelect={handleSelection} />
        <PropertiesPanel
          selectedId={selectedId}
          composition={composition}
          onCompositionChange={changeComposition}
          onClose={() => setPropertiesOpen(false)}
        />
      </div>

      {(leftOpen || propertiesOpen) && (
        <button
          type="button"
          className="mobile-scrim"
          aria-label="Закрыть выдвижные панели"
          onClick={dismissDrawers}
        />
      )}

      <ContextTray open={contextOpen} onToggle={() => setContextOpen((value) => !value)} />
      <ToolSurface
        selectedId={selectedId}
        state={toolState}
        onStateChange={setToolState}
        onOpenContext={() => setContextOpen(true)}
      />
      <SystemActivity visible={aiVisible} onClose={() => setAiVisible(false)} />
    </div>
  );
}
