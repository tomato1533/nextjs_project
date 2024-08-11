import { useEffect } from "react";
import style from "./index.module.css";

export default function Home() {

  const text = {
    "japan": {
      "center": "初心者からエキスパートへ",
      "see_button": "見る"
    },
    "english": {
      "center": "From beginner to expert",
      "see_button": "see"
    }
  } 

  const lang = "japan"
  useEffect(() => {
    document.title = "Ryusei code"
    const scrollAmount = window.innerHeight;
    
    document.getElementById("post").addEventListener("click", () => {
      window.scrollTo({
        top: scrollAmount+scrollAmount,
        behavior: "smooth"
      })
    })
    document.getElementById("setting").addEventListener("click", () => {
      window.scrollTo({
        top: scrollAmount,
        behavior: "smooth"
      })
    })
    document.querySelector(".see").addEventListener("click", () => {
      window.scrollTo({
        top: scrollAmount,
        behavior: "smooth"
      })
    })
    document.getElementById("home").addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    })
  }, [])
  return (
    <section>
      <section id={style.select}>
          <a className={style.list} id="home">Home</a>
          <a className={style.list} id="setting">next.js</a>
          <a className={style.list} id="post">end</a>
        </section>
      <header id={style.header}>
        <section id={style.center_content}>
          <h1 translate="no" id={style.center_text_h1}>RYUSEI CODE</h1>
          <p id={style.center_text_p}>{text[lang]["center"]}</p>
          <button translate="no" id={style.see_button} className="see">{text[lang]["see_button"]}</button>
        </section>
        <section id={style.text_2}>
        <p id={style.message}>
          next.jsは、プログラミングの未来を切り拓く次世代の技術です。
          コードの効率性と可読性を高めるために設計されたこの技術は、
          開発者がより少ない労力で高品質なソフトウェアを作成するためのツールです。
          シンプルな構文と強力な機能を兼ね備え、プロジェクトの迅速な進行とメンテナンスの簡便さを実現します。
        </p>
        </section>
      </header>
      <main id={style.main}>
        <section id={style.scroll_posts}>
        </section>
      </main>
      <footer id={style.footer}>
        <section>
        </section>
      </footer>
    </section>
  );
}
