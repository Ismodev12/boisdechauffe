import { countries } from "@/config/shipping";

export function CountrySelect({
  id,
  value,
  onChange,
  name,
  required,
}: {
  id: string;
  value: string;
  onChange: (code: string) => void;
  name?: string;
  required?: boolean;
}) {
  return (
    <select id={id} name={name} className="field" value={value} onChange={(e) => onChange(e.target.value)} required={required}>
      {countries.map((c) => (
        <option key={c.code} value={c.code}>
          {c.name}
        </option>
      ))}
    </select>
  );
}
