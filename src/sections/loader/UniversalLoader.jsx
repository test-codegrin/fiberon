"use client";

export default function UniversalLoader({
  size = "md",
  fullScreen = false,
  color = "#347A64",
  text,
}) {
  const sizes = {
    sm: "w-6 h-6 border-2",
    md: "w-10 h-10 border-4",
    lg: "w-16 h-16 border-4",
  };

  const loader = (
    <div className="flex flex-col items-center gap-3">
      <div
        className={`${sizes[size]} rounded-full animate-spin border-gray-200`}
        style={{ borderTopColor: color }}
      />
      {text && (
        <p className="text-sm font-medium" style={{ color }}>
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
        {loader}
      </div>
    );
  }

  return loader;
}
