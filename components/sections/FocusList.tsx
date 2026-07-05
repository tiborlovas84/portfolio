import { focusAreas } from "@/content/projects";
import { Badge } from "@/components/ui/badge";

export function FocusList() {
  return (
    <ul className="flex flex-wrap justify-center gap-3">
      {focusAreas.map((area) => (
        <li key={area}>
          <Badge variant="large">{area}</Badge>
        </li>
      ))}
    </ul>
  );
}
