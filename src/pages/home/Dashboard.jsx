import React from 'react'
import { ImageSunset1 } from "../../assets"
import { ButtonComponent } from '../../components'
import { ShowName, URLCode } from '../../utilities'

export default function Dashboard() {
    return (
        <div className='flex flex-col gap-4 justify-center items-center w-screen h-screen'>
            <h1>Halaman Dashboard</h1>
            <img src={ImageSunset1} alt={ImageSunset1} className="w-16 h-16 object-cover" />
            <ButtonComponent onClick={() => ShowName("Muzik")} title="Button Home" />
            <ButtonComponent onClick={() => ShowName("Zikri")} title="Button Cancel" />
            {URLCode}
            {ShowName}
        </div>
    )
}
