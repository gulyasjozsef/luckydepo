const categories=[
  {
    "id": "all",
    "name": "Toate produsele",
    "icon": "ALL"
  },
  {
    "id": "metalice",
    "name": "Produse metalice",
    "icon": "MET"
  },
  {
    "id": "vrac",
    "name": "Materiale vrac / agregate",
    "icon": "VRAC"
  },
  {
    "id": "structura",
    "name": "Materiale de constructii",
    "icon": "MAT"
  },
  {
    "id": "lemn",
    "name": "Material lemnos",
    "icon": "LEM"
  },
  {
    "id": "acoperis",
    "name": "Acoperisuri",
    "icon": "AC"
  },
  {
    "id": "finisaje",
    "name": "Finisaje si amenajari",
    "icon": "FIN"
  },
  {
    "id": "termo",
    "name": "Termoizolatii",
    "icon": "TER"
  },
  {
    "id": "exterior",
    "name": "Curte si exterior",
    "icon": "EXT"
  },
  {
    "id": "scule",
    "name": "Scule si accesorii",
    "icon": "SC"
  }
];
const products=[
  {
    "name": "Teava rectangulara si patrata",
    "category": "metalice",
    "tag": "Produse metalice",
    "stock": true,
    "popularity": 100,
    "description": "Profil metalic utilizat pentru constructii si structuri de sustinere la interior sau exterior, in lucrari civile, industriale si comerciale.",
    "specs": [
      "Disponibila in variante rectangulare si patrate",
      "Poate fi livrata si cu exterior prevopsit",
      "Potrivita pentru structuri, confectii si imprejmuiri"
    ],
    "image": "assets/products-pdf/țeavă pătrată.png"
  },
  {
    "name": "Otel lat / platbanda",
    "category": "metalice",
    "tag": "Produse metalice",
    "stock": true,
    "popularity": 99,
    "description": "Otel lat folosit pentru confectii metalice, elemente decorative, garduri, porti, ranforsari si componente industriale.",
    "specs": [
      "Cunoscut si ca platbanda",
      "Pentru confectii metalice si ranforsari",
      "Utilizare in domeniul civil si industrial"
    ],
    "image": "assets/products-pdf/product-02.png"
  },
  {
    "name": "Otel beton",
    "category": "metalice",
    "tag": "Armaturi",
    "stock": true,
    "popularity": 98,
    "description": "Otel pentru armarea elementelor din beton si pentru realizarea structurilor metalice de sustinere.",
    "specs": [
      "Pentru fundatii, centuri, stalpi si placi",
      "Profil potrivit pentru aderenta in beton",
      "Disponibil in mai multe dimensiuni"
    ],
    "image": "assets/products-pdf/product-01.png"
  },
  {
    "name": "Plasa sudata",
    "category": "metalice",
    "tag": "Armaturi",
    "stock": true,
    "popularity": 97,
    "description": "Plasa sudata din sarma cu profil periodic, utilizata ca element de armare pentru structuri din beton si pentru imprejmuiri.",
    "specs": [
      "Pentru armarea betonului",
      "Utila si la imprejmuiri provizorii sau permanente",
      "Folosita la drumuri, fatade si confectii metalice"
    ],
    "image": "assets/products-pdf/plasă sudată.png"
  },
  {
    "name": "Nisip vrac pentru constructii",
    "category": "vrac",
    "tag": "Materiale vrac",
    "stock": true,
    "popularity": 96,
    "description": "Nisip pentru tencuieli, zidarie sau sape, utilizat la interior si exterior prin amestec cu ciment sau var.",
    "specs": [
      "Livrare directa la adresa",
      "Pentru mortare, tencuieli si sape",
      "Material vrac pentru lucrari mari"
    ],
    "image": "assets/products-pdf/nisip.png"
  },
  {
    "name": "Balast vrac pentru betoane",
    "category": "vrac",
    "tag": "Agregate",
    "stock": true,
    "popularity": 95,
    "description": "Balastul este un amestec de pietris si nisip, folosit pentru umpluturi sau ca agregat in prepararea betoanelor.",
    "specs": [
      "Potrivit pentru umpluturi",
      "Agregat pentru betoane",
      "Livrare direct la usa ta"
    ],
    "image": "assets/products-pdf/balast.png"
  },
  {
    "name": "Romcim Ultra 20 kg",
    "category": "structura",
    "tag": "Ciment",
    "stock": true,
    "popularity": 94,
    "description": "Ciment Portland cu adaos de calcar, clasa de rezistenta 42,5 R, potrivit pentru lucrari civile la interior si exterior.",
    "specs": [
      "Ambalaj: 20 kg",
      "Pentru lucrari cu rezistenta buna",
      "Aplicare sigura in proiecte mici si medii"
    ],
    "image": "assets/products-pdf/romcim-ultra-20kg.png"
  },
  {
    "name": "Romcim Ultra 40 kg",
    "category": "structura",
    "tag": "Ciment",
    "stock": true,
    "popularity": 93,
    "description": "Ciment recomandat pentru beton simplu sau armat, fundatii, stalpi, centuri, plansee si lucrari civile durabile.",
    "specs": [
      "Ambalaj: 40 kg",
      "Pentru beton simplu si beton armat",
      "Potrivit pentru fundatii si elemente structurale"
    ],
    "image": "assets/products-pdf/romcim-ultra-40kg.png"
  },
  {
    "name": "Holcim EcoPlanet Plus 20 kg",
    "category": "structura",
    "tag": "Ciment",
    "stock": true,
    "popularity": 92,
    "description": "Ciment aditivat cu performanta ridicata, potrivit pentru lucrari diverse din beton, la interior sau exterior.",
    "specs": [
      "Ambalaj: 20 kg",
      "Practic pentru reparatii si completari",
      "Rezultate constante si sigure"
    ],
    "image": "assets/products-pdf/holcim-eco-20kg.png"
  },
  {
    "name": "Holcim EcoPlanet Plus 40 kg",
    "category": "structura",
    "tag": "Ciment",
    "stock": true,
    "popularity": 91,
    "description": "Ciment pentru lucrari de amploare mai mare, cu productivitate buna pe santier si performanta constanta.",
    "specs": [
      "Ambalaj: 40 kg",
      "Recomandat pentru cantitati ridicate",
      "Contribuie la reducerea amprentei de CO2"
    ],
    "image": "assets/products-pdf/holcim-eco-40kg.png"
  },
  {
    "name": "Caramida Poroton",
    "category": "structura",
    "tag": "Caramida",
    "stock": true,
    "popularity": 90,
    "description": "Caramida Poroton disponibila pe stoc pentru lucrari de zidarie si constructii rezidentiale.",
    "specs": [
      "Produs disponibil pe stoc",
      "Pentru zidarii tencuite",
      "Comanda telefonic pentru cantitati"
    ],
    "image": "assets/products-pdf/caramida poroton.png"
  },
  {
    "name": "EuroPoroton 30 F-E",
    "category": "structura",
    "tag": "Caramida",
    "stock": true,
    "popularity": 89,
    "description": "Bloc ceramic destinat executarii zidariilor tencuite, cu performante termice ridicate.",
    "specs": [
      "Tip 30 F-E",
      "Clasa 1, 2",
      "Sistem eficient si versatil pentru zidarie"
    ],
    "image": "assets/products-pdf/tip 30F-E.png"
  },
  {
    "name": "EuroPoroton Tip 15 / 15-E",
    "category": "structura",
    "tag": "Caramida",
    "stock": true,
    "popularity": 88,
    "description": "Bloc ceramic pentru zidarie, disponibil in variante Tip 15 si 15-E.",
    "specs": [
      "Tip 15 si 15-E",
      "Clasa 1, 2",
      "Pentru zidarii interioare si compartimentari"
    ],
    "image": "assets/products-pdf/tip15 15-E.png"
  },
  {
    "name": "BCA 10 cm",
    "category": "structura",
    "tag": "BCA",
    "stock": true,
    "popularity": 87,
    "description": "Beton celular autoclavizat usor, rezistent si simplu de pus in opera, recomandat pentru zidarie.",
    "specs": [
      "Dimensiune: 100 x 250 x 600 mm",
      "Pentru interior si exterior",
      "Usor de prelucrat"
    ],
    "image": "assets/products-pdf/bca 10 cm.png"
  },
  {
    "name": "BCA 15 cm",
    "category": "structura",
    "tag": "BCA",
    "stock": true,
    "popularity": 86,
    "description": "BCA pentru zidarie, produs din ciment, var, nisip, gips si apa, cu montaj rapid pe santier.",
    "specs": [
      "Dimensiune: 150 x 250 x 600 mm",
      "Pentru pereti si compartimentari",
      "Material usor si rezistent"
    ],
    "image": "assets/products-pdf/bca 15 cm.png"
  },
  {
    "name": "BCA 20 cm",
    "category": "structura",
    "tag": "BCA",
    "stock": true,
    "popularity": 85,
    "description": "BCA potrivit pentru lucrari de zidarie la interior si exterior, cu buna manevrabilitate.",
    "specs": [
      "Dimensiune: 200 x 250 x 600 mm",
      "Pentru zidarie curenta",
      "Compatibil cu adezivi pentru BCA"
    ],
    "image": "assets/products-pdf/bca 20 cm.png"
  },
  {
    "name": "BCA 25 cm",
    "category": "structura",
    "tag": "BCA",
    "stock": true,
    "popularity": 84,
    "description": "Bloc BCA pentru zidarie, recomandat in proiecte unde este nevoie de grosime mai mare a peretelui.",
    "specs": [
      "Dimensiune: 250 x 250 x 600 mm",
      "Pentru interior si exterior",
      "Simplu de pus in opera"
    ],
    "image": "assets/products-pdf/bca 25 cm.png"
  },
  {
    "name": "BCA 30 cm",
    "category": "structura",
    "tag": "BCA",
    "stock": true,
    "popularity": 83,
    "description": "Bloc BCA de 30 cm pentru zidarie exterioara si lucrari cu cerinte mai ridicate de grosime.",
    "specs": [
      "Dimensiune: 300 x 250 x 600 mm",
      "Pentru pereti exteriori",
      "Material usor si rezistent"
    ],
    "image": "assets/products-pdf/bca 30 cm.png"
  },
  {
    "name": "Cherestea SC",
    "category": "lemn",
    "tag": "Material lemnos",
    "stock": true,
    "popularity": 82,
    "description": "Cherestea pentru constructii si lucrari de structura, disponibila in lungimi de 4, 5 sau 6 m.",
    "specs": [
      "Latime: 0,05 m",
      "Grosime: 0,05 m",
      "Lungime: 4 / 5 / 6 m"
    ],
    "image": "assets/products-pdf/product-07.png"
  },
  {
    "name": "Cherestea F",
    "category": "lemn",
    "tag": "Material lemnos",
    "stock": true,
    "popularity": 81,
    "description": "Cherestea pentru lucrari de cofrare, reparatii si constructii generale.",
    "specs": [
      "Latime: 0,05 m",
      "Grosime: 0,03 m",
      "Lungime: 4 m"
    ],
    "image": "assets/products-pdf/product-08.png"
  },
  {
    "name": "Cherestea L",
    "category": "lemn",
    "tag": "Material lemnos",
    "stock": true,
    "popularity": 80,
    "description": "Cherestea in mai multe latimi, utilizata in lucrari de constructii si amenajari.",
    "specs": [
      "Latimi: 0,10 - 0,30 m",
      "Grosime: 0,025 m",
      "Lungime: 4 / 5 / 6 m"
    ],
    "image": "assets/products-pdf/product-08.png"
  },
  {
    "name": "Cherestea R",
    "category": "lemn",
    "tag": "Material lemnos",
    "stock": true,
    "popularity": 79,
    "description": "Material lemnos pentru structuri, sprijiniri si lucrari de santier.",
    "specs": [
      "Latimi disponibile: 0,08 - 0,15 m",
      "Grosimi disponibile: 0,08 - 0,15 m",
      "Lungime: 4 / 5 / 6 m"
    ],
    "image": "assets/products-pdf/product-07.png"
  },
  {
    "name": "Cherestea GR",
    "category": "lemn",
    "tag": "Material lemnos",
    "stock": true,
    "popularity": 78,
    "description": "Cherestea robusta pentru lucrari de constructii unde este necesara sectiune mai mare.",
    "specs": [
      "Latimi: 0,10 / 0,15 / 0,20 m",
      "Grosime: 0,05 m",
      "Lungime: 4 / 5 / 6 m"
    ],
    "image": "assets/products-pdf/product-07.png"
  },
  {
    "name": "Tigla ceramica Tondach",
    "category": "acoperis",
    "tag": "Tigla ceramica",
    "stock": true,
    "popularity": 77,
    "description": "Tigla ceramica Tondach pentru acoperisuri durabile, disponibila impreuna cu accesoriile potrivite.",
    "specs": [
      "Model Tondach",
      "Pentru acoperisuri rezidentiale",
      "Culori si accesorii la cerere"
    ],
    "image": "assets/products-pdf/tondach.png"
  },
  {
    "name": "Tigla ceramica Bramac",
    "category": "acoperis",
    "tag": "Tigla ceramica",
    "stock": true,
    "popularity": 76,
    "description": "Tigla ceramica Bramac pentru acoperisuri rezistente si aspect ingrijit.",
    "specs": [
      "Model Bramac",
      "Pentru acoperisuri inclinate",
      "Accesorii disponibile la comanda"
    ],
    "image": "assets/products-pdf/bramac.png"
  },
  {
    "name": "Tigla ceramica Kikinda",
    "category": "acoperis",
    "tag": "Tigla ceramica",
    "stock": true,
    "popularity": 75,
    "description": "Tigla ceramica Kikinda pentru proiecte de acoperis, disponibila prin comanda telefonica.",
    "specs": [
      "Model Kikinda",
      "Pentru acoperisuri rezidentiale",
      "Solicita stocul telefonic"
    ],
    "image": "assets/products-pdf/kikinda.png"
  },
  {
    "name": "Adeplast Klasiko interior/exterior 30 kg",
    "category": "finisaje",
    "tag": "Tencuiala var",
    "stock": true,
    "popularity": 74,
    "description": "Mortar pentru tencuiala sau drisca, destinat aplicarii manuale pe suporturi minerale, la interior si exterior.",
    "specs": [
      "Ambalaj: 30 kg",
      "Clasa CS II conform SR EN 998-1",
      "Aplicare manuala"
    ],
    "image": "assets/products-pdf/TENCUIALĂ VAR - Adeplast KLASIKO.png"
  },
  {
    "name": "Adeplast MTI 25",
    "category": "finisaje",
    "tag": "Tencuiala var",
    "stock": true,
    "popularity": 73,
    "description": "Mortar pentru lucrari de tencuire si reparatii la interior, aplicabil manual sau mecanizat.",
    "specs": [
      "Pentru interior",
      "Aplicare manuala sau mecanizata",
      "Potrivit pentru reparatii"
    ],
    "image": "assets/products-pdf/TENCUIALĂ VAR - Adeplast MTI 25.png"
  },
  {
    "name": "Baumit MPI 25",
    "category": "finisaje",
    "tag": "Tencuiala var",
    "stock": true,
    "popularity": 72,
    "description": "Tencuiala uscata predozata pe baza de var-ciment, destinata lucrarilor interioare.",
    "specs": [
      "Aplicare manuala sau mecanizata",
      "Permeabila la vapori",
      "Suprafata uniforma pentru vopsire"
    ],
    "image": "assets/products-pdf/TENCUIALĂ VAR - Baumit MPI 25.png"
  },
  {
    "name": "Rofix 510",
    "category": "finisaje",
    "tag": "Tencuiala var",
    "stock": true,
    "popularity": 71,
    "description": "Tencuiala uscata minerala pe baza de var si ciment, recomandata pentru pereti interiori, fatade si tavane.",
    "specs": [
      "Aplicare manuala",
      "Aderenta buna",
      "Finisaj rezistent in timp"
    ],
    "image": "assets/products-pdf/TENCUIALĂ VAR - Rofix 510.png"
  },
  {
    "name": "Duragips standard",
    "category": "finisaje",
    "tag": "Gips carton",
    "stock": true,
    "popularity": 70,
    "description": "Placa de gips-carton standard pentru pereti, placari si tavane interioare.",
    "specs": [
      "Pentru lucrari standard",
      "Montaj pe profile metalice",
      "Potrivit pentru pereti si tavane"
    ],
    "image": "assets/products-pdf/product-10.png"
  },
  {
    "name": "Duragips rezistent la umiditate",
    "category": "finisaje",
    "tag": "Gips carton",
    "stock": true,
    "popularity": 69,
    "description": "Placa de gips-carton pentru spatii unde este necesara rezistenta sporita la umiditate.",
    "specs": [
      "Rezistent la umiditate",
      "Pentru bai, holuri si zone tehnice",
      "Montaj pe profile metalice"
    ],
    "image": "assets/products-pdf/product-12.png"
  },
  {
    "name": "Duragips rezistent la foc",
    "category": "finisaje",
    "tag": "Gips carton",
    "stock": true,
    "popularity": 68,
    "description": "Placa de gips-carton cu rezistenta la foc pentru lucrari speciale de compartimentare si protectie.",
    "specs": [
      "Rezistent la foc",
      "Pentru sisteme interioare speciale",
      "Montaj cu accesorii dedicate"
    ],
    "image": "assets/products-pdf/product-11.png"
  },
  {
    "name": "Baumit FinoBello",
    "category": "finisaje",
    "tag": "Glet",
    "stock": true,
    "popularity": 67,
    "description": "Glet pe baza de ipsos pentru egalizarea suprafetelor si obtinerea peretilor si plafoanelor netede.",
    "specs": [
      "Pentru interior",
      "Spatii uscate",
      "Finisaj neted"
    ],
    "image": "assets/products-pdf/product-13.png"
  },
  {
    "name": "Baumit FinoGrande",
    "category": "finisaje",
    "tag": "Glet",
    "stock": true,
    "popularity": 66,
    "description": "Glet pe baza de ipsos pentru finisaje netede pe pereti si plafoane, in spatii uscate.",
    "specs": [
      "Pentru lucrari interioare",
      "Egalizarea suprafetelor",
      "Aplicare pe pereti si plafoane"
    ],
    "image": "assets/products-pdf/product-14.png"
  },
  {
    "name": "Knauf Goldband tencuiala de ipsos",
    "category": "finisaje",
    "tag": "Tencuiala ipsos",
    "stock": true,
    "popularity": 65,
    "description": "Tencuiala uscata monostrat pe baza de ipsos, destinata aplicarii manuale la interior.",
    "specs": [
      "Pentru interior",
      "Strat suport inainte de zugraveli",
      "Potrivita pentru umiditate medie"
    ],
    "image": "assets/products-pdf/product-16.png"
  },
  {
    "name": "Rofix PF 100 Bianco",
    "category": "finisaje",
    "tag": "Glet",
    "stock": true,
    "popularity": 64,
    "description": "Glet universal pe baza de ipsos, aplicabil manual sau mecanizat pe tencuieli, beton si suprafete similare.",
    "specs": [
      "Pentru interior",
      "Aplicare manuala sau mecanizata",
      "Suporturi: ipsos, ciment, beton"
    ],
    "image": "assets/products-pdf/product-15.png"
  },
  {
    "name": "Vopsea Colorline interior",
    "category": "finisaje",
    "tag": "Vopsele",
    "stock": true,
    "popularity": 63,
    "description": "Vopsea pentru interior cu acoperire uniforma, aspect placut si rezistenta buna la curatare.",
    "specs": [
      "Pentru locuinte si birouri",
      "Adera pe suprafete minerale",
      "Finisaj curat si durabil"
    ],
    "image": "assets/products-pdf/product-21.png"
  },
  {
    "name": "Vopsea Spor interior/exterior",
    "category": "finisaje",
    "tag": "Vopsele",
    "stock": true,
    "popularity": 62,
    "description": "Vopsea utilizabila la interior si exterior, potrivita pentru suporturi minerale si lucrari de renovare.",
    "specs": [
      "Interior / exterior",
      "Aplicare usoara",
      "Pentru suprafete minerale"
    ],
    "image": "assets/products-pdf/product-20.png"
  },
  {
    "name": "Casa Bella interior/exterior",
    "category": "finisaje",
    "tag": "Vopsele",
    "stock": true,
    "popularity": 61,
    "description": "Produs pentru lucrari de finisare la interior si exterior, disponibil in gama Lucky Depo.",
    "specs": [
      "Interior / exterior",
      "Pentru pereti si tavane",
      "Disponibil prin comanda telefonica"
    ],
    "image": "assets/products-pdf/product-17.png"
  },
  {
    "name": "Amorsa Spor Polisept",
    "category": "finisaje",
    "tag": "Amorse",
    "stock": true,
    "popularity": 60,
    "description": "Amorsa pentru protejarea suprafetelor din beton, tencuieli, gleturi, zidarii, BCA si gips-carton.",
    "specs": [
      "Pentru interior si exterior",
      "Rezistenta ridicata impotriva mucegaiului",
      "Pregateste suportul pentru finisaj"
    ],
    "image": "assets/products-pdf/amorsa-spor-polisept.png"
  },
  {
    "name": "Adeplast AF-I",
    "category": "finisaje",
    "tag": "Adeziv gresie si faianta",
    "stock": true,
    "popularity": 59,
    "description": "Mortar adeziv clasa C1T-NPD pentru placari cu gresie si faianta la interior, in spatii uscate.",
    "specs": [
      "Pentru gresie si faianta",
      "Aplicare in strat subtire",
      "Suporturi minerale absorbante"
    ],
    "image": "assets/products-pdf/product-23.png"
  },
  {
    "name": "Adeplast AF-E",
    "category": "finisaje",
    "tag": "Adeziv gresie si faianta",
    "stock": true,
    "popularity": 58,
    "description": "Adeziv pe baza de ciment pentru placari ceramice cu gresie si faianta la interior si exterior.",
    "specs": [
      "Interior / exterior",
      "Pentru suporturi minerale",
      "Aplicare in strat subtire"
    ],
    "image": "assets/products-pdf/product-24.png"
  },
  {
    "name": "Adeplast AF-N flexibil",
    "category": "finisaje",
    "tag": "Adeziv gresie si faianta",
    "stock": true,
    "popularity": 57,
    "description": "Adeziv flexibil pentru placari ceramice la interior si exterior, inclusiv spatii umede si pardoseli incalzite.",
    "specs": [
      "Rezistenta: -25°C pana la +80°C",
      "Potrivit pentru pardoseli incalzite",
      "Pentru spatii uscate si umede"
    ],
    "image": "assets/products-pdf/product-25.png"
  },
  {
    "name": "Placi ceramice si pardoseli",
    "category": "finisaje",
    "tag": "Placi ceramice",
    "stock": true,
    "popularity": 56,
    "description": "Gama de placi ceramice si pardoseli pentru amenajari interioare si exterioare.",
    "specs": [
      "Modele disponibile la cerere",
      "Pentru pardoseli si pereti",
      "Comanda telefonic pentru stoc"
    ],
    "image": "assets/products-pdf/product-05.png"
  },
  {
    "name": "Marmura la dimensiuni personalizate",
    "category": "finisaje",
    "tag": "Marmura",
    "stock": true,
    "popularity": 55,
    "description": "Marmura disponibila la dimensiuni personalizate pentru finisaje si amenajari decorative.",
    "specs": [
      "Dimensiuni personalizate",
      "Pentru interior si exterior",
      "Disponibila la comanda"
    ],
    "image": "assets/products-pdf/product-28.png"
  },
  {
    "name": "Polistiren extrudat 1-10 cm",
    "category": "termo",
    "tag": "Polistiren extrudat",
    "stock": true,
    "popularity": 54,
    "description": "Polistiren extrudat disponibil in grosimi multiple pentru izolatii si lucrari de termoizolare.",
    "specs": [
      "Grosimi: 1, 2, 3, 5, 8, 10 cm",
      "Pentru izolatii termice",
      "Rezistent si usor de montat"
    ],
    "image": "assets/products-pdf/product-46.png"
  },
  {
    "name": "Polistiren expandat 5-20 cm",
    "category": "termo",
    "tag": "Polistiren expandat",
    "stock": true,
    "popularity": 53,
    "description": "Polistiren expandat pentru termosisteme si izolatii, disponibil in mai multe grosimi.",
    "specs": [
      "Grosimi: 5, 8, 10, 15, 20 cm",
      "Pentru fatade si termoizolatii",
      "Compatibil cu adezivi pentru polistiren"
    ],
    "image": "assets/products-pdf/product-47.png"
  },
  {
    "name": "Tencuiala decorativa",
    "category": "finisaje",
    "tag": "Tencuiala decorativa",
    "stock": true,
    "popularity": 52,
    "description": "Tencuiala decorativa pentru finisarea fatadelor si elementelor interioare sau exterioare.",
    "specs": [
      "Pentru finisaje decorative",
      "Aplicare la exterior si interior",
      "Disponibila in mai multe variante"
    ],
    "image": "assets/products-pdf/product-48.png"
  },
  {
    "name": "Tencuiala decorativa de soclu DEKO",
    "category": "finisaje",
    "tag": "Tencuiala soclu",
    "stock": true,
    "popularity": 51,
    "description": "Tencuiala decorativa pentru soclu cu cuart colorat, destinata protectiei si finisarii suprafetelor.",
    "specs": [
      "Pentru interior si exterior",
      "Rezistenta la intemperii",
      "Potrivita pentru socluri si elemente decorative"
    ],
    "image": "assets/products-pdf/product-33.png"
  },
  {
    "name": "Pavaje pentru curte si alei",
    "category": "exterior",
    "tag": "Pavaje",
    "stock": true,
    "popularity": 50,
    "description": "Pavaje disponibile intr-o gama larga pentru curti, alei, terase si zone de acces.",
    "specs": [
      "Gama larga de modele",
      "Pentru amenajari exterioare",
      "Comanda telefonic pentru disponibilitate"
    ],
    "image": "assets/products-pdf/pavaje.png"
  },
  {
    "name": "Adeplast Polistirol ECO Plus",
    "category": "termo",
    "tag": "Adezivi si chituri",
    "stock": true,
    "popularity": 49,
    "description": "Mortar adeziv pentru termoizolare sau fonoizolare cu placi din polistiren expandat, la interior si exterior.",
    "specs": [
      "Pentru polistiren expandat",
      "Interior / exterior",
      "Lipire in sisteme termoizolante"
    ],
    "image": "assets/products-pdf/product-27.png"
  },
  {
    "name": "Adeplast Polistirol Premium",
    "category": "termo",
    "tag": "Adezivi si chituri",
    "stock": true,
    "popularity": 48,
    "description": "Adeziv pentru izolatii termice si fonice cu polistiren expandat, spuma poliuretanica, fiberfoam si materiale similare.",
    "specs": [
      "Pentru polistiren si poliuretan rigid",
      "Util si pentru ornamente",
      "Interior si exterior"
    ],
    "image": "assets/products-pdf/product-26.png"
  },
  {
    "name": "Rofix IA 622 MW",
    "category": "termo",
    "tag": "Adezivi si chituri",
    "stock": true,
    "popularity": 47,
    "description": "Adeziv mineral gri si masa de spaclu pentru armare, destinat placilor EPS-F si vata minerala MW.",
    "specs": [
      "Pentru polistiren EPS-F si vata minerala",
      "Strat de armare aprox. 3 mm",
      "Adeziv si masa de spaclu"
    ],
    "image": "assets/products-pdf/product-29.png"
  },
  {
    "name": "Baumit Baumacol Basic",
    "category": "finisaje",
    "tag": "Adezivi si chituri",
    "stock": true,
    "popularity": 46,
    "description": "Adeziv pe baza de ciment, nisip fin si aditivi speciali pentru placari cu gresie si faianta.",
    "specs": [
      "Pentru gresie si faianta",
      "Pe baza de ciment",
      "Aderenta buna pe suporturi minerale"
    ],
    "image": "assets/products-pdf/product-50.png"
  },
  {
    "name": "Betoniera 190 L, 1000 W",
    "category": "scule",
    "tag": "Betoniera",
    "stock": true,
    "popularity": 45,
    "description": "Betoniera cu motor de 1000 W, alimentare 220 V si capacitate cuva 190 L.",
    "specs": [
      "Putere motor: 1000 W",
      "Tensiune alimentare: 220 V",
      "Capacitate cuva: 190 L"
    ],
    "image": "assets/products-pdf/product-32.png"
  },
  {
    "name": "Roaba 85 L / 100 L",
    "category": "scule",
    "tag": "Accesorii santier",
    "stock": true,
    "popularity": 44,
    "description": "Roaba pentru transport materiale pe santier, disponibila in variante de 85 L si 100 L.",
    "specs": [
      "Capacitati: 85 L si 100 L",
      "Pentru santier si curte",
      "Cadru robust pentru materiale"
    ],
    "image": "assets/products-pdf/product-31.png"
  },
  {
    "name": "Spuma multifunctionala",
    "category": "finisaje",
    "tag": "Spuma montaj",
    "stock": true,
    "popularity": 43,
    "description": "Spuma multifunctionala pentru montaj, etansare, umplere si izolarea rosturilor.",
    "specs": [
      "Pentru montaj si etansare",
      "Utila la reparatii si constructii",
      "Disponibila la comanda telefonica"
    ],
    "image": "assets/products-pdf/product-39.png"
  },
  {
    "name": "Lac protector",
    "category": "finisaje",
    "tag": "Lacuri",
    "stock": true,
    "popularity": 42,
    "description": "Lac protector pentru suprafete din lemn si elemente decorative care necesita protectie suplimentara.",
    "specs": [
      "Pentru protectia suprafetelor",
      "Potrivit pentru lemn",
      "Aplicare in lucrari de finisaj"
    ],
    "image": "assets/products-pdf/product-43.png"
  },
  {
    "name": "Chit de rosturi rezistent la apa",
    "category": "finisaje",
    "tag": "Chit rosturi",
    "stock": true,
    "popularity": 41,
    "description": "Chit de rosturi durabil in timp, rezistent la apa, pentru placari ceramice.",
    "specs": [
      "Rezistent la apa",
      "Durabil in timp",
      "Pentru rosturi la gresie si faianta"
    ],
    "image": "assets/products-pdf/product-35.png"
  },
  {
    "name": "Echipamente de protectie",
    "category": "scule",
    "tag": "Protectie",
    "stock": true,
    "popularity": 40,
    "description": "Echipamente de protectie pentru lucrari de santier, manipulare materiale si activitati de constructii.",
    "specs": [
      "Pentru santier",
      "Pentru manipulare materiale",
      "Disponibile la comanda telefonica"
    ],
    "image": "assets/products-pdf/product-42.png"
  }
];
const $={sideFilters:document.querySelector('#sideFilters'),mobileFilters:document.querySelector('#mobileFilters'),mobileDrawer:document.querySelector('#mobileDrawer'),drawerBackdrop:document.querySelector('#drawerBackdrop'),mobileMenuToggle:document.querySelector('#mobileMenuToggle'),mobileFilterToggle:document.querySelector('#mobileFilterToggle'),mobileDrawerClose:document.querySelector('#mobileDrawerClose'),activeMobileCategory:document.querySelector('#activeMobileCategory'),productGrid:document.querySelector('#productGrid'),productPagination:document.querySelector('#productPagination'),searchInput:document.querySelector('#searchInput'),stockOnly:document.querySelector('#stockOnly'),sortSelect:document.querySelector('#sortSelect'),clearFilters:document.querySelector('#clearFilters'),resultCount:document.querySelector('#resultCount'),emptyState:document.querySelector('#emptyState'),dialog:document.querySelector('#productDialog'),dialogClose:document.querySelector('#dialogClose'),dialogImage:document.querySelector('#dialogImage'),dialogCategory:document.querySelector('#dialogCategory'),dialogTitle:document.querySelector('#dialogTitle'),dialogDescription:document.querySelector('#dialogDescription'),dialogSpecs:document.querySelector('#dialogSpecs')};
const state={category:'all',search:'',stockOnly:false,sort:'popular',page:1,perPage:12};
let searchScrollTimer=null;
function scrollCatalogIntoView(){const catalog=document.querySelector('#catalog');if(!catalog)return;window.clearTimeout(searchScrollTimer);searchScrollTimer=window.setTimeout(()=>{const header=document.querySelector('.site-header');const headerHeight=header?header.getBoundingClientRect().height:0;const target=window.pageYOffset+catalog.getBoundingClientRect().top-headerHeight-8;window.scrollTo({top:Math.max(0,target),behavior:'smooth'});},180)}
function normalizeSearch(value){return String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/ț|ţ/g,'t').replace(/ș|ş/g,'s').replace(/ă/g,'a').replace(/â|î/g,'i').replace(/\s+/g,' ').trim()}
function productHaystack(p){return normalizeSearch([p.name,p.tag,p.description,categoryName(p.category),...(p.specs||[])].join(' '))}
function categoryName(id){return categories.find(c=>c.id===id)?.name||id}
function openMobileDrawer(){if(!$.mobileDrawer)return;$.mobileDrawer.classList.add('open');if($.drawerBackdrop)$.drawerBackdrop.classList.add('open');$.mobileDrawer.setAttribute('aria-hidden','false')}
function closeMobileDrawer(){if(!$.mobileDrawer)return;$.mobileDrawer.classList.remove('open');if($.drawerBackdrop)$.drawerBackdrop.classList.remove('open');$.mobileDrawer.setAttribute('aria-hidden','true')}
function renderFilters(){const markup=categories.map(c=>'<button class="filter-pill '+(state.category===c.id?'active':'')+'" type="button" data-category="'+c.id+'">'+c.name+'</button>').join('');if($.sideFilters)$.sideFilters.innerHTML=markup;if($.mobileFilters)$.mobileFilters.innerHTML=markup;if($.activeMobileCategory)$.activeMobileCategory.textContent=categoryName(state.category)}
function renderCategoryCards(){}
function renderPagination(totalPages,totalItems){if(!$.productPagination)return;if(totalItems<=state.perPage){$.productPagination.innerHTML='';return;}let buttons=[];for(let page=1;page<=totalPages;page++){buttons.push('<button type="button" class="page-btn '+(page===state.page?'active':'')+'" data-page="'+page+'">'+page+'</button>')}$.productPagination.innerHTML=buttons.join('')}
function renderProducts(){const terms=normalizeSearch(state.search).split(' ').filter(Boolean);let visible=products.filter(p=>(state.category==='all'||p.category===state.category)&&(!state.stockOnly||p.stock)&&terms.every(term=>productHaystack(p).includes(term)));visible=[...visible].sort((a,b)=>state.sort==='name'?a.name.localeCompare(b.name,'ro'):state.sort==='category'?categoryName(a.category).localeCompare(categoryName(b.category),'ro'):b.popularity-a.popularity);const totalPages=Math.max(1,Math.ceil(visible.length/state.perPage));state.page=Math.min(Math.max(1,state.page),totalPages);const start=(state.page-1)*state.perPage;const pageItems=visible.slice(start,start+state.perPage);$.resultCount.textContent=visible.length+' '+(visible.length===1?'produs':'produse');$.emptyState.style.display=visible.length?'none':'block';renderPagination(totalPages,visible.length);$.productGrid.innerHTML=pageItems.map((p,i)=>{const idx=products.indexOf(p);return '<article class="product-card"><button class="details-btn" type="button" data-product="'+idx+'" aria-label="Detalii produs">i</button><button class="product-image-btn" type="button" data-product="'+idx+'" aria-label="Detalii produs: '+p.name+'"><img class="product-image" src="'+p.image+'" alt="'+p.name+'" loading="'+(i<6?'eager':'lazy')+'"></button><div class="product-body"><span class="tag">'+p.tag+'</span><h3>'+p.name+'</h3><p>'+p.description+'</p><div class="product-actions"><a class="phone-btn" href="tel:+40741908959"><span class="buy-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M3.5 4.5h2.6l2.2 10.2h8.9l2.1-7.1H7.2"/><circle cx="9.4" cy="19" r="1.15"/><circle cx="17.2" cy="19" r="1.15"/></svg></span><span>Comanda prin telefon</span></a></div></div></article>'}).join('')}
function setCategory(category){state.category=category;state.page=1;renderFilters();renderProducts();closeMobileDrawer();scrollCatalogIntoView()}
function openProduct(index){const p=products[index];if(!p)return;$.dialogImage.src=p.image;$.dialogImage.alt=p.name;$.dialogCategory.textContent=categoryName(p.category);$.dialogTitle.textContent=p.name;$.dialogDescription.textContent=p.description;$.dialogSpecs.innerHTML=p.specs.map(s=>'<li>'+s+'</li>').join('');$.dialog.showModal()}
document.addEventListener('click',e=>{const pageButton=e.target.closest('[data-page]');if(pageButton){state.page=Number(pageButton.dataset.page);renderProducts();document.querySelector('#catalog').scrollIntoView({behavior:'smooth',block:'start'});return;}const cat=e.target.closest('[data-category]');if(cat){setCategory(cat.dataset.category);return;}const detail=e.target.closest('[data-product]');if(detail)openProduct(Number(detail.dataset.product))});$.searchInput.addEventListener('input',e=>{state.search=e.target.value;state.page=1;renderProducts();if(state.search.trim())scrollCatalogIntoView()});if($.stockOnly){$.stockOnly.addEventListener('change',e=>{state.stockOnly=e.target.checked;state.page=1;renderProducts()})};$.sortSelect.addEventListener('change',e=>{state.sort=e.target.value;state.page=1;renderProducts()});$.clearFilters.addEventListener('click',()=>{state.category='all';state.search='';state.stockOnly=false;state.sort='popular';state.page=1;$.searchInput.value='';if($.stockOnly){$.stockOnly.checked=false};$.sortSelect.value='popular';renderFilters();renderProducts()});$.dialogClose.addEventListener('click',()=>$.dialog.close());$.dialog.addEventListener('click',e=>{if(e.target===$.dialog)$.dialog.close()});if($.mobileMenuToggle)$.mobileMenuToggle.addEventListener('click',openMobileDrawer);if($.mobileFilterToggle)$.mobileFilterToggle.addEventListener('click',openMobileDrawer);if($.mobileDrawerClose)$.mobileDrawerClose.addEventListener('click',closeMobileDrawer);if($.drawerBackdrop)$.drawerBackdrop.addEventListener('click',closeMobileDrawer);renderFilters();renderCategoryCards();renderProducts();
const slides=[...document.querySelectorAll('.hero-slide')];const dots=[...document.querySelectorAll('.hero-dots button')];let slideIndex=0;function showSlide(index){if(!slides.length)return;slideIndex=index%slides.length;slides.forEach((slide,i)=>slide.classList.toggle('active',i===slideIndex));dots.forEach((dot,i)=>dot.classList.toggle('active',i===slideIndex))}dots.forEach((dot,i)=>dot.addEventListener('click',()=>showSlide(i)));setInterval(()=>showSlide(slideIndex+1),5200);
