import Hamburguer from './assets/component/inicio/inicio';
import Accordion from './assets/component/accordion/accordion'
import Tabs from './assets/component/tabs/tabs';
import "./App.css";

export default function App() {
  return (
    <>
      <div className='app-container'>
        <Hamburguer />
        <Tabs />

        <div className="accordion-app-container">

          <Accordion
            per="O que é React?"
            res="React é uma biblioteca JavaScript de código aberto amplamente utilizada para construir interfaces de usuário interativas e eficientes. Desenvolvida pelo Facebook, essa tecnologia revolucionou a forma como criamos aplicações web modernas."
          />

          <Accordion
            per="Para que serve o useState?"
            res="Desempenhando um papel crucial no ecossistema React, a função useState oferece uma abordagem simples e eficaz para lidar com o gerenciamento de estado em componentes funcionais. Se você está mergulhando no desenvolvimento React ou buscando aprimorar suas habilidades, compreender o useState é essencial."
          />

          <Accordion
            per="O que são eventos em interfaces?"
            res="Eventos de interface são ações que precisam ser processadas na camada da interface, seja pela própria interface ou pelo ViewModel. Os tipos de evento mais comuns são os eventos do usuário. O usuário produz esses eventos interagindo com o app, por exemplo, ao tocar na tela ou gerar gestos. Em seguida, a interface consome esses eventos usando callbacks, como listeners onClick()."
          />
    
        </div>
      </div>
    </>
  );
}
