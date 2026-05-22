interface SectionBadgeProps {
  children: React.ReactNode;
  variant?: "filled" | "outline";
  className?: string;
}

export default function SectionBadge({
  children,
  variant = "filled",
  className = "",
}: SectionBadgeProps) {
  const base =
    "inline-flex w-fit self-start flex-col gap-1.5 px-[26px] py-[10px] rounded-[24px] font-bold text-sm tracking-wide whitespace-nowrap";
  const styles =
    variant === "filled"
      ? "bg-primary text-white"
      : "border border-primary text-white";

  return (
    <span className={`${base} ${styles} ${className}`}>
      {children}
      <span className="w-[19px] h-[3px] bg-white/40 rounded-full" />
    </span>
  );
}
