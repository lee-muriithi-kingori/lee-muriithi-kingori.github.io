"use client";

import * as React from "react";

// Live Nairobi clock (Africa/Nairobi, EAT). Real local time, 10s refresh.
const fmt = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Africa/Nairobi",
});

export function NairobiClock({ className }: { className?: string }) {
  const [now, setNow] = React.useState("--:--");
  React.useEffect(() => {
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 10000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className={className} title="Nairobi, East Africa Time">
      NBO {now} EAT
    </span>
  );
}
