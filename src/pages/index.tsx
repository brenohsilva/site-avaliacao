import Image from 'next/image'
import logoImg from '../assets/logo.svg'
import { useState} from 'react'
import classNames from 'classnames';
import { api } from '../lib/axios';
import { useRouter } from 'next/router'
import StarRating from '../components/StarRating'
import smileIcon from '../assets/smile.svg'



interface HomeProps {
    rate: number;
}

export default function Home(props: HomeProps) {
    const [ratingProducts, setRatingProducts] = useState<number>(0);
    const [ratingDelivery, setRatingDelivery] = useState<number>(0);
    const [ratingService, setRatingService] = useState<number>(0);
    
    const [visibleStar, setVisibleStar] = useState('visible')
    const [visibleThanksBox, setVisibleThanksBox] = useState('hidden')
    const router = useRouter() 

    var divstars = classNames('text-center', 'mt-7', visibleStar)
    var divthanksbox = classNames('h-[400px] mx-auto grid justify-items-center mt-7 bg-[#0A0E27] w-72 rounded-t-[40px] animate-fade-in', visibleThanksBox)
    

    async function sendData(){

        try {
            await api.post('/results', {
                title: "Produtos",
                stars: ratingProducts
            });

            await api.post('/results', {
                title: "Entregas",
                stars: ratingDelivery
            });

            await api.post('/results', {
                title: "Atendimento",
                stars: ratingService
            });

            setVisibleStar('hidden')
            setVisibleThanksBox('visible')
        
            setTimeout(() =>{
                router.push('/results')
            }, 3000)

        } catch(err){
            console.log(err)
            alert('Falha ao enviar os dados!')
        }
        
        
 
    }


    return (
        <div className='max-w-[370px] h-[750px] mx-auto items-center bg-blue-main rounded-[40px] '>
            <main className='mt-6 mb-6 '>
                <Image className='w-52 max-[400px]:w-44 max mx-auto p-2' src={logoImg} priority alt='Bc Produtos'/>
                <div className='text-center' >
                    <h3 className='text-white text-xl p-4 border-b-[1px] border-b-slate-700 '>Nos Avalie!</h3>
                </div>
              
                <div className={divthanksbox}>
                    <section className= ' text-center flex flex-col items-center justify-center gap-4'>
                        <Image src={smileIcon} alt=''/>
                            <h2 className='text-white text-2xl'>Obrigado!</h2>
                            <h3 className=' w-52 text-white text-lg'>A sua avaliação é muito importante para nós!</h3>
                    </section>
                </div>

                <div className={divstars}>
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
                    hover:scale-110 hover:bg-slate-800 duration-300' onClick={sendData}>Enviar</button>
                </div>
            
            </main>
        </div>
    )

}