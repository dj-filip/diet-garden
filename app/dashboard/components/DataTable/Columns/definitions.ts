import "@tanstack/react-table";

declare module "@tanstack/react-table" {
  // ⚠️  TWO generic parameters, exactly like the upstream declaration
  interface ColumnMeta<TData extends unknown , TValue = unknown> {
    /** Tailwind classes that the cell renderer should apply */
    className?: string;
    /** Optional header‑cell classes */
    headerClassName?: string;
  }
}