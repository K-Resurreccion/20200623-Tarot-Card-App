// All card suits in individual arrays
const majorArcana = [
  {
    name: 'The Fool',
    img: ./images/cards/major/major000.jpg,
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'The Magician',
    img: ./images/cards/major/major001.jpg,
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'The High Priestess',
    img: ./images/cards/major/major002.jpg,
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'The Empress',
    img: ./images/cards/major/major003.jpg,
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'The Emperor',
    img: ./images/cards/major/major004.jpg,
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'The Hierophant',
    img: ./images/cards/major/major005.jpg,
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'The Lovers',
    img: ./images/cards/major/major006.jpg,
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'The Chariot',
    img: ./images/cards/major/major007.jpg,
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'The Strength',
    img: ./images/cards/major/major008.jpg,
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'The Hermit',
    img: ./images/cards/major/major009.jpg,
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Wheel of Fortune',
    img: ./images/cards/major/major010.jpg,
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Justice',
    img: ./images/cards/major/major011.jpg,
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'The Hanged Man',
    img: ./images/cards/major/major012.jpg,
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Death',
    img: ./images/cards/major/major013.jpg,
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Temperance',
    img: ./images/cards/major/major014.jpg,
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'The Devil',
    img: ./images/cards/major/major015.jpg,
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'The Tower',
    img: ./images/cards/major/major016.jpg,
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'The Star',
    img: ./images/cards/major/major017.jpg,
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'The Moon',
    img: ./images/cards/major/major018.jpg,
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'The Sun',
    img: ./images/cards/major/major019.jpg,
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Judgement',
    img: ./images/cards/major/major020.jpg,
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'The World',
    img: ./images/cards/major/major021.jpg,
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  }
];
const cups = [
  {
    name: 'Ace of Cups',
    img: './images/cards/cups/cups001.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Two of Cups',
    img: './images/cards/cups/cups002.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Three of Cups',
    img: './images/cards/cups/cups003.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Four of Cups',
    img: './images/cards/cups/cups004.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Five of Cups',
    img: './images/cards/cups/cups005.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Six of Cups',
    img: './images/cards/cups/cups006.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Seven of Cups',
    img: './images/cards/cups/cups007.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Eight of Cups',
    img: './images/cards/cups/cups008.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Nine of Cups',
    img: './images/cards/cups/cups009.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Ten of Cups',
    img: './images/cards/cups/cups010.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Page of Cups',
    img: './images/cards/cups/cups011.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Knight of Cups',
    img: './images/cards/cups/cups012.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Queen of Cups',
    img: './images/cards/cups/cups013.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'King of Cups',
    img: './images/cards/cups/cups014.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
];
const pentacles = [
  {
    name: 'Ace of Pentacles',
    img: './images/cards/pentacles/pentacles001.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Two of Pentacles',
    img: './images/cards/pentacles/pentacles002.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Three of Pentacles',
    img: './images/cards/pentacles/pentacles003.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Four of Pentacles',
    img: './images/cards/pentacles/pentacles004.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Five of Pentacles',
    img: './images/cards/pentacles/pentacles005.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Six of Pentacles',
    img: './images/cards/pentacles/pentacles006.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Seven of Pentacles',
    img: './images/cards/pentacles/pentacles007.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Eight of Pentacles',
    img: './images/cards/pentacles/pentacles008.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Nine of Pentacles',
    img: './images/cards/pentacles/pentacles009.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Ten of Pentacles',
    img: './images/cards/pentacles/pentacles010.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Page of Pentacles',
    img: './images/cards/pentacles/pentacles011.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Knight of Pentacles',
    img: './images/cards/pentacles/pentacles012.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Queen of Pentacles',
    img: './images/cards/pentacles/pentacles013.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'King of Pentacles',
    img: './images/cards/pentacles/pentacles014.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
];
const swords = [
  {
    name: 'Ace of Swords',
    img: './images/cards/swords/swords001.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Two of Swords',
    img: './images/cards/swords/swords002.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Three of Swords',
    img: './images/cards/swords/swords003.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Four of Swords',
    img: './images/cards/swords/swords004.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Five of Swords',
    img: './images/cards/swords/swords005.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Six of Swords',
    img: './images/cards/swords/swords006.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Seven of Swords',
    img: './images/cards/swords/swords007.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Eight of Swords',
    img: './images/cards/swords/swords008.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Nine of Swords',
    img: './images/cards/swords/swords009.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Ten of Swords',
    img: './images/cards/swords/swords010.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Page of Swords',
    img: './images/cards/swords/swords011.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Knight of Swords',
    img: './images/cards/swords/swords012.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Queen of Swords',
    img: './images/cards/swords/swords013.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'King of Swords',
    img: './images/cards/swords/swords014.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
];
const wands = [
  {
    name: 'Ace of Wands',
    img: './images/cards/wands/wands001.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Two of Wands',
    img: './images/cards/wands/wands002.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Three of Wands',
    img: './images/cards/wands/wands003.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Four of Wands',
    img: './images/cards/wands/wands004.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Five of Wands',
    img: './images/cards/wands/wands005.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Six of Wands',
    img: './images/cards/wands/wands006.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Seven of Wands',
    img: './images/cards/wands/wands007.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Eight of Wands',
    img: './images/cards/wands/wands008.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Nine of Wands',
    img: './images/cards/wands/wands009.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Ten of Wands',
    img: './images/cards/wands/wands010.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Page of Wands',
    img: './images/cards/wands/wands011.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Knight of Wands',
    img: './images/cards/wands/wands012.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'Queen of Wands',
    img: './images/cards/wands/wands013.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
  {
    name: 'King of Wands',
    img: './images/cards/wands/wands014.jpg',
    description: 'Monocle ipsum dolor sit amet eclectic hand-crafted tempor cillum bureaux irure dolore St Moritz eiusmod emerging Shinkansen airport destination. Do Winkreative carefully curated elegant officia, uniforms exquisite Toto anim minim veniam. Elit nostrud izakaya Melbourne officia lovely concierge Marylebone ryokan St Moritz commodo. Quality of life intricate dolore Scandinavian esse international.'
  },
];
// All card suit arrays contatenated together
const allCards = majorArcana.concat(cups, pentacles, swords, wands);
// Export all arrays
export { majorArcana, cups, pentacles, swords, wands, allCards };
