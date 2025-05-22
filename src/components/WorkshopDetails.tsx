import React from 'react';
import Image from 'next/image';
import { CTAButton } from './CTAButton';

export const WorkshopDetails: React.FC = () => {
    return (
        <section className="section bg-white">
            <div className="container-wide">
                <h2 className="section-header">VEJA O QUE VOCÊ VAI <span className="text-primary">APRENDER NESSE WORKSHOP</span></h2>

                <div className="grid md:grid-cols-2 gap-16 mt-16">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                            <span className="text-text text-3xl font-bold">1</span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-center md:text-left">Primeira Parte</h3>
                            <h4 className="text-xl font-semibold mb-4 text-center md:text-left">O que você vai aprender?</h4>
                            <p className="text-lg text-gray-700">
                                <strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>

                    <div className="relative h-80 md:h-auto rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/workshop-crypto.png"
                            alt="Léo Hermoso Workshop Parte 1"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-16 mt-24">
                    <div className="relative h-80 md:h-auto rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
                        <Image
                            src="/images/leo-hermoso.png"
                            alt="Léo Hermoso Workshop Parte 2"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-start order-1 md:order-2">
                        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                            <span className="text-text text-3xl font-bold">2</span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-center md:text-left">Segunda Parte</h3>
                            <h4 className="text-xl font-semibold mb-4 text-center md:text-left">O que você vai aprender?</h4>
                            <p className="text-lg text-gray-700">
                                <strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <div className="flex justify-center">
                        <CTAButton className="text-xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}; 