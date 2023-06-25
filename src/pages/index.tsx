import Image from 'next/image'
import logoImg from '../assets/logo.svg'
import { useState } from 'react'
import StarRating from '../components/StarRating'

export default function Home() {
        const [ratingProducts, setRatingProducts] = useState(null);
        const [ratingDelivery, setRatingDelivery] = useState(null);
        const [ratingService, setRatingService] = useState(null);

    return (
        <div className='max-w-[370px] h-auto mx-auto items-center bg-blue-main rounded-[40px] '>
            <main className='mt-6 mb-6 '>
                <Image className='w-52 mx-auto p-2' src={logoImg} alt='Bc Produtos'/>
                <div className='text-center' >
                    <h3 className='text-white text-xl p-4 border-b-[1px] border-b-slate-700 '>Nos Avalie!</h3>
                </div>
              
                <div className='text-center mt-7'>
                    <section>
                    <h2 className='text-white text-2xl'>Produtos</h2>
                    <StarRating rating={ratingProducts} onRating={(rate) => setRatingProducts(rate)}></StarRating>
                    </section>

                    <section>
                    <h2 className='text-white text-2xl mt-[46px]'>Entregas</h2>
                    <StarRating rating={ratingDelivery} onRating={(rate) => setRatingDelivery(rate)}></StarRating>
                    </section>

                    <section>
                    <h2 className='text-white text-2xl mt-[46px]'>Atendimento</h2>
                    <StarRating rating={ratingService} onRating={(rate) => setRatingService(rate)}></StarRating>
                    </section>

                    <button className=' text-2xl w-[192px] mt-7 mb-7 bg-slate-900 text-white p-3 rounded-2xl transition ease-in-out delay-150
                    hover:scale-110 hover:bg-slate-800 duration-300'>Enviar</button>
                </div>
            
            </main>
        </div>
    )
}