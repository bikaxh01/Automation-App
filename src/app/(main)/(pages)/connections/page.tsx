import { CONNECTIONS } from "@/lib/constants";
import React from "react";
import ConnectionCard from "./_components/connection-card";
import { icons } from "lucide-react";

function Connections() {
  return (
    <div className=" flex flex-col gap-4 relative">
      <h1 className=" text-2xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
        Connections
      </h1>
      <div className=" relative flex flex-col gap-4">
        <section className=" text-muted-foreground p-6 flex flex-col gap-4">
          connect all your app directly from here.
          {CONNECTIONS.map((item) => (
            <ConnectionCard
              key={item.title}
              connected={item.connectionKey}
              description={item.description}
              icon={item.image}
              title={item.title}
              type={item.title}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default Connections;
