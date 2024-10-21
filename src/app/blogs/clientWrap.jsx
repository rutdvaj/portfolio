// ClientBlogWrapper.js
"use client";

import { useEffect, useState } from "react";

export default function ClientBlogWrapper({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading placeholder
  }

  return children;
}
