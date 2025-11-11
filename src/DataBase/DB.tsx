import { type ReactNode } from "react";

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
  { id: 1, name: 'Banana', type: 'organic', emoji: '🍌' },
  { id: 2, name: 'Apple', type: 'organic', emoji: '🍎' },
  { id: 3, name: 'Egg Shell', type: 'organic', emoji: '🥚' },
  { id: 4, name: 'Plastic Bottle', type: 'recycling', emoji: '🥤' },
  { id: 5, name: 'Can', type: 'recycling', emoji: '🥫' },
  { id: 6, name: 'Battery', type: 'trash', emoji: '🔋' },
  { id: 25, name: 'Tea Bag', type: 'organic', emoji: '🫖' },
  { id: 26, name: 'Orange Peel', type: 'organic', emoji: '🍊' },
  { id: 27, name: 'Glass Jar', type: 'recycling', emoji: '🫙' },
  { id: 28, name: 'Plastic Fork', type: 'trash', emoji: '🍴' },
  { id: 29, name: 'Milk Carton', type: 'recycling', emoji: '🥛' },
  { id: 30, name: 'Used Tissue', type: 'trash', emoji: '🧻' },
];

export const schoolItems: WasteItem[] = [
  { id: 7, name: 'Notebook', type: 'recycling', emoji: '📓' },
  { id: 8, name: 'Pencil', type: 'trash', emoji: '✏️' },
  { id: 9, name: 'Paper', type: 'recycling', emoji: '📄' },
  { id: 10, name: 'Lunch Box', type: 'recycling', emoji: '🍱' },
  { id: 11, name: 'Apple Core', type: 'organic', emoji: '🍏' },
  { id: 12, name: 'Broken Pen', type: 'trash', emoji: '🖊️' },
  { id: 31, name: 'Ruler', type: 'trash', emoji: '📏' },
  { id: 32, name: 'Plastic Wrapper', type: 'trash', emoji: '🎁' },
  { id: 33, name: 'Juice Box', type: 'recycling', emoji: '🧃' },
  { id: 34, name: 'Eraser Shavings', type: 'trash', emoji: '💨' },
  { id: 35, name: 'Apple Peel', type: 'organic', emoji: '🍎' },
  { id: 36, name: 'Staple', type: 'recycling', emoji: '📎' },
];

export const parkItems: WasteItem[] = [
  { id: 13, name: 'Leaf', type: 'organic', emoji: '🍂' },
  { id: 14, name: 'Flower', type: 'organic', emoji: '🌷' },
  { id: 15, name: 'Plastic Bag', type: 'trash', emoji: '🛍️' },
  { id: 16, name: 'Glass Bottle', type: 'recycling', emoji: '🍶' },
  { id: 17, name: 'Banana Peel', type: 'organic', emoji: '🍌' },
  { id: 18, name: 'Chip Bag', type: 'trash', emoji: '🥔' },
  { id: 37, name: 'Twig', type: 'organic', emoji: '🌿' },
  { id: 38, name: 'Soda Can', type: 'recycling', emoji: '🥫' },
  { id: 39, name: 'Snack Wrapper', type: 'trash', emoji: '🍫' },
  { id: 40, name: 'Plastic Cup', type: 'trash', emoji: '🥤' },
  { id: 41, name: 'Paper Napkin', type: 'recycling', emoji: '🧻' },
  { id: 42, name: 'Tree Bark', type: 'organic', emoji: '🌰' },
];

export const cityItems: WasteItem[] = [
  { id: 19, name: 'Newspaper', type: 'recycling', emoji: '📰' },
  { id: 20, name: 'Cardboard', type: 'recycling', emoji: '📦' },
  { id: 21, name: 'Cigarette', type: 'trash', emoji: '🚬' },
  { id: 22, name: 'Coffee Cup', type: 'trash', emoji: '☕' },
  { id: 23, name: 'Battery', type: 'trash', emoji: '🔋' },
  { id: 24, name: 'Plastic Container', type: 'recycling', emoji: '🧴' },
  { id: 43, name: 'Plastic Straw', type: 'trash', emoji: '🥢' },
  { id: 44, name: 'Pizza Box', type: 'recycling', emoji: '🍕' },
  { id: 45, name: 'Broken Glass', type: 'trash', emoji: '🪞' },
  { id: 46, name: 'Newspaper Roll', type: 'recycling', emoji: '🧻' },
  { id: 47, name: 'Food Waste', type: 'organic', emoji: '🍽️' },
  { id: 48, name: 'Metal Cap', type: 'recycling', emoji: '🥇' },
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


interface LessonParts {
  id: number;
  title: string;
  content: ReactNode ;
  image: string;
}

interface LessonsData {
  id: number;
  title: string;
  Lessons: LessonParts[];
}

export const lessonsData: LessonsData[] = [
  {
    id: 1,
    title: 'The Magic of Recycling ♻️',
    Lessons: [
      {
        id: 1,
        title: 'What is Recycling?',
        content: (
          <div>
            <p>The process of turning old things into new things. </p>
            <p>Like magic - trash disappears and becomes new products!</p>
          </div>
        ),
        image: '../../public/Lessons/l1p1.png',
      },
      {
        id: 2,
        title: 'Why Recycling is So Important:',
        content: (
          <div>
            <p>We Save Trees 🌳 - Every ton of recycled paper saves 17 trees. </p>
            <p>We Protect Animals 🐠 - Trash doesn't go into oceans. </p>
            <p>We Save Energy ⚡ - Making products from recycled materials uses less energy. </p>
            <p>We Protect Our Planet 🌍 - Less land needed for landfills.</p>
          </div>
        ),
        image: '../../public/Lessons/l1p2.png',
      },
      {
        id: 3,
        title: 'The Journey of a Recycled Item:',
        content: (
          <div>
            <p>1. You put item in the correct bin. </p>
            <p>2. It goes to recycling center. </p>
            <p>3. It gets cleaned and prepared. </p>
            <p>4. It turns into new raw material. </p>
            <p>5. Becomes a brand new product!</p>
          </div>
        ),
        image: '../../public/Lessons/l1p3.png',
      },
      {
        id: 4,
        title: 'Amazing Examples:',
        content: (
          <div>
            <p>27 plastic bottles → warm fleece jacket. </p>
            <p>Aluminum cans → new bicycles. </p>
            <p>Old newspapers → new school books.</p>
          </div>
        ),
        image: '../../public/Lessons/l1p4.png',
      }
    ]
  },
  {
    id: 2,
    title: 'The Three Super Bins 🗑️♻️🍎',
    Lessons: [
      {
        id: 1,
        title: 'Green Bin (Organic) - Nature Heroes 🍎',
        content: (
          <div>
            <p>What goes here: Anything that was once plant or animal. </p>
            <p>Examples: Fruit peels, vegetable scraps, egg shells, bread. </p>
            <p>What happens: Turns into compost that helps plants grow!</p>
          </div>
        ),
        image: '🍎',
      },
      {
        id: 2,
        title: 'Blue Bin (Recycling) - Transformation Heroes ♻️',
        content: (
          <div>
            <p>What goes here: Things that can become something new. </p>
            <p>Examples: Plastic bottles, metal cans, newspapers, cardboard. </p>
            <p>Important rule: Must be clean and dry!</p>
          </div>
        ),
        image: '♻️',
      },
      {
        id: 3,
        title: 'Gray Bin (Trash) - Safety Heroes 🗑️',
        content: (
          <div>
            <p>What goes here: Things that can't be reused. </p>
            <p>Examples: Batteries, light bulbs, broken toys, pens. </p>
            <p>Why here: Because they might be dangerous or can't be transformed.</p>
          </div>
        ),
        image: '🗑️',
      },
      {
        id: 4,
        title: 'Quick Guide to Sorting',
        content: (
          <div>
            <p>Food & plants → Green bin 🍎. </p>
            <p>Clean plastic/paper/metal → Blue bin ♻️. </p>
            <p>Broken/dangerous items → Gray bin 🗑️.</p>
          </div>
        ),
        image: '🎯',
      }
    ]
  },
  {
    id: 3,
    title: 'Kitchen Recycling Adventure 🍳',
    Lessons: [
      {
        id: 1,
        title: 'Preparation Area 🥕',
        content: (
          <div>
            <p>Vegetable peels → Green bin 🍎 (turn into compost). </p>
            <p>Fruit scraps → Green bin 🍎 (food for soil). </p>
            <p>Egg shells → Green bin 🍎 (rich in minerals).</p>
          </div>
        ),
        image: '🥕',
      },
      {
        id: 2,
        title: 'Storage Area 🥫',
        content: (
          <div>
            <p>Food cans → Blue bin ♻️ (clean them first!). </p>
            <p>Sauce bottles → Blue bin ♻️ (rinse with water). </p>
            <p>Grocery bags → Blue bin ♻️ (if clean).</p>
          </div>
        ),
        image: '🥫',
      },
      {
        id: 3,
        title: 'Danger Zone ⚠️',
        content: (
          <div>
            <p>Batteries → Gray bin 🗑️ (very dangerous for environment). </p>
            <p>Broken tools → Gray bin 🗑️ (can't be fixed). </p>
            <p>Paper tissues → Gray bin 🗑️ (full of germs).</p>
          </div>
        ),
        image: '⚠️',
      },
      {
        id: 4,
        title: 'Hands-on Activity',
        content: (
          <div>
            <p>Let's practice! Imagine you have: </p>
            <p>Banana peel, plastic bottle, battery, newspaper. </p>
            <p>Can you sort them correctly?</p>
          </div>
        ),
        image: '🎮',
      }
    ]
  },
  {
    id: 4,
    title: 'Become a Recycling Detective 🔍',
    Lessons: [
      {
        id: 1,
        title: 'Evidence Finding Skills 🔎',
        content: (
          <div>
            <p>Look for recycling symbol ♻️ on packaging. </p>
            <p>Read the small instructions. </p>
            <p>Notice color and material of item.</p>
          </div>
        ),
        image: '🔎',
      },
      {
        id: 2,
        title: 'Question-Asking Skills 🤔',
        content: (
          <div>
            <p>"Was this made from nature?" → If yes: Green bin 🍎. </p>
            <p>"Can it be washed and used again?" → If yes: Blue bin ♻️. </p>
            <p>"Is this broken or dangerous?" → If yes: Gray bin 🗑️.</p>
          </div>
        ),
        image: '🤔',
      },
      {
        id: 3,
        title: 'Decision-Making Skills 🎯',
        content: (
          <div>
            <p>When in doubt: Ask an adult. </p>
            <p>Remember: Cleanliness matters for recycling. </p>
            <p>Don't forget: Some things can be reused!</p>
          </div>
        ),
        image: '🎯',
      },
      {
        id: 4,
        title: 'Final Detective Mission',
        content: (
          <div>
            <p>Solve 5 recycling mysteries! </p>
            <p>Show me your detective skills and become a Recycling Expert!</p>
          </div>
        ),
        image: '🏆',
      }
    ]
  }
];


export interface Lesson {
  title: string;
  content: string;
  image: string;
}

export interface QuizQuestion {
  question: string;
  options: {
    emoji: string;
    text: string;
    correct: boolean;
  }[];
}