import { useState } from "react";

export function TextInput() {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      onChange={(event) => handleUpdate(event.target.value)}
      setValue={value}
    />
  );
}
