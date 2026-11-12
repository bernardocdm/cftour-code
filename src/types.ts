export type DestinationCategory = 'Brasil' | 'Internacional' | 'Cruzeiros';

export interface Destination {
  id: string;
  name: string;
  country: string;
  category: DestinationCategory;
  mood: string;
  image: string;
  /** Texto alternativo da imagem quando usada no hero. */
  alt: string;
  description: string;
  tags: string[];
}

export type Faq = readonly [question: string, answer: string];
