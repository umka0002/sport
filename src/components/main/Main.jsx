import React from "react";
import css from "./Main.module.css";

export default function Main() {
  return (
    <div className={css.all_main}>
      <section className={css.main}>
        <div className={css.main_button}>Galerie de projet</div>
      </section>
      <section className={css.first_description_card}>
        <div className={css.card}></div>
        <div className={css.description}></div>
      </section>
      <section className={css.second_description_card}>
        <div className={css.description}></div>
        <div className={css.card}></div>
      </section>
      <section className={css.actualites_description_cards}>
        <div className={css.card}></div>
        <div className={css.card}></div>
        <div className={css.card}></div>
      </section>
      <section className={css.contact}>
        <div className={css.contact_us}></div>
        <div className={css.our_contact}></div>
      </section>
    </div>
  );
}
