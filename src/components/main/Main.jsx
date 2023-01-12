import React from "react";
import css from "./Main.module.css";
import first_description_card from "../images/first_description_card.png";
import second_description_card from "../images/second_description_card.png";
import actualites_description_cards_1 from "../images/1_actualites_description_cards.png";
import actualites_description_cards_2 from "../images/2_actualites_description_cards.png";
import actualites_description_cards_3 from "../images/3_actualites_description_cards.png";

export default function Main() {
  return (
    <div className={css.all_main}>
      <section className={css.main}>
        <div className={css.main_header}>
          <h1 className={css.main_h1}>
            {" "}
            СПОРТИВНЫЙ КОМПЛЕКС ЗАО «SPORT COMPLEX»
          </h1>
          <h2 className={css.main_h2}>
            Современный, комфортный, прекрасно оснащенный
            спортивно-оздоровительный комплекс
          </h2>
        </div>
      </section>
      <section className={css.description_card}>
        <div className={css.card}>
          <img src={first_description_card} alt="#" />
        </div>
        <div className={css.description}>
          <h2>Oсновнoe здание</h2>
          <p>
            Основное назначение базы - проведение тренировок и встреч местного
            байдарочного клуба, а также соревнований и спортивных мероприятий. В
            здании находятся тренировочный комплекс, раздевалки, тренажерный зал
            с панорамным видом на воду, клубный зал, склад спортивного
            инвентаря. Рядом с основным зданием, у воды есть еще одна небольшая
            постройка для моторных лодок, с помостами, трибунами и
            смотровой площадкой.
          </p>
          <button>Подробнее...</button>
        </div>
      </section>
      <section className={css.description_card2}>
        <div className={css.description}>
          <h2>Экспериментальный зал</h2>
          <p>
            Экспериментальный зал с его высотой и простором - идеальное место
            для боулдеринга, паркура, баскетбола и уличного футбола. Помещения с
            практическими и акустическими требованиями, такие как танцевальный
            зал, звуковая студия, уличная кухня и офисные помещения размещаются
            в лабораторном крыле. Большая уличная зеленая зона включает в себя
            зону гимнастики и паркурную трассу. Фасад лабораторного корпуса стал
            живым полотном для уличного искусства.
          </p>
          <button>Подробнее...</button>
        </div>
        <div className={css.card}>
          <img src={second_description_card} alt="#" />
        </div>
      </section>

      <section className={css.actualites_description_cards}>
        <h1>Актуальное</h1>
        <div>
          <img
            className={css.actualites_description_cards_img}
            src={actualites_description_cards_1}
            alt="#"
          />
          <img
            className={css.actualites_description_cards_img}
            src={actualites_description_cards_2}
            alt="#"
          />
          <img
            className={css.actualites_description_cards_img}
            src={actualites_description_cards_3}
            alt="#"
          />
        </div>
      </section>
      <section className={css.contact}>
        <div className={css.contact_us}>
          <h2>Напиши нам</h2>
          <input type="tel" name="tel" id="tel" placeholder="Number" />
          <input type="email" name="email" id="email" placeholder="E-mail" />
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="10"
            placeholder="Massage"
          ></textarea>
          <button type="submit">Submit</button>
        </div>
        <div className={css.our_contact}>
          <h2> Наш контакт</h2>
          <h2> PI-2-20 BEST STUDENTS</h2>
          <h2> +996 770 45 57 96</h2>
          <h2> pi_2_20students@gmail.com</h2>
          <h2> SPORT COMPLEX</h2>
        </div>
      </section>
    </div>
  );
}
