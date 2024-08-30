"use client";

import React from 'react'
import style from "./loading.module.css"
export default function loading() {
    return (
        <div className='d-flex align-items-center justify-content-center' style={{ height: "90vh" }}>
            <span className={style.loader}></span>
        </div>
    )
}
