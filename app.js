const WHATS_NUMBER = "5531994559796";
const INSTAGRAM = "sairam.importsperfumes";
const PRICE_BUMP = 145;


setupPaymentButtons();


const products = [
  {
    "category": "MASCULINO",
    "name": "ASAD PRETO",
    "basePrice": 149,
    "image": "images/asad-preto.jpg"
  },
  
    "category": "MASCULINO",
    "name": "AMMER AL ARAB",
    "basePrice": 220,00,
    "image": "images/ameer.webp"
  },

    "category": "MASCULINO",
    "name": "ATTARAL WESAL",
    "basePrice": 149,
    "image": "images/attar.webp"
  },

    "category": "MASCULINO",
    "name": "AFEEF",
    "basePrice": 260,
    "image": "images/afeef.webp"
  },
  {
    "category": "MASCULINO",
    "name": "ASAD ELIXIR",
    "basePrice": 200,
    "image": "images/asad-elixir.webp"
  },
  {
    "category": "MASCULINO",
    "name": "ASAD ZANZIBAR LIMITED",
    "basePrice": 160,
    "image": "images/asad-zanzibar-limited.jpg"
  },
  {
    "category": "MASCULINO",
    "name": "ASAD BOURBON",
    "basePrice": 200,
    "image": "images/assad-bourbon.jpg"
  },
  {
    "category": "MASCULINO",
    "name": "Emarati khanjar",
    "basePrice": 350,
    "image": "images/Emarati-khanjar.jpg"
  },
  {
    "category": "MASCULINO",
    "name": "COCOA MORADO",
    "basePrice": 245,
    "image": "images/cocoa-morado.jpg"
  },
  {
    "category": "MASCULINO",
    "name": "KHALID LATTAFA",
    "basePrice": 215,
    "image": "images/khalid-lattafa.jpg"
  },
  {
    "category": "MASCULINO",
    "name": "THE KINGDOM",
    "basePrice": 215,
    "image": "images/the-kingdom.jpg"
  },
  {
    "category": "MASCULINO",
    "name": "AL NOBLE WAZEER",
    "basePrice": 195,
    "image": "images/al-noble-wazeer.jpg"
  },
  {
    "category": "MASCULINO",
    "name": "AL NOBLE AMEER",
    "basePrice": 195,
    "image": "images/al-noble-ameer.jfif"
  },
  {
    "category": "MASCULINO",
    "name": "Her CONFESSION",
    "basePrice": 215,
    "image": "images/her-confession-preto.jpg"
  },
  {
    "category": "MASCULINO",
    "name": "VIKING KASHMIR",
    "basePrice": 335,
    "image": "images/viking-kashmir.jpg"

  },
  {
    "category": "MASCULINO",
    "name": "VIKING CAIRO",
    "basePrice": 335,
    "image": "images/Viking-Cairo.jpg"
    
  },
  {
    "category": "MASCULINO",
    "name": "FAKHAR Black",
    "basePrice": 175,
    "image": "images/fakhar-black.jpg"
    
  },
  {
    "category": "MASCULINO",
    "name": "FAKHAR PLATIN",
    "basePrice": 170,
    "image": "images/fakhar-platin.jpg"
  },
  {
    "category": "MASCULINO",
    "name": "YEAH MAN",
    "basePrice": 150,
    "image": "images/yeah-man.jpg"
  },
  {
    "category": "MASCULINO",
    "name": "MAITRE DE BLUE",
    "basePrice": 160,
    "image": "images/maitre-blue.jpg"
  },
  {
    "category": "MASCULINO",
    "name": "HAWAS BLACK",
    "basePrice": 225,
    "image": "images/hawas-black.jpg"
  },
  {
    "category": "MASCULINO",
    "name": "MAAHIR LEGACY",
    "basePrice": 210,
    "image": "images/maahir-legacy.jpg"
  },
  {
    "category": "MASCULINO",
    "name": "JORGE AQUA",
    "basePrice": 165,
    "image": "images/jorge-aqua.jpg"
  },
  {
    "category": "MASCULINO",
    "name": "KHAMRAH TRADICIONAL",
    "basePrice": 200,
    "image": "images/khamrah-tradicional.jpg"
  },
  {
    "category": "MASCULINO",
    "name": "WATANI INTENSE",
    "basePrice": 150,
    "image": "images/watani-intense.jpg"
  },
  {
    "category": "MASCULINO",
    "name": "OUD MOOD LATTAFA",
    "basePrice": 150,
    "image": "images/oud-mood-lattafa.jpg"
  },
  {
    "category": "MASCULINO",
    "name": "MY BREEZE AL AMBRA",
    "basePrice": 205,
    "image": "images/my-breeze-al-ambra.jpg"
  },
  {
    "category": "MASCULINO",
    "name": "TAG HIM POUR HOMME",
    "basePrice": 208,
    "image": "images/tag-him-pour-homme.jpg"
  },
  {
    "category": "MASCULINO",
    "name": "MONTAIGNE VANILLE",
    "basePrice": 135,
    "image": "images/montaigne-vanille.jpg"
  },
  {
    "category": "MASCULINO",
    "name": "DUBAI CHOCOLATE ODYSSEY",
    "basePrice": 200,
    "image": "images/dubai-chocolate-odyssey.jpg"
  },
  {
    "category": "MASCULINO",
    "name": "SEHR LATTAFA",
    "basePrice": 205,
    "image": "images/sehr-lattafa.jpg"
  },
  {
    "category": "FEMININO",
    "name": "KIT YARA, 25ml a unidade",
    "basePrice": 295,
    "image": "images/kit-yara.jpg"
  },
  {
    "category": "FEMININO",
    "name": "YARA ELIXIR",
    "basePrice": 210,
    "image": "images/yara-elixir.jpg"

  },
  {
    "category": "FEMININO",
    "name": "YARA AMARELO",
    "basePrice": 165,
    "image": "images/yara-amarelo.jpg"
  },
  {
    "category": "FEMININO",
    "name": "YARA CANDY",
    "basePrice": 165,
    "image": "images/yara-candy.jpg"
  },
  {
    "category": "FEMININO",
    "name": "YARA ROSA",
    "basePrice": 165,
    "image": "images/yara-rosa.jpg"
  },
  {
    "category": "FEMININO",
    "name": "YUM YUM",
    "basePrice": 290,
    "image": "images/yum-yum.jpg"
  },
  {
    "category": "FEMININO",
    "name": "MUSAMAM BRANCO",
    "basePrice": 270,
    "image": "images/musamam-branco.jpg"
  },
  {
    "category": "FEMININO",
    "name": "ROYAL AMBER VERMELHO 150ML",
    "basePrice": 485,
    "image": "images/royal-amber-vermelho-150ml.jpg"
  },
  {
    "category": "FEMININO",
    "name": "FAKHAR ROSE",
    "basePrice": 175,
    "image": "images/fakhar-rose.jpg"
  },
  {
    "category": "FEMININO",
    "name": "FAKHAR GOLD",
    "basePrice": 180,
    "image": "images/Fakhar-Gold.jpg"
  },
  {
    "category": "FEMININO",
    "name": "AMERATI GOLD",
    "basePrice": 140,
    "image": "images/amerati-gold.jpg"
  },
  {
    "category": "FEMININO",
    "name": "AMERAT AL ARAB VERMELHO",
    "basePrice": 190,
    "image": "images/amerat-al-arab-vermelho.jpg"
  },
  {
    "category": "FEMININO",
    "name": "SABAH AL WARED",
    "basePrice": 180,
    "image": "images/sabah-al-wared.jpg"
  },
  {
    "category": "FEMININO",
    "name": "SABAH AL WARED SUGER",
    "basePrice": 260,
    "image": "images/sabah-al-wared-suger.jpg"
  },
  {
    "category": "FEMININO",
    "name": "CLUB DE NUIT UNTOLD",
    "basePrice": 270,
    "image": "images/club-de-nuit-untold.jpg"
  },
  {
    "category": "FEMININO",
    "name": "BADE AL OUD VERMELHO",
    "basePrice": 165,
    "image": "images/bade-al-oud-vermelho.jpg"
  },
  {
    "category": "FEMININO",
    "name": "BADE AL OUD ROSA",
    "basePrice": 165,
    "image": "images/bade-al-oud-rosa.jpg"
  },
  {
    "category": "FEMININO",
    "name": "BADE AL OUD ROXO",
    "basePrice": 165,
    "image": "images/bade-al-oud-roxo.jpg"
  },
  {
    "category": "FEMININO",
    "name": "CHANTS",
    "basePrice": 150,
    "image": "images/chants.jpg"
  },
  {
    "category": "FEMININO",
    "name": "DURRAT AL AROSS",
    "basePrice": 165,
    "image": "images/durrat-al-aross.jpg"
  },
  {
    "category": "FEMININO",
    "name": "TIBYAN ROSA",
    "basePrice": 140,
    "image": "images/tibyan-rosa.jpg"
  },
  {
    "category": "FEMININO",
    "name": "PHILOS PURA",
    "basePrice": 170,
    "image": "images/philos-pura.jpg"
  },
  {
    "category": "FEMININO",
    "name": "LA ROUGE BAROQUE",
    "basePrice": 145,
    "image": "images/la-rouge-baroque.jpg"
  },
  {
    "category": "FEMININO",
    "name": "HAYAM VERMELHO",
    "basePrice": 185,
    "image": "images/hayam-vermelho.jpg"
  },
  {
    "category": "FEMININO",
    "name": "ECLAIRE COFFE",
    "basePrice": 179,
    "image": "images/eclaire-coffe.jpg"
  },
  {
    "category": "FEMININO",
    "name": "HER CONFESSION BRANCO",
    "basePrice": 240,
    "image": "images/her-confession.jpg"

  },
  {
    "category": "FEMININO",
    "name": "THE KINGDOM",
    "basePrice": 200,
    "image": "images/the-kingdom-feminino.jpg"
  },
  {
    "category": "FEMININO",
    "name": "MAYAR VERMELHO",
    "basePrice": 185,
    "image": "images/mayar-vermelho.jpg"
  },
  {
    "category": "FEMININO",
    "name": "MAYAR VERDE",
    "basePrice": 185,
    "image": "images/mayar-verde.jpg"
  },
  {
    "category": "FEMININO",
    "name": "LA VOIE",
    "basePrice": 145,
    "image": "images/la-voie.jpg"
  },
  {
    "category": "FEMININO",
    "name": "LÉONIE",
    "basePrice": 170,
    "image": "images/leonie.jpg"
  },
  {
    "category": "FEMININO",
    "name": "VIP POUR FEMME ROSE",
    "basePrice": 180,
    "image": "images/vip-pour-femme-rose.jpg"
  }
];

// ===== NOVOS PRODUTOS (preencha basePrice depois) =====
products.push(
  // LATTAFA (diversos)
  // ===== NOVOS PRODUTOS (ORGANIZADOS) =====


//
// MASCULINO
//

{
  "category": "MASCULINO",
  "name": "QAED AL FURSAN",
  "basePrice": 420,
  "image": "images/qaed-al-fursan.jpeg"
},
{
  "category": "MASCULINO",
  "name": "RAGHBA FOR MAN",
  "basePrice": 230,
  "image": "images/raghba-for-man.jpg"
},
{
  "category": "MASCULINO",
  "name": "EJAZI",
  "basePrice": 220,
  "image": "images/ejazi.webp"
},
{
  "category": "MASCULINO",
  "name": "EJAZI SILVER",
  "basePrice": 240,
  "image": "images/ejazi-silver.webp"
},
{
  "category": "MASCULINO",
  "name": "SUQRAAT",
  "basePrice": 220,
  "image": "images/suqraat.webp"
},
{
  "category": "MASCULINO",
  "name": "SHEIKH AL SHUYUKH FINAL EDITION",
  "basePrice": 250,
  "image": "images/sheikh-al-shuyukh-final.webp"
},
{
  "category": "MASCULINO",
  "name": "SHEIKH AL SHUYUKH LUXE EDITION",
  "basePrice": 270,
  "image": "images/sheikh-al-shuyukh-luxe.webp"
},
{
  "category": "MASCULINO",
  "name": "NAJDIA",
  "basePrice": 200,
  "image": "images/najdia.webp"
},
{
  "category": "MASCULINO",
  "name": "NAJDIA TRIBUTE",
  "basePrice": 230,
  "image": "images/najdia-tribute.webp"
},
{
  "category": "MASCULINO",
  "name": "AL QIAM SILVER",
  "basePrice": 280,
  "image": "images/al-qiam-silver.webp"
},
{
  "category": "MASCULINO",
  "name": "RAED SILVER",
  "basePrice": 240,
  "image": "images/raed-silver.jpg"
},
{
  "category": "MASCULINO",
  "name": "RAMZ SILVER",
  "basePrice": 220,
  "image": "images/ramz-silver.webp"
},
{
  "category": "MASCULINO",
  "name": "TAG-HIM",
  "basePrice": 230,
  "image": "images/tag-him.webp"
},
{
  "category": "MASCULINO",
  "name": "ODYSSEY HOMME",
  "basePrice": 280,
  "image": "images/odyssey-homme.webp"
},
{
  "category": "MASCULINO",
  "name": "ODYSSEY MANDARIN SKY",
  "basePrice": 300,
  "image": "images/odyssey-mandarin-sky.webp"
},
{
  "category": "MASCULINO",
  "name": "ODYSSEY AQUA",
  "basePrice": 280,
  "image": "images/odyssey-aqua.webp"
},
{
  "category": "MASCULINO",
  "name": "HUNTER INTENSE",
  "basePrice": 250,
  "image": "images/hunter-intense.webp"
},
{
  "category": "MASCULINO",
  "name": "VENTANA",
  "basePrice": 230,
  "image": "images/ventana.webp"
},
{
  "category": "MASCULINO",
  "name": "CLUB DE NUIT INTENSE MAN EDT",
  "basePrice": 280,
  "image": "images/club-de-nuit-intense-man.jpg"
},
{
  "category": "MASCULINO",
  "name": "CLUB DE NUIT SILLAGE",
  "basePrice": 330,
  "image": "images/club-de-nuit-sillage.jpg"
},
{
  "category": "MASCULINO",
  "name": "CLUB DE NUIT MILESTONE",
  "basePrice": 320,
  "image": "images/club-de-nuit-milestone.webp"
},
{
  "category": "MASCULINO",
  "name": "CLUB DE NUIT ICONIC",
  "basePrice": 330,
    "image": "images/Club-de-Nuit-Iconic.webp"
},
{
  "category": "MASCULINO",
  "name": "CLUB DE NUIT URBAN MAN ELIXIR",
  "basePrice": 310,
  "image": "images/club-de-nuit-urban-man-elixir.webp"
},
{
  "category": "MASCULINO",
  "name": "9PM",
  "basePrice": 280,
  "image": "images/9pm.jpg"
},
{
  "category": "MASCULINO",
  "name": "9AM DIVE",
  "basePrice": 300,
  "image": "images/9am-dive.webp"
},
{
  "category": "MASCULINO",
  "name": "TURATHI BLUE",
  "basePrice": 330,
  "image": "images/turathi-blue.webp"
},
{
  "category": "MASCULINO",
  "name": "SUPREMACY NOT ONLY INTENSE",
  "basePrice": 350,
  "image": "images/supremacy-not-only-intense.jpg"
},
{
  "category": "MASCULINO",
  "name": "SUPREMACY IN HEAVEN",
  "basePrice": 330,
  "image": "images/supremacy-in-heaven.webp"
},
{
  "category": "MASCULINO",
  "name": "SUPREMACY SILVER",
  "basePrice": 300,
  "image": "images/supremacy-silver.jpg"
},
{
  "category": "MASCULINO",
  "name": "MODEST UNE",
  "basePrice": 280,
  "image": "images/modest-une.webp"
},
{
  "category": "MASCULINO",
  "name": "RARE CARBON",
  "basePrice": 350,
  "image": "images/rare-carbon.webp"
},
{
  "category": "MASCULINO",
  "name": "DETOUR NOIR",
  "basePrice": 280,
    "image": "images/Detour-noir.webp"
},
{
  "category": "MASCULINO",
  "name": "L’AVENTURE",
  "basePrice": 310,
  "image": "images/l'aventure.webp"
},
{
  "category": "MASCULINO",
  "name": "HAYATI",
  "basePrice": 250,
  "image": "images/hayati.webp"
},
{
  "category": "MASCULINO",
  "name": "LA YUQAWAM POUR HOMME",
  "basePrice": 300,
  "image": "images/la-yuqawam-pour-homme.jpg"
},
{
  "category": "MASCULINO",
  "name": "SHUHRAH POUR HOMME",
  "basePrice": 240,
  "image": "images/shuhrah-pour-homme.webp"
},
{
  "category": "MASCULINO",
  "name": "FATTAN POUR HOMME",
  "basePrice": 200,
  "image": "images/fattan-pour-homme.webp"
},
{
  "category": "MASCULINO",
  "name": "DAAREJ POUR HOMME",
  "basePrice": 180,
  "image": "images/daarej-pour-homme.webp"
},
{
  "category": "MASCULINO",
  "name": "KISMET FOR MEN",
  "basePrice": 230,
  "image": "images/kismet-for-men.jpeg"
},
{
  "category": "MASCULINO",
  "name": "SALVO",
  "basePrice": 200,
  "image": "images/salvo.webp"
},
{
  "category": "MASCULINO",
  "name": "SALVO INTENSE",
  "basePrice": 300,
  "image": "images/salvo-intense.jpeg"
},
{
  "category": "MASCULINO",
  "name": "VICTORIOSO",
  "basePrice": 200,
  "image": "images/victorioso.jpg"
},
{
  "category": "MASCULINO",
  "name": "VICTORIOSO LEGEND",
  "basePrice": 220,
  "image": "images/victorioso-legend.webp"
},
{
  "category": "MASCULINO",
  "name": "VICTORIOSO VICTORY",
  "basePrice": 220,
    "image": "images/Victorioso-Victory.jpg"
},
{
  "category": "MASCULINO",
  "name": "THE TUX",
  "basePrice": 280,
  "image": "images/the-tux.webp"
},
{
  "category": "MASCULINO",
  "name": "JEAN LOWE IMMORTEL",
  "basePrice": 300,
  "image": "images/jean-lowe-immortel.webp"
},
{
  "category": "MASCULINO",
  "name": "JEAN LOWE NOIR",
  "basePrice": 300,
  "image": "images/jean-lowe-noir.webp"
},
{
  "category": "MASCULINO",
  "name": "JEAN LOWE FRAICHE",
  "basePrice": 300,
  "image": "images/jean-lowe-fraiche.png"
},

{
  "category": "FEMININO",
  "name": "SO CANDID",
  "basePrice": 200,
  "image": "images/so-candid.webp"
},
{
  "category": "FEMININO",
  "name": "BHARARA ROSE",
  "basePrice": 600,
  "image": "images/bharara-rose.webp"
},
{
  "category": "FEMININO",
  "name": "BHARARA NICHE FEMME",
  "basePrice": 649,
  "image": "images/bharara-niche-femme.webp"
},
{
  "category": "FEMININO",
  "name": "DELILAH",
  "basePrice": 230,
  "image": "images/delilah.webp"
},
{
  "category": "FEMININO",
  "name": "COMO MOISELLE",
  "basePrice": 179,
  "image": "images/como-moiselle.webp"
},
{
  "category": "FEMININO",
  "name": "ECLAIRE PISTACHE",
  "basePrice": 200,
  "image": "images/eclaire-pistache.webp"
},
{
  "category": "FEMININO",
  "name": "ROSES ARE WHITE",
  "basePrice": 200,
  "image": "images/roses-are-white.jpg"
},
{
  "category": "FEMININO",
  "name": "MISS MAGNIFIQ",
  "basePrice": 170,
  "image": "images/miss-magnifiq.jpg"
},
{
  "category": "FEMININO",
  "name": "MISS AMNIA",
  "basePrice": 170,
  "image": "images/miss-amnia.webp"
},
{
  "category": "FEMININO",
  "name": "BHARARA GODDESS",
  "basePrice": 649,
  "image": "images/bharara-goddess.webp"
},
{
  "category": "FEMININO",
  "name": "PETRA",
  "basePrice": 265,
  "image": "images/petra.webp"
},
{
  "category": "FEMININO",
  "name": "ATHEERI",
  "basePrice": 200,
  "image": "images/atheeri.webp"
},
{
  "category": "FEMININO",
  "name": "MAYAR PINK",
  "basePrice": 190,
  "image": "images/mayar.jpeg"
},

{
  "category": "UNISSEX",
  "name": "1505 AL COLLECTION D’ANTIQUITÉS",
  "basePrice": 400,
  "image": "images/dantiquites-1505.webp"
},
{
  "category": "UNISSEX",
  "name": "BHARARA SCARLET",
  "basePrice": 649,
  "image": "images/bharara-scarlet.jpg"
},
{
  "category": "UNISSEX",
  "name": "BHARARA CHOCOLATE",
  "basePrice": 599,
  "image": "images/bharara-chocolate.webp"
},
{
  "category": "UNISSEX",
  "name": "BHARARA DOUBLE BLEU",
  "basePrice": 649,
  "image": "images/bharara-double-bleu.webp"
},
{
  "category": "UNISSEX",
  "name": "ORIENTICA AZURE FANTASY",
  "basePrice": 760,
  "image": "images/orientica.jpg"
},
{
  "category": "UNISSEX",
  "name": "BHARARA QUEEN",
  "basePrice": 649,
  "image": "images/bharara-queen.webp"
},
{
  "category": "UNISSEX",
  "name": "ISHQ AL SHUYUKH",
  "basePrice": 230,
  "image": "images/ishq-al-prata.png"
},
{
  "category": "UNISSEX",
  "name": "HAWAS ICE",
  "basePrice": 389,
    "image": "images/Hawas-ice.webp"
},
{
  "category": "UNISSEX",
  "name": "MANAAL DE ARD AL ZAAFARAN",
  "basePrice": 170,
  "image": "images/manaal-de-ard-al-zaafaran.jpg"
},
{
  "category": "UNISSEX",
  "name": "THOUQ",
  "basePrice": 170,
  "image": "images/thouq.webp"
},
{
  "category": "UNISSEX",
  "name": "HAMID HATSHEPSUT LEGACY",
  "basePrice": 300,
  "image": "images/hamidi-eau-de-parfum.jpg"
},
{
  "category": "UNISSEX",
  "name": "NEFERTITI HAMIDI LEGACY",
  "basePrice": 300,
  "image": "images/nefertiti.webp"
},
{
  "category": "UNISSEX",
  "name": "AL NOBLE SAFER",
  "basePrice": 200,
  "image": "images/al-noble-safer.webp"
},
{
  "category": "UNISSEX",
  "name": "VINTAGE CASTLE",
  "basePrice": 170,
  "image": "images/vintage-castle.jpg"
},
{
  "category": "UNISSEX",
  "name": "MARINA DE BOURBON PARIS",
  "basePrice": 199,
  "image": "images/marina-de-bourbon-paris.webp"
},
{
  "category": "UNISSEX",
  "name": "MARINA DE BOURBON ROUGE ROYAL",
  "basePrice": 199,
  "image": "images/marina-de-bourbon-rouge-royal.webp"
},
{
  "category": "UNISSEX",
  "name": "HAYAAM",
  "basePrice": 189,
  "image": "images/hayaam.jpg"
},
{
  "category": "UNISSEX",
  "name": "MUSAMAN",
  "basePrice": 299,
  "image": "images/musaman.webp"
},
{
  "category": "UNISSEX",
  "name": "SUTOOR",
  "basePrice": 179,
  "image": "images/sutoor.jpg"
},
{
  "category": "UNISSEX",
  "name": "PHOHIBIT PARFUM INTENSE",
  "basePrice": 180,
  "image": "images/prohibit-parfum-intense.jpeg"
},
{
  "category": "UNISSEX",
  "name": "PROHIBIT INTENSE",
  "basePrice": 180,
    "image": "images/Prohibit-Intense.webp"
},
{
  "category": "UNISSEX",
  "name": "EMAAN",
  "basePrice": 200,
  "image": "images/emaan.webp"
},
{
  "category": "UNISSEX",
  "name": "MASHRABYA",
  "basePrice": 200,
  "image": "images/mashrabya.webp"
},
{
  "category": "UNISSEX",
  "name": "HISTORIC DORRIA",
  "basePrice": 200,
  "image": "images/historic-dorria.webp"
},
{
  "category": "UNISSEX",
  "name": "HISTORIC OLMEDA",
  "basePrice": 200,
  "image": "images/historic-olmeda.webp"
},
{
  "category": "UNISSEX",
  "name": "HISTORIC SAHARA",
  "basePrice": 200,
  "image": "images/historic-sahara.webp"
},
{
  "category": "UNISSEX",
  "name": "SILVER SCENT INTENSE",
  "basePrice": 130,
    "image": "images/Silver-Scent-Intense.webp"
},
{
  "category": "UNISSEX",
  "name": "SILVER SCENT",
  "basePrice": 160,
  "image": "images/silver-scent.webp"
},
{
  "category": "UNISSEX",
  "name": "ORIENTICA ROYAL AMBER",
  "basePrice": 550,
  "image": "images/orientica-royal-amber.webp"
},
{
  "category": "UNISSEX",
  "name": "SAFWAAN",
  "basePrice": 130,
  "image": "images/safwaan.jpg"
},
{
  "category": "UNISSEX",
  "name": "THE DONE ASTRODOME",
  "basePrice": 150,
  "image": "images/the-done.webp"
},
{
  "category": "UNISSEX",
  "name": "THE DONE CAPITOL",
  "basePrice": 150,
  "image": "images/the-done-capitol.webp"
},
{
  "category": "UNISSEX",
  "name": "THE DONE REICHSTAG",
  "basePrice": 150,
  "image": "images/the-done-reichstag.webp"
},

//
// CREME
//
{
  "category": "CREME",
  "name": "CREME YARA",
  "basePrice": 70,
  "image": "images/yara-creme.webp"
},
{
  "category": "CREME",
  "name": "CREME ANA ABIYEDH",
  "basePrice": 70,
  "image": "images/creme-ana.webp"
},
{
  "category": "CREME",
  "name": "CREME ASAD",
  "basePrice": 70,
  "image": "images/creme-assad.webp"
},
{
  "category": "CREME",
  "name": "CREME club de nuit",
  "basePrice": 70,
  "image": "images/creme-club.webp"
},
{
  "category": "CREME",
  "name": "CREME ANGEL",
  "basePrice": 70,
  "image": "images/creme-angel.webp"
},
{
  "category": "CREME",
  "name": "CREME FAKHAR ROSE",
  "basePrice": 70,
  "image": "images/creme-fakhar-rose.webp"
},
{
  "category": "kit",
  "name": "KIT ASAD",
  "basePrice": 125,
  "image": "images/kit-assad.webp"
},

);


function bindAddToCartButtons(){
  document.querySelectorAll("[data-add-cart]").forEach(btn => {
    if(btn.dataset.bound) return;
    btn.dataset.bound = "1";

    btn.addEventListener("click", () => {
      const name = btn.getAttribute("data-name");
      if(!name) return;

      addToCart(name);

      // ===== FEEDBACK VISUAL NO PRÓPRIO PRODUTO =====
      btn.textContent = "Adicionado ✓";
      btn.disabled = true;
      btn.classList.add("added");
      // =============================================
    });
  });
}

function setupPaymentButtons() {
  const whatsBtn = document.getElementById("btnWhatsPayment");
  const instaBtn = document.getElementById("btnInstaPayment");

  if (whatsBtn) {
    const msg = "Olá! Vim pelo site da Sairam e quero comprar perfumes. Pode me ajudar?";
    whatsBtn.href = `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(msg)}`;
  }

  if (instaBtn) {
    instaBtn.href = `https://www.instagram.com/${INSTAGRAM}/`;
  }
}
setupPaymentButtons();



const CART_KEY = "sairam_cart_v1";

function loadCart(){
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch { return []; }
}
function saveCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge(cart);
}
function updateCartBadge(cart = loadCart()){
  const count = cart.reduce((acc,it)=>acc + it.qty, 0);
  const el = document.getElementById("cartCount");
  if(el) el.textContent = String(count);
}
function findProductByName(name){
  return products.find(p => p.name === name);
}
function addToCart(name){
  const cart = loadCart();
  const existing = cart.find(i => i.name === name);
  if(existing) existing.qty += 1;
  else cart.push({ name, qty: 1 });
  saveCart(cart);
}
function changeQty(name, delta){
  const cart = loadCart();
  const item = cart.find(i => i.name === name);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0){
    const idx = cart.findIndex(i => i.name === name);
    if(idx >= 0) cart.splice(idx, 1);
  }
  saveCart(cart);
  renderCart();
}
function clearCart(){
  saveCart([]);
  renderCart();
}

function cartMessage(cart){
  const lines = cart.map(it => {    // para cada item do carrinho
    const p = findProductByName(it.name);  // produto do item
    const price = getFinalPriceByProduct(p); // preço unitário do item
    const priceTxt = typeof price === "number" ? formatBRL(price) : "Consulte"; // preço do item
    return `• ${it.qty}x ${it.name} — ${priceTxt}`; // linha do item
  });

  const total = cart.reduce((acc,it)=>{
    const p = findProductByName(it.name);
    const price = getFinalPriceByProduct(p);
    if(typeof price !== "number") return acc; // não soma itens sem preço
    return acc + (price * it.qty);
  },0);

  const hasUnknown = cart.some(it=>{
    const p = findProductByName(it.name);
    return typeof getFinalPriceByProduct(p) !== "number";
  });

  return [
    "Olá! Vim pelo site da Sairam e quero finalizar este carrinho:",
    "",
    ...lines,
    "",
    hasUnknown ? "Total (parcial): " + formatBRL(total) : "Total: " + formatBRL(total),
    hasUnknown ? "Obs: alguns itens estão com preço 'Consulte'." : "",
    "",
    "Pode me informar disponibilidade e envio?"
  ].filter(Boolean).join("\n");
}

function openCart(){
  const modal = document.getElementById("cartModal");
  const btn = document.getElementById("cartBtn");
  if(!modal) return;
  modal.hidden = false;
  btn?.setAttribute("aria-expanded","true");
  renderCart();
}
function closeCart(){
  const modal = document.getElementById("cartModal");
  const btn = document.getElementById("cartBtn");
  if(!modal) return;
  modal.hidden = true;
  btn?.setAttribute("aria-expanded","false");
}

function renderCart(){
  const cart = loadCart();
  const list = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");
  const checkout = document.getElementById("cartCheckout");
  if(!list || !totalEl || !checkout) return;

  if(cart.length === 0){
    list.innerHTML = `<div class="muted">Seu carrinho está vazio.</div>`;
    totalEl.textContent = formatBRL(0);
    checkout.href = `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent("Olá! Vim pelo site da Sairam. Pode me ajudar?")}`;
    return;
  }

  let total = 0;
  let hasUnknown = false;

  list.innerHTML = cart.map(it => {
    const p = findProductByName(it.name);
    const unit = getFinalPriceByProduct(p);

    if(typeof unit === "number") total += unit * it.qty;
    else hasUnknown = true;

    return `
      <div class="cart-item">
        <div>
          <h5>${it.name}</h5>
          <div class="meta">Unit: ${formatPriceOrConsult(unit)}</div>
        </div>
        <div class="cart-qty">
          <button class="qty-btn" type="button" data-qty="-1" data-name="${it.name}">−</button> 
          <span class="qty-val">${it.qty}</span>
          <button class="qty-btn" type="button" data-qty="1" data-name="${it.name}">+</button>
        </div>
      </div>
    `;
  }).join("");

  totalEl.textContent = hasUnknown ? `Total (parcial): ${formatBRL(total)}` : formatBRL(total);
  checkout.href = `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(cartMessage(cart))}`;
}

const carouselImages = [
  "images/asad-preto.jpg",
  "images/assad-bourbon.jpg",
  "images/fakhar-rose.jpg",
  "images/club-de-nuit-intense-man.jpg",
  "images/jorge-aqua.jpg",
  "images/club-de-nuit-woman.webp",
  "images/vip-pour-femme-rose.jpg",
  "images/como-moiselle.webp"

];

function formatBRL(value){
  return value.toLocaleString("pt-BR", { style:"currency", currency:"BRL" });
}

function getFinalPriceByProduct(p){
  // Retorna number (com bump) ou null (quando não tem preço definido)
  if(!p || typeof p.basePrice !== "number") return null;
  return p.basePrice + PRICE_BUMP;
}

function formatPriceOrConsult(value){
  if(typeof value !== "number") return "Consulte";
  return formatBRL(value);
}

function whatsappLink(productName){
  const msg = `Olá! Tenho interesse no perfume: ${productName}. Pode me informar disponibilidade e envio?`;
  return `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function setWhatsLinks(){
  const genericMsg = "Olá! Vim pelo site da Sairam e quero comprar perfumes. Pode me ajudar?";
  const link = `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(genericMsg)}`;

  ["whatsHeader","whatsHero","whatsFooter"].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.href = link;
  });

  const telLink = document.getElementById("telLink");
  if(telLink) telLink.href = `https://wa.me/${WHATS_NUMBER}`;
}

function renderGrid(filter="TODOS", query=""){
  const grid = document.getElementById("productGrid");
  if(!grid) return;

  const q = query.trim().toLowerCase();

  const items = products.filter(p => {
    const okCategory = filter === "TODOS" || p.category === filter;
    const okQuery = !q || p.name.toLowerCase().includes(q);
    return okCategory && okQuery;
  });

  grid.innerHTML = items.map(p => {
    const finalPrice = getFinalPriceByProduct(p);

    let badgeLabel = "Masculino";
    let badgeClass = "badge";

    if(p.category === "FEMININO"){ badgeLabel = "Feminino"; badgeClass = "badge fem"; }
    else if(p.category === "UNISSEX"){ badgeLabel = "Unissex"; badgeClass = "badge uni"; }
    else if(p.category === "KIDS"){ badgeLabel = "Kids"; badgeClass = "badge kids"; }
    else if(p.category === "KIT"){ badgeLabel = "Kit"; badgeClass = "badge kit"; }
    else if(p.category === "LOCAO"){ badgeLabel = "Loção"; badgeClass = "badge locao"; }

    const details = "Importado • Estoque limitado";
    const imgSrc = p.image ? p.image : "images/logo-sairam.jpg";

    return `
      <article class="card">
        <div class="card-image"><img src="${imgSrc}" alt="${p.name}"></div>

        <div class="card-top">
          <div>
            <h5>${p.name}</h5>
            <div class="card-mid">
              ${details}
              <div class="price">${formatPriceOrConsult(finalPrice)}</div>
            </div>
          </div>
          <span class="${badgeClass}">${badgeLabel}</span>
        </div>

        <div class="card-actions">
          <button class="btn btn-ghost" type="button" data-add-cart data-name="${p.name}">Adicionar</button>
          <a class="btn btn-primary" target="_blank" rel="noopener" href="${whatsappLink(p.name)}">Comprar</a>
        </div>
      </article>
    `;
  }).join("");

  bindAddToCartButtons();

  if(items.length === 0){
    grid.innerHTML = `<div class="muted">Nenhum perfume encontrado.</div>`;
  }
}


function bindAddToCartButtons(){
  document.querySelectorAll("[data-add-cart]").forEach(btn => {
    if(btn.dataset.bound) return;
    btn.dataset.bound = "1";
    btn.addEventListener("click", () => {
      const name = btn.getAttribute("data-name");
      if(!name) return;
      addToCart(name);
    });
  });
}

function setupFilters(){
  const chips = Array.from(document.querySelectorAll(".chip"));
  const search = document.getElementById("searchInput");
  let active = "TODOS";

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      active = chip.dataset.filter || "TODOS";
      renderGrid(active, search?.value || "");
    });
  });

  search?.addEventListener("input", () => {
    renderGrid(active, search.value);
  });
}

function setupCarousel(){
  const img = document.getElementById("carouselImg");
  if(!img) return;

  let i = 0;
  const setImg = () => {
    img.src = carouselImages[i % carouselImages.length];
    i++;
  };
  setImg();
  setInterval(setImg, 5000);
}

function setupMenu(){
  const btn = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");
  if(!btn || !menu) return;

  btn.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      menu.classList.remove("is-open");
      btn.setAttribute("aria-expanded","false");
    });
  });
}

document.getElementById("year").textContent = new Date().getFullYear();


function setupCartUI(){
  updateCartBadge();

  document.getElementById("cartBtn")?.addEventListener("click", openCart);
  document.querySelectorAll("[data-cart-close]").forEach(el => el.addEventListener("click", closeCart));
  document.addEventListener("keydown", (e)=>{ if(e.key === "Escape") closeCart(); });

  document.getElementById("cartClear")?.addEventListener("click", clearCart);

  // Delegated qty controls
  document.getElementById("cartItems")?.addEventListener("click", (e)=>{
    const btn = e.target.closest("[data-qty]");
    if(!btn) return;
    const delta = Number(btn.getAttribute("data-qty"));
    const name = btn.getAttribute("data-name");
    if(!name || !delta) return;
    changeQty(name, delta);
  });
}

setWhatsLinks();
setupCarousel();
setupFilters();
setupMenu();
setupCartUI();
renderGrid();
