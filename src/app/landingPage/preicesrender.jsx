"use client";
import React from "react";
import { useState, useEffect } from "react";
import Prices, { Prices2, Prices3 } from "./prices";
export const runtime = "edge";

export default function PricesRender() {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  return (
    <div className="mt-16 sm:flex-row flex flex-col justify-around items-center">
      {client && <Prices />}
      {client && <Prices2 />}
      {client && <Prices3 />}
    </div>
  );
}
