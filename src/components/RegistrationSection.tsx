import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const RegistrationSection: React.FC = () => {
  return (
    <div className="elementor-element elementor-element-54970ae2 e-flex e-con-boxed e-con e-parent section-padding bg-gray-50 dark:bg-gray-900" data-id="54970ae2" data-element_type="container" data-settings='{"background_background":"classic"}'>
      <div className="e-con-inner container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="elementor-element elementor-element-1817f5e7 elementor-widget__width-initial elementor-widget elementor-widget-heading" data-id="1817f5e7" data-element_type="widget" data-widget_type="heading.default">
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default text-3xl md:text-4xl font-bold mb-6 text-center">
                Quanto vou investir para participar do Workshop O poder da terceira linha.
              </h2>
            </div>
          </div>

          <div className="elementor-element elementor-element-2bfea01b elementor-widget__width-initial elementor-widget elementor-widget-heading" data-id="2bfea01b" data-element_type="widget" data-widget_type="heading.default">
            <div className="elementor-widget-container">
              <h3 className="elementor-heading-title elementor-size-default text-2xl font-semibold mb-12 text-center">
                Curso ao Vivo de 3 horas práticas
              </h3>
            </div>
          </div>

          <div className="elementor-element elementor-element-39d58fc2 elementor-widget__width-initial elementor-widget elementor-widget-heading" data-id="39d58fc2" data-element_type="widget" data-widget_type="heading.default">
            <div className="elementor-widget-container">
              <h4 className="elementor-heading-title elementor-size-default text-xl font-medium mb-10 text-center">
                Dia 07 de Junho, às 19h.
              </h4>
            </div>
          </div>

          <div className="elementor-element elementor-element-ca7e69d e-con-full e-flex e-con e-child" id="oferta" data-id="ca7e69d" data-element_type="container">
            <div className="elementor-element elementor-element-6b022f80 e-con-full e-flex e-con e-child bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md mx-auto" data-id="6b022f80" data-element_type="container" data-settings='{"background_background":"classic"}'>
              <div className="elementor-element elementor-element-7ffe6d7d elementor-widget elementor-widget-image" data-id="7ffe6d7d" data-element_type="widget" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <Image
                    src="https://agencialab.com.br/wp-content/uploads/elementor/thumbs/LH-Workshop-Pool-de-Liquides-r63drfby9k9wfp4lpd7fcvkb0ufcq9spd7a2rh6d28.png"
                    alt="LH - Workshop Pool de Liquides"
                    title="LH – Workshop Pool de Liquides"
                    width={474}
                    height={351}
                    className="mx-auto"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="elementor-element elementor-element-48e3f652 elementor-widget__width-initial elementor-widget elementor-widget-heading" data-id="48e3f652" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container p-8">
                  <h2 className="elementor-heading-title elementor-size-default text-5xl font-extrabold text-blue-600 text-center">
                    R$ 97,00
                  </h2>
                </div>
              </div>

              <div className="elementor-element elementor-element-7fd620 elementor-mobile-align-center elementor-align-center elementor-widget elementor-widget-button" id="botao-checkout" data-id="7fd620" data-element_type="widget" data-widget_type="button.default">
                <div className="elementor-widget-container p-8 pt-0">
                  <div className="elementor-button-wrapper">
                    <Link href="https://chk.eduzz.com/E9OO6PXQ9B" id="#Oferta" className="elementor-button elementor-button-link elementor-size-sm block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg text-center transition-colors">
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
      </div>
    </div>
  );
};

export default RegistrationSection;