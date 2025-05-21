import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <div className="elementor-element elementor-element-27b3631f e-flex e-con-boxed e-con e-parent bg-gradient-to-br from-[#111] to-[#333] text-white" data-id="27b3631f" data-element_type="container" data-settings="{\" background_background\":\"classic\"}" >
      <div className="e-con-inner container-custom py-16 md:py-20">
        <div className="elementor-element elementor-element-68576b4b e-con-full e-flex e-con e-child md:flex items-center gap-8" data-id="68576b4b" data-element_type="container">
          {/* Image Column */}
          <div className="elementor-element elementor-element-132320c7 elementor-widget elementor-widget-image md:w-1/2 w-full flex justify-center" data-id="132320c7" data-element_type="widget" data-widget_type="image.default">
            <div className="elementor-widget-container">
              <div className="relative w-full max-w-md"> {/* Retained max-w-md for image sizing constraint */}
                <Image
                  src="https://agencialab.com.br/wp-content/uploads/2025/05/LH-Workshop-Pool-de-Liquides-768x569.png"
                  alt=""
                  width={768}
                  height={569}
                  className="attachment-medium_large size-medium_large wp-image-362"
                  priority={true}
                />
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="md:w-1/2 w-full">
            <div className="elementor-element elementor-element-26c89fd2 elementor-widget__width-initial elementor-widget elementor-widget-heading" data-id="26c89fd2" data-element_type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default text-3xl md:text-4xl font-bold mb-6">
                  O Poder da Terceira Linha
                </h2>
              </div>
            </div>

            <div className="elementor-element elementor-element-48150ffe elementor-widget__width-initial elementor-widget elementor-widget-heading" data-id="48150ffe" data-element_type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h3 className="elementor-heading-title elementor-size-default text-lg md:text-xl font-medium mb-8 max-w-xl">
                  Aprenda, em detalhes, a estratégia alternativa, pouca explorada do mercado cripto, e que me dá ganhos diários entre US$3 a US$25/dia a cada 1.000 dólares investidos.
                </h3>
              </div>
            </div>

            <div className="elementor-element elementor-element-3b8de6a5 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="3b8de6a5" data-element_type="widget" data-widget_type="icon-list.default">
              <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items mb-8 space-y-3">
                  <li className="elementor-icon-list-item flex items-center gap-3">
                    <span className="elementor-icon-list-icon">
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-circle w-5 h-5 text-[#d8613c]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                    </span>
                    <span className="elementor-icon-list-text">Dias 29 de MAIO</span>
                  </li>
                  <li className="elementor-icon-list-item flex items-center gap-3">
                    <span className="elementor-icon-list-icon">
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-circle w-5 h-5 text-[#d8613c]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                    </span>
                    <span className="elementor-icon-list-text">Serão 3 horas de conteúdo 100% online e Ao Vivo</span>
                  </li>
                  <li className="elementor-icon-list-item flex items-center gap-3">
                    <span className="elementor-icon-list-icon">
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-check-circle w-5 h-5 text-[#d8613c]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                    </span>
                    <span className="elementor-icon-list-text"> Conhecimento que menos de 0,5% dos investidores cripto têm acesso</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="elementor-element elementor-element-3c1baaf3 elementor-mobile-align-center elementor-widget elementor-widget-button" data-id="3c1baaf3" data-element_type="widget" data-widget_type="button.default">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <Link href="#oferta" className="elementor-button elementor-button-link elementor-size-sm btn-primary inline-block text-center text-lg px-8 py-3 font-medium uppercase">
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-text">QUERO MINHA VAGA</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default HeroSection;
