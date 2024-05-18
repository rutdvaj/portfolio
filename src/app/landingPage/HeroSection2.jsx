"use client";
import React from "react";
import { useState, useEffect } from "react";
import { CardWithForm } from "./Card2";
import { CardWithForm2 } from "./Card3";
import { CardWithForm3 } from "./Card4";
export default function HS2() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex-col flex sm:flex sm:flex-row justify-between w-full">
      {isClient && <CardWithForm />}
      {isClient && <CardWithForm2 />}
      {isClient && <CardWithForm3 />}
    </div>
  );
}
