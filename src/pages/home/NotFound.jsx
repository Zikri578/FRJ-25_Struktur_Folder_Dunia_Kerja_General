import React from 'react'
import { ImageSunset3 } from "../../assets"
import { ButtonComponent } from '../../components'

export default function NotFound() {
    return (
        <div className='flex flex-col justify-center items-center w-screen h-screen'>
            <h1>Halaman Not Found</h1>
            <img src={ImageSunset3} alt={ImageSunset3} className="w-16 h-16 object-cover" />
            <ButtonComponent />
        </div>
    )
}
