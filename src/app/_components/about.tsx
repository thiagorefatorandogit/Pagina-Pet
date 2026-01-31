'use client';

import Image from "next/image";
import { Check, WhatsappLogo, MapPin } from '@phosphor-icons/react';
import about1Img from '../../../public/about-1.png';
import about2Img from '../../../public/about-2.png';

export function About() {
  return (
    <section className="bg-[#fdf6ec] py-16">
      <div className="container px-4 mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

       
        <div className="relative"
           data-aos="fade-up-right"
           data-aos-delay="300"
        >

        
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
            <Image
              src={about1Img}
              alt="foto do cachorro"
              fill
              quality={100}
              priority
              className="object-cover hover:scale-110 duration-300 rounded-3xl"
            />
          </div>

          {/* Segunda imagem sobreposta */}
          <div className="absolute w-40 h-40 right-4 -bottom-8 overflow-hidden rounded-full border-4 border-white">
            <Image
              src={about2Img}
              alt="foto do cachorro 2"
              fill
              quality={100}
              priority
              className="object-cover"
            />
          </div>

        </div>

        {/* Texto explicativo */}
        <div className="flex flex-col justify-center space-y-6 mt-10"    data-aos="fade-up-left"
              data-aos-delay="500">
          <h2 className="text-4xl font-bold mb-4">Sobre Nosso Pet Shop</h2>

          <p className="text-lg text-gray-700 mb-6">
            Somos um pet shop dedicado ao cuidado e bem-estar dos seus animais de estimação. 
            Oferecemos carinho, atenção especial e serviços de qualidade para cada pet.
          </p>

          <ul className="space-y-4 mb-6">
            <li className="flex items-center gap-2">
              <Check size={20} weight="bold" className="text-green-500" />
              Aberto desde 2005
            </li>
            <li className="flex items-center gap-2">
              <Check size={20} weight="bold" className="text-green-500" />
              Profissionais especializados
            </li>
            <li className="flex items-center gap-2">
              <Check size={20} weight="bold" className="text-green-500" />
              Atendimento personalizado
            </li>
          </ul>

          
          <div className="flex flex-wrap gap-4">
            <a
              target='_blank'
              href= {'https://wa.me/123456789?text=Ola vim pelo site e gostaria de mais informações'}
              className="bg-[#e84c3d] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
            >
              <WhatsappLogo size={20} weight="bold" className="text-white" />
              Contato via Whatsapp
            </a>

            <a
              href="#"
              className=" flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
            >
              <MapPin size={20} weight="bold" className="text-black" />
              Endereço da Loja
            </a>
          </div>

        </div>
        </div>

      </div>
    </section>
  );
}
