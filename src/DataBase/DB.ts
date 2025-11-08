export interface WasteItem {
    id: number;
    name: string;
    type: 'organic' | 'recycling' | 'trash';
    emoji: string;
}

export interface Bin {
  id: string;
  name: string;
  emoji: string;
  type: 'organic' | 'recycling' | 'trash';
  color: string;
}

export const kitchenItems: WasteItem[] = [
  { id: 1, name: 'Banana', type: 'organic', emoji: '🍌'},
  { id: 2, name: 'Apple', type: 'organic', emoji: '🍎'},
  { id: 3, name: 'Egg Shell', type: 'organic', emoji: '🥚'},
  { id: 4, name: 'Plastic Bottle', type: 'recycling', emoji: '🥤'},
  { id: 5, name: 'Can', type: 'recycling', emoji: '🥫'},
  { id: 6, name: 'Battery', type: 'trash', emoji: '🔋'},
];

export const schoolItems: WasteItem[] = [
  { id: 7, name: 'Notebook', type: 'recycling', emoji: '📓' },
  { id: 8, name: 'Pencil', type: 'trash', emoji: '✏️' },
  { id: 9, name: 'Paper', type: 'recycling', emoji: '📄' },
  { id: 10, name: 'Lunch Box', type: 'recycling', emoji: '🍱' },
  { id: 11, name: 'Apple Core', type: 'organic', emoji: '🍏' },
  { id: 12, name: 'Broken Pen', type: 'trash', emoji: '🖊️' },
];


export const parkItems: WasteItem[] = [
  { id: 13, name: 'Leaf', type: 'organic', emoji: '🍂' },
  { id: 14, name: 'Flower', type: 'organic', emoji: '🌷' },
  { id: 15, name: 'Plastic Bag', type: 'trash', emoji: '🛍️' },
  { id: 16, name: 'Glass Bottle', type: 'recycling', emoji: '🍶' },
  { id: 17, name: 'Banana Peel', type: 'organic', emoji: '🍌' },
  { id: 18, name: 'Chip Bag', type: 'trash', emoji: '🥔' },
];


export const cityItems: WasteItem[] = [
  { id: 19, name: 'Newspaper', type: 'recycling', emoji: '📰' },
  { id: 20, name: 'Cardboard', type: 'recycling', emoji: '📦' },
  { id: 21, name: 'Cigarette', type: 'trash', emoji: '🚬' },
  { id: 22, name: 'Coffee Cup', type: 'trash', emoji: '☕' },
  { id: 23, name: 'Battery', type: 'trash', emoji: '🔋' },
  { id: 24, name: 'Plastic Container', type: 'recycling', emoji: '🧴' },
];


export const bins: Bin[] = [
  { id: 'trash', name: 'Trash', emoji: '🗑️', type: 'trash', color: 'bg-gray-500' },
  { id: 'recycling', name: 'Recycling', emoji: '♻️', type: 'recycling', color: 'bg-blue-500' },
  { id: 'organic', name: 'Organic', emoji: '🍎', type: 'organic', color: 'bg-green-500' },
];


export const getLevelItems = (levelId: number): WasteItem[] => {
  switch (levelId) {
    case 1: return kitchenItems;
    case 2: return schoolItems;
    case 3: return parkItems;
    case 4: return cityItems;
    default: return kitchenItems;
  }
}