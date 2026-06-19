import { focusAreas } from "@/content/projects";
import { Pill } from "@/components/ui/pill";

export function FocusList() {
  return (
    <ul className="flex flex-wrap justify-center gap-3">
      {focusAreas.map((area) => (
        <li key={area}>
          <Pill>{area}</Pill>
        </li>
      ))}
    </ul>
  );
}
