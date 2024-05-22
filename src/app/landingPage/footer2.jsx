import React from "react";
import { raleway } from "../layout";
export const runtime = "edge";

export default function Footer2() {
  return (
    <div className="flex items-center justify-center">
      <p
        className={`${raleway.className} text-white/70 text-lg text center mt-52`}
      >
        © 2024. Rutdvaj Rawal. All rights reserved.
      </p>
    </div>
  );
}
