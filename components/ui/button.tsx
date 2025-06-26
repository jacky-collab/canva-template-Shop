
export function Button({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <button className={`bg-black text-white rounded-2xl px-4 py-2 hover:opacity-90 ${className}`}>
      {children}
    </button>
  );
}
