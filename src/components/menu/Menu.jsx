import React from "react";
import Tab from "../tab/Tab";

export default function Menu() {
  return (
    <div className="tabs">
      {/*<Tab text="Home"  target="/home"/>*/}
      <Tab text="Lançamentos" target="/lancamentos" />
      <Tab text="Populares" target="/populares" />
      <Tab text="Filmes" target="/filmes" />
      <Tab text="Series" target="/series" />
  </div>
  );
}
