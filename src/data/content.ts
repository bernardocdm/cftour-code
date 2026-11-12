import { Compass, Globe2, Plane, Ship, type LucideIcon } from 'lucide-react';

export const navLinks = [
  { href: '#destinos', label: 'Explore os destinos' },
  { href: '#essencia', label: 'Nosso jeito' },
  { href: '#como-funciona', label: 'Como funciona' },
];

export const services: { Icon: LucideIcon; label: string }[] = [
  { Icon: Compass, label: 'Roteiros personalizados' },
  { Icon: Plane, label: 'Passagens aéreas' },
  { Icon: Globe2, label: 'Brasil e mundo' },
  { Icon: Ship, label: 'Cruzeiros' },
];

export const destinationFilters = ['Todos', 'Brasil', 'Internacional', 'Cruzeiros'];

export const essenceImage = {
  src: '/images/italia.jpg',
  alt: 'Casas brancas e escadas com vista para o mar em Santorini',
};

export const processSteps = [
  { n: '01', title: 'Compartilhe a ideia', text: 'Praia, cidade ou alto-mar? Conte o que você imagina para a sua próxima viagem.' },
  { n: '02', title: 'Explore possibilidades', text: 'Converse com a CF Tour sobre destinos, datas e o que faz sentido para você.' },
  { n: '03', title: 'Dê forma à viagem', text: 'Alinhe os detalhes e confirme as condições diretamente com a agência.' },
];

export const plannerStyles = ['Sol e descanso', 'Cultura e descobertas', 'Uma viagem a dois', 'Tempo em família', 'Aventura e natureza', 'Um pouco de tudo'];
export const placeSuggestions = ['Brasil', 'Internacional', 'Cruzeiro', 'Quero sugestões'];
export const periodSuggestions = ['Próximas férias', 'Ainda estou decidindo', 'Tenho flexibilidade'];

export const plannerTitles = ['Qual é o seu ritmo?', 'Para onde vamos?', 'Quando dá vontade?', 'Sua ideia já tem forma.'];
export const plannerSubtitles = [
  'Escolha o que mais combina com essa viagem.',
  'Um lugar dos sonhos ou um mundo de possibilidades.',
  'Pode ser uma data ou só uma ideia de período.',
  'Leve esse começo de plano para uma conversa com a CF Tour.',
];
