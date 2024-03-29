import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const category1 = await prisma.category.create({
    data: {
      name: "Aventura",
    },
  });

  const category2 = await prisma.category.create({
    data: {
      name: "Cozinha",
    },
  });

  const category3 = await prisma.category.create({
    data: {
      name: "Tecnologia",
    },
  });

  const category4 = await prisma.category.create({
    data: {
      name: "Cultura",
    },
  });

  const category5 = await prisma.category.create({
    data: {
      name: "Praias",
    },
  });

  const category6 = await prisma.category.create({
    data: {
      name: "Natureza",
    },
  });

  const category7 = await prisma.category.create({
    data: {
      name: "História",
    },
  });

  const category8 = await prisma.category.create({
    data: {
      name: "Paisagens",
    },
  });

  // Seed para o modelo Location
  const location1 = await prisma.location.create({
    data: {
      city: "Paris",
      country: "França",
      content:
        "Explore as belezas de Paris, a cidade da luz, conhecida por sua arquitetura magnífica, moda elegante e arte icônica. Deixe-se encantar pela Torre Eiffel, mergulhe no Louvre e perca-se nas charmosas ruas parisienses.",
      population: 2161000,
    },
  });

  const location2 = await prisma.location.create({
    data: {
      city: "Tokyo",
      country: "Japão",
      content:
        "Descubra Tokyo, a metrópole futurista do Japão, famosa por sua fusão única de tradição e modernidade. De mercados de peixe a tabernas escondidas, explore a diversidade de sabores e a atmosfera única que define Tokyo.",
      population: 13960000,
    },
  });

  const location3 = await prisma.location.create({
    data: {
      country: "Estados Unidos",
      city: "Nova Iorque",
      content:
        "Viva a experiência de Nova Iorque, a cidade que nunca dorme. Da Times Square a Wall Street, explore o epicentro global da inovação e tecnologia, mergulhando na diversidade cultural e culinária.",
      population: 8804190,
    },
  });

  const location4 = await prisma.location.create({
    data: {
      country: "Austrália",
      city: "Sydney",
      content:
        "Descubra a magia das praias paradisíacas de Sydney, onde sol, areia e surf se encontram em perfeita harmonia. De Bondi Beach a Manly, embarque em uma jornada pela cultura descontraída à beira-mar e explore a cena artística e culinária da cidade.",
      population: 5131326,
    },
  });

  const location5 = await prisma.location.create({
    data: {
      country: "Brasil",
      city: "Rio de Janeiro",
      content:
        "Sinta a energia contagiante do Rio de Janeiro, onde praias deslumbrantes, carnaval vibrante e paisagens icônicas tornam cada momento uma experiência única. Explore o Cristo Redentor, dance ao som de samba e mergulhe na cultura carioca.",
      population: 6211423,
    },
  });

  const location6 = await prisma.location.create({
    data: {
      country: "Itália",
      city: "Roma",
      content:
        "Explore as riquezas históricas de Roma, a cidade eterna. Caminhe pelas ruas que testemunharam o nascimento do Império Romano, visite o Coliseu imponente e maravilhe-se com a grandiosidade do Pantheon. Além das experiências históricas, deguste autêntica pizza italiana em trattorias locais e perca-se nas charmosas praças de Roma, onde cada esquina conta uma história.",
      population: 2860009,
    },
  });

  const location7 = await prisma.location.create({
    data: {
      country: "Argentina",
      city: "Ushuaia",
      content:
        "Adentre a beleza selvagem de Ushuaia, a cidade mais ao sul do mundo. Descubra trilhas deslumbrantes entre montanhas cobertas de neve, navegue pelos canais da Terra do Fogo e experimente a emocionante vida selvagem da região. Ushuaia oferece uma experiência única para os amantes da natureza, com oportunidades de observação de aves, caminhadas em glaciares e vistas panorâmicas de tirar o fôlego.",
      population: 56825,
    },
  });

  const location8 = await prisma.location.create({
    data: {
      country: "Dinamarca",
      city: "Copenhague",
      content:
        "Mergulhe no encanto escandinavo de Copenhague, a capital da Dinamarca. Explore castelos históricos, navegue pelos canais pitorescos e absorva a atmosfera acolhedora das ruas de paralelepípedos. Além das experiências culturais, experimente a cozinha nórdica em restaurantes premiados, visite museus inovadores e descubra o design elegante que define esta cidade única.",
      population: 569557,
    },
  });

  const location9 = await prisma.location.create({
    data: {
      country: "Índia",
      city: "Bangalore",
      content:
        "Adentre o coração tecnológico da Índia, explorando a vibrante cidade de Bangalore. Visite parques tecnológicos, participe de eventos de startups e mergulhe na inovação que impulsiona esta metrópole dinâmica. Além das experiências tecnológicas, descubra a rica diversidade cultural, saboreando pratos tradicionais do sul da Índia e explorando mercados animados cheios de cores e aromas.",
      population: 8474970,
    },
  });

  const location10 = await prisma.location.create({
    data: {
      country: "Argentina",
      city: "Mendoza",
      content:
        "Explore a região vinícola de Mendoza, na Argentina, onde vinhedos intermináveis se estendem até as majestosas paisagens andinas. Descubra a arte de fazer vinho em passeios por vinícolas, prove vinhos excepcionais e desfrute de refeições gourmet com vista para os vales. Além das experiências enológicas, aventure-se em trilhas nas montanhas, relaxe em termas naturais e absorva a rica cultura argentina em cada canto desta encantadora cidade.",
      population: 115041,
    },
  });

  const location11 = await prisma.location.create({
    data: {
      country: "Alemanha",
      city: "Berlim",
      content:
        "Explore a rica tapeçaria de cultura e história em Berlim, uma cidade que testemunhou transformações extraordinárias. Passeie pelos icônicos pontos turísticos, como o Portão de Brandemburgo e o Muro de Berlim, enquanto absorve a narrativa fascinante por trás de cada local. Participe de passeios guiados por especialistas locais para compreender a profundidade da história alemã. Além das experiências históricas, mergulhe na cena artística contemporânea de Berlim, visite galerias de arte alternativas e desfrute de uma variedade de sabores em mercados de comida de rua e restaurantes aclamados.",
      population: 3711930,
    },
  });

  const location12 = await prisma.location.create({
    data: {
      country: "Indonésia",
      city: "Bali",
      content:
        "Explore a ilha paradisíaca de Bali, onde a natureza exuberante e a espiritualidade se entrelaçam de maneira única. Descubra templos ancestrais, participe de cerimônias tradicionais e absorva a serenidade dos arrozais em terraços. Além das experiências espirituais, aventure-se em trilhas pela selva, relaxe em praias de areia dourada e delicie-se com a culinária balinesa autêntica. Bali oferece uma jornada que nutre tanto a alma quanto os sentidos.",
      population: 3890757,
    },
  });

  const location13 = await prisma.location.create({
    data: {
      country: "México",
      city: "Cidade do México",
      content:
        "Mergulhe na energia pulsante da Cidade do México, onde tradição e modernidade se encontram em uma dança cativante. Explore os antigos sítios arqueológicos dos astecas, perca-se em bairros coloridos e absorva a arte urbana em constante evolução. Além das experiências culturais, delicie-se com pratos picantes da culinária mexicana, dance ao som de mariachis e descubra a alegria contagiante desta metrópole única.",
      population: 9209944,
    },
  });

  const location14 = await prisma.location.create({
    data: {
      country: "Nepal",
      city: "Vilas do Nepal",
      content:
        "Embarque em uma jornada espiritual e natural nas vilas encantadoras do Nepal, aninhadas nas sombras majestosas do Himalaia. Explore templos milenares, trilhas panorâmicas e viva a cultura única das vilas nepalesas. Além das experiências espirituais, aventure-se em trilhas de trekking desafiadoras, conheça a hospitalidade local e desfrute das vistas magníficas do topo do mundo.",
      population: 2500000,
    },
  });

  const location15 = await prisma.location.create({
    data: {
      country: "Peru",
      city: "Cusco",
      content:
        "Embarque em uma jornada pela rica herança cultural de Cusco, a antiga capital do Império Inca. Passeie por ruas de paralelepípedos, explore sítios arqueológicos e aventure-se em trilhas até Machu Picchu, mergulhando na riqueza cultural desta joia peruana.",
      population: 8804190,
    },
  });

  const location16 = await prisma.location.create({
    data: {
      country: "Grécia",
      city: "Atenas",
      content:
        "Explore a fascinante história de Atenas, a berço da civilização ocidental. Visite sítios arqueológicos icônicos, perca-se nas ruelas de Plaka e saboreie a autêntica culinária grega em uma jornada única.",
      population: 8804190,
    },
  });

  // Seed para o modelo Post, usando as categorias e localizações criadas anteriormente
  const post1 = await prisma.post.create({
    data: {
      title: "Explorando as Maravilhas de Paris",
      content: `
      Bem-vindo a Paris, a cidade que encapsula a elegância e o encanto de maneira única. Prepare-se para uma jornada inesquecível 
      por essa metrópole fascinante! 🇫🇷 Ao explorar Paris, comece pelo icônico bairro de Montmartre, conhecido por suas ruas pitorescas 
      e atmosfera artística. Não deixe de visitar a majestosa Basílica de Sacré-Cœur e a vibrante Place du Tertre, repletas de artistas 
      locais e cafés encantadores.Parta então para o coração da cidade, o distrito de Marais, famoso por sua arquitetura histórica e 
      boutiques elegantes. Passeie pelas ruas de paralelepípedos e descubra galerias de arte, lojas de design e deliciosas patisseries. 
      Seja cativado pela grandiosidade da Catedral de Notre-Dame, uma obra-prima arquitetônica que conta séculos de história.
      Aventure-se pelo charmoso bairro de Saint-Germain-des-Prés, conhecido por suas livrarias antigas, cafés clássicos e atmosfera 
      intelectual. Explore o Jardim de Luxemburgo, um oásis de tranquilidade no coração da cidade, perfeito para uma pausa relaxante.
      Desfrute da magia da Torre Eiffel ao entardecer, quando suas luzes cintilam, proporcionando uma visão deslumbrante da cidade das 
      luzes. Explore o Louvre, lar de inúmeras obras-primas, incluindo a Mona Lisa, e perca-se nos corredores repletos de história.
      Para uma experiência gastronômica inigualável, mergulhe nos encantadores cafés de Montparnasse, onde a culinária francesa brilha 
      em um ambiente acolhedor. Prove delícias locais em um bistrô à beira do Sena, cercado pela atmosfera romântica da cidade.
      Experimente a vida noturna de Le Marais, conhecido por seus bares e espaços culturais modernos. Desfrute de vistas espetaculares 
      da cidade a partir do topo da Torre Montparnasse ou da Torre Eiffel, especialmente mágicas à noite.
      Paris é uma cidade de romance e sofisticação, onde a tradição e a modernidade coexistem de maneira fascinante. Sinta-se à vontade 
      para explorar suas charmosas ruas, descobrir pequenos cafés e criar suas próprias memórias nesta cidade cativante.`,
      days: 12,
      published: true,
      categories: {
        connect: [{ id: category1.id }, { id: category2.id }],
      },
      location: {
        connect: {
          id: location1.id,
        },
      },
      price: 14500,
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098429/blog/paris_vpqrwu.jpg",
    },
  });

  const post2 = await prisma.post.create({
    data: {
      title: "Descobrindo Tokyo",
      content: `Bem-vindo a Tóquio, a cidade que harmoniza tradição e modernidade de maneira única. 
        Prepare-se para uma jornada inesquecível por essa metrópole fascinante! 🇯🇵Ao explorar 
        Tóquio, comece pelo bairro de Shibuya, conhecido por seu movimentado cruzamento e atmosfera
         jovem. Não deixe de visitar o icônico Hachiko Square e a Shibuya Center Street, repletos 
         de lojas, restaurantes e cafés vibrantes.Parta então para o distrito de Harajuku, 
         famoso por sua moda peculiar e pelas ruas cheias de estilo. Takeshita Street é imperdível 
         para os amantes de compras e exploradores de tendências. Seja surpreendido pela 
         originalidade dos cafés temáticos, oferecendo experiências únicas.Aventure-se no 
         coração histórico de Tóquio, Asakusa. Aqui, o Templo Senso-ji é um destaque, emanando 
         espiritualidade e beleza arquitetônica. A Nakamise Shopping Street é perfeita para 
         comprar lembranças tradicionais e provar delícias locais.Desfrute da serenidade 
         dos jardins do Palácio Imperial, oferecendo um refúgio verde no centro da cidade. 
         Não deixe de explorar Akihabara, o paraíso dos eletrônicos e cultura pop, onde a 
         modernidade encontra a fantasia.Para uma experiência gastronômica inigualável, 
         mergulhe nos becos de Yakitori Alley, em Shinjuku. Prove a culinária local em um izakaya, 
         onde pratos deliciosos e saquê fluem em um ambiente acolhedor.Experimente a vida 
         noturna de Roppongi, conhecida por seus bares e casas noturnas sofisticadas. Desfrute 
         de vistas deslumbrantes da cidade no Tokyo Tower ou na Tokyo Skytree, especialmente 
         impressionantes à noite.Tóquio é uma cidade de contrastes e diversidade, onde 
         tradição e inovação coexistem de maneira fascinante. Sinta-se à vontade para se perder 
         nas ruas, descobrir pequenos tesouros escondidos e criar suas próprias memórias nesta 
         metrópole cativante.`,
      days: 14,
      published: true,
      categories: {
        connect: [{ id: category2.id }],
      },
      location: {
        connect: {
          id: location2.id,
        },
      },
      price: 21000,
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098432/blog/tokyo_fwvu3q.jpg",
    },
  });

  const post3 = await prisma.post.create({
    data: {
      title: "Inovações Tecnológicas em Nova Iorque",
      content: `Bem-vindo à cidade que nunca dorme, Nova Iorque, onde a energia pulsante e a 
        diversidade cultural se entrelaçam para criar uma experiência única! 🗽Comece sua 
        jornada no coração de Manhattan, explorando a grandiosidade da Times Square e o brilho 
        dos letreiros luminosos. Passeie pelo Central Park, um oásis verde no meio da selva de 
        concreto, oferecendo tranquilidade e vistas deslumbrantes.Não deixe de visitar a 
        Estátua da Liberdade, símbolo icônico da liberdade e democracia, e absorva a história 
        em Ellis Island. Caminhe pela Brooklyn Bridge para admirar o skyline espetacular de 
        Manhattan.Explore os bairros distintos, como o artístico e boêmio SoHo, com suas 
        galerias e lojas descoladas, e o elegante Chelsea, conhecido pelo High Line e suas 
        galerias de arte contemporânea.Viva a agitação da Quinta Avenida, lar de lojas 
        de luxo e arquitetura imponente, e mergulhe na cultura vibrante de bairros como 
        Harlem e Chinatown. Aprecie a diversidade gastronômica em Little Italy e experimente a 
        autêntica pizza nova-iorquina.Desfrute de espetáculos da Broadway na famosa Theater 
        District e sinta a emoção de um jogo de basquete ou hóquei no Madison Square Garden.
        Termine seu dia nas luzes cintilantes do Empire State Building, proporcionando vistas 
        panorâmicas da cidade que nunca dorme. Nova Iorque é uma metrópole de infinitas 
        possibilidades, onde cada esquina revela uma nova e emocionante descoberta.Perca-se 
        nas ruas movimentadas, inspire-se nos arranha-céus imponentes e crie memórias inesquecíveis
         nesta cidade que cativa corações do mundo inteiro.`,
      days: 9,
      published: true,
      categories: {
        connect: [{ id: category3.id }, { id: category4.id }],
      },
      location: {
        connect: {
          id: location3.id,
        },
      },
      price: 15000,
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098430/blog/new-york_iknp55.jpg",
    },
  });

  const post4 = await prisma.post.create({
    data: {
      title: "A Magia de Sydney",
      content: `Bem-vindo à deslumbrante Sydney, onde a elegância urbana encontra o esplendor natural, 
        formando um cenário verdadeiramente cativante! 🇦🇺Comece sua jornada explorando a 
        icônica Sydney Opera House, um marco arquitetônico mundialmente famoso, e a majestosa 
        Sydney Harbour Bridge, oferecendo vistas panorâmicas incríveis da cidade.Passeie 
        pelos Royal Botanic Gardens, um oásis verde no coração da cidade, e relaxe em uma das 
        muitas praias deslumbrantes, como Bondi Beach, famosa por suas ondas perfeitas e 
        atmosfera descontraída.Explore os bairros vibrantes, como The Rocks, que mescla 
        história e modernidade, e Darlinghurst, conhecido por sua cena artística e gastronômica. 
        Não deixe de saborear frutos do mar frescos em um dos muitos restaurantes à beira-mar.
        Embarque em uma jornada para Taronga Zoo, onde a vida selvagem australiana se encontra 
        com uma vista espetacular da cidade. Admire a arquitetura colonial em Paddington e 
        mergulhe na cultura aborígene no Australian Museum.Navegue pela Sydney Harbour 
        em um ferry, uma experiência única que revela vistas deslumbrantes da cidade. 
        Termine o dia em Manly Beach, onde o surf encontra um ambiente descontraído e uma 
        praia imaculada.À noite, absorva a atmosfera pulsante de bairros como Newtown, 
        conhecido por sua cena artística e vida noturna eclética. Sydney é uma cidade de 
        contrastes emocionantes, onde a sofisticação urbana se mistura harmoniosamente com 
        a beleza natural.`,
      days: 7,
      published: true,
      categories: {
        connect: [{ id: category1.id }, { id: category5.id }],
      },
      location: {
        connect: {
          id: location4.id,
        },
      },
      price: 11000,
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098430/blog/sydney_eqz479.jpg",
    },
  });

  const post5 = await prisma.post.create({
    data: {
      title: "Natureza Exuberante em Ushuaia",
      content: `Bem-vindo a Ushuaia, a cidade do fim do mundo, onde a natureza imponente se encontra 
        com a autenticidade de uma comunidade acolhedora! 🏔️Descubra a majestosa Terra do 
        Fogo explorando o Parque Nacional Tierra del Fuego, onde montanhas majestosas, florestas 
        exuberantes e lagos cristalinos criam um espetáculo visual inesquecível.Embarque em 
        uma jornada épica pelo Canal Beagle, navegando pelas águas que banham o extremo sul da 
        América do Sul. Encante-se com a vida marinha, incluindo pinguins, leões-marinhos e aves 
        que habitam as ilhas próximas.Visite o Museu do Presídio, que conta a fascinante 
        história da colonização da região. Explore a charmosa cidade de Ushuaia, com suas coloridas
         casas de madeira e uma atmosfera acolhedora. Não deixe de provar a deliciosa culinária 
         local, destacando os sabores da Patagônia.Aventure-se no Cerro Martial para vistas 
         deslumbrantes da cidade e do Canal Beagle. Durante o inverno, Ushuaia se transforma em 
         um paraíso para os amantes dos esportes de neve, com a estação de esqui Cerro Castor 
         oferecendo pistas emocionantes.Conheça o Farol Les Eclaireurs, conhecido como 
         "O Farol do Fim do Mundo", e aprecie as paisagens únicas que tornam Ushuaia um destino 
         verdadeiramente especial.Ushuaia, com sua beleza natural extraordinária e 
         sua atmosfera única, é um convite para exploradores e amantes da natureza. 
         Prepare-se para se encantar no extremo sul do planeta! `,
      days: 21,
      published: true,
      categories: {
        connect: [{ id: category6.id }, { id: category1.id }],
      },
      location: {
        connect: {
          id: location7.id,
        },
      },
      price: 14500,
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098432/blog/ushuaia_dwqits.jpg",
    },
  });

  const post6 = await prisma.post.create({
    data: {
      title: "Cultura e História em Berlim",
      content: `Bem-vindo a Berlim, uma cidade que pulsa com história, arte e uma vibrante cena cultural, 
        onde o passado e o presente se entrelaçam de maneira fascinante! 🇩🇪Comece sua exploração
         pelo icônico Portão de Brandemburgo, símbolo da reunificação alemã, e caminhe pela Avenida 
         Unter den Linden, repleta de arquitetura grandiosa e museus renomados.Explore o 
         Memorial do Holocausto, uma comovente homenagem às vítimas, e visite o Museu Topografia 
         do Terror para entender mais profundamente os eventos que moldaram a cidade. A East Side 
         Gallery, um trecho remanescente do Muro de Berlim, oferece uma visão artística da história
         recente.Mergulhe na animada atmosfera de bairros como Kreuzberg e Friedrichshain, 
         conhecidos por sua cena artística, galerias de rua e vida noturna eletrizante. Não deixe
         de provar as delícias culinárias em mercados como o Markthalle Neun.A Ilha dos 
         Museus abriga uma coleção impressionante de instituições culturais, incluindo o Museu 
         Pergamon e a Galeria Nacional Antiga. Descubra a inovação no Futurium e maravilhe-se
         com a arquitetura moderna do Sony Center em Potsdamer Platz.A Torre de TV de Berlim
         oferece vistas panorâmicas da cidade, especialmente deslumbrantes ao entardecer. 
         Desfrute de um passeio relaxante pelos extensos jardins do Tiergarten ou alugue uma 
         bicicleta para explorar os recantos mais afastados da cidade.Berlim é uma cidade 
         de contrastes, onde a criatividade floresce em meio à história. Sinta a energia 
         pulsante da capital alemã, onde cada esquina conta uma história e cada visita é uma 
         jornada única. `,
      days: 12,
      published: true,
      categories: {
        connect: [{ id: category4.id }, { id: category7.id }],
      },
      location: {
        connect: {
          id: location11.id,
        },
      },
      price: 13400,
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098427/blog/berlim_c2lluy.jpg",
    },
  });

  const post7 = await prisma.post.create({
    data: {
      title: "Encantos de Bali: Natureza e Espiritualidade",
      content: `Bem-vindo a Bali, a ilha dos deuses, onde a espiritualidade, a natureza 
      exuberante e a cultura única se unem para criar um paraíso tropical inesquecível! 
      🌺Explore as praias de areias douradas, como Kuta e Seminyak, para relaxar sob o 
      sol tropical ou pegar ondas emocionantes. Descubra o templo Uluwatu, majestosamente 
      posicionado em um penhasco, oferecendo vistas panorâmicas deslumbrantes do oceano.
      Visite o sagrado Templo Besakih, conhecido como o "Templo Mãe" e o maior complexo 
      religioso de Bali. Em Ubud, mergulhe na cena artística e cultural, visitando galerias, 
      o Palácio Real e o Monkey Forest, lar de macacos travessos.Desfrute das famosas 
      plantações de arroz de Tegallalang, um espetáculo de terraços verdes que se estendem 
      pelas encostas das colinas. Explore as águas cristalinas de Nusa Penida, onde praias 
      intocadas e formações rochosas deslumbrantes aguardam os aventureiros.Participe de 
      uma cerimônia tradicional balinesa para experimentar a espiritualidade da ilha, 
      com danças e oferendas coloridas. Mime-se em spas luxuosos, onde terapias tradicionais 
      balinesas proporcionam relaxamento e rejuvenescimento.Saboreie a culinária local 
      em warungs (restaurantes tradicionais) e experimente o famoso babi guling (porco assado). 
      Não perca a chance de explorar mercados locais, como o mercado de Ubud, para encontrar 
      artesanato autêntico e lembranças únicas.Bali é mais do que uma ilha; é uma experiência 
      para os sentidos. De templos sagrados a praias paradisíacas, cada momento em Bali é uma
      celebração da beleza e espiritualidade que permeiam essa joia tropical.`,
      days: 14,
      published: true,
      categories: {
        connect: [{ id: category6.id }, { id: category1.id }],
      },
      location: {
        connect: {
          id: location12.id,
        },
      },
      price: 8900,
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098426/blog/bali_duongs.jpg",
    },
  });

  const post8 = await prisma.post.create({
    data: {
      title: "A Vibrante Cidade do México",
      content: `Bem-vindo à Cidade do México, uma metrópole pulsante que combina uma rica herança 
      histórica com uma modernidade vibrante, criando uma experiência única no coração do México! 
      🇲🇽Comece sua jornada explorando o Zócalo, a praça principal da cidade, cercada por marcos
      imponentes como a Catedral Metropolitana e o Palácio Nacional, onde murais de Diego Rivera 
      contam a história fascinante do país.Mergulhe na cultura no Museu Frida Kahlo e no Museu 
      Nacional de Antropologia, que abrigam artefatos e obras de arte que refletem a diversidade e 
      riqueza da história mexicana. Passeie pelo bairro de Coyoacán, com suas ruas coloridas, 
      mercados animados e praças encantadoras.Explore a grandiosidade das Pirâmides de 
      Teotihuacán, uma antiga cidade que remonta à civilização asteca, e suba até o topo da 
      Pirâmide do Sol para vistas espetaculares da paisagem circundante.Desfrute da autêntica 
      culinária mexicana em mercados como o Mercado de la Merced, onde sabores vibrantes e aromas 
      irresistíveis aguçam os sentidos. Experimente pratos como tacos, tamales e guacamole fresco.
      Passeie pelos canais de Xochimilco em trajineras coloridas, mergulhando na atmosfera 
      festiva e nas tradições culturais. À noite, explore a animada vida noturna no bairro de La 
      Condesa, repleto de bares, restaurantes e clubes.A Cidade do México é uma metrópole que 
      cativa com sua fusão única de passado e presente, onde cada esquina conta uma história e 
      cada experiência é enriquecedora. Prepare-se para se apaixonar pela energia vibrante dessa 
      cidade extraordinária. `,
      days: 7,
      published: true,
      categories: {
        connect: [{ id: category4.id }, { id: category7.id }],
      },
      location: {
        connect: {
          id: location13.id,
        },
      },
      price: 6500,
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098427/blog/cidade-do-mexico_axb3mj.jpg",
    },
  });

  const post9 = await prisma.post.create({
    data: {
      title: "A Magia do Nepal: Vilas e Montanhas",
      content: `Bem-vindo ao Nepal, um país encantador situado no coração do Himalaia, 
      onde as majestosas montanhas se elevam até o céu e as antigas vilas preservam tradições 
      e espiritualidade! 🏔️Explore o Vale de Kathmandu, onde templos e santuários antigos, 
      como Swayambhunath e Pashupatinath, testemunham a rica herança espiritual do Nepal. 
      Caminhe pelas ruas animadas de Thamel, repletas de lojas coloridas, restaurantes e a 
      agitação característica.Embarque em uma jornada para as Annapurnas, onde vilas como 
      Ghandruk e Ghorepani oferecem uma visão autêntica da vida nas montanhas. Testemunhe a 
      hospitalidade calorosa dos moradores locais, enquanto explora trilhas deslumbrantes 
      cercadas por picos imponentes.Aventure-se pelo Caminho de Everest, onde vilarejos 
      como Namche Bazaar e Tengboche proporcionam uma experiência única nas alturas. Contemple 
      vistas incríveis do Monte Everest e das montanhas circundantes enquanto mergulha na cultura 
      sherpa.Visite o Lago Phewa em Pokhara, cercado por vilas pitorescas e refletindo a 
      majestade das montanhas Annapurna. Explore a região de Langtang, onde aldeias como Kyanjin
      Gompa oferecem um vislumbre da vida no vale.Participe de festivais locais, 
      como Dashain e Tihar, para mergulhar nas tradições nepalesas, e desfrute da culinária 
      local, incluindo momos e dal bhat, em vilas acolhedoras.O Nepal é um tesouro de beleza 
      natural e cultural, onde cada trilha, vila e montanha conta uma história única. Sinta a 
      espiritualidade, admire as paisagens de tirar o fôlego e descubra a autenticidade nas 
      aldeias do Himalaia.`,
      days: 28,
      published: true,
      categories: {
        connect: [{ id: category6.id }, { id: category7.id }],
      },
      location: {
        connect: {
          id: location14.id,
        },
      },
      price: 14000,
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098428/blog/nepal_h2ddo2.jpg",
    },
  });

  const post10 = await prisma.post.create({
    data: {
      title: "Descobrindo a Riqueza Cultural de Machu Picchu, Peru",
      content: `Bem-vindo a Machu Picchu, a joia arqueológica dos Andes peruanos, onde a 
      grandiosidade das ruínas incas se encontra com paisagens de tirar o fôlego! 🏞️
      Localizada nas montanhas acima do Vale Sagrado, Machu Picchu é uma maravilha do mundo 
      antigo, envolta em mistério e história. Explore os terraços agrícolas, templos e 
      estruturas cerimoniais que revelam a maestria arquitetônica dos incas.A trilha 
      Inca oferece uma jornada espetacular até Machu Picchu, levando os aventureiros por 
      caminhos ancestrais, passando por florestas nubladas e passagens de montanha. 
      Alternativamente, opte pela comodidade de um trem panorâmico para chegar a Aguas 
      Calientes, a cidade base.Suba até o Inti Punku, a Porta do Sol, para uma vista 
      impressionante de Machu Picchu ao nascer do sol. Contemple a cidade perdida no meio 
      das montanhas, um testemunho da engenhosidade inca e da harmonia com a natureza.
      Visite o Templo do Sol, a Praça Principal e o Relógio Solar para entender a importância 
      espiritual e astronômica desses locais. Maravilhe-se com a Pedra Intihuatana, uma peça 
      esculpida que servia como um instrumento de observação celeste.Descubra a história 
      única de Machu Picchu no Museu de Sitio Manuel Chávez Ballón, em Aguas Calientes, que 
      exibe artefatos e informações fascinantes sobre a civilização inca.Machu Picchu 
      não é apenas um sítio arqueológico, mas uma experiência transcendental. Sinta a energia 
      das montanhas, absorva a história que ecoa nas pedras e permita-se ser transportado para 
      o passado, onde a grandeza dos incas se revela em cada detalhe. `,
      days: 7,
      published: true,
      categories: {
        connect: [{ id: category4.id }, { id: category8.id }],
      },
      location: {
        connect: {
          id: location15.id,
        },
      },
      price: 9000,
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098429/blog/peru_iwrhpb.jpg",
    },
  });

  const post11 = await prisma.post.create({
    data: {
      title: "Bangalore: O Hub Tecnológico da Índia",
      content: `Bem-vindo a Bangalore, a "Cidade Jardim da Índia", onde a tradição se encontra 
      com a modernidade, e o progresso floresce em meio a uma exuberância verdejante! 🌳
      Explore o coração tecnológico da Índia no Distrito de Eletrônicos da cidade, conhecido 
      como "Silicon Valley Indiano", onde empresas de tecnologia inovadoras e startups 
      promissoras moldam o futuro.Caminhe pelos jardins botânicos de Lalbagh, um oásis 
      de serenidade no centro da cidade, que abriga uma coleção impressionante de plantas e 
      flores exóticas. Em seguida, visite o Palácio de Bangalore, uma obra-prima arquitetônica 
      que retrata a rica história da região.Saboreie a culinária diversificada de Bangalore, 
      desde pratos tradicionais do sul da Índia, como dosas e idlis, até experiências 
      gastronômicas contemporâneas em restaurantes modernos. Não deixe de explorar os mercados 
      locais, como o Krishnarajendra, para uma autêntica experiência de compras.Desfrute 
      da animada vida noturna em bairros como Indiranagar e MG Road, onde bares e clubes 
      oferecem uma variedade de opções para os amantes da vida noturna. Participe de festivais 
      locais, como o Karaga Festival, para vivenciar as tradições culturais únicas da cidade.
      Bangalore é uma cidade de contrastes, onde os antigos templos coexistem com arranha-céus 
      modernos, criando uma atmosfera única. Explore os parques, participe de eventos culturais e 
      mergulhe na vibrante energia desta cidade em constante evolução. `,
      days: 7,
      published: true,
      categories: {
        connect: [{ id: category3.id }],
      },
      location: {
        connect: {
          id: location9.id,
        },
      },
      price: 5500,
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098427/blog/bangalore_jjgr1c.jpg",
    },
  });

  const post12 = await prisma.post.create({
    data: {
      title: "Mendoza: Vinhedos e Paisagens Andinas",
      content: `Bem-vindo a Mendoza, a pérola dos Andes argentinos, onde vinhedos exuberantes, 
      paisagens deslumbrantes e uma rica cultura se combinam para criar uma experiência única! 
      🍇Explore as vastas extensões de vinhedos que cercam a cidade, conhecidos por produzirem
      alguns dos melhores vinhos Malbec do mundo. Participe de degustações em vinícolas 
      tradicionais e modernas, absorvendo os aromas e sabores marcantes da região.Aventure-se
      nas trilhas da Cordilheira dos Andes, que proporcionam vistas espetaculares das montanhas, 
      lagos e vales circundantes. O Parque Provincial Aconcagua é um ponto de destaque, abrigando
      a montanha mais alta das Américas.Descubra a cultura local na cidade de Mendoza, onde 
      praças arborizadas e ruas charmosas convidam a passeios tranquilos. Visite o Museu do Vinho 
      para aprender sobre a história vitivinícola da região e o papel crucial do vinho na cultura 
      mendocina.Desfrute da culinária regional em restaurantes acolhedores, onde pratos típicos, como a parrilla argentina e 
      empanadas, são acompanhados pelos renomados vinhos locais. Experimente o asado, um churrasco argentino, para uma autêntica 
      experiência gastronômica.Mendoza é também um ponto de partida para aventuras emocionantes, como o rafting no Rio Mendoza, 
      ciclismo pelas vinícolas ou esqui nas proximidades durante a temporada de inverno.Seja explorando a natureza exuberante, 
      degustando vinhos premiados ou simplesmente relaxando sob o sol argentino, Mendoza oferece uma jornada inesquecível para os 
      amantes da boa vida.`,
      days: 7,
      published: true,
      categories: {
        connect: [{ id: category2.id }, { id: category8.id }],
      },
      location: {
        connect: {
          id: location10.id,
        },
      },
      price: 6000,
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098428/blog/mendoza_atjwdy.jpg",
    },
  });

  const post13 = await prisma.post.create({
    data: {
      title: "Copenhague: Encanto Escandinavo",
      content: `Bem-vindo a Copenhague, a encantadora capital da Dinamarca, onde a arquitetura 
      inovadora, a cultura vibrante e a atmosfera acolhedora se combinam para criar uma 
      experiência única! 🏰Explore o charme histórico de Nyhavn, o icônico porto colorido, 
      onde prédios históricos, restaurantes à beira-mar e barcos tradicionais criam uma atmosfera 
      animada. Caminhe pelas ruas de paralelepípedos, descubra galerias de arte e desfrute de 
      cafés pitorescos.Visite o Palácio de Amalienborg, a residência oficial da família real 
      dinamarquesa, e assista à troca da guarda para uma experiência real autêntica. Passeie pelos 
      Jardins do Tivoli, um parque de diversões encantador que combina nostalgia com alegria 
      contemporânea.Maravilhe-se com a arquitetura moderna e inovadora no bairro de 
      Frederiksstaden, onde a Ópera de Copenhague e a Igreja de Mármore representam o design 
      escandinavo no seu melhor. Não deixe de visitar o Palácio de Rosenborg, que abriga as 
      Joias da Coroa dinamarquesa.Explore o distrito de Christiania, uma comunidade autônoma 
      conhecida por sua atmosfera única e artística. Descubra a gastronomia dinamarquesa em 
      restaurantes locais, experimentando pratos tradicionais como smørrebrød e frikadeller.
      Alugue uma bicicleta, assim como os locais, e explore a cidade pelos diversos ciclovias. 
      Desfrute de um passeio ao longo da Pequena Sereia, o símbolo icônico de Copenhague, à 
      beira-mar.Copenhague é uma cidade que combina tradição e modernidade, criando uma 
      atmosfera cativante para visitantes de todas as partes do mundo. Sinta a energia 
      descontraída, absorva a cultura rica e deixe-se encantar por esta pérola nórdica.`,
      days: 14,
      published: true,
      categories: {
        connect: [{ id: category2.id }, { id: category8.id }],
      },
      location: {
        connect: {
          id: location8.id,
        },
      },
      price: 15000,
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098433/blog/copenhagen_zf9frj.jpg",
    },
  });

  const post16 = await prisma.post.create({
    data: {
      title: "A Fascinante História de Atenas",
      content: `Bem-vindo a Atenas, o berço da civilização ocidental, onde a história antiga se 
      encontra com o dinamismo moderno, criando uma experiência única na Grécia! 🏛️Explore 
      a Acrópole, um marco icônico que abriga o Partenon, um templo dedicado à deusa Atena. 
      Admire a arquitetura clássica, as esculturas antigas e as vistas panorâmicas da cidade a 
      partir deste local histórico.Passeie pelas charmosas ruas de Plaka, um bairro 
      pitoresco no sopé da Acrópole, repleto de lojas de souvenirs, tavernas tradicionais e 
      arquitetura neoclássica. Descubra o Agora Antiga, o coração comercial e social da antiga 
      Atenas.Visite o Museu da Acrópole para uma imersão na história da Grécia Antiga, 
      onde artefatos preciosos contam a história da democracia, filosofia e cultura desta 
      civilização fascinante. Explore o Templo de Zeus Olímpico, um colosso antigo que 
      testemunhou séculos de história.Mergulhe na cultura moderna em bairros como Psiri e 
      Gazi, conhecidos por sua vida noturna animada, restaurantes contemporâneos e 
      galerias de arte inovadoras. Desfrute da autêntica culinária grega, saboreando pratos 
      como moussaka, souvlaki e gyros em tabernas tradicionais.Viaje até o Cabo Sounion 
      para testemunhar o espetacular pôr do sol sobre o Templo de Posídon, uma experiência que 
      combina mitologia e natureza. Navegue pelas águas cristalinas do Mar Egeu até as ilhas 
      próximas, como Hydra e Aegina, para uma fuga relaxante.Atenas é uma cidade onde o 
      antigo e o contemporâneo se entrelaçam, criando uma atmosfera única e cativante. Sinta 
      a energia da história viva, aprecie a hospitalidade grega e deixe-se envolver pelo 
      encanto desta cidade milenar.`,
      days: 14,
      published: true,
      categories: {
        connect: [{ id: category4.id }, { id: category7.id }],
      },
      location: {
        connect: {
          id: location16.id,
        },
      },
      price: 18000,
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098426/blog/atenas_kviglq.jpg",
    },
  });

  const post17 = await prisma.post.create({
    data: {
      title: "Riquezas Históricas de Roma",
      content: `Bem-vindo a Roma, a "Cidade Eterna", onde a história se desenrola em meio 
      a monumentos imponentes, arte magnífica e uma atmosfera inigualável! 🏛️Explore 
      o Coliseu, um anfiteatro icônico que testemunhou batalhas de gladiadores e eventos 
      grandiosos na Roma Antiga. Passeie pelo Fórum Romano, o centro político e comercial 
      da antiguidade, onde templos, arcos e ruínas contam histórias milenares.Visite o 
      Pantheon, um exemplo notável da arquitetura romana, com sua cúpula majestosa e interior 
      impressionante. Jogue uma moeda na Fontana di Trevi para garantir seu retorno a esta 
      cidade eterna e maravilhe-se com a escadaria da Piazza di Spagna.Caminhe pelas ruas 
      de Trastevere, um bairro pitoresco repleto de praças encantadoras, lojas de artesanato 
      e autênticos restaurantes italianos. Descubra a Cidade do Vaticano, onde a Basílica de 
      São Pedro e os Museus Vaticanos oferecem obras-primas da arte renascentista, incluindo 
      a Capela Sistina.Desfrute da culinária romana em trattorias locais, saboreando pratos 
      como pasta carbonara, amatriciana e pizza autêntica. Termine suas refeições com um delicioso 
      gelato italiano enquanto passeia pelas charmosas ruas de paralelepípedos.Suba até a 
      Colina Palatina para vistas panorâmicas da cidade e explore o Circo Máximo, onde corridas 
      de bigas empolgavam multidões na antiguidade. Descubra o Panteão e a Basílica de Santa 
      Maria Maggiore, testemunhando a riqueza arquitetônica e espiritual de Roma.Roma é uma 
      cidade que transcende o tempo, oferecendo uma experiência única que combina o antigo e o 
      contemporâneo. Sinta a grandeza da história, a beleza da arte e a paixão da cultura italiana 
      nesta cidade eternamente fascinante.`,
      days: 14,
      published: true,
      categories: {
        connect: [{ id: category4.id }, { id: category7.id }],
      },
      location: {
        connect: {
          id: location6.id,
        },
      },
      price: 12000,
      image:
        "https://res.cloudinary.com/ddjadtjbk/image/upload/v1702098430/blog/rome_fxempf.jpg",
    },
  });

  console.log("Seed concluído!");
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
