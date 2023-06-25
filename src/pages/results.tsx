import Image from 'next/image'
import logoImg from '../assets/logo.svg'
import Rate from '../components/Rate'
import { useState } from 'react'
import StarRateFixed from '../components/StarRateFixed'


export default function Results() {
    const [rating, setRating] = useState(0);
    
    return (
        <div className='max-w-[370px] h-auto mx-auto items-center bg-black-main rounded-[40px] '>
            <main className='mt-6 mb-6 '>
                <Image className='w-52 mx-auto p-2' src={logoImg} alt='Bc Produtos'/>
                <div className='text-center' >
                    <h3 className='text-white text-xl p-4 border-b-[1px] border-blue-400 '>Nossas avaliações!!</h3>
                </div>
            
                <div className='text-center mt-7 m-auto w-[318px] p-1 flex flex-col justify-center'>
                    <section className='border-b-[1px] border-blue-400'>
                        <h2 className='text-white text-2xl'>Produtos</h2>
                        <StarRateFixed></StarRateFixed>
                        <div className='m-auto pb-2 flex flex-row gap-3 justify-center text-white ' >
                            <h2>(4.0)</h2>
                            <h2>79 Avaliações</h2>
                        </div>
                    </section>

                    <section className='border-b-[1px] border-blue-400 text-white'>
                        <h2 className='text-white text-2xl mt-[46px]'>Entregas</h2>
                        <StarRateFixed></StarRateFixed>
                        <div className='m-auto pb-2 flex flex-row gap-3 justify-center' >
                            <h2>(3.5)</h2>
                            <h2>45 Avaliações</h2>
                        </div>
                    </section>

                    <section className='border-b-[1px] border-blue-400 text-white'>
                        <h2 className='text-white text-2xl mt-[46px]'>Atendimento</h2>
                        <StarRateFixed></StarRateFixed>
                        <div className='m-auto pb-2 flex flex-row gap-3 justify-center' >
                            <h2>(5.0)</h2>
                            <h2>32 Avaliações</h2>
                        </div>
                    </section>
                    
                    <div className='p-5'>
                        <button className='w-[142px] mt-4 p-2 m-auto text-base border-blue-400 border-[1px]
                         text-white rounded-2xl transition ease-in-out delay-150
                         hover:scale-110 hover:bg-zinc-900 duration-300 '> Nos avalie! </button>
                    </div>
                    
                </div>
                
            
            </main>
        </div>
    )
}