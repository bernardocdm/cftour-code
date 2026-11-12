import type { Destination } from '../types';

export const destinations: Destination[] = [
  { id: 'rio', name: 'Rio de Janeiro', country: 'BRASIL', category: 'Brasil', mood: 'Entre o mar e o extraordinário.', image: '/images/rio.jpg', alt: 'Vista do Rio de Janeiro com montanhas e mar', description: 'Praias, paisagens icônicas e uma cidade cheia de ritmo. Uma inspiração para quem quer combinar dias ao sol, cultura e novos sabores.', tags: ['Praia', 'Cultura', 'Paisagens'] },
  { id: 'italia', name: 'Santorini', country: 'GRÉCIA', category: 'Internacional', mood: 'Dias que merecem ir devagar.', image: '/images/italia.jpg', alt: 'Paisagem de Santorini na Grécia', description: 'Casas brancas, caminhos com vista para o mar Egeu e horizontes que convidam a ficar. Imagine uma viagem feita no seu ritmo.', tags: ['Gastronomia', 'A dois', 'Mar'] },
  { id: 'cruzeiro', name: 'Um novo horizonte', country: 'CRUZEIROS', category: 'Cruzeiros', mood: 'Acorde com uma nova paisagem.', image: '/images/cruzeiro.jpg', alt: 'Cruzeiro navegando em mar aberto', description: 'O horizonte como companhia e a possibilidade de conhecer diferentes lugares na mesma viagem. Converse com a agência sobre rotas e estilos de cruzeiro.', tags: ['Descanso', 'Mar', 'Descobertas'] },
  { id: 'paris', name: 'Paris', country: 'FRANÇA', category: 'Internacional', mood: 'Uma cidade. Mil primeiras vezes.', image: '/images/paris.jpg', alt: 'Paris com a Torre Eiffel ao fundo', description: 'Cafés, museus e passeios sem pressa pelas ruas de Paris. Uma inspiração para uma viagem com arte, história e descobertas em cada esquina.', tags: ['Arte', 'Cultura', 'A dois'] },
];

/** Destinos que alternam no hero (os dois primeiros). */
export const heroDestinations = destinations.slice(0, 2);
