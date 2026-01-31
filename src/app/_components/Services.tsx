'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react';
import { WhatsappLogo, WhatsappLogoIcon } from '@phosphor-icons/react';
// import { title } from 'process'; // removido, não é necessário

const services = [
  {
    title: "Banho & Tosa",
    description: `Inclui banho com produtos específicos para o tipo de pelagem e pele do animal,
    corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).`,
    duration: "1h",
    price:"$50",
    icon: <Scissors />,
    linkText:'Ola, vi no site sobre Banho e tosa e gostaria de mias informações.'
  },
  {
    title:"Consulta Veterinaria",
    description:"Oferece atendimento clínico ou especializado para cuidar da saúde do animal, inclui diagnóstico de doenças, aplicação de vacinas obrigatorias.",
    duration:"1h",
    icon:<Syringe />, // unificado para "icon"
    linkText:'Ola , vi no site sobre consulta veterinária e gostaria de mais informações.'
  },
  {
    title:"Taxi Pet",
    description:"Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não tem tempo ou transporte adequado para locomover os animais.",
    duration:"2h",
    price:"$80",
    icon: <CarTaxiFront />, // unificado para "icon"
    linkText:'Ola, vi no site sobre o Táxi Pet e gostaria de mais informações.'
  },
  {
    title:"Hotel para pets",
    description:"Serviços de hospedagem para animais de estimação, ideal para quando os tutores, precisarem viajar ou se ausentar por alguns dias. os pets ficam acomodados em espeços seguros, confortaveis.",
    duration:"1h",
    price:"$60",
    icon: <Hotel />, // unificado para "icon"
    linkText:'Ola, vi no site sobre Hotem para pets e gostaria de mais informações.'
  }
];

export function Services(){

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 760px)" : { slidesToScroll: 3 }
        }
    });


    function scrollPrev(){
      emblaApi?.scrollPrev();
    }

     function scrollNext(){
      emblaApi?.scrollNext();
    }
    
    return(
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
              <div>
                <h2 className="text-4xl font-bold  mb-12">SERVIÇOS</h2>

                <div className="relative">

                  <div className='overflow-hidden' ref={emblaRef}>
                    <div className='flex'>
                      {services.map((item, index) => (
                        <div key={index} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)]   px-3'>
                          <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                            <div className='flex-1 flex items-start justify-between'>

                              <div className='flex items-start gap-3'>
                                <span className='text-3xl'>{item.icon}</span>
                                <div>
                                  <h3 className='font-bold text-xl my-1'>{item.title}</h3>
                                  <p className='text-gray-400 text-sm select-none'>
                                    {item.description}
                                  </p>
                                </div>
                              </div>

                            </div>

                           <div className='border-t border-gray-700 pt-4 flex items-center justify-between'>
                            <div className='flex items-center gap-2 text-sm'>
                              <Clock className='w-4 h-4'/>
                              <span>{item.duration}</span>
                            </div>
                             
                             <a  
                               target='_blank'
                               href= {'https://wa.me/123456789?text=Ola vim pelo site e gostaria de mais informações sobre ${item.title}'}
                             className='flex items-center justify-center gap-2 hover:bg-blue-500 px-4 py-1 rounded-md duration-300'
                             >
                              
                              <WhatsappLogo className='w-5 h-5'/>
                              Entrar em Contato

                             </a>

                           </div>

                          </article>
                        </div>
                      ))}
                    </div>
                  </div>
                    
                    <button className=' bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
                      onClick={scrollPrev}
                    >
                      <ChevronLeft className='w-6 h-6 text-gray-600'/>
                    </button>

                    <button
                      className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-7 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'


                      onClick={scrollNext}
                    >
                      <ChevronRight className='w-6 h-6 text-gray-600'/>
                    </button>

                </div>
              </div>
            </div>
        </section>
    )
}
