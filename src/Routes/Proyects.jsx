import React from 'react'
import { Card } from '../Components/Card'

export const Proyects = () => {
  return (
    <>
        <div className='backgroundDiv'></div>
        <div className='container'>
            <div className='content'>
                <h1 className='title'>
                    Proyects
                </h1>
                <div className='proyects'>
                  <Card
                  img="../../public/img/rattata-games.png"
                  titulo="Rattata Games"
                  link="https://proyect-react-games.vercel.app"
                  ></Card>
                </div >
            </div>
        </div>
    </>
  )
}
