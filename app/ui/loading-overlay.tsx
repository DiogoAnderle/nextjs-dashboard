"use client";

export function LoadingOverlay({ isLoading }: { isLoading: boolean }) {
  if (!isLoading) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="h-16 w-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
