// DATA & UI
const allOptions = [
  'Piece',
  'Scheme',
  'Box',
  'Sheet',
  'Jar',
  '2',
  '2.5',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
];
const categories = {
  All: null,
  Tube: ['Tube'],
  Powder: ['Kumkum Powder', 'Sindoor Powder'],
  llx1: ['11in1', '11in1 Metallic'],
  Kajal: [
    'Baby Kajal 10+2',
    'Baby Kajal',
    'Kajal Rs.20',
    'Kajal Rs.10.',
    'Kajal Rs.10',
    'Intenso Kajal',
  ],
  Stick: ['Kajal Stick', 'Sindoor Stick', 'Herbal Kajal Stick'],
  Paste: ['Kumkum Paste'],
  Liquid: ['Shingar Sindoor Liquid - Rs.130', 'Sapnaa Liquid Sindoor - Rs.60'],
  Eyebrow: ['Eyebrow Pencil'],
  Eyeliner: ['Shingar Eyeliner Rs.60', 'Sapnaa Eyeliner Rs.40'],
  Remover: ['Silky Remover Wipes', 'Remover Liquid'],
  Water: ['Rose Water', 'Premium Rosemarry Water'],
  LipBalm: ['Lip Balm'],
  Foundation: ['Foundation'],
  Mascara: ['Mascara'],
  Pencil: ['Kajal Pencil'],
  Bindi: ['Shingar_Bindi'],
  Gel: ['AloeVera Gel'],
};

const items = [
  {
    name: 'Tube',
    img: 'https://5.imimg.com/data5/SELLER/Default/2021/9/UX/GR/AO/132672723/shingar-saubhagya-premium-liquid-kumkum.jpg',
    subitems: [
      {
        name: 'Red',
        prices: { Box: 277.47, HalfBox: 138.73 },
        allowedOptions: ['Box', 'HalfBox'],
      },
      {
        name: 'D/Red',
        prices: { Box: 277.47, HalfBox: 138.73 },
        allowedOptions: ['Box', 'HalfBox'],
      },
      {
        name: 'Yellow',
        prices: { Box: 277.47, HalfBox: 138.73 },
        allowedOptions: ['Box', 'HalfBox'],
      },
      {
        name: 'Autumn',
        prices: { Box: 277.47, HalfBox: 138.73 },
        allowedOptions: ['Box', 'HalfBox'],
      },
      {
        name: 'White',
        prices: { Box: 277.47, HalfBox: 138.73 },
        allowedOptions: ['Box', 'HalfBox'],
      },
      {
        name: 'Black',
        prices: { Box: 277.47, HalfBox: 138.73 },
        allowedOptions: ['Box', 'HalfBox'],
      },
      {
        name: 'Gold',
        prices: { Box: 277.47, HalfBox: 138.73 },
        allowedOptions: ['Box', 'HalfBox'],
      },
    ],
  },
  {
    name: 'Kumkum Powder',
    img: 'https://www.shingarsilky.com/cdn/shop/files/51iyP5dfySL._SX679.jpg?v=1741000068&width=600',
    subitems: [
      {
        name: 'Red',
        prices: { Box: 314.93 },
        allowedOptions: ['Box'],
      },
      {
        name: 'D/Red',
        prices: { Box: 314.93 },
        allowedOptions: ['Box'],
      },
      {
        name: 'Deep Maroon',
        prices: { Box: 314.93 },
        allowedOptions: ['Box'],
      },
      {
        name: 'Bajarangi',
        prices: { Box: 314.93 },
        allowedOptions: ['Box'],
      },
      {
        name: 'Glitter Red',
        prices: { Box: 314.93 },
        allowedOptions: ['Box'],
      },
      {
        name: 'Glitter D/red',
        prices: { Box: 314.93 },
        allowedOptions: ['Box'],
      },
      {
        name: 'Glitter Deep Maroon',
        prices: { Box: 314.93 },
        allowedOptions: ['Box'],
      },
      {
        name: 'Glitter Bajarangi',
        prices: { Box: 314.93 },
        allowedOptions: ['Box'],
      },
    ],
  },
  {
    name: 'Sindoor Powder',
    img: 'https://5.imimg.com/data5/SELLER/Default/2023/12/369894192/PE/SB/QA/132672723/shingar-saubhagya-sindoor-1000x1000.jpg',
    subitems: [
      {
        name: 'Red',
        prices: { Box: 182 },
        allowedOptions: ['Box'],
      },
      {
        name: 'D/Red',
        prices: { Box: 182 },
        allowedOptions: ['Box'],
      },
      {
        name: 'Deep Maroon',
        prices: { Box: 182 },
        allowedOptions: ['Box'],
      },
      {
        name: 'Bajarangi',
        prices: { Box: 182 },
        allowedOptions: ['Box'],
      },
      {
        name: 'Glitter Red',
        prices: { Box: 182 },
        allowedOptions: ['Box'],
      },
      {
        name: 'Glitter D/red',
        prices: { Box: 182 },
        allowedOptions: ['Box'],
      },
      {
        name: 'Glitter Deep Maroon',
        prices: { Box: 182 },
        allowedOptions: ['Box'],
      },
      {
        name: 'Glitter Bajarangi',
        prices: { Box: 182 },
        allowedOptions: ['Box'],
      },
    ],
  },
  {
    name: '11in1',
    img: 'https://www.shingarsilky.com/cdn/shop/files/IMG_7919.jpg?v=1748429802&width=713',
    subitems: [
      {
        name: ' ',
        prices: { Piece: 70, Box: 700 },
        allowedOptions: ['Piece', 'Box'],
      },
    ],
  },
  {
    name: '11in1 Metallic',
    img: 'https://www.shingarsilky.com/cdn/shop/files/IMG_0169.jpg?v=1748429802&width=713',
    subitems: [
      {
        name: '',
        prices: { Piece: 85.5, Box: 845 },
        allowedOptions: ['Piece', 'Box'],
      },
    ],
  },
  {
    name: 'Baby Kajal 10+2',
    img: 'https://images.meesho.com/images/products/89119765/lvobu_512.webp?width=512',
    subitems: [
      {
        name: ' ',
        prices: { Jar: 181 },
        allowedOptions: ['Jar'],
      },
    ],
  },
  {
    name: 'Baby Kajal',
    img: 'https://images.meesho.com/images/products/89119765/lvobu_512.webp?width=512',
    subitems: [
      {
        name: ' ',
        prices: { Jar: 544 },
        allowedOptions: ['Jar'],
      },
    ],
  },
  {
    name: 'Kajal Rs.20',
    img: 'https://m.media-amazon.com/images/I/71CeMJNL6WL._SX679_PIbundle-40,TopRight,0,0_SX679SY641SH20_.jpg',
    subitems: [
      {
        name: '2grm',
        prices: { Jar: 495 },
        allowedOptions: ['Jar'],
      },
    ],
  },
  {
    name: 'Kajal Rs.10.',
    img: 'https://m.media-amazon.com/images/I/41dRAe4GD9L._AC_SY350_QL15_.jpg',
    subitems: [
      {
        name: '1grm',
        prices: { Jar: 207 },
        allowedOptions: ['Jar'],
      },
    ],
  },
  {
    name: 'Kajal Rs.10',
    img: 'https://m.media-amazon.com/images/I/41dRAe4GD9L._AC_SY350_QL15_.jpg',
    subitems: [
      {
        name: '1grm',
        prices: { Jar: 403 },
        allowedOptions: ['Jar'],
      },
    ],
  },
  {
    name: 'Kajal Stick',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSefpZ2xtTo_sd1DlURDhjd5Olb8uzrZEU2JAVPjePhXHzme9rF7V1lVGeD2RoZ7fpTKWM&usqp=CAU',
    subitems: [
      {
        name: ' ',
        prices: { Sheet: 142 },
        allowedOptions: ['Sheet'],
        hasSchemeLabel: true,
      },
    ],
  },
  {
    name: 'Sindoor Stick',
    img: 'https://www.shingarsilky.com/cdn/shop/files/DSC04970.jpg?v=1750243985&width=713',
    subitems: [
      {
        name: 'Red',
        prices: { Sheet: 140 },
        allowedOptions: ['Sheet'],
        hasSchemeLabel: true,
      },
      {
        name: 'D/red',
        prices: { Sheet: 140 },
        allowedOptions: ['Sheet'],
        hasSchemeLabel: true,
      },
    ],
  },
  {
    name: 'Kumkum Paste',
    img: 'https://m.media-amazon.com/images/I/61-lRz5TCEL._SX679_.jpg',
    subitems: [
      {
        name: 'Red',
        prices: { Box: 145 },
        allowedOptions: ['Box'],
      },
      {
        name: 'D/red',
        prices: { Box: 145 },
        allowedOptions: ['Box'],
      },
    ],
  },
  {
    name: 'Herbal Kajal Stick',
    img: 'https://www.shingarsilky.com/cdn/shop/files/IMG_3908.jpg?v=1742368729&width=713://www.shingarsilky.com/cdn/shop/files/KajalStick.jpg?v=1745216456&width=713',
    subitems: [
      {
        name: ' ',
        prices: { Sheet: 108 },
        allowedOptions: ['Sheet'],
      },
    ],
  },
  {
    name: 'Shingar Sindoor Liquid - Rs.130',
    img: 'https://www.shingarsilky.com/cdn/shop/files/5_0ce12d1b-9979-4fb4-bc19-6db452459118.png?v=1742194397&width=713',
    subitems: [
      {
        name: 'Red',
        prices: { Piece: 102.2 },
        allowedOptions: ['Piece'],
      },
      {
        name: 'D/red',
        prices: { Piece: 102.2 },
        allowedOptions: ['Piece'],
      },
    ],
  },
  {
    name: 'Sapnaa Liquid Sindoor - Rs.60',
    img: 'https://m.media-amazon.com/images/I/61Wmpg6hAYL._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg',
    subitems: [
      {
        name: 'Red',
        prices: { Sheet: 226.42 },
        allowedOptions: ['Sheet'],
      },
      {
        name: 'Maroon',
        prices: { Sheet: 226.42 },
        allowedOptions: ['Sheet'],
      },
    ],
  },
  {
    name: 'Eyebrow Pencil',
    img: 'https://www.shingarsilky.com/cdn/shop/files/IMG_0227.jpg?v=1740475038&width=713',
    subitems: [
      {
        name: 'Black',
        prices: { Piece: 45.35, Box: 544 },
        allowedOptions: ['Piece', 'Box'],
      },
    ],
  },
  {
    name: 'Shingar Eyeliner Rs.60',
    img: 'https://www.shingarsilky.com/cdn/shop/files/2.png?v=1740476859&width=713',
    subitems: [
      {
        name: '',
        prices: { Piece: 45.54, Box: 522 },
        allowedOptions: ['Piece', 'Box'],
      },
    ],
  },
  {
    name: 'Sapnaa Eyeliner Rs.40',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMLZha-wrMPTKgL71mNwjKydtL6HFoz1ykFw&s',
    subitems: [
      {
        name: ' ',
        prices: { Piece: 25.38, Box: 305 },
        allowedOptions: ['Piece', 'Box'],
      },
    ],
  },
  {
    name: 'Silky Remover Wipes',
    img: 'https://www.shingarsilky.com/cdn/shop/files/2_9bf5d093-63de-4232-831e-82a64b8da27c.png?v=1741861855&width=713',
    subitems: [
      {
        name: 'Blueberry',
        prices: { Piece: 34.61 },
        allowedOptions: ['Piece'],
      },
      {
        name: 'Kiwi',
        prices: { Piece: 34.61 },
        allowedOptions: ['Piece'],
      },
      {
        name: 'Orange',
        prices: { Piece: 34.61 },
        allowedOptions: ['Piece'],
      },
      {
        name: 'Strawberry',
        prices: { Piece: 34.61 },
        allowedOptions: ['Piece'],
      },
      {
        name: 'Box',
        prices: { Box: 415 },
        allowedOptions: ['Box'],
      },
    ],
  },
  {
    name: 'Remover Liquid',
    img: 'https://www.shingarsilky.com/cdn/shop/files/2_0a686ea4-9afc-4e59-a781-3dda34486629.png?v=1742370291&width=713',
    subitems: [
      {
        name: ' ',
        prices: { Piece: 58.06, Box: 348 },
        allowedOptions: ['Piece', 'Box'],
      },
    ],
  },
  {
    name: 'Rose Water',
    img: 'https://www.shingarsilky.com/cdn/shop/files/1_6e218a7f-7ec7-48b7-8235-48d2d549807e.png?v=1740636752&width=1080',
    subitems: [
      {
        name: ' ',
        prices: { Piece: 53.91, Box: 323 },
        allowedOptions: ['Piece', 'Box'],
      },
    ],
  },
  {
    name: 'Lip Balm',
    img: 'https://www.shingarsilky.com/cdn/shop/files/5.jpg?v=1740482350&width=713',
    subitems: [
      {
        name: ' ',
        prices: { Piece: 67.38, Box: 404 },
        allowedOptions: ['Piece', 'Box'],
      },
    ],
  },
  {
    name: 'Foundation',
    img: 'https://www.shingarsilky.com/cdn/shop/files/shingar-2_41ad7ff3-78dc-4314-b657-980addcf25dc.jpg?v=1742197424&width=713',
    subitems: [
      {
        name: 'Natural Pearl',
        prices: { Piece: 74.16 },
        allowedOptions: ['Piece'],
      },
      {
        name: 'Sun Kisses',
        prices: { Piece: 74.16 },
        allowedOptions: ['Piece'],
      },
      {
        name: 'Caramel Touch',
        prices: { Piece: 74.16 },
        allowedOptions: ['Piece'],
      },
      {
        name: 'Warm Mocha',
        prices: { Piece: 74.16 },
        allowedOptions: ['Piece'],
      },
    ],
  },
  {
    name: 'Mascara',
    img: 'https://www.shingarsilky.com/cdn/shop/files/CaptureOneCatalog00801E.png?v=1740473679&width=713',
    subitems: [
      {
        name: ' ',
        prices: { Piece: 72.57, Box: 435.46 },
        allowedOptions: ['Piece', 'Box'],
      },
    ],
  },
  {
    name: 'Intenso Kajal',
    img: 'https://www.shingarsilky.com/cdn/shop/files/Combo3AdCreative.jpg?v=1750242607&width=713',
    subitems: [
      {
        name: ' ',
        prices: { Piece: 79.33, Box: 952 },
        allowedOptions: ['Piece', 'Box'],
      },
    ],
  },
  {
    name: 'Kajal Pencil',
    img: 'https://www.shingarsilky.com/cdn/shop/files/GetFormula.png?v=1742368502&width=713',
    subitems: [
      {
        name: ' ',
        prices: { Piece: 49 },
        allowedOptions: ['Piece'],
      },
    ],
  },
  {
    name: 'Shingar_Bindi',
    img: 'https://www.shingarsilky.com/cdn/shop/files/CatchcoverFront1.png?v=1740137437&width=713',
    subitems: [
      {
        name: 'Red',
        prices: {
          2: 68,
          2.5: 68,
          3: 68,
          4: 68,
          5: 68,
          6: 68,
          7: 68,
          8: 68,
          9: 68,
        },
        allowedOptions: ['2', '2.5', '3', '4', '5', '6', '7', '8', '9'],
      },
      {
        name: 'Maroon',
        prices: {
          2: 68,
          2.5: 68,
          3: 68,
          4: 68,
          5: 68,
          6: 68,
          7: 68,
          8: 68,
          9: 68,
        },
        allowedOptions: ['2', '2.5', '3', '4', '5', '6', '7', '8', '9'],
      },
      {
        name: 'Black',
        prices: {
          2: 68,
          2.5: 68,
          3: 68,
          4: 68,
          5: 68,
          6: 68,
          7: 68,
          8: 68,
          9: 68,
        },
        allowedOptions: ['2', '2.5', '3', '4', '5', '6', '7', '8', '9'],
      },
    ],
  },
  {
    name: 'Premium Rosemarry Water',
    img: 'https://www.shingarsilky.com/cdn/shop/files/RosemaryWater.jpg?v=1751890403&width=713',
    subitems: [
      {
        name: ' ',
        prices: { Box: 1063 },
        allowedOptions: ['Box'],
      },
    ],
  },
  {
    name: 'Aloevera Gel',
    img: 'https://www.shingarsilky.com/cdn/shop/files/IMG_0268.jpg?v=1740638561&width=713',
    subitems: [
      {
        name: ' ',
        prices: { Piece: 299 },
        allowedOptions: ['Piece'],
      },
    ],
  },
];

//  UI Elements
const container = document.getElementById('itemsContainer'),
  categoryButtonsDiv = document.getElementById('categoryButtons'),
  searchInput = document.getElementById('searchInput'),
  extraItemsInput = document.getElementById('extraItemsInput');

const itemToCategories = {};
Object.entries(categories).forEach(([cat, names]) => {
  if (names)
    names.forEach((n) => {
      const lower = n.toLowerCase();
      if (!itemToCategories[lower]) itemToCategories[lower] = [];
      itemToCategories[lower].push(cat);
    });
});

function buildItemsUI() {
  container.innerHTML = '';
  items.forEach((item, iIdx) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.dataset.itemName = item.name.toLowerCase();
    const header = document.createElement('div');
    header.className = 'item-header';
    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.name;
    img.className = 'item-image';
    header.appendChild(img);
    const title = document.createElement('div');
    title.className = 'item-name';
    title.textContent = item.name;
    header.appendChild(title);
    card.appendChild(header);
    item.subitems.forEach((sub, sIdx) => {
      const subBlock = document.createElement('div');
      subBlock.className = 'subitem-block';
      const subLabel = document.createElement('div');
      subLabel.className = 'subitem-label';
      
      subLabel.textContent = 'Item:' + (sub.name ? ' ' + sub.name : '');
      subBlock.appendChild(subLabel);
      (sub.allowedOptions || allOptions).forEach((opt) => {
        const row = document.createElement('div');
        row.className = 'option-row';
        row.id = `row_${iIdx}_${sIdx}_${opt}`;
        const optLabel = document.createElement('label');
        optLabel.className = 'option-label';
        optLabel.textContent = opt;
        row.appendChild(optLabel);
        const priceWrapper = document.createElement('div');
        priceWrapper.className = 'price-input-wrapper';
        const rupeeSpan = document.createElement('span');
        rupeeSpan.className = 'rupee-symbol';
        rupeeSpan.textContent = '₹';
        priceWrapper.appendChild(rupeeSpan);
        const priceInput = document.createElement('input');
        priceInput.type = 'number';
        priceInput.min = '0';
        priceInput.step = '0.01';
        priceInput.value = sub.prices[opt] || '';
        priceInput.id = `price_${iIdx}_${sIdx}_${opt}`;
        priceInput.className = 'price-input';
        priceWrapper.appendChild(priceInput);
        row.appendChild(priceWrapper);
        const qtyInput = document.createElement('input');
        qtyInput.type = 'number';
        qtyInput.min = '0';
        qtyInput.value = '';
        qtyInput.id = `qty_${iIdx}_${sIdx}_${opt}`;
        qtyInput.className = 'qty-input';
        row.appendChild(qtyInput);
        const totalSpan = document.createElement('span');
        totalSpan.className = 'line-total';
        totalSpan.id = `lineTotal_${iIdx}_${sIdx}_${opt}`;
        totalSpan.textContent = '₹0.00';
        row.appendChild(totalSpan);
        priceInput.addEventListener('input', () =>
          updateLineTotal(iIdx, sIdx, opt)
        );
        qtyInput.addEventListener('input', () =>
          updateLineTotal(iIdx, sIdx, opt)
        );
        subBlock.appendChild(row);
      });
      if (sub.hasSchemeLabel) {
        const schemeDiv = document.createElement('div');
        schemeDiv.className = 'scheme-label-container';
        const schemeLabel = document.createElement('label');
        schemeLabel.textContent = 'Scheme Label: ';
        schemeLabel.htmlFor = `scheme_label_${iIdx}_${sIdx}`;
        schemeDiv.appendChild(schemeLabel);
        const schemeInput = document.createElement('input');
        schemeInput.type = 'text';
        schemeInput.id = `scheme_label_${iIdx}_${sIdx}`;
        schemeInput.className = 'scheme-label-input';
        schemeInput.value = ' ';
        schemeDiv.appendChild(schemeInput);
        subBlock.appendChild(schemeDiv);
      }
      card.appendChild(subBlock);
    });
    container.appendChild(card);
  });
}

function buildCategoryButtons() {
  categoryButtonsDiv.innerHTML = '';
  Object.keys(categories).forEach((cat) => {
    const btn = document.createElement('button');
    btn.textContent = cat;
    btn.onclick = () => filterByCategory(cat);
    if (cat === 'All') btn.classList.add('active');
    categoryButtonsDiv.appendChild(btn);
  });
}

function filterByCategory(categoryName) {
  document
    .querySelectorAll('#categoryButtons button')
    .forEach((btn) =>
      btn.classList.toggle('active', btn.textContent === categoryName)
    );
  document.querySelectorAll('.item-card').forEach((card) => {
    if (categoryName === 'All') card.style.display = 'block';
    else {
      const name = card.dataset.itemName;
      const cats = itemToCategories[name] || [];
      card.style.display = cats.includes(categoryName) ? 'block' : 'none';
    }
  });
}

searchInput.addEventListener('input', function () {
  const val = this.value.trim().toLowerCase();
  document.querySelectorAll('.item-card').forEach((card) => {
    card.style.display = card.dataset.itemName.includes(val) ? 'block' : 'none';
  });
});

function updateLineTotal(iIdx, sIdx, opt) {
  const priceInput = document.getElementById(`price_${iIdx}_${sIdx}_${opt}`),
    qtyInput = document.getElementById(`qty_${iIdx}_${sIdx}_${opt}`),
    totalSpan = document.getElementById(`lineTotal_${iIdx}_${sIdx}_${opt}`);
  const price = parseFloat(priceInput.value),
    qty = parseInt(qtyInput.value);
  totalSpan.textContent =
    !isNaN(price) && price > 0 && !isNaN(qty) && qty > 0
      ? `₹${(price * qty).toFixed(2)}`
      : '₹0.00';
}

// BILLING LOGIC 

function getTodayKey() {
  const today = new Date();
  return `allBills_${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
}

function collectSelectedItems() {
  let selectedItems = [];
  items.forEach((item, iIdx) => {
    let itemCollected = { name: item.name, subitems: [] };
    item.subitems.forEach((sub, sIdx) => {
      let subCollected = {
        subitemName: sub.name,
        options: [],
        schemeLabel: '',
      };
      const schemeInput = document.getElementById(
        `scheme_label_${iIdx}_${sIdx}`
      );
      if (schemeInput) {
        const sv = schemeInput.value.trim();
        subCollected.schemeLabel =
          sv && sv.toLowerCase() !== 'no scheme' ? sv : '';
      }
      (sub.allowedOptions || allOptions).forEach((opt) => {
        const row = document.getElementById(`row_${iIdx}_${sIdx}_${opt}`);
        if (!row || row.style.display === 'none') return;
        const priceInput = document.getElementById(
            `price_${iIdx}_${sIdx}_${opt}`
          ),
          qtyInput = document.getElementById(`qty_${iIdx}_${sIdx}_${opt}`);
        const price = parseFloat(priceInput?.value),
          qty = parseInt(qtyInput?.value);
        if (!isNaN(price) && price > 0 && !isNaN(qty) && qty > 0) {
          subCollected.options.push({ optionLabel: opt, qty, price });
        }
      });
      if (subCollected.options.length > 0)
        itemCollected.subitems.push(subCollected);
    });
    if (itemCollected.subitems.length > 0) selectedItems.push(itemCollected);
  });
  return selectedItems;
}

function formatBillLines(itemsData, extraItems) {
  let lines = [],
    total = 0,
    bindiData = {};
  itemsData.forEach((item) => {
    const isBindi = item.name.toLowerCase() === 'shingar_bindi';
    if (isBindi) {
      if (!bindiData[item.name]) bindiData[item.name] = {};
      item.subitems.forEach((sub) => {
        const subLabel = sub.subitemName || '';
        if (!bindiData[item.name][subLabel])
          bindiData[item.name][subLabel] = [];
        sub.options.forEach((opt) => {
          bindiData[item.name][subLabel].push(
            `${opt.optionLabel.replace(/_/g, '.').replace(/Bx_Sz/g, '')}/${
              opt.qty
            }`
          );
          total += opt.price * opt.qty;
        });
      });
    } else {
      let singleSubitem = item.subitems.length === 1;
      if (singleSubitem) {
        const sub = item.subitems[0];
        sub.options.forEach((opt) => {
          total += opt.price * opt.qty;
          let subLabelPart =
            sub.subitemName && sub.subitemName.trim()
              ? ' ' + sub.subitemName.trim()
              : '';
          const schemeLabel = sub.schemeLabel ? ` ${sub.schemeLabel}` : '';
          lines.push(
            `${item.name}${subLabelPart}${schemeLabel} - ${opt.qty}${opt.optionLabel}`
          );
        });
      } else {
        lines.push(`${item.name} -`);
        item.subitems.forEach((sub) => {
          const subName =
            sub.subitemName && sub.subitemName.trim()
              ? sub.subitemName.trim()
              : '';
          const schemeLabel = sub.schemeLabel ? ` ${sub.schemeLabel}` : '';
          const formattedOpts = sub.options
            .map((opt) => `${opt.qty}${opt.optionLabel}`)
            .join(', ');
          let label = subName
            ? `  ${subName}${schemeLabel} - ${formattedOpts}`
            : `  ${schemeLabel}${formattedOpts}`;
          lines.push(label.trim());
          sub.options.forEach((opt) => {
            total += opt.price * opt.qty;
          });
        });
      }
    }
  });
  Object.entries(bindiData).forEach(([itemName, subItems]) => {
    lines.push(itemName);
    Object.entries(subItems).forEach(([subLabel, optQtyPairs]) => {
      lines.push(`${subLabel} - ${optQtyPairs.join(', ')}`);
    });
  });
  if (extraItems) {
    extraItems.split('\n').forEach((line) => {
      if (line.trim()) lines.push(line.trim());
    });
  }
  return { lines, total };
}

function generateBillText(serialShopName, omitTotalLine = false) {
  let shopNameRaw =
      serialShopName || document.getElementById('shopName').value.trim(),
    addressRaw = document.getElementById('address').value.trim(),
    phoneRaw = document.getElementById('phone').value.trim(),
    extraItems = extraItemsInput.value.trim();
  let billText = '';
  if (shopNameRaw) billText += shopNameRaw + '\n';
  if (addressRaw) billText += addressRaw + '\n';
  if (phoneRaw) billText += phoneRaw + '\n';
  billText += 'Items:\n';
  const selectedItems = collectSelectedItems();
  const { lines, total } = formatBillLines(selectedItems, extraItems);
  lines.forEach((line) => (billText += line + '\n'));
  if (!omitTotalLine) billText += `Total = ₹${total.toFixed(2)}`;
  return { billText, total };
}

function saveBill() {
  const key = getTodayKey();
  let bills = JSON.parse(localStorage.getItem(key)) || [];
  let shopName = document.getElementById('shopName').value.trim();
  if (!shopName) return alert('Shop Name is required');
  let serialNumber = bills.length + 1;
  if (!shopName.match(/^\d+\./)) shopName = serialNumber + '.' + shopName;
  document.getElementById('shopName').value = shopName;
  const { billText } = generateBillText(shopName);
  document.getElementById('billBox').innerText = billText;
  bills.push(billText);
  localStorage.setItem(key, JSON.stringify(bills));
  alert('Bill saved locally for today!');
  showTotalAllItems();
}

function showAllBills() {
  const key = getTodayKey();
  let bills = JSON.parse(localStorage.getItem(key)) || [];
  const div = document.getElementById('allBills');
  div.innerHTML = '';
  if (!bills.length) {
    div.textContent = 'No bills saved today.';
    return;
  }
  bills.forEach((bill, idx) => {
    const lines = bill.trim().split('\n');
    let headerLines = 0;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim() === '' || lines[i].toLowerCase().includes('items:'))
        break;
      headerLines++;
    }
    for (let i = 0; i < headerLines; i++) {
      if (!lines[i].trim()) continue;
      const row = document.createElement('div');
      row.className = 'shop-row';
      const labelSpan = document.createElement('span');
      labelSpan.className = 'shop-row-label';
      labelSpan.textContent = lines[i];
      row.appendChild(labelSpan);
      const delBtn = document.createElement('button');
      delBtn.className = 'shop-delete-btn';
      delBtn.title = 'Delete entire bill';
      delBtn.textContent = '×';
      delBtn.onclick = () => {
        if (confirm('Delete this entire bill?')) {
          deleteBill(idx);
        }
      };
      row.appendChild(delBtn);
      div.appendChild(row);
    }
    for (let i = headerLines; i < lines.length; i++) {
      if (lines[i].trim() === '') continue;
      const itemDiv = document.createElement('div');
      itemDiv.textContent = lines[i];
      div.appendChild(itemDiv);
    }
    if (idx !== bills.length - 1) {
      const hr = document.createElement('hr');
      hr.style.margin = '10px 0';
      div.appendChild(hr);
    }
  });
}

window.deleteBill = function (idx) {
  const key = getTodayKey();
  let bills = JSON.parse(localStorage.getItem(key)) || [];
  if (idx >= 0 && idx < bills.length) {
    bills.splice(idx, 1);
    localStorage.setItem(key, JSON.stringify(bills));
    showAllBills();
    showTotalAllItems();
  }
};

function copyAllBills() {
  const key = getTodayKey();
  const bills = JSON.parse(localStorage.getItem(key)) || [];
  const copiedText =
    bills.length > 0
      ? bills
          .map((bill) =>
            bill
              .split('\n')
              .filter((line) => !line.toLowerCase().startsWith('total = '))
              .join('\n')
          )
          .join('\n\n')
      : 'No bills to copy today.';
  navigator.clipboard
    .writeText(copiedText)
    .then(() => alert("Today's bills copied!"));
}

function resetForm() {
  document.getElementById('shopName').value = '';
  document.getElementById('address').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('extraItemsInput').value = '';
  document.getElementById('historyBox').innerHTML = '';

  items.forEach((item, iIdx) => {
    item.subitems.forEach((subitem, sIdx) => {
      (subitem.allowedOptions || allOptions).forEach((opt) => {
        const row = document.getElementById(`row_${iIdx}_${sIdx}_${opt}`);
        if (row) row.style.display = 'flex';
        const priceInput = document.getElementById(
          `price_${iIdx}_${sIdx}_${opt}`
        );
        const qtyInput = document.getElementById(`qty_${iIdx}_${sIdx}_${opt}`);
        if (priceInput) priceInput.value = subitem.prices[opt] || '';
        if (qtyInput) qtyInput.value = '';
        if (priceInput && qtyInput) updateLineTotal(iIdx, sIdx, opt);
      });
      if (subitem.hasSchemeLabel) {
        const schemeInput = document.getElementById(
          `scheme_label_${iIdx}_${sIdx}`
        );
        if (schemeInput) schemeInput.value = ' ';
      }
    });
  });
  document.getElementById('billBox').innerText = '';
  document.getElementById('allBills').innerText = '';
  document.getElementById('totalsBox').innerText = '';
  document.getElementById('searchInput').value = '';
  
  filterByCategory('All');
  buildItemsUI();
}


function showTotalAllItems() {
  const key = getTodayKey();
  const bills = JSON.parse(localStorage.getItem(key)) || [];
  let grandTotal = 0;
  let totalByItem = {};
  let bindiAggregation = {};

  const itemNameSet = new Set(items.map((item) => item.name));

  function addItem(item, subitem, option, qty) {
    if (!totalByItem[item]) totalByItem[item] = {};
    if (!totalByItem[item][subitem]) totalByItem[item][subitem] = {};
    if (!totalByItem[item][subitem][option])
      totalByItem[item][subitem][option] = 0;
    if (!isNaN(qty) && qty > 0) totalByItem[item][subitem][option] += qty;
  }

  bills.forEach((bill) => {
    let lines = bill.trim().split('\n');
    let inItemsSection = false;
    let currentGroup = null;
    let stopParsing = false; 

    for (let line of lines) {
      line = line.trim();
      if (!line) continue;

      if (line.toLowerCase().startsWith('total =')) {
        const num = parseFloat(line.replace(/[^0-9.]/g, ''));
        if (!isNaN(num)) grandTotal += num;
        continue;
      }

      if (line.toLowerCase() === 'items:') {
        inItemsSection = true;
        continue;
      }

      if (!inItemsSection) continue;

      if (stopParsing) continue; 

      if (
        !line.includes('-') &&
        !itemNameSet.has(line) &&
        line.toLowerCase() !== 'shingar_bindi'
      ) {
        stopParsing = true;
        continue;
      }

      if (line.toLowerCase() === 'shingar_bindi') {
        currentGroup = 'Shingar_Bindi';
        continue;
      }

      if (currentGroup === 'Shingar_Bindi') {
        if (line.includes('-')) {
          const [color, rest] = line.split('-');
          const colorKey = color.trim();
          let sizePairs = rest.split(',').map((x) => x.trim());
          if (!bindiAggregation[colorKey]) bindiAggregation[colorKey] = {};
          sizePairs.forEach((pair) => {
            let [size, qty] = pair.split('/');
            size = size.trim();
            qty = parseInt(qty);
            if (!bindiAggregation[colorKey][size])
              bindiAggregation[colorKey][size] = 0;
            if (!isNaN(qty)) bindiAggregation[colorKey][size] += qty;
          });
        }
        continue;
      }

      if (line.endsWith(' -')) {
        let itemName = line.slice(0, -2).trim();
        if (itemNameSet.has(itemName)) {
          currentGroup = itemName;
        }
        continue;
      }

      let matchedItem = null;
      for (let itemName of itemNameSet) {
        if (line.startsWith(itemName + ' ') || line === itemName) {
          matchedItem = itemName;
          break;
        }
      }

      if (matchedItem) {
        let rest = line.slice(matchedItem.length).trim();
        currentGroup = matchedItem;

        if (rest.startsWith('- ')) {
          rest = rest.slice(2);
          const qtyMatch = rest.match(/^(\d+)(.*)$/);
          if (qtyMatch) {
            let qty = parseInt(qtyMatch[1]);
            let option = qtyMatch[2].trim();
            addItem(matchedItem, '', option, qty);
          }
        } else if (rest.includes(' - ')) {
          const dashIndex = rest.indexOf(' - ');
          const subitem = rest.slice(0, dashIndex).trim();
          const qtyPart = rest.slice(dashIndex + 3);
          const qtyMatch = qtyPart.match(/^(\d+)(.*)$/);
          if (qtyMatch) {
            let qty = parseInt(qtyMatch[1]);
            let option = qtyMatch[2].trim();
            addItem(matchedItem, subitem, option, qty);
          }
        }
        continue;
      }

      if (currentGroup && line.includes(' - ')) {
        const dashIndex = line.indexOf(' - ');
        const subitem = line.slice(0, dashIndex).trim();
        const qtyPart = line.slice(dashIndex + 3);

        const qtyOptions = qtyPart.split(',').map((s) => s.trim());
        qtyOptions.forEach((qo) => {
          const qtyMatch = qo.match(/^(\d+)(.*)$/);
          if (qtyMatch) {
            let qty = parseInt(qtyMatch[1]);
            let option = qtyMatch[2].trim();
            addItem(currentGroup, subitem, option, qty);
          }
        });
        continue;
      }
    }
  });

  let result = 'Items:\n';
  Object.keys(totalByItem).forEach((item) => {
    result += item + '\n';
    Object.keys(totalByItem[item]).forEach((subitem) => {
      let line = subitem ? `    (${subitem}) - ` : '    ';
      let opts = [];
      Object.keys(totalByItem[item][subitem]).forEach((optLabel) => {
        let qty = totalByItem[item][subitem][optLabel];
        opts.push(optLabel ? `${qty}${optLabel}` : `${qty}`);
      });
      line += opts.join(', ');
      result += line + '\n';
    });
  });

  if (Object.keys(bindiAggregation).length) {
    result += 'Shingar_Bindi\n';
    Object.keys(bindiAggregation).forEach((color) => {
      let pairs = [];
      Object.keys(bindiAggregation[color]).forEach((size) => {
        pairs.push(`${size}/${bindiAggregation[color][size]}`);
      });
      result += `${color} - ${pairs.join(', ')}\n`;
    });
  }
  result += `Total Amount (all shops combined) = ₹${grandTotal.toFixed(2)}`;
  document.getElementById('totalsBox').innerText = result;
}

function showHistory() {
  const historyBox =
    document.getElementById('historyBox') ||
    (() => {
      const d = document.createElement('div');
      d.id = 'historyBox';
      document.body.appendChild(d);
      return d;
    })();
  historyBox.innerHTML = '';
  const today = new Date();
  let anyBills = false;
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = `allBills_${d.getFullYear()}-${String(
      d.getMonth() + 1
    ).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const bills = JSON.parse(localStorage.getItem(key)) || [];
    if (bills.length) {
      anyBills = true;
      const dayHeader = document.createElement('div');
      dayHeader.style.fontWeight = 'bold';
      dayHeader.style.marginTop = '12px';
      dayHeader.textContent = `${d.getDate()}/${
        d.getMonth() + 1
      }/${d.getFullYear()} (${bills.length} order${
        bills.length > 1 ? 's' : ''
      })`;
      historyBox.appendChild(dayHeader);
      bills.forEach((bill, idx) => {
        const billDiv = document.createElement('pre');
        billDiv.textContent = bill;
        billDiv.style.border = '1px solid #ccc';
        billDiv.style.margin = '6px 0';
        billDiv.style.padding = '4px';
        historyBox.appendChild(billDiv);
      });
    }
    
    const deleteKey = `allBills_${d.getFullYear()}-${String(
      d.getMonth() + 1
    ).padStart(2, '0')}-${String(d.getDate() - 7).padStart(2, '0')}`;
    if (localStorage.getItem(deleteKey)) {
      localStorage.removeItem(deleteKey);
    }
  }
  if (!anyBills) {
    historyBox.textContent = 'No orders in the last 7 days.';
  }
}

// Launch UI 
buildItemsUI();
buildCategoryButtons();
filterByCategory('All');
