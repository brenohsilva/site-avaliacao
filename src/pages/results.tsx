import Image from 'next/image'
import logoImg from '../assets/logo.svg'
import StarRateFixed from '../components/StarRateFixed'
import { api } from '../lib/axios';
import { useRouter } from 'next/router'

interface ResultProps {
    productcount: number;
    productaverige: number;
    

    deliverycount: number;
    deliveryaverige: number;

    servicecount: number;
    serviceaverige: number;

}


export default function Results( props: ResultProps ) {
    
    const integerProductAverage = props.productaverige.toFixed(1)
    const integerDeliveryAverage = props.deliveryaverige.toFixed(1)
    const integerServiceAverage = props.serviceaverige.toFixed(1)

    const router = useRouter() 
     
    function backtobeggining() {
        router.push('/')

    }

    return (
        <div className='max-w-[370px] h-auto mx-auto items-center bg-black-main rounded-[40px] animate-fade-in '>
            <main className='mt-6 mb-6 '>
                <Image className='w-52 mx-auto p-2' src={logoImg} priority alt='Bc Produtos'/>
                <div className='text-center' >
                    <h3 className='text-white text-xl p-4 border-b-[1px] border-blue-400 '>Média das avaliações!!</h3>
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
                        <StarRateFixed propValor={integerServiceAverage}></StarRateFixed>
                        <div className='m-auto pb-2 flex flex-row gap-3 justify-center' >
                            <h2>({integerServiceAverage}) de {props.servicecount} Avaliações</h2>
                            
                        </div>
                    </section>
                    
                    <div className='p-5'>
                        <button className='w-[142px] mt-4 p-2 m-auto text-base border-blue-400 border-[1px]
                         text-white rounded-2xl transition ease-in-out delay-150
                         hover:scale-110 hover:bg-zinc-900 duration-300 ' onClick={backtobeggining}> Nos avalie! </button>
                    </div>
                    
                </div>
                
            
            </main>
        </div>
    )
}

export const getServerSideProps = async () => {

    const [responseProducts, responseDelivery, responseService] = await Promise.all([
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

            servicecount: responseService.data.resultado.count,
            serviceaverige: responseService.data.resultado.media,
        }
    }
}
