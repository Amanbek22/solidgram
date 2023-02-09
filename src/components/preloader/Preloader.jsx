import React from 'react'
import css from "./Preloader.module.css"

function Preloader() {
  return (
    <div className={css.wrapper}>
        <img src="https://icon-library.com/images/ajax-loading-icon/ajax-loading-icon-18.jpg" alt="Loader" />
    </div>
  )
}

export default Preloader