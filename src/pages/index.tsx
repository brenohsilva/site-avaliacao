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
    const router = useRouter()

    const [ratingProducts, setRatingProducts] = useState<number>(0);
    const [ratingDelivery, setRatingDelivery] = useState<number>(0);
    const [ratingService, setRatingService] = useState<number>(0);
    
    const [visibledivstar, setvisibledivstar] = useState('visible')
    const [visiblethanksbox, setvisiblethanksbox] = useState('hidden')
    const [visiblesendbutton, setvisiblesendbutton] = useState('visible')
    const [visibleloadbutton, setvisibleloadbutton] = useState('hidden')

    var divstars = classNames('text-center', 'mt-7', visibledivstar)
    var divthanksbox = classNames('h-[400px] mx-auto grid justify-items-center mt-7 bg-[#0A0E27] w-72 rounded-t-[40px] animate-fade-in', visiblethanksbox)
    var sendbutton = classNames('text-xl w-[192px] mt-7 mb-7 bg-slate-900 text-white p-3 rounded-2xl transition ease-in-out delay-150 hover:scale-110 hover:bg-slate-800 duration-300', visiblesendbutton)
    var sendingloading = classNames('flex items-center justify-center', visibleloadbutton)

    async function sendData(){

        try {

            setvisiblesendbutton('hidden')
            setvisibleloadbutton('visible')

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

            setvisibledivstar('hidden')
            setvisiblethanksbox('visible')
        
            setTimeout(() =>{
                router.push('/results')
            }, 3000)

        } catch(err){
            console.log(err)
            alert('Falha ao enviar os dados!')
            setvisiblesendbutton('visible')
            setvisibleloadbutton('hidden')
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

                    <button className={sendbutton} onClick={sendData}>Enviar</button>

                    <div className={sendingloading}>
                        <button type="button" className="flex items-center justify-center text-xl w-[192px] mt-7 mb-7 bg-slate-900 text-white p-3 rounded-2xl transition ease-in-out delay-150" disabled>
                            <svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span className="font-medium"> Enviando... </span>
                        </button>
                    </div>
                </div>
            
            </main>
        </div>
    )

}