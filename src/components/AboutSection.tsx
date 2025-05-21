import React from 'react';
import Image from 'next/image';
const AboutSection: React.FC = () => {
  return (
    <div className="elementor-element elementor-element-5f63cd1c e-flex e-con-boxed e-con e-parent section-padding bg-gradient-to-b from-gray-200 to-white" data-id="5f63cd1c" data-element_type="container" data-settings='{"background_background":"gradient"}'>
      <div className="e-con-inner container-custom">
        <div className="elementor-element elementor-element-1cb774c0 e-con-full e-flex e-con e-child" data-id="1cb774c0" data-element_type="container">
          <div className="elementor-element elementor-element-6661d269 elementor-widget__width-initial elementor-widget elementor-widget-heading" data-id="6661d269" data-element_type="widget" data-widget_type="heading.default">
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default text-3xl md:text-4xl font-bold mb-6">
                Com quem <b>você vai aprender</b>
              </h2>
            </div>
          </div>

          <div className="elementor-element elementor-element-5c52b6ca elementor-widget__width-initial elementor-widget elementor-widget-heading" data-id="5c52b6ca" data-element_type="widget" data-widget_type="heading.default">
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default text-2xl font-bold mb-6">
                Léo Hermoso
              </h2>
            </div>
          </div>

          <div className="elementor-element elementor-element-44555fcb elementor-widget elementor-widget-text-editor" data-id="44555fcb" data-element_type="widget" data-widget_type="text-editor.default">
            <div className="elementor-widget-container">
              <ul className="space-y-3">
                <li><span style={{ fontWeight: 400 }}>Pai de Gêmeos</span></li>
                <li><span style={{ fontWeight: 400 }}>Desenvolvedor de software;</span></li>
                <li><span style={{ fontWeight: 400 }}>Investidor desde 2018 em cripto;</span></li>
                <li><span style={{ fontWeight: 400 }}>+ de 4 bitcoins em carteira;</span></li>
                <li><span style={{ fontWeight: 400 }}>Triplicou o patrimônio no mundo cripto;</span></li>
                <li><span style={{ fontWeight: 400 }}>Maior parte do patrimônio em cripto.</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="elementor-element elementor-element-9c40c10 elementor-widget__width-initial elementor-widget elementor-widget-image flex justify-center" data-id="9c40c10" data-element_type="widget" data-widget_type="image.default">
          <div className="elementor-widget-container">
            <div className="w-full max-w-md">
              fddfd
         <Image
                            src="/images/leo-hermoso.png"
                            alt="Léo Hermoso Workshop Parte 2"
                            fill
                            className="object-cover"
                        />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
