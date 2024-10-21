import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <section className="bg-dark ">
        {/* Include shared UI here e.g. a header or sidebar */}

        {children}
      </section>
    </div>
  );
}
