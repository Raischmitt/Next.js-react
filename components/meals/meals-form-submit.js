"use client";

import { useFormState } from "react-dom";

export default function MealsFormSubmit() {
  const { peding } = useFormState();

  return (
    <>
      <button disabled={peding}>
        {peding ? "Bubmitting..." : "Share meal"}
      </button>
    </>
  );
}
