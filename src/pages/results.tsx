import Image from 'next/image'
import logoImg from '../assets/logo.svg'
import StarRateFixed from '../components/StarRateFixed'
import { api } from '../lib/axios';

interface ResultProps {
    productcount: number;
    productaverige: number;
    

    deliverycount: number;
    deliveryaverige: number;

    assistancecount: number;
    assistanceaverige: number;

}


export default function Results( props: ResultProps ) {
    
    const integerProductAverage = Math.floor(props.productaverige)
    const integerDeliveryAverage = Math.floor(props.deliveryaverige)
    const integerAssistanceAverage = Math.floor(props.assistanceaverige)


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
                        <StarRateFixed propValor={integerProductAverage}></StarRateFixed>
                        <div className='m-auto pb-2 flex flex-row gap-3 justify-center text-white ' >
                            <h2>({integerProductAverage}) de {props.productcount} Avaliações</h2>
                            
                        </div>
                    </section>

                    <section className='border-b-[1px] border-blue-400 text-white'>
                        <h2 className='text-white text-2xl mt-[46px]'>Entregas</h2>
                        <StarRateFixed propValor={integerDeliveryAverage}></StarRateFixed>
                        <div className='m-auto pb-2 flex flex-row gap-3 justify-center' >
                            <h2>({integerDeliveryAverage}) de {props.deliverycount} Avaliações</h2>
                        </div>
                    </section>

                    <section className='border-b-[1px] border-blue-400 text-white'>
                        <h2 className='text-white text-2xl mt-[46px]'>Atendimento</h2>
                        <StarRateFixed propValor={integerAssistanceAverage}></StarRateFixed>
                        <div className='m-auto pb-2 flex flex-row gap-3 justify-center' >
                            <h2>({integerAssistanceAverage}) de {props.assistancecount} Avaliações</h2>
                            
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

export const getServerSideProps = async () => {

    const [responseProducts, responseDelivery, responseAssistance] = await Promise.all([
        api.get('allresults/Produtos'),
        api.get('allresults/Entregas'),
        api.get('allresults/Atendimento')
    ])
    
    return {
        props: {
            productcount: responseProducts.data.resultado.count,
            productaverige: responseProducts.data.resultado.media,

            deliverycount: responseDelivery.data.resultado.count,
            deliveryaverige: responseDelivery.data.resultado.media,

            assistancecount: responseAssistance.data.resultado.count,
            assistanceaverige: responseAssistance.data.resultado.media,
        }
    }
}
