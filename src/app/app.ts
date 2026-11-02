import { Component } from '@angular/core';
import { Icon } from './icon';

// WhatsApp divulgado nas redes da Raissa: (16) 98870-2298
const WHATSAPP_NUMBER = '5516988702298';
const WHATSAPP_MESSAGE =
  'Olá, Raissa! Quero agendar minha aula experimental grátis na Vienna English School.';

@Component({
  selector: 'app-root',
  imports: [Icon],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  protected readonly whatsappLabel = '(16) 98870-2298';
  protected readonly instagramUrl = 'https://www.instagram.com/raissa_rafa25/';

  protected readonly year = new Date().getFullYear();

  protected readonly pains = [
    { title: 'Turmas lotadas e generalizadas', text: 'Em turmas em que nem todos têm o mesmo objetivo, você passa anos sem ser atendido. Aqui as aulas são individuais ou em turmas reduzidas, direcionadas ao que você precisa.' },
    { title: 'Sem direcionamento fora da aula', text: 'Saber como procurar e colocar o inglês na sua rotina é uma virada de chave. Você aprende a levar o idioma para o dia a dia.' },
    { title: 'Apenas seguir a apostila', text: 'Uma apostila ajuda, mas uma metodologia planejada de acordo com os seus objetivos faz você evoluir muito mais.' }
  ];

  protected readonly steps = [
    { title: 'Chame no WhatsApp', text: 'Um clique e você fala direto com a Raissa.' },
    { title: 'Aula experimental grátis', text: 'Você conhece o jeito de ensinar e conversa sobre os seus objetivos.' },
    { title: 'Plano sob medida', text: 'O conteúdo e os materiais são montados com base no que você precisa.' },
    { title: 'Aulas online ao vivo', text: 'Individuais ou em turma reduzida, com material disponível na plataforma.' }
  ];

  protected readonly audiences = [
    { icon: 'smile' as const, title: 'Crianças e adolescentes', text: 'Aprender com leveza e confiança, apoiando a escola.' },
    { icon: 'briefcase' as const, title: 'Carreira e trabalho', text: 'Reuniões, e-mails, entrevistas e apresentações.' },
    { icon: 'plane' as const, title: 'Viagem e intercâmbio', text: 'Se virar em qualquer lugar do mundo.' },
    { icon: 'cap' as const, title: 'Provas e certificações', text: 'Conteúdo direcionado ao exame que você quer fazer.' },
    { icon: 'sprout' as const, title: 'Começando do zero', text: 'Não precisa saber nada: as aulas se adaptam ao seu nível atual.' },
    { icon: 'book' as const, title: 'Por prazer e cultura', text: 'Filmes, séries e músicas fazem parte das aulas.' }
  ];

  protected readonly differentials = [
    { title: 'Comunicação real', text: 'O foco é falar com confiança, sem métodos engessados e no seu ritmo.' },
    { title: 'Materiais personalizados', text: 'Conteúdo sob medida para os seus objetivos, com material incluso na plataforma.' },
    { title: 'Leve e cultural', text: 'Aulas descontraídas, com filmes, séries e músicas.' },
    { title: 'Individual ou turma reduzida', text: 'Conversação e do básico ao avançado, com atenção para cada aluno.' }
  ];

  protected readonly aboutPoints = [
    'Amo aprender maneiras novas de ensinar.',
    'O inglês sempre foi a minha paixão.',
    'Te ajudo a ver o inglês de forma mais leve e simples.',
    'Busco trazer o inglês em contexto para a sua vida.'
  ];

  // TODO: substituir por depoimentos reais (com autorização) antes de publicar
  protected readonly testimonials = [
    { quote: 'Depoimento de exemplo: conte aqui o que mudou depois de começar as aulas.', name: 'Nome do aluno', role: 'Profissão ou objetivo' },
    { quote: 'Depoimento de exemplo: fale do ambiente das aulas e do resultado.', name: 'Nome do aluno', role: 'Profissão ou objetivo' },
    { quote: 'Depoimento de exemplo: um resultado concreto, como uma viagem ou entrevista.', name: 'Nome do aluno', role: 'Profissão ou objetivo' }
  ];

  protected readonly faqs = [
    { q: 'Como funciona a aula experimental?', a: 'É gratuita e feita online, ao vivo. Você conhece a metodologia e conversa sobre os seus objetivos, sem compromisso. Para marcar, é só chamar no WhatsApp.' },
    { q: 'Preciso saber inglês para ter aula de conversação?', a: 'Não. A confiança vem com a prática, não antes dela. As aulas são adaptadas ao seu nível atual, do básico ao avançado, em um ambiente seguro para errar sem medo.' },
    { q: 'As aulas são individuais ou em grupo?', a: 'Há aulas individuais (de conversação e do básico ao avançado) e também turmas reduzidas.' },
    { q: 'O material está incluso?', a: 'Sim. O material é personalizado de acordo com o que você precisa e fica disponível na plataforma.' },
    { q: 'Tem limite de idade?', a: 'Não. As aulas são para qualquer idade e qualquer objetivo, sempre adaptadas a você.' },
    { q: 'Como são as aulas online?', a: 'Ao vivo, por videochamada. Você só precisa de internet e de um celular ou computador com câmera e microfone.' }
  ];
}
