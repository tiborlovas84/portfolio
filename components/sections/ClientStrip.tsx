import { clientLogos } from "@/content/projects";
import Image from "next/image";
import { publicPath } from "@/lib/public-path";

const logoClassByName: Record<string, string> = {
  "Partner logo": "w-[5.75rem]",
  "Sotheby’s": "w-[9.75rem]",
  AAA: "w-[5.75rem]",
  Daimler: "w-[10.25rem]",
  "Mercedes-Benz": "w-[4.125rem]",
  NASA: "w-[9.25rem]",
  Aptatek: "w-[10.25rem]",
};

export function ClientStrip() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-wrap items-center justify-center gap-x-card gap-y-content p-content">
      {clientLogos.map((client) => (
        <div
          key={client.src}
          className="flex min-h-16 items-center justify-center"
        >
          <Image
            src={publicPath(client.src)}
            alt={client.name}
            width={220}
            height={96}
            className={`${logoClassByName[client.name]} h-auto max-h-16 object-contain`}
            unoptimized
          />
        </div>
      ))}
    </div>
  );
}
