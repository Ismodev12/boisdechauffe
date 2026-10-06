import { useId } from "react";

type Props = {
  label: string;
  error?: string;
  optional?: boolean;
  className?: string;
  children: (props: { id: string; "aria-invalid"?: boolean; "aria-describedby"?: string }) => React.ReactNode;
};

/** Champ de formulaire avec libellé et message d'erreur accessibles. */
export function Field({ label, error, optional, className, children }: Props) {
  const id = useId();
  const errId = `${id}-err`;
  return (
    <div className={className}>
      <label htmlFor={id} className="field-label">
        {label}
        {optional && <span className="font-normal text-bark-500"> (facultatif)</span>}
      </label>
      {children({ id, "aria-invalid": error ? true : undefined, "aria-describedby": error ? errId : undefined })}
      {error && (
        <p id={errId} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
