import { clientLogos } from "@/content/projects";
import Image from "next/image";

export function ClientStrip() {
  return (
    <div className="mx-auto grid w-full max-w-xl justify-items-center gap-x-micro gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
      {clientLogos.map((client, index) => (
        <div
          key={client.src}
          className={`flex min-h-20 items-center justify-center ${
            index === clientLogos.length - 1 ? "sm:col-span-2 lg:col-span-3" : ""
          }`}
        >
          <Image
            src={client.src}
            alt={client.name}
            width={160}
            height={64}
            className="max-h-12 max-w-36 object-contain"
          />
        </div>
      ))}
    </div>
  );
}
