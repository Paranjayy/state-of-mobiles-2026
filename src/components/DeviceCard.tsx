"use client";
import { useState } from "react";
import { WatchlistButton } from "./Watchlist";

export type Device = {
  id: string;
  brand: string;
  name: string;
  price: number;
  priceFormatted: string;
  image: string;
  category: string;
  type: string;
  tags: string[];
  highlightTags?: string[];
  verdict: string;
  pickLabel?: string;
  pickFor?: "mom" | "cousin" | "gaming" | "creator" | "business";
  benchmarks?: {
    antutu?: number;
    geekbenchSingle?: number;
    geekbenchMulti?: number;
    batteryLife?: number;
    chargingSpeed?: number;
    pcbMark?: number;
    cinebenchR23Multi?: number;
  };
  specs: Record<string, any>;
  releaseDate: string;
};

export default function DeviceCard({ device }: { device: Device }) {
  const [imgError, setImgError] = useState(false);

  const isMom = device.pickFor === "mom";
  const isCousin = device.pickFor === "cousin";
  const isGaming = device.pickFor === "gaming";
  const isCreator = device.pickFor === "creator";
  const isBusiness = device.pickFor === "business";

  const ringColor = isMom
    ? "ring-[var(--color-pink)]/30"
    : isCousin
      ? "ring-[var(--color-blue)]/30"
      : isGaming
        ? "ring-[var(--color-orange)]/30"
        : isCreator
          ? "ring-[var(--color-purple)]/30"
          : isBusiness
            ? "ring-[var(--color-green)]/30"
            : "";

  const badgeColor = isMom
    ? "bg-[var(--color-pink)]/10 text-[var(--color-pink)] border-[var(--color-pink)]/20"
    : isCousin
      ? "bg-[var(--color-blue)]/10 text-[var(--color-blue)] border-[var(--color-blue)]/20"
      : isGaming
        ? "bg-[var(--color-orange)]/10 text-[var(--color-orange)] border-[var(--color-orange)]/20"
        : isCreator
          ? "bg-[var(--color-purple)]/10 text-[var(--color-purple)] border-[var(--color-purple)]/20"
          : isBusiness
            ? "bg-[var(--color-green)]/10 text-[var(--color-green)] border-[var(--color-green)]/20"
            : "";

  // Type label
  const typeLabels: Record<string, string> = {
    android: "Android",
    ios: "iOS",
    kindle: "Kindle",
    foldable: "Foldable",
    macbook: "MacBook",
    ultrabook: "Ultrabook",
    gaming: "Gaming Laptop",
    creator: "Creator Laptop",
    convertible: "Convertible",
    business: "Business",
    "mini-pc": "Mini PC",
    desktop: "Desktop",
    "gaming-rig": "Gaming PC",
    workstation: "Workstation",
    windows: "Windows",
    aio: "All-in-One",
  };

  // Key specs based on type
  const getKeySpecs = () => {
    if (
      device.type === "android" ||
      device.type === "ios" ||
      device.type === "foldable"
    ) {
      return [
        { label: "Display", value: device.specs.display },
        { label: "Chip", value: device.specs.processor },
        { label: "RAM/Storage", value: device.specs.ramStorage },
        { label: "Camera", value: device.specs.camera },
        { label: "Battery", value: device.specs.battery },
        { label: "Software", value: device.specs.software },
      ];
    } else if (
      device.type === "ultrabook" ||
      device.type === "gaming" ||
      device.type === "macbook" ||
      device.type === "creator" ||
      device.type === "convertible" ||
      device.type === "business"
    ) {
      return [
        { label: "Display", value: device.specs.display },
        { label: "CPU", value: device.specs.processor },
        { label: "RAM", value: `${device.specs.ram}GB` },
        {
          label: "Storage",
          value: `${device.specs.storage}GB ${device.specs.storageType}`,
        },
        { label: "GPU", value: device.specs.gpu },
        { label: "Battery", value: device.specs.battery },
      ];
    } else {
      return [
        { label: "CPU", value: device.specs.processor },
        { label: "Cores", value: device.specs.cores },
        {
          label: "RAM",
          value: `${device.specs.ram}GB ${device.specs.ramType}`,
        },
        {
          label: "Storage",
          value: `${device.specs.storage}GB ${device.specs.storageType}`,
        },
        {
          label: "GPU",
          value:
            device.specs.gpu +
            (device.specs.vram ? ` ${device.specs.vram}GB` : ""),
        },
        { label: "Form", value: device.specs.formFactor },
      ];
    }
  };

  return (
    <div
      className={`group relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[var(--color-accent)]/20 hover:shadow-[0_0_40px_rgba(184,255,87,0.04)] ${
        ringColor ? `ring-1 ${ringColor}` : ""
      }`}
    >
      {device.pickLabel && (
        <div
          className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider border ${badgeColor}`}
        >
          {device.pickLabel}
        </div>
      )}

      {/* Watchlist heart - top right */}
      <div className="absolute top-4 right-4 z-10">
        <WatchlistButton
          deviceId={device.id}
          kind={(device as any).kind || "phone"}
          deviceName={device.name}
        />
      </div>

      <div className="relative h-44 bg-gradient-to-b from-[var(--color-surface-2)] to-[var(--color-surface)] flex items-center justify-center overflow-hidden">
        {!imgError ? (
          <img
            src={device.image}
            alt={`${device.brand} ${device.name}`}
            className="h-36 w-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-3xl opacity-40">
            {device.type === "ios" || device.type === "macbook"
              ? "🍎"
              : device.type === "android"
                ? "📱"
                : device.type === "gaming" || device.type === "gaming-rig"
                  ? "🎮"
                  : "💻"}
          </div>
        )}
        <div className="absolute bottom-3 right-3 bg-[var(--color-bg)]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[var(--color-border)]">
          <span className="text-[var(--color-accent)] font-mono text-sm font-semibold">
            {device.priceFormatted}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-[var(--color-bg)]/80 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider text-[var(--color-text-dim)] border border-[var(--color-border)]">
          {typeLabels[device.type] || device.type}
        </div>
      </div>

      <div className="p-5">
        <div className="mb-3">
          <p className="text-[var(--color-text-muted)] text-[11px] font-mono uppercase tracking-[0.2em] mb-1">
            {device.brand}
          </p>
          <h3 className="text-lg font-semibold text-[var(--color-text)] leading-tight">
            {device.name}
          </h3>
        </div>

        {device.tags && device.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {device.tags.slice(0, 5).map((tag) => {
              const isHighlight = device.highlightTags?.includes(tag);
              return (
                <span
                  key={tag}
                  className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider border ${
                    isHighlight
                      ? "border-[var(--color-accent)]/30 text-[var(--color-accent)] bg-[var(--color-accent)]/5"
                      : "border-[var(--color-border)] text-[var(--color-text-dim)]"
                  }`}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        )}

        {/* Mini benchmark strip */}
        {device.benchmarks && (
          <div className="grid grid-cols-3 gap-2 mb-3 pt-3 border-t border-[var(--color-border)]">
            {device.benchmarks.antutu && (
              <div className="text-center">
                <div className="text-[9px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                  AnTuTu
                </div>
                <div className="text-xs font-mono text-[var(--color-text)] font-semibold">
                  {(device.benchmarks.antutu / 1000).toFixed(0)}K
                </div>
              </div>
            )}
            {device.benchmarks.pcbMark && (
              <div className="text-center">
                <div className="text-[9px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                  PCMark
                </div>
                <div className="text-xs font-mono text-[var(--color-text)] font-semibold">
                  {(device.benchmarks.pcbMark / 1000).toFixed(1)}K
                </div>
              </div>
            )}
            {device.benchmarks.cinebenchR23Multi && (
              <div className="text-center">
                <div className="text-[9px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                  R23 Multi
                </div>
                <div className="text-xs font-mono text-[var(--color-text)] font-semibold">
                  {(device.benchmarks.cinebenchR23Multi / 1000).toFixed(1)}K
                </div>
              </div>
            )}
            {device.benchmarks.batteryLife && (
              <div className="text-center">
                <div className="text-[9px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                  Battery
                </div>
                <div className="text-xs font-mono text-[var(--color-text)] font-semibold">
                  {device.benchmarks.batteryLife}h
                </div>
              </div>
            )}
            {device.benchmarks.chargingSpeed && (
              <div className="text-center">
                <div className="text-[9px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                  Charge
                </div>
                <div className="text-xs font-mono text-[var(--color-text)] font-semibold">
                  {device.benchmarks.chargingSpeed}W
                </div>
              </div>
            )}
            {device.benchmarks.geekbenchSingle && !device.benchmarks.antutu && (
              <div className="text-center">
                <div className="text-[9px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                  GB Single
                </div>
                <div className="text-xs font-mono text-[var(--color-text)] font-semibold">
                  {device.benchmarks.geekbenchSingle}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 pt-3 border-t border-[var(--color-border)]">
          {getKeySpecs().map((spec) => (
            <div key={spec.label} className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                {spec.label}
              </span>
              <span className="text-[12px] text-[var(--color-text-dim)] leading-snug mt-0.5">
                {spec.value}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-[var(--color-surface-2)] rounded-xl border-l-2 border-[var(--color-accent)]/40">
          <p className="text-[12px] text-[var(--color-text-dim)] leading-relaxed">
            {device.verdict}
          </p>
        </div>
      </div>
    </div>
  );
}
