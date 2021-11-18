import React from "react";
import FilterStyle from "../styles/Filter.module.css";

function Filter(props) {
  const updateCheckBox = (event) => {
    if (event.target.checked) {
      props.setCategoryId(parseInt(event.target.value));
    } else {
      props.setCategoryId(null);
    }
  };

  return (
    <div className={FilterStyle.filter}>
      <h2 className={FilterStyle.filterTitle}>Filtrar por:</h2>
      <div className={FilterStyle.filterSection}>
        <div className={FilterStyle.category}>
          <label className={FilterStyle.categoryLabel}>
            <input type="checkbox" onChange={updateCheckBox} value="0" />
            Realismo
          </label>
        </div>
        <div className={FilterStyle.category}>
          <label className={FilterStyle.categoryLabel}>
            <input type="checkbox" onChange={updateCheckBox} value="1" />
            Hiperrealismo
          </label>
        </div>
        <div className={FilterStyle.category}>
          <label className={FilterStyle.categoryLabel}>
            <input type="checkbox" onChange={updateCheckBox} value="2" />
            Surrealismo
          </label>
        </div>
        <div className={FilterStyle.category}>
          <label className={FilterStyle.categoryLabel}>
            <input type="checkbox" onChange={updateCheckBox} value="3" />
            Impresionismo
          </label>
        </div>
        <div className={FilterStyle.category}>
          <label className={FilterStyle.categoryLabel}>
            <input type="checkbox" onChange={updateCheckBox} value="4" />
            Expresionismo
          </label>
        </div>
        <div className={FilterStyle.category}>
          <label className={FilterStyle.categoryLabel}>
            <input type="checkbox" onChange={updateCheckBox} value="5" />
            Arte abstracto
          </label>
        </div>
        <div className={FilterStyle.category}>
          <label className={FilterStyle.categoryLabel}>
            <input type="checkbox" onChange={updateCheckBox} value="6" />
            Arte Pop
          </label>
        </div>
      </div>
    </div>
  );
}

export default Filter;
