import React from "react";
import Tab from "../tab/Tab";

export default function Menu() {
  return (
    <div className="tabs">
      <Tab text="Lançamentos" target="lancamentos" />
      <Tab text="Populares" target="populares" />
      <Tab text="Sobre" target="sobre" />
  </div>
  );
}
