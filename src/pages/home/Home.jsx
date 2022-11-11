import React from 'react'
import { useState, useEffect } from 'react'
import { ImageSunset2 } from "../../assets"
import { ButtonComponent, CardComponent } from '../../components'

export default function Home() {
    return (
        <div className='flex flex-col justify-center items-center w-screen h-screen'>
            <h1>Halaman Home</h1>
            <img src={ImageSunset2} alt={ImageSunset2} className="w-16 h-16 object-cover" />
            <ButtonComponent />
            <CardComponent />
        </div>
    )
}
