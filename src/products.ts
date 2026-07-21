export type Product = {
  id: string;
  name: string;
  category: string;
  condition: string;
  subtitle: string;
  image: string;
  visualLabel: string;
  accent: string;
  specs: string[];
  description: string;
  price?: number;
  priceLabel?: string;
  publishedPrice?: boolean;
};

export const categories = ["Todos", "iPhones", "Android", "Apple", "Acessórios", "Mobilidade"];

export const products: Product[] = [
  {
    id: "iphone-15-pro-max", name: "iPhone 15 Pro Max", category: "iPhones", condition: "Seminovo premium",
    subtitle: "Desempenho Pro, acabamento premium", price: 4200, priceLabel: "a partir de", publishedPrice: true,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=88",
    visualLabel: "15 PRO MAX", accent: "orange", specs: ["Seminovo selecionado", "Aparelho revisado", "Consulte cores e capacidade"],
    description: "Uma opção premium para quem busca câmeras avançadas, ótima autonomia e desempenho de alto nível pagando menos."
  },
  {
    id: "iphone-17-pro-max", name: "iPhone 17 Pro Max", category: "iPhones", condition: "Lacrado",
    subtitle: "Linha Pro de última geração", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=88",
    visualLabel: "17 PRO MAX", accent: "gold", specs: ["Produto lacrado", "Consulte capacidades", "Condições em até 18x"],
    description: "Para quem procura a experiência mais avançada da linha iPhone. Consulte o estoque disponível diretamente com a loja."
  },
  {
    id: "iphone-15-256", name: "iPhone 15", category: "iPhones", condition: "Consulte novo e seminovo",
    subtitle: "256 GB • consulte cores", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1000&q=88",
    visualLabel: "IPHONE 15", accent: "blue", specs: ["Opções de 256 GB", "Consulte as cores", "Aceitamos iPhone na troca"],
    description: "Design moderno, USB-C e excelente conjunto de câmeras para uso diário, trabalho e criação de conteúdo."
  },
  {
    id: "redmi-14c", name: "Redmi 14C", category: "Android", condition: "Novo", subtitle: "Tela ampla e bateria para o dia todo",
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=1000&q=88",
    visualLabel: "ANDROID", accent: "violet", specs: ["Sistema Android", "Consulte memória e cores", "Parcelamento disponível"],
    description: "Smartphone Android para quem busca uma tela confortável, boa autonomia e ótimo custo-benefício."
  },
  {
    id: "macbook", name: "MacBook", category: "Apple", condition: "Novos e seminovos", subtitle: "Mobilidade e desempenho para criar",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=88",
    visualLabel: "MACBOOK", accent: "silver", specs: ["Consulte modelos disponíveis", "Opções novas e seminovas", "Atendimento personalizado"],
    description: "Ideal para estudos, trabalho e produção criativa. A equipe ajuda você a encontrar a configuração certa para sua rotina."
  },
  {
    id: "ipad", name: "iPad", category: "Apple", condition: "Consulte modelos", subtitle: "Trabalho, estudo e entretenimento",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1000&q=88",
    visualLabel: "IPAD", accent: "blue", specs: ["Consulte gerações", "Capacidades variadas", "Acessórios compatíveis"],
    description: "Uma experiência versátil para estudar, trabalhar, desenhar e consumir conteúdo em qualquer lugar."
  },
  {
    id: "smartwatch", name: "Smartwatches", category: "Acessórios", condition: "Vários modelos", subtitle: "Sua rotina conectada no pulso",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1000&q=88",
    visualLabel: "SMARTWATCH", accent: "green", specs: ["Modelos para iOS e Android", "Consulte funções", "Pulseiras e acessórios"],
    description: "Acompanhe notificações, exercícios e sua rotina com opções para diferentes estilos e necessidades."
  },
  {
    id: "scooter-dx5", name: "Scooter elétrica DX5", category: "Mobilidade", condition: "SpeedMob", subtitle: "Mobilidade urbana com energia elétrica",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=88",
    visualLabel: "ELÉTRICA", accent: "orange", specs: ["Consulte disponibilidade", "Condições em até 18x", "Atendimento na loja"],
    description: "Uma alternativa prática para deslocamentos urbanos. Consulte especificações, autonomia e disponibilidade com a equipe."
  }
];
