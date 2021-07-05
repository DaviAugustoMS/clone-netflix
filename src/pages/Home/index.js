import React from "react";
import { Header } from "../../components/Header";
import { Content, Carrousel } from "../../components/Home";
import listOne from "../../utils/listOne";
export function Home() {
  return (
    <>
      <Header />
      <Content />
      <Carrousel label="Lançamentos" data={listOne} />
      <Carrousel label="Em alta" data={listOne} />
      <Carrousel label="Continuar assistindo" data={listOne} />
      <Carrousel label="Minha lista" data={listOne} />
    </>
  );
}
