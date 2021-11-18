import React from "react";
import HomeBtnStyle from "../styles/HomeBtn.module.css";
import { Link } from "react-router-dom";

function HomeBtn() {
  return (
    <Link to="/Pinturas" className={HomeBtnStyle.LinkButton}>
      <button class={HomeBtnStyle.button}>
        <span>Ver arte</span>
      </button>
    </Link>
  );
}

export default HomeBtn;
