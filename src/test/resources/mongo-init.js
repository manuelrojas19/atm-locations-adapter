db = db.getSiblingDB("atm_data_db");
db.createCollection('bankEntity');
db.bankEntity.insertMany([
    {
        "_id": "64186ad0c3428b5847cf9a4c",
        "name": "Nogales",
        "street": "Plutarco Elias Calles SN",
        "address": "Col. Centro, Nogales, C.P. 84000, Sonora",
        "references": "Plutarco Elias Calles y A. Obregon",
        "state": "Sonora",
        "postalCode": "84000",
        "type": "Sucursal",
        "phone": "3121251",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 31.300127,
            "longitude": -110.938089
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a4d",
        "name": "Ensenada",
        "street": "Av. Ryerson 279",
        "address": "Col. Centro, Ensenada, C.P. 22800, Baja California",
        "references": "Calle Primera y Calle Segunda",
        "state": "Baja California",
        "postalCode": "22800",
        "type": "Sucursal",
        "phone": "782001",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 31.867476,
            "longitude": -116.629256
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a4e",
        "name": "Tijuana",
        "street": "Av. Constitución 1007",
        "address": "Col. Centro, Tijuana, C.P. 22000, Baja California",
        "references": "Constitución y Niños Heroes",
        "state": "Baja California",
        "postalCode": "22000",
        "type": "Sucursal",
        "phone": "880021",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 32.532604,
            "longitude": -117.038294
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a4f",
        "name": "C.F. Pacífico Mexicali",
        "street": "Francisco y Madero 500",
        "address": "Col. Centro, Mexicali, C.P. 21100, Baja California",
        "references": "Jose Maria Morelos y Mexico",
        "state": "Baja California",
        "postalCode": "21100",
        "type": "Sucursal",
        "phone": "5540140",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 32.664211,
            "longitude": -115.488831
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a50",
        "name": "Aduana",
        "street": "Av. Narciso Mendoza 1125",
        "address": "Col. Benito Juárez Fovisste, Nuevo Laredo, C.P. 88274, Tamaulipas",
        "references": "Esq. Gutiérrez y José Ma. Arteaga",
        "state": "Tamaulipas",
        "postalCode": "88274",
        "type": "Sucursal",
        "phone": "7120610",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 27.490308,
            "longitude": -99.515936
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a51",
        "name": "Magdalena",
        "street": "Av. Álvaro Obregón 105 Y 107",
        "address": "Col. Centro, Magdalena, C.P. 84160, Sonora",
        "references": "Mariano Matamoros y José Maria Morelos Y Pavón",
        "state": "Sonora",
        "postalCode": "84160",
        "type": "Sucursal",
        "phone": "20860",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 30.630968,
            "longitude": -110.968922
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a52",
        "name": "Agua Prieta",
        "street": "4Ta S/N",
        "address": "Col. Centro, Agua Prieta, C.P. 84200, Sonora",
        "references": "Av. 20 De Noviembre y Sonora",
        "state": "Sonora",
        "postalCode": "84200",
        "type": "Sucursal",
        "phone": "80037",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 31.329628,
            "longitude": -109.543325
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a53",
        "name": "La Paz",
        "street": "Carlos Esquerro 110",
        "address": "Col. Zona Comercial, La Paz, C.P. 23000, Baja California Sur",
        "references": "Agustin Arriola",
        "state": "Baja California Sur",
        "postalCode": "23000",
        "type": "Sucursal",
        "phone": "1221011",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 24.161781,
            "longitude": -110.317325
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a54",
        "name": "Tecate",
        "street": "Benito Juarez 100",
        "address": "Col. Centro, Tecate, C.P. 21400, Baja California",
        "references": "Álvaro Obregón y Adolfo De La Huerta",
        "state": "Baja California",
        "postalCode": "21400",
        "type": "Sucursal",
        "phone": "6541188",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 32.573258,
            "longitude": -116.630366
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a55",
        "name": "Tala",
        "street": "Nicolás Bravo 10",
        "address": "Col. Tala, Tala, C.P. 45300, Jalisco",
        "references": "Herrera Y Cairo y José Ma.Mercado",
        "state": "Jalisco",
        "postalCode": "45300",
        "type": "Sucursal",
        "phone": "738 01 72",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.649392,
            "longitude": -103.702447
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a56",
        "name": "Tenancingo",
        "street": "Plaza Morelos Pte S/N",
        "address": "Col. Tenancingo De Degollado, Tenancingo, C.P. 52400, Estado De Mexico",
        "references": "Madero y Guerrero",
        "state": "Estado de México",
        "postalCode": "52400",
        "type": "Sucursal",
        "phone": "1421110",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 18.9611666,
            "longitude": -99.5924821
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a57",
        "name": "Estación Bamoa",
        "street": "Blvd. 16 De Septiembre S/N",
        "address": "Col. Centro, Guasave, C.P. 81000, Sinaloa",
        "references": "Macario Gaxiola y Constitución",
        "state": "Sinaloa",
        "postalCode": "81000",
        "type": "Sucursal",
        "phone": "8723705",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 25.569567,
            "longitude": -108.463298
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a58",
        "name": "Zihuatanejo",
        "street": "Ejido #1",
        "address": "Col. Centro, Jose Azueta, C.P. 40880, Guerrero",
        "references": "Vicente Guerrero y Benito Juarez",
        "state": "Guerrero",
        "postalCode": "40880",
        "type": "Sucursal",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 17.642928,
            "longitude": -101.557647
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a59",
        "name": "C.F. Julio Verne",
        "street": "Av. Venustiano Carranza 2240",
        "address": "Col. Polanco, San Luis Potosi, C.P. 78220, San Luis Potosi",
        "references": "Julio Verne y José Vasconcelos",
        "state": "San Luis Potosí",
        "postalCode": "78220",
        "type": "Sucursal",
        "phone": "8138100",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 22.148742,
            "longitude": -101.011755
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a5a",
        "name": "Tototlan",
        "street": "Av. Juárez 2",
        "address": "Col. Centro, Tototlán, C.P. 47730, Jalisco",
        "references": "Hidalgo y Morelos",
        "state": "Jalisco",
        "postalCode": "47730",
        "type": "Sucursal",
        "phone": "916 02 97",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.541003,
            "longitude": -102.793642
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a5b",
        "name": "Villa Corregidora",
        "street": "Miguel Hidalgo 1",
        "address": "Col. Villa Corregidora, Corregidora, C.P. 76900, Queretaro",
        "references": "Pedro Urtiaga y Josefa Ortiz De Domínguez",
        "state": "Querétaro",
        "postalCode": "76900",
        "type": "Sucursal",
        "phone": "2251705",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.540949,
            "longitude": -100.439686
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a5c",
        "name": "Coatepec De Harinas",
        "street": "Plaza Hidalgo 10",
        "address": "Col. Centro, Coatepec Harinas, C.P. 51700, Estado De Mexico",
        "references": "Benito Juárez y Sebastián Lerdo De Tejada",
        "state": "Estado de México",
        "postalCode": "51700",
        "type": "Sucursal",
        "phone": "1450263",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 18.925562,
            "longitude": -99.768924
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a5d",
        "name": "Tehuantepec",
        "street": "Av. Juárez 9",
        "address": "Col. Centro, Tehuantepec, C.P. 70760, Oaxaca",
        "references": "Melchor Ocampo y 5 De Mayo",
        "state": "Oaxaca",
        "postalCode": "70760",
        "type": "Sucursal",
        "phone": "7152380",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 16.332601,
            "longitude": -95.231524
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a5e",
        "name": "Ocosingo",
        "street": "Central Pte 3",
        "address": "Col. Centro, Ocosingo, C.P. 29950, Chiapas",
        "references": "2Da Pte Norte y Central Nte",
        "state": "Chiapas",
        "postalCode": "29950",
        "type": "Sucursal",
        "phone": "6730034",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 16.908365,
            "longitude": -92.095326
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a5f",
        "name": "San Martin",
        "street": "Zaragoza Norte 101",
        "address": "Col. Centro, San Martin Texmelucan, C.P. 74000, Puebla",
        "references": "Benito Juárez Poniente y Florencio Espinosa",
        "state": "Puebla",
        "postalCode": "74000",
        "type": "Sucursal",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.283532,
            "longitude": -98.435843
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a60",
        "name": "Glorieta Los Toritos",
        "street": "Circuito Moisés Solana 117",
        "address": "Col. Balaustradas, Queretaro, C.P. 76079, Queretaro",
        "references": "Prol. Corregidora Sur y Prol. Luis Pasteur",
        "state": "Querétaro",
        "postalCode": "76079",
        "type": "Sucursal",
        "phone": "2235858",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.5749183,
            "longitude": -100.3843256
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a61",
        "name": "Almoloya De Juárez",
        "street": "Hidalgo 1",
        "address": "Col. Centro, Almoloya De Juarez, C.P. 50900, Estado De Mexico",
        "references": "Plaza Hidalgo y Abasolo",
        "state": "Estado de México",
        "postalCode": "50900",
        "type": "Sucursal",
        "phone": "1360186",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.370125,
            "longitude": -99.759568
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a62",
        "name": "La Sabana",
        "street": "Blvd. López Portillo S/N",
        "address": "Col. Renacimiento, La Sabana, C.P. 39715, Guerrero",
        "references": "Eje Central V Guerrero y Solidaridad",
        "state": "Guerrero",
        "postalCode": "39715",
        "type": "Sucursal",
        "phone": "4417479",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 16.895479,
            "longitude": -99.832243
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a63",
        "name": "Tequisquiapan",
        "street": "5 De Mayo 40",
        "address": "Col. Centro, Tequisquiapan, C.P. 76750, Queretaro",
        "references": "Av. Centenario y Aldama",
        "state": "Querétaro",
        "postalCode": "76750",
        "type": "Sucursal",
        "phone": "2730808",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.521463,
            "longitude": -99.894059
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a64",
        "name": "Tecamachalco",
        "street": "3 Ote 409",
        "address": "Col. Centro, Tecamachalco, C.P. 75482, Puebla",
        "references": "6 Sur y 4 Sur",
        "state": "Puebla",
        "postalCode": "75482",
        "type": "Sucursal",
        "phone": "4221996",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 18.882792,
            "longitude": -97.726459
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a65",
        "name": "Ometepec",
        "street": "Plaza Zaragoza 1",
        "address": "Col. Centro, Ometepec, C.P. 41700, Guerrero",
        "references": "Niños Héroes y Altamirano",
        "state": "Guerrero",
        "postalCode": "41700",
        "type": "Sucursal",
        "phone": "4120880",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 16.68407,
            "longitude": -98.403353
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a66",
        "name": "Zacatlan",
        "street": "Av. 5 De Mayo 11",
        "address": "Col. Centro, Zacatlan, C.P. 73310, Puebla",
        "references": "Allende y Reforma",
        "state": "Puebla",
        "postalCode": "73310",
        "type": "Sucursal",
        "phone": "9752428",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.9303738,
            "longitude": -97.9601358
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a67",
        "name": "Villagran Guanajuato",
        "street": "Juárez Ote 101",
        "address": "Col. Centro, Guanajuato, C.P. 38260, Guanajuato",
        "references": "Hidalgo y 5 De Mayo",
        "state": "Guanajuato",
        "postalCode": "38260",
        "type": "Sucursal",
        "phone": "4616155909",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.51191,
            "longitude": -100.995226
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a68",
        "name": "Forjadores",
        "street": "Forjadores De Puebla 1009",
        "address": "Col. Centro, Cuautlancingo, C.P. 72700, Puebla",
        "references": "Cirtuito De Las Américas y Juárez",
        "state": "Puebla",
        "postalCode": "72700",
        "type": "Sucursal",
        "phone": "2268660",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.0736403,
            "longitude": -98.2571782
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a69",
        "name": "Ángelopolis",
        "street": "Blvd. Atlixcayotl 150",
        "address": "Col. Angelópolis, Puebla, C.P. 72810, Puebla",
        "references": "Proción y Atlixcayotl",
        "state": "Puebla",
        "postalCode": "72810",
        "type": "Sucursal",
        "phone": "2252928",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.02687,
            "longitude": -98.236421
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a6a",
        "name": "Jalpa De Méndez",
        "street": "Plaza Hidalgo 58",
        "address": "Col. Centro, Jalpa De Mendez, C.P. 86200, Tabasco",
        "references": "Esq. Av. 27 De Febrero y Dueñas",
        "state": "Tabasco",
        "postalCode": "86200",
        "type": "Sucursal",
        "phone": "3371549",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 18.174958,
            "longitude": -93.063895
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a6b",
        "name": "Fortin",
        "street": "Calle 1 Sur 209",
        "address": "Col. Centro, Fortin De Las Flores, C.P. 94700, Veracruz",
        "references": "3 Pte y 5 Pte",
        "state": "Veracruz",
        "postalCode": "94700",
        "type": "Sucursal",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 18.898752,
            "longitude": -96.998673
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a6c",
        "name": "Tejupilco",
        "street": "Josefa Ortiz De Domínguez 21A",
        "address": "Col. Centro, Tejupilco, C.P. 51400, Estado De Mexico",
        "references": "Matamoros y Aldama",
        "state": "Estado de México",
        "postalCode": "51400",
        "type": "Sucursal",
        "phone": "2671857",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 18.89066,
            "longitude": -100.141669
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a6d",
        "name": "Guerrero",
        "street": "Hidalgo S/N",
        "address": "Col. Centro, Vicente Guerrero, C.P. 34890, Durango",
        "references": "Francisco Sarabia y Morelos",
        "state": "Durango",
        "postalCode": "34890",
        "type": "Sucursal",
        "phone": "8650778",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 23.73142,
            "longitude": -103.98844
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a6e",
        "name": "Ocozocuautla",
        "street": "Central Pte 4",
        "address": "Col. Centro, Ocozocuautla, C.P. 29140, Chiapas",
        "references": "Central Sur y 1A Av. Sur Ote",
        "state": "Chiapas",
        "postalCode": "29140",
        "type": "Sucursal",
        "phone": "6880092",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 16.760929,
            "longitude": -93.375148
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a6f",
        "name": "San Marcos",
        "street": "Zaragoza 3",
        "address": "Col. Centro, San Marcos, C.P. 39960, Guerrero",
        "references": "Matamoros y Nicolás Bravo",
        "state": "Guerrero",
        "postalCode": "39960",
        "type": "Sucursal",
        "phone": "4530066",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 16.796795,
            "longitude": -99.389435
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a70",
        "name": "Matehuala",
        "street": "Constitución 105",
        "address": "Col. Centro, Matehuala, C.P. 78700, San Luis Potosi",
        "references": "Arista y Benito Juárez",
        "state": "San Luis Potosí",
        "postalCode": "78700",
        "type": "Sucursal",
        "phone": "8825111",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 23.646698,
            "longitude": -100.644439
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a71",
        "name": "Huejutla",
        "street": "Hidalgo 1",
        "address": "Col. Centro, Huejutla, C.P. 43000, Hidalgo",
        "references": "Cuauhtemoc y Generales Azuara",
        "state": "Hidalgo",
        "postalCode": "43000",
        "type": "Sucursal",
        "phone": "8962132",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 21.138868,
            "longitude": -98.420189
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a72",
        "name": "El Salto",
        "street": "Hidalgo 46",
        "address": "Col. Centro, El Salto, C.P. 45681, Jalisco",
        "references": "Manuel Acuña y Cuauhtemoc",
        "state": "Jalisco",
        "postalCode": "45681",
        "type": "Sucursal",
        "phone": "37 32 02-13",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.518687,
            "longitude": -103.177211
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a73",
        "name": "Zavaleta",
        "street": "Zavaleta S/N",
        "address": "Col. Calz. Zavaleta, Puebla, C.P. 72170, Puebla",
        "references": "Priv. De La 51 Sur y 53 Sur",
        "state": "Puebla",
        "postalCode": "72170",
        "type": "Sucursal",
        "phone": "2843279",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.039686,
            "longitude": -98.248755
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a74",
        "name": "Villa Las Rosas",
        "street": "Central 8",
        "address": "Col. Centro, Las Rosas, C.P. 30785, Chiapas",
        "references": "Central y 1A Ote",
        "state": "Chiapas",
        "postalCode": "30785",
        "type": "Sucursal",
        "phone": "6720089",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 16.728614,
            "longitude": -92.6429
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a75",
        "name": "Colosio",
        "street": "Blvd. Luis Donaldo Colosio 459",
        "address": "Col. Villa Satelite, Hermosillo, C.P. 83200, Sonora",
        "references": "Waterpolo y Solidaridad",
        "state": "Sonora",
        "postalCode": "83200",
        "type": "Sucursal",
        "phone": "2607246",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 29.089038,
            "longitude": -110.986926
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a76",
        "name": "Sánchez Taboada Mexicali",
        "street": "Calz. Benito Juarez 4445",
        "address": "Col. Maestros Federales, Mexicali, C.P. 21360, Baja California",
        "references": "Magisterio y Av. Constituyentes",
        "state": "Baja California",
        "postalCode": "21360",
        "type": "Sucursal",
        "phone": "5618256",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 32.617334,
            "longitude": -115.440822
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a77",
        "name": "C.F. Paseo",
        "street": "Calle 56-A 431",
        "address": "Col. Buenavista, Merida, C.P. 97127, Yucatan",
        "references": "Calle 27 y Calle 29",
        "state": "Yucatán",
        "postalCode": "97127",
        "type": "Sucursal",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.988423,
            "longitude": -89.617152
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a78",
        "name": "C.F. Circunvalación Sur",
        "street": "Av. Circunvalación Sur 107 ",
        "address": "Col. Jardines de la Asunción ,Aguascalientes, C.P. 20270, Aguascalientes",
        "references": "Av. Mahatma Gandhi",
        "state": "Aguascalientes",
        "postalCode": "20270",
        "type": "Sucursal",
        "phone": "9786515",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 21.865882,
            "longitude": -102.29563
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a79",
        "name": "Periférico",
        "street": "Calz. Luis Echeverría S/N",
        "address": "Col. República, Saltillo, C.P. 25280, Coahuila",
        "references": "Prol. Monclova y Blvd. Venustiano Carranza",
        "state": "Coahuila",
        "postalCode": "25280",
        "type": "Sucursal",
        "phone": "4119370",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 25.447772,
            "longitude": -100.990631
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a7a",
        "name": "C.F. Blvd. Morelos",
        "street": "Morelos 2220",
        "address": "Col. Rodríguez, Reynosa, C.P. 88630, Tamaulipas",
        "references": "Once y Doce",
        "state": "Tamaulipas",
        "postalCode": "88630",
        "type": "Sucursal",
        "phone": "9239050",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 26.063915,
            "longitude": -98.295322
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a7b",
        "name": "Ávila Camacho",
        "street": "Av. Manuel Ávila Camacho 243",
        "address": "Col. Unidad Veracruzana, Jalapa, C.P. 91030, Veracruz",
        "references": "Acayucán y Tuxpam",
        "state": "Veracruz",
        "postalCode": "91030",
        "type": "Sucursal",
        "phone": "8151000",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.538753,
            "longitude": -96.928121
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a7c",
        "name": "Querétaro Zaragoza",
        "street": "Calz. Ignacio Zaragoza 150",
        "address": "Col. Centro, Queretaro, C.P. 76000, Queretaro",
        "references": "Ignacio Pérez y Av. Tecnológico",
        "state": "Querétaro",
        "postalCode": "76000",
        "type": "Sucursal",
        "phone": "2163669",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.585347,
            "longitude": -100.400774
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a7d",
        "name": "Río Bravo Tamps",
        "street": "Av. Fco I. Madero Pte 812",
        "address": "Col. Centro, Rio Bravo, C.P. 88900, Tamaulipas",
        "references": "Durango y Tlaxcala",
        "state": "Tamaulipas",
        "postalCode": "88900",
        "type": "Sucursal",
        "phone": "9342050",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 25.987196,
            "longitude": -98.096438
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a7e",
        "name": "Oficina Central",
        "street": "Isabel La Católica 44",
        "address": "Col. Centro, Cuauhtémoc, C.P. 06000, Ciudad de México",
        "references": "Venustiano Carranza y 16 De Septiembre",
        "state": "Ciudad de México",
        "postalCode": "06000",
        "type": "Sucursal",
        "phone": "1226-5849",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.431313,
            "longitude": -99.13617
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a7f",
        "name": "C.F. Jalapa",
        "street": "Xalapeños Ilustres 22",
        "address": "Col. Centro, Jalapa, C.P. 91000, Veracruz",
        "references": "Gutiérrez Zamora y Jose Maria Mata",
        "state": "Veracruz",
        "postalCode": "91000",
        "type": "Sucursal",
        "phone": "8180362",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.5279886,
            "longitude": -96.9200223
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a80",
        "name": "Aguascalientes",
        "street": "5 De Mayo S/N",
        "address": "Col. Centro, Aguascalientes, C.P. 20000, Aguascalientes",
        "references": "Esq. Calle Moctezuma",
        "state": "Aguascalientes",
        "postalCode": "20000",
        "type": "Sucursal",
        "phone": "9166569",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 21.880931,
            "longitude": -102.296614
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a81",
        "name": "C.F. Colima",
        "street": "Miguel Hidalgo 90",
        "address": "Col. Centro, Colima, C.P. 28000, Colima",
        "references": "Medellín y Melchor Ocampo",
        "state": "Colima",
        "postalCode": "28000",
        "type": "Sucursal",
        "phone": "312 01 03",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.2422049,
            "longitude": -103.7277914
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a82",
        "name": "C.F. Chihuahua",
        "street": "Independencia S/N",
        "address": "Col. Centro, Chihuahua, C.P. 31000, Chihuahua",
        "references": "Doblado y Ángel Trias",
        "state": "Chihuahua",
        "postalCode": "31000",
        "type": "Sucursal",
        "phone": "4101004",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 28.637407,
            "longitude": -106.077416
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a83",
        "name": "C.F. Durango",
        "street": "5 De Febrero 403",
        "address": "Col. Centro, Durango, C.P. 34000, Durango",
        "references": "Fco I. Madero y Guadalupe Victoria",
        "state": "Durango",
        "postalCode": "34000",
        "type": "Sucursal",
        "phone": "8132620",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 24.023351,
            "longitude": -104.668693
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a84",
        "name": "Cf Guadalajara",
        "street": "Av. Juárez 237",
        "address": "Col. Centro, Guadalajara, C.P. 44100, Jalisco",
        "references": "Av. Ramón Corona y Maestranza",
        "state": "Jalisco",
        "postalCode": "44100",
        "type": "Sucursal",
        "phone": "36 13 60 82",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.675193,
            "longitude": -103.346233
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a85",
        "name": "Hermosillo Son",
        "street": "Aquiles Serdán 1102",
        "address": "Col. Centro, Hermosillo, C.P. 83000, Sonora",
        "references": "Benito Juárez y Mariano Matamoros",
        "state": "Sonora",
        "postalCode": "83000",
        "type": "Sucursal",
        "phone": "2173646",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 29.077727,
            "longitude": -110.950731
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a86",
        "name": "Irapuato",
        "street": "Cortazar 11",
        "address": "Col. Centro, Irapuato, C.P. 36500, Guanajuato",
        "references": "Juan Álvarez y Benito Juárez",
        "state": "Guanajuato",
        "postalCode": "36500",
        "type": "Sucursal",
        "phone": "6261718",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.674253,
            "longitude": -101.347469
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a87",
        "name": "Leon",
        "street": "Blvd. Adolfo López Mateos S/N",
        "address": "Col. Centro, Leon, C.P. 37000, Guanajuato",
        "references": "5 De Mayo y Hidalgo",
        "state": "Guanajuato",
        "postalCode": "37000",
        "type": "Sucursal",
        "phone": "7168111",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 21.124758,
            "longitude": -101.680596
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a88",
        "name": "Mazatlan Sin",
        "street": "Ángel Flores SN",
        "address": "Col. Balcones De Loma Linda, Mazatlan, C.P. 82000, Sinaloa",
        "references": "Aquiles Serdán y Benito Juárez",
        "state": "Sinaloa",
        "postalCode": "82000",
        "type": "Sucursal",
        "phone": "9827434",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 23.20008,
            "longitude": -106.421401
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a89",
        "name": "Merced",
        "street": "Venustiano Carranza 145",
        "address": "Col. Centro, Cuauhtémoc, C.P. 06010, Ciudad de México",
        "references": "Las Cruces y Calle Jesus Maria",
        "state": "Ciudad de México",
        "postalCode": "06010",
        "type": "Sucursal",
        "phone": "1226-9369",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.430307,
            "longitude": -99.128997
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a8a",
        "name": "Mérida",
        "street": "Calle 59 485",
        "address": "Col. Centro, Merida, C.P. 97000, Yucatan",
        "references": "Calle 56 y Calle 58",
        "state": "Yucatán",
        "postalCode": "97000",
        "type": "Sucursal",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.9683183,
            "longitude": -89.6202822
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a8b",
        "name": "Pachuca",
        "street": "Plaza Independencia 105",
        "address": "Col. Centro, Pachuca, C.P. 42000, Hidalgo",
        "references": "Melchor Ocampo y Matamoros",
        "state": "Hidalgo",
        "postalCode": "42000",
        "type": "Sucursal",
        "phone": "7131555",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.128171,
            "longitude": -98.731634
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a8c",
        "name": "Saltillo",
        "street": "Allende S/N",
        "address": "Col. Centro, Saltillo, C.P. 25000, Coahuila",
        "references": "Ocampo y Abbott",
        "state": "Coahuila",
        "postalCode": "25000",
        "type": "Sucursal",
        "phone": "4119380",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 25.4226187,
            "longitude": -101.0013892
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a8d",
        "name": "San Cosme",
        "street": "Ribera De San Cosme 11",
        "address": "Col. Santa Ma. La Ribera, Cuauhtémoc, C.P. 06400, Ciudad de México",
        "references": "Av. Insurgentes Norte y Dr. Enrique González Martínez",
        "state": "Ciudad de México",
        "postalCode": "06400",
        "type": "Sucursal",
        "phone": "57.05.12.38 / 57.03.29.97",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.44035,
            "longitude": -99.156371
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a8e",
        "name": "Cd. Obregón",
        "street": "5 De Febrero 200",
        "address": "Col. Fundo Legal, Ciudad Obregon, C.P. 85160, Sonora",
        "references": "Esq. Av. Vicente Guerrero y Av. No Reelección",
        "state": "Sonora",
        "postalCode": "85160",
        "type": "Sucursal",
        "phone": "4100227",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 27.4935636,
            "longitude": -109.933266
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a8f",
        "name": "San Luis Potosi",
        "street": "Álvaro Obregón 355",
        "address": "Col. Centro, San Luis Potosi, C.P. 78000, San Luis Potosi",
        "references": "Esq. Ignacio Allende y Miguel Hidalgo",
        "state": "San Luis Potosí",
        "postalCode": "78000",
        "type": "Sucursal",
        "phone": "8121042",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 22.152676,
            "longitude": -100.977033
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a90",
        "name": "Tampico",
        "street": "Fco. I. Madero 403",
        "address": "Col. Centro, Tampico, C.P. 89000, Tamaulipas",
        "references": "Aduana y Gral. C López De Lara",
        "state": "Tamaulipas",
        "postalCode": "89000",
        "type": "Sucursal",
        "phone": "2140231",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 22.213429,
            "longitude": -97.855779
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a91",
        "name": "Tapachula ",
        "street": "Av. Central Sur 31",
        "address": "Col. Centro, Tapachula, C.P. 30700, Chiapas",
        "references": "2A Pte y 4A Pte",
        "state": "Chiapas",
        "postalCode": "30700",
        "type": "Sucursal",
        "phone": "6262926",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 14.904843,
            "longitude": -92.264638
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a92",
        "name": "Veracruz Ver",
        "street": "Independencia 1027",
        "address": "Col. Fracc Parcela 24 Ejido, Veracruz, C.P. 91700, Veracruz",
        "references": "Esq Benito Juárez y Miguel Lerdo De Tejada",
        "state": "Veracruz",
        "postalCode": "91700",
        "type": "Sucursal",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.201098,
            "longitude": -96.139547
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a93",
        "name": "Guaymas",
        "street": "Av. Aquiles Serdán S/N",
        "address": "Col. Centro, Guaymas, C.P. 85400, Sonora",
        "references": "Esq. Calle 20 y Calle 12 Sur",
        "state": "Sonora",
        "postalCode": "85400",
        "type": "Sucursal",
        "phone": "2220023",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 27.923447,
            "longitude": -110.891495
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a94",
        "name": "Cf Alameda",
        "street": "Juárez 84",
        "address": "Col. Centro, Cuauhtémoc, C.P. 06040, Ciudad de México",
        "references": "Balderas y Humboldt",
        "state": "Ciudad de México",
        "postalCode": "06040",
        "type": "Sucursal",
        "phone": "12.26.29.19 / 12.26.28.14",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.43526,
            "longitude": -99.147496
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a95",
        "name": "Tacubaya",
        "street": "Av. Jalisco 160",
        "address": "Col. Tacubaya,Miguel Hidalgo, C.P. 11870, Ciudad de México",
        "references": "Parque Lira y Revolución",
        "state": "Ciudad de México",
        "postalCode": "11870",
        "type": "Sucursal",
        "phone": "52259863",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.406124,
            "longitude": -99.185311
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a96",
        "name": "Cd. Juárez",
        "street": "Av. 16 De Septiembre S/N",
        "address": "Col. Centro, Ciudad Juarez, C.P. 32250, Chihuahua",
        "references": "Ramón Corona y Fco I. Madero",
        "state": "Chihuahua",
        "postalCode": "32250",
        "type": "Sucursal",
        "phone": "6150226",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 31.738828,
            "longitude": -106.480149
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a97",
        "name": "Parral",
        "street": "Ojinaga 2",
        "address": "Col. Centro, Parral, C.P. 33800, Chihuahua",
        "references": "8 De Agosto y Tecolote",
        "state": "Chihuahua",
        "postalCode": "33800",
        "type": "Sucursal",
        "phone": "5221304",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 26.935067,
            "longitude": -105.662527
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a98",
        "name": "Cd. Del Carmen",
        "street": "Calle 24 63",
        "address": "Col. Centro, Ciudad Del Carmen, C.P. 24100, Campeche",
        "references": "Calle 31 y Calle 29",
        "state": "Campeche",
        "postalCode": "24100",
        "type": "Sucursal",
        "phone": "3824700",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 18.63822,
            "longitude": -91.833897
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a99",
        "name": "Campeche",
        "street": "Calle 53 15",
        "address": "Col. Centro, Campeche, C.P. 24000, Campeche",
        "references": "Calle 10 y Calle 12",
        "state": "Campeche",
        "postalCode": "24000",
        "type": "Sucursal",
        "phone": "8160730",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.845866,
            "longitude": -90.535629
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a9a",
        "name": "C.F. Matamoros",
        "street": "Calle 7 611",
        "address": "Col. Matamoros Centro, Matamoros, C.P. 87300, Tamaulipas",
        "references": "Esq. José Ma. Morelos Y Pavón y González",
        "state": "Tamaulipas",
        "postalCode": "87300",
        "type": "Sucursal",
        "phone": "8138050",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 25.8796898,
            "longitude": -97.5055859
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a9b",
        "name": "Chetumal",
        "street": "Av. Juárez 51",
        "address": "Col. Centro, Chetumal, C.P. 77000, Quintana Roo",
        "references": "Av. Álvaro Obregón e Ignacio Zaragoza",
        "state": "Quintana Roo",
        "postalCode": "77000",
        "type": "Sucursal",
        "phone": "8321107",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 18.496725,
            "longitude": -88.29822
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a9c",
        "name": "Acapulco",
        "street": "Costera Miguel Alemán 364",
        "address": "Col. Petaquillas, Acapulco, C.P. 39360, Guerrero",
        "references": "Av. Juan R. Escudero y Hornitos",
        "state": "Guerrero",
        "postalCode": "39360",
        "type": "Sucursal",
        "phone": "4825754",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 16.849346,
            "longitude": -99.904775
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a9d",
        "name": "C.F. Uruapan",
        "street": "José Ma. Morelos Y Pavón SN",
        "address": "Col. Centro, Uruapan, C.P. 60000, Michoacan",
        "references": "Cupatitzio y Nicolas Bravo",
        "state": "Michoacán",
        "postalCode": "60000",
        "type": "Sucursal",
        "phone": "524-27-00",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.419515,
            "longitude": -102.062383
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a9e",
        "name": "Cd. Delicias",
        "street": "Calle 2Da Norte 211",
        "address": "Col. Centro, Ciudad Delicias, C.P. 33000, Chihuahua",
        "references": "2A Oriente y 3Ra Norte",
        "state": "Chihuahua",
        "postalCode": "33000",
        "type": "Sucursal",
        "phone": "4721473",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 28.195364,
            "longitude": -105.47129
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9a9f",
        "name": "Reynosa",
        "street": "Juárez 650",
        "address": "Col. Centro, Reynosa, C.P. 88500, Tamaulipas",
        "references": "Guerrero y Pedro J. Méndez",
        "state": "Tamaulipas",
        "postalCode": "88500",
        "type": "Sucursal",
        "phone": "9228260",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 26.090339,
            "longitude": -98.278058
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9aa0",
        "name": "Los Mochis",
        "street": "Av. Miguel Hidalgo Y Costilla SN",
        "address": "Col. Los Mochis Centro, Los Mochis, C.P. 82100, Sinaloa",
        "references": "Ignacio Zaragoza y Guillermo Prieto",
        "state": "Sinaloa",
        "postalCode": "82100",
        "type": "Sucursal",
        "phone": "8120116",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 25.788262,
            "longitude": -108.992789
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9aa1",
        "name": "Teziutlan",
        "street": "Av. Miguel Hidalgo S/N",
        "address": "Col. Centro, Teziutlan, C.P. 73800, Puebla",
        "references": "16 De Septiembre y León Guzmán",
        "state": "Puebla",
        "postalCode": "73800",
        "type": "Sucursal",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.816375,
            "longitude": -97.360562
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9aa2",
        "name": "Mesones",
        "street": "Av. 20 De Noviembre 134",
        "address": "Col. Centro, Cuauhtémoc, C.P. 06080, Ciudad de México",
        "references": "San Jeronimo y Regina",
        "state": "Ciudad de México",
        "postalCode": "06080",
        "type": "Sucursal",
        "phone": "1226-9429",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.4222526,
            "longitude": -99.1362544
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9aa3",
        "name": "Ramos Arizpe",
        "street": "Blvd. Manuel Acuña 500",
        "address": "Col. Centro, Ramos Arizpe, C.P. 25900, Coahuila",
        "references": "Carr. Saltillo Monterrey y Hipólito Charles",
        "state": "Coahuila",
        "postalCode": "25900",
        "type": "Sucursal",
        "phone": "8444119363",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 25.537704,
            "longitude": -100.945911
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9aa4",
        "name": "Fresnillo",
        "street": "Av. Miguel Hidalgo S/N",
        "address": "Col. Centro, Fresnillo, C.P. 99000, Zacatecas",
        "references": "Juárez y Av.Hidalgo",
        "state": "Zacatecas",
        "postalCode": "99000",
        "type": "Sucursal",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 23.174488,
            "longitude": -102.869253
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9aa5",
        "name": "C.F. Polanco",
        "street": "Pdte. Masaryk 375",
        "address": "Col. Polanco, Miguel Hidalgo, C.P. 11550, Ciudad de México",
        "references": "Alfredo De Musset y Anatole France",
        "state": "Ciudad de México",
        "postalCode": "11550",
        "type": "Sucursal",
        "phone": "53807300",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.431808,
            "longitude": -99.196984
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9aa6",
        "name": "Huatabampo Son",
        "street": "Benito Juarez García S/N",
        "address": "Col. Centro, Huatabampo, C.P. 85900, Sonora",
        "references": "Vicente Guerrero y Hermenegildo Galeona",
        "state": "Sonora",
        "postalCode": "85900",
        "type": "Sucursal",
        "phone": "4260692",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 26.82663,
            "longitude": -109.6413758
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9aa7",
        "name": "Acambaro",
        "street": "Hidalgo 287",
        "address": "Col. Centro, Acambaro, C.P. 38600, Guanajuato",
        "references": "Ignacio Zaragoza e Ignacio Allende",
        "state": "Guanajuato",
        "postalCode": "38600",
        "type": "Sucursal",
        "phone": "1721478",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.035504,
            "longitude": -100.719952
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9aa8",
        "name": "Cd. Cuauhtemoc",
        "street": "Agustín Melgar 100",
        "address": "Col. Centro, Ciudad Cuauhtemoc, C.P. 31500, Chihuahua",
        "references": "Av. Hidalgo y Av. José Ma. Morelos",
        "state": "Chihuahua",
        "postalCode": "31500",
        "type": "Sucursal",
        "phone": "5824586",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 28.408116,
            "longitude": -106.867086
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9aa9",
        "name": "Chilpancingo",
        "street": "Emiliano Zapata 2",
        "address": "Col. Lomas Del Porvenir, Chilpancingo, C.P. 39034, Guerrero",
        "references": "José Ma. Morelos Y Pavón y Fco I. Madero",
        "state": "Guerrero",
        "postalCode": "39034",
        "type": "Sucursal",
        "phone": "4725778",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 17.552825,
            "longitude": -99.502348
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9aaa",
        "name": "Santiago Ixcuintla",
        "street": "20 De Noviembre 89-BIS",
        "address": "Col. Centro, Santiago Ixcuintla, C.P. 63300, Nayarit",
        "references": "Hidalgo Nte e Ignacio Allende",
        "state": "Nayarit",
        "postalCode": "63300",
        "type": "Sucursal",
        "phone": "235 00 55",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 21.808564,
            "longitude": -105.20578
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9aab",
        "name": "Papantla Ver",
        "street": "Juan Enríquez 102",
        "address": "Col. Papantla De Olarte, Papantla, C.P. 93400, Veracruz",
        "references": "José Ma. Pino Suárez y Benito Juárez",
        "state": "Veracruz",
        "postalCode": "93400",
        "type": "Sucursal",
        "phone": "8420084",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.446763,
            "longitude": -97.321153
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9aac",
        "name": "Río Verde",
        "street": "Miguel Hidalgo 2",
        "address": "Col. Centro, Rio Verde, C.P. 79600, San Luis Potosi",
        "references": "Gallardo y Plaza Principal",
        "state": "San Luis Potosí",
        "postalCode": "79600",
        "type": "Sucursal",
        "phone": "8720036",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 21.931874,
            "longitude": -99.991754
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9aad",
        "name": "Xicotepec De Juárez Pue",
        "street": "Ignacio Zaragoza 126",
        "address": "Col. Centro, Xicotepec De Juarez, C.P. 73080, Puebla",
        "references": "Álvaro Obregón y 2 De Abril",
        "state": "Puebla",
        "postalCode": "73080",
        "type": "Sucursal",
        "phone": "7640133",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.270144,
            "longitude": -97.95883
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9aae",
        "name": "San Pedro De Las Colónias",
        "street": "Zaragoza 74",
        "address": "Col. Centro, San Pedro De Las Colonias, C.P. 27800, Coahuila",
        "references": "Hidalgo y Morelos",
        "state": "Coahuila",
        "postalCode": "27800",
        "type": "Sucursal",
        "phone": "7720085",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 25.759073,
            "longitude": -102.982409
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9aaf",
        "name": "Salina Cruz Oax",
        "street": "Guaymas 22",
        "address": "Col. Centro, Salina Cruz, C.P. 70600, Oaxaca",
        "references": "Av. 5 De Mayo y Gral. Manuel Ávila Camacho",
        "state": "Oaxaca",
        "postalCode": "70600",
        "type": "Sucursal",
        "phone": "7140033",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 16.177579,
            "longitude": -95.194354
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ab0",
        "name": "Huauchinango Pue",
        "street": "Portal Zaragoza 3-A",
        "address": "Col. Centro, Huauchinango, C.P. 73160, Puebla",
        "references": "Guerrero y Moctezuma",
        "state": "Puebla",
        "postalCode": "73160",
        "type": "Sucursal",
        "phone": "7620001",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.174409,
            "longitude": -98.0521703
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ab1",
        "name": "Pino Suárez",
        "street": "Av. José Ma Pino Suárez 814",
        "address": "Col. Centro, Monterrey, C.P. 64000, Nuevo Leon",
        "references": "José Ma. Arteaga Pte y Carlos Salazar Pte",
        "state": "Nuevo León",
        "postalCode": "64000",
        "type": "Sucursal",
        "phone": "83756423",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 25.683594,
            "longitude": -100.318244
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ab2",
        "name": "Manzanillo",
        "street": "México 136",
        "address": "Col. Centro, Manzanillo, C.P. 28200, Colima",
        "references": "Colhuas e Ingenieros",
        "state": "Colima",
        "postalCode": "28200",
        "type": "Sucursal",
        "phone": "332 01 98",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.052278,
            "longitude": -104.317471
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ab3",
        "name": "Acaponeta",
        "street": "Av. México Sur 4 NORTE",
        "address": "Col. Centro, Acaponeta, C.P. 63400, Nayarit",
        "references": "Juárez Ote y Allende Ote",
        "state": "Nayarit",
        "postalCode": "63400",
        "type": "Sucursal",
        "phone": "252 01 60",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 22.4919012,
            "longitude": -105.3606846
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ab4",
        "name": "Nonoalco",
        "street": "Dr Atl 290",
        "address": "Col. Santa Ma. La Ribera, Cuauhtémoc, C.P. 06400, Ciudad de México",
        "references": "Pino y Torres Bodet",
        "state": "Ciudad de México",
        "postalCode": "06400",
        "type": "Sucursal",
        "phone": "55.41.54.74 / 55.41.51.62",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.454475,
            "longitude": -99.155448
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ab5",
        "name": "Blvd. Monclova",
        "street": "De La Fuente Pte S/N",
        "address": "Col. Centro, Monclova, C.P. 25700, Coahuila",
        "references": "Hidalgo y V Carranza",
        "state": "Coahuila",
        "postalCode": "25700",
        "type": "Sucursal",
        "phone": "6332051",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 26.900877,
            "longitude": -101.417219
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ab6",
        "name": "Ocotlan",
        "street": "Hidalgo 230",
        "address": "Col. Centro, Ocotlan, C.P. 47800, Jalisco",
        "references": "Ramón Corona y Reforma",
        "state": "Jalisco",
        "postalCode": "47800",
        "type": "Sucursal",
        "phone": "922 04 99",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.349519,
            "longitude": -102.773769
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ab7",
        "name": "Cd Ixtepec",
        "street": "Av. 16 De Septiembre S/N",
        "address": "Col. Centro, Ixtepec, C.P. 70110, Oaxaca",
        "references": "Moctezuma y Libertad",
        "state": "Oaxaca",
        "postalCode": "70110",
        "type": "Sucursal",
        "phone": "7130177",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 16.554861,
            "longitude": -95.094468
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ab8",
        "name": "La Barca",
        "street": "Hidalgo S/N",
        "address": "Col. Centro, La Barca, C.P. 47910, Jalisco",
        "references": "Zaragoza y Corona",
        "state": "Jalisco",
        "postalCode": "47910",
        "type": "Sucursal",
        "phone": "935 06 21",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.279339,
            "longitude": -102.548586
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ab9",
        "name": "San Antonio Abad",
        "street": "San Antonio Abad 178",
        "address": "Col. Tránsito, Cuauhtémoc, C.P. 06820, Ciudad de México",
        "references": "Esq. Av. Del Taller",
        "state": "Ciudad de México",
        "postalCode": "06820",
        "type": "Sucursal",
        "phone": "2226-4750",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.413546,
            "longitude": -99.134892
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9aba",
        "name": "Cf Atotonilco",
        "street": "5 De Febrero 19",
        "address": "Col. Centro, Atotonilco El Alto, C.P. 47750, Jalisco",
        "references": "Juárez y Prol. Ignacio Zaragoza",
        "state": "Jalisco",
        "postalCode": "47750",
        "type": "Sucursal",
        "phone": "917 11 05",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.551372,
            "longitude": -102.507664
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9abb",
        "name": "Capitan Caldera",
        "street": "Av. Venustiano Carranza 1655",
        "address": "Col. Capitán Caldera, San Luis Potosi, C.P. 78250, San Luis Potosi",
        "references": "Capitán Caldera y Jaime Nunó",
        "state": "San Luis Potosí",
        "postalCode": "78250",
        "type": "Sucursal",
        "phone": "8134327",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 22.1490504,
            "longitude": -101.0004525
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9abc",
        "name": "La Villa",
        "street": "Calz. De Guadalupe 407",
        "address": "Col. Guadalupe Tepeyac, Gustavo A. Madero, C.P. 07840, Ciudad de México",
        "references": "Yolanda y Henry Ford",
        "state": "Ciudad de México",
        "postalCode": "07840",
        "type": "Sucursal",
        "phone": "10.55.82.31",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.470859,
            "longitude": -99.122532
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9abd",
        "name": "Insurgentes Coahuila",
        "street": "Insurgentes Sur 368",
        "address": "Col. Roma Sur, Cuauhtémoc, C.P. 06760, Ciudad de México",
        "references": "Coahuila y Chiapas",
        "state": "Ciudad de México",
        "postalCode": "06760",
        "type": "Sucursal",
        "phone": "55647288",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.410736,
            "longitude": -99.16688
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9abe",
        "name": "Caborca Son",
        "street": "Av. Quiroz y Mora 1",
        "address": "Col. Centro, Caborca, C.P. 83600, Sonora",
        "references": "Calle Segunda y Calle Tercera",
        "state": "Sonora",
        "postalCode": "83600",
        "type": "Sucursal",
        "phone": "73720550",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 30.709984,
            "longitude": -112.14953
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9abf",
        "name": "San Luis Río Colorado",
        "street": "Calle 2 S/N",
        "address": " Col. Comercial, C.P. 83449, San Luís Río Colorado",
        "references": "Esquina Madero",
        "state": "Sonora",
        "postalCode": "83449",
        "type": "Sucursal",
        "phone": "6535341310",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 32.4821,
            "longitude": -114.7816
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ac0",
        "name": "Aeropuerto",
        "street": "Blvd. Puerto Aéreo 342",
        "address": "Col. Moctezuma 2Da Sección, Venustiano Carranza, C.P. 15540, Ciudad de México",
        "references": "Norte 29 y Oriente 184",
        "state": "Ciudad de México",
        "postalCode": "15540",
        "type": "Sucursal",
        "phone": "5571-3229",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.431634,
            "longitude": -99.089974
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ac1",
        "name": "Poza Rica Ver",
        "street": "Av. 2 Norte Heriberto Kehoe Vincent S/N",
        "address": "Col. Obrera, Poza Rica, C.P. 93260, Veracruz",
        "references": "Calle 10 Oriente y Calle 12 Oriente",
        "state": "Veracruz",
        "postalCode": "93260",
        "type": "Sucursal",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.5283758,
            "longitude": -97.4613799
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ac2",
        "name": "Santa Monica",
        "street": "Av. Hidalgo 595",
        "address": "Col. Centro, Guadalajara, C.P. 44100, Jalisco",
        "references": "Contreras Medellin y González Ortega",
        "state": "Jalisco",
        "postalCode": "44100",
        "type": "Sucursal",
        "phone": "12 26 33 16",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.677193,
            "longitude": -103.351224
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ac3",
        "name": "Independencia",
        "street": "Av. Hidalgo S/N",
        "address": "Col. Centro, Guadalajara, C.P. 44100, Jalisco",
        "references": "Plaza Patria y Belén",
        "state": "Jalisco",
        "postalCode": "44100",
        "type": "Sucursal",
        "phone": "36 13 60 03",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.677447,
            "longitude": -103.345044
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ac4",
        "name": "Tierra Blanca Ver",
        "street": "Independencia 602",
        "address": "Col. Centro, Tierra Blanca, C.P. 95100, Veracruz",
        "references": "Benito Juárez y Aquiles Serdán",
        "state": "Veracruz",
        "postalCode": "95100",
        "type": "Sucursal",
        "phone": "7430199",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 18.446946,
            "longitude": -96.360354
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ac5",
        "name": "C.F. Vallejo",
        "street": "Norte 45 #902",
        "address": "Col. Industrial Vallejo, Ciudad De Mexico, C.P. 02300, Ciudad de México",
        "references": "Esq. Poniente 134",
        "state": "Ciudad de México",
        "postalCode": "02300",
        "type": "Sucursal",
        "phone": "18902-18927-18922-18936-18941",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.4933227,
            "longitude": -99.159611
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ac6",
        "name": "Minatitlan Ver",
        "street": "Miguel Hidalgo 86",
        "address": "Col. Centro, Minatitlan, C.P. 96700, Veracruz",
        "references": "Emilio Carranza y 10 De Mayo",
        "state": "Veracruz",
        "postalCode": "96700",
        "type": "Sucursal",
        "phone": "2236881",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 17.999281,
            "longitude": -94.558629
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ac7",
        "name": "Piedras Negras ",
        "street": "Emiliano Carranza 1101",
        "address": "Col. Centro, Piedras Negras, C.P. 26000, Coahuila",
        "references": "Guadalajara y Tepic",
        "state": "Coahuila",
        "postalCode": "26000",
        "type": "Sucursal",
        "phone": "7827289",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 28.69687,
            "longitude": -100.529224
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ac8",
        "name": "Comalcalco",
        "street": "Calle Juárez 401",
        "address": "Col. Centro, Comalcalco, C.P. 86300, Tabasco",
        "references": "Esq. Mariano Escobedo y Nicolas Bravo",
        "state": "Tabasco",
        "postalCode": "86300",
        "type": "Sucursal",
        "phone": "3341381",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 18.2621293,
            "longitude": -93.2234984
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ac9",
        "name": "Zacapu",
        "street": "Av. Morelos 134",
        "address": "Col. Centro, Zacapu, C.P. 58600, Michoacan",
        "references": "Eduardo Ruiz y Melchor Ocampo",
        "state": "Michoacán",
        "postalCode": "58600",
        "type": "Sucursal",
        "phone": "363-00-43",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.817121,
            "longitude": -101.790096
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9aca",
        "name": "San Rafael",
        "street": "Jose María Contreras 133",
        "address": "Col. San Rafael, Cuauhtémoc, C.P. 06500, Ciudad de México",
        "references": "Sullivan y Rio Rhin",
        "state": "Ciudad de México",
        "postalCode": "06500",
        "type": "Sucursal",
        "phone": "12 26 92 92",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.43494,
            "longitude": -99.166132
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9acb",
        "name": "Autlan",
        "street": "Guillermo Prieto 1",
        "address": "Col. Centro, Autlan, C.P. 48900, Jalisco",
        "references": "Av. Obregón y Cuauhtemoc",
        "state": "Jalisco",
        "postalCode": "48900",
        "type": "Sucursal",
        "phone": "382 05 75",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.770785,
            "longitude": -104.366698
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9acc",
        "name": "Huixtla",
        "street": "Central Norte 39825",
        "address": "Col. Centro, Huixtla, C.P. 30640, Chiapas",
        "references": "Zaragoza Pte y Fco I. Madero",
        "state": "Chiapas",
        "postalCode": "30640",
        "type": "Sucursal",
        "phone": "6420003",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 15.138447,
            "longitude": -92.465905
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9acd",
        "name": "Mixcoac",
        "street": "Av. Revolución 1004",
        "address": "Col. Mixcoac, Benito Juárez, C.P. 03900, Ciudad de México",
        "references": "Los Juárez y Rodrigo Cifuentes",
        "state": "Ciudad de México",
        "postalCode": "03900",
        "type": "Sucursal",
        "phone": "55984646",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.370411,
            "longitude": -99.188187
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ace",
        "name": "Tehuacan",
        "street": "Av. Reforma Norte 101",
        "address": "Col. Centro, Tehuacan, C.P. 75700, Puebla",
        "references": "Av. Independencia y 2 Poniente",
        "state": "Puebla",
        "postalCode": "75700",
        "type": "Sucursal",
        "phone": "3820533",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 18.46342,
            "longitude": -97.394081
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9acf",
        "name": "Macuspana Tab",
        "street": "Miguel Hidalgo 121",
        "address": "Col. Centro, Macuspana, C.P. 86700, Tabasco",
        "references": "Santos Degollado y Agustín Díaz Del Castillo",
        "state": "Tabasco",
        "postalCode": "86700",
        "type": "Sucursal",
        "phone": "3620482",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 17.757129,
            "longitude": -92.594688
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ad0",
        "name": "Cf San Bartolo Naucalpan",
        "street": "16 De Septiembre 505",
        "address": "Col. Alce Blanco, Naucalpan, C.P. 53370, Estado De Mexico",
        "references": "Calle 4 y Calle 5",
        "state": "Estado de México",
        "postalCode": "53370",
        "type": "Sucursal",
        "phone": "1226-9134",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.4701513,
            "longitude": -99.223038
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ad1",
        "name": "C.F. Reforma Sevilla",
        "street": "Av. Sevilla 37",
        "address": "Col. Juárez, Cuauhtémoc, C.P. 06600, Ciudad de México",
        "references": "Reforma y Tokio",
        "state": "Ciudad de México",
        "postalCode": "06600",
        "type": "Sucursal",
        "phone": "12 26 21 38 12 26 21 27",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.4226968,
            "longitude": -99.1727956
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ad2",
        "name": "Portales",
        "street": "Calz. De Tlalpan 1280",
        "address": "Col. Portales, Benito Juárez, C.P. 03560, Ciudad de México",
        "references": "Benito Juarez y Calz. De Tlalpan",
        "state": "Ciudad de México",
        "postalCode": "03560",
        "type": "Sucursal",
        "phone": "12269410",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.371816,
            "longitude": -99.141166
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ad3",
        "name": "Narvarte",
        "street": "Diagonal San Antonio 1309",
        "address": "Col. Narvarte Poniente, Benito Juárez, C.P. 03020, Ciudad de México",
        "references": "Xola y Cuauhtémoc",
        "state": "Ciudad de México",
        "postalCode": "03020",
        "type": "Sucursal",
        "phone": "12268460",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.395637,
            "longitude": -99.156784
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ad4",
        "name": "C.F. Zona Dorada",
        "street": "Calz. Camarón Sábalo 424",
        "address": "Col. Ex Laguna Las Gaviotas, Mazatlan, C.P. 82110, Sinaloa",
        "references": "Av. Rodolfo T. Loaiza y Bugambilia",
        "state": "Sinaloa",
        "postalCode": "82110",
        "type": "Sucursal",
        "phone": "9138301",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 23.240823,
            "longitude": -106.447051
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ad5",
        "name": "Coatepec Ver",
        "street": "Calle Aldama 10",
        "address": "Col. Centro, Coatepec, C.P. 91500, Veracruz",
        "references": "Esquina Cuauhtemoc",
        "state": "Veracruz",
        "postalCode": "91500",
        "type": "Sucursal",
        "phone": "8160043",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.453436,
            "longitude": -96.958492
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ad6",
        "name": "0.F. Villa Rica",
        "street": "Blvd. Manuel Ávila Camacho S/N",
        "address": "Col. Independencia, Veracruz, C.P. 93600, Veracruz",
        "references": "1Ero De Mayo y Adalberto Tejeda",
        "state": "Veracruz",
        "postalCode": "93600",
        "type": "Sucursal",
        "phone": "9315469",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.058127,
            "longitude": -97.049757
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ad7",
        "name": "Calvillo",
        "street": "Allende 303",
        "address": "Col. Zona Centro, Calvillo, C.P. 20800, Aguascalientes",
        "references": "Av. Indenpendencia y Hnos. Galeana",
        "state": "Aguascalientes",
        "postalCode": "20800",
        "type": "Sucursal",
        "phone": "9561427",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 21.846208,
            "longitude": -102.71872
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ad8",
        "name": "Valladolid Oaxaca",
        "street": "Oaxaca 108",
        "address": "Col. Roma Norte, Cuauhtémoc, C.P. 06700, Ciudad de México",
        "references": "Valladolid y Salamanca",
        "state": "Ciudad de México",
        "postalCode": "06700",
        "type": "Sucursal",
        "phone": "52259210",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.4178232,
            "longitude": -99.1701808
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ad9",
        "name": "Cuitlahuac",
        "street": "Av. Cuitláhuac 3423",
        "address": "Col. San Bernabe, Azcapotzalco, C.P. 02830, Ciudad de México",
        "references": "Av. Cuitlahuac y Nueces",
        "state": "Ciudad de México",
        "postalCode": "02830",
        "type": "Sucursal",
        "phone": "74860-74892-74801-74844",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.469334,
            "longitude": -99.172681
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ada",
        "name": "Tlapacoyan",
        "street": "Cuauhtemoc 300",
        "address": "Col. Centro, Tlapacoyan, C.P. 93650, Veracruz",
        "references": "Esq. Ferrer y Heroes De La Tlapacoyan",
        "state": "Veracruz",
        "postalCode": "93650",
        "type": "Sucursal",
        "phone": "3150453",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.9613465,
            "longitude": -97.2164274
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9adb",
        "name": "Niños Héroes",
        "street": "Av. Enrique Díaz De León 785",
        "address": "Col. Moderna, Guadalajara, C.P. 44190, Jalisco",
        "references": "Alemania y Fermin Riestra",
        "state": "Jalisco",
        "postalCode": "44190",
        "type": "Sucursal",
        "phone": "12 26 27 07",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.664344,
            "longitude": -103.359526
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9adc",
        "name": "Cf Santa Clara",
        "street": "Carr. Pachuca México KM 14.5",
        "address": "Col. Santa Clara, Ecatepec, C.P. 55540, Estado De Mexico",
        "references": "Cuautemoc y Priv. Cuauhtemoc",
        "state": "Estado de México",
        "postalCode": "55540",
        "type": "Sucursal",
        "phone": "55697838",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.533158,
            "longitude": -99.069468
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9add",
        "name": "Cf Vallarta",
        "street": "Av. Vallarta 1369",
        "address": "Col. Americana, Guadalajara, C.P. 44160, Jalisco",
        "references": "Colonias y Progreso",
        "state": "Jalisco",
        "postalCode": "44160",
        "type": "Sucursal",
        "phone": "12 26 23 38",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.674632,
            "longitude": -103.366217
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ade",
        "name": "Texcoco",
        "street": "Nezahualcoyotl 208",
        "address": "Col. Centro, Texcoco, C.P. 56100, Estado De Mexico",
        "references": "16 De Septiembre y 2 De Marzo",
        "state": "Estado de México",
        "postalCode": "56100",
        "type": "Sucursal",
        "phone": "595 95 40277",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.513249,
            "longitude": -98.880206
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9adf",
        "name": "Jamaica",
        "street": "Av. Morelos 13",
        "address": "Col. Magdalena Mixhuca, Venustiano Carranza, C.P. 15860, Ciudad de México",
        "references": "Esq. Congreso de La Unión frente al mercado de Jamaica",
        "state": "Ciudad de México",
        "postalCode": "15860",
        "type": "Sucursal",
        "phone": "57643623",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.40917,
            "longitude": -99.12142
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ae0",
        "name": "Guerrero",
        "street": "Guerrero 18",
        "address": "Col. Guerrero, Cuauhtémoc, C.P. 06300, Ciudad de México",
        "references": "Orozco Y Berra y Puente De Alvarado",
        "state": "Ciudad de México",
        "postalCode": "06300",
        "type": "Sucursal",
        "phone": "12.26.92.01 / 12.26.92.00",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.438825,
            "longitude": -99.1489369999999
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ae1",
        "name": "Ejército Nacional",
        "street": "Ejército Nacional 966",
        "address": "Col. Polanco, Miguel Hidalgo, C.P. 11510, Ciudad de México",
        "references": "Av. Ferrocarril de Cuernavaca y Av. Homero",
        "state": "Ciudad de México",
        "postalCode": "11510",
        "type": "Sucursal",
        "phone": "5557-3979",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.438493,
            "longitude": -99.206282
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ae2",
        "name": "Salamanca",
        "street": "Miguel Hidalgo 101",
        "address": "Col. Centro, Salamanca, C.P. 36700, Guanajuato",
        "references": "Tomasa Estevez e Ignacio Zaragoza",
        "state": "Guanajuato",
        "postalCode": "36700",
        "type": "Sucursal",
        "phone": "6481298",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.570291,
            "longitude": -101.19871
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ae3",
        "name": "Acayucan",
        "street": "Guadalupe Victoria 19-A",
        "address": "Col. Centro, Acayucan, C.P. 96000, Veracruz",
        "references": "Calle N Bravo y Melchor Ocampo",
        "state": "Veracruz",
        "postalCode": "96000",
        "type": "Sucursal",
        "phone": "2451255",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 17.947707,
            "longitude": -94.913406
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ae4",
        "name": "Dolores Hidalgo",
        "street": "Plaza Principal 15",
        "address": "Col. Centro, Dolores Hidalgo, C.P. 37800, Guanajuato",
        "references": "Guanajuato y Guerrero",
        "state": "Guanajuato",
        "postalCode": "37800",
        "type": "Sucursal",
        "phone": "1821816",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 21.157072,
            "longitude": -100.933684
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ae5",
        "name": "Viga Ermita",
        "street": "Calz. De La Viga 1827",
        "address": "Col. Mexicaltzingo, Iztapalapa, C.P. 09090, Ciudad de México",
        "references": "Calz. Ermita Iztapalapa y Emiliano Zapata",
        "state": "Ciudad de México",
        "postalCode": "09090",
        "type": "Sucursal",
        "phone": "85906544",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.35932,
            "longitude": -99.122186
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ae6",
        "name": "San Ángel",
        "street": "Av. Revolución 1861",
        "address": "Col. San Ángel, Álvaro Obregón, C.P. 01000, Ciudad de México",
        "references": "Altamirano y Rey Cuauhtemoc",
        "state": "Ciudad de México",
        "postalCode": "01000",
        "type": "Sucursal",
        "phone": "22 62 89 01",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.340836,
            "longitude": -99.191361
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ae7",
        "name": "Sabinas",
        "street": "Amador Chapa S/N",
        "address": "Col. Centro, Sabinas, C.P. 26700, Coahuila",
        "references": "De La Madrid y Fco I. Madero",
        "state": "Coahuila",
        "postalCode": "26700",
        "type": "Sucursal",
        "phone": "6126090",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 27.852324,
            "longitude": -101.122351
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ae8",
        "name": "Comitan ",
        "street": "2Da Sur Poniente 10",
        "address": "Col. Centro, Comitan, C.P. 30000, Chiapas",
        "references": "1A Sur Ote y 2Da Sur Ote",
        "state": "Chiapas",
        "postalCode": "30000",
        "type": "Sucursal",
        "phone": "6321361",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 16.2518053,
            "longitude": -92.1340959
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9ae9",
        "name": "Cf Tepatitlan",
        "street": "Independencia 44",
        "address": "Col. Centro, Tepatitlan, C.P. 47600, Jalisco",
        "references": "Morelos y Sanmartín",
        "state": "Jalisco",
        "postalCode": "47600",
        "type": "Sucursal",
        "phone": "782 02 73",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.8154954,
            "longitude": -102.7599566
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9aea",
        "name": "Cholula Pue",
        "street": "Morelos 8",
        "address": "Col. Centro, Cholula, C.P. 72760, Puebla",
        "references": "2 Norte y 3 Norte",
        "state": "Puebla",
        "postalCode": "72760",
        "type": "Sucursal",
        "phone": "2470143",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.06146,
            "longitude": -98.306172
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9aeb",
        "name": "Cf Lagos De Moreno",
        "street": "Plaza Constituyentes 311",
        "address": "Col. Centro, Lagos De Moreno, C.P. 47400, Jalisco",
        "references": "Miguel Leandro G y Benito Juárez",
        "state": "Jalisco",
        "postalCode": "47400",
        "type": "Sucursal",
        "phone": "7420243",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 21.35475,
            "longitude": -101.930086
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9aec",
        "name": "Cárdenas",
        "street": "Ignacio Zaragoza 314",
        "address": "Col. Centro, Cardenas, C.P. 86500, Tabasco",
        "references": "Leandro Adriano y Abraham Bandala",
        "state": "Tabasco",
        "postalCode": "86500",
        "type": "Sucursal",
        "phone": "3721082",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 17.989195,
            "longitude": -93.3762
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9aed",
        "name": "Cd. Mante",
        "street": "Vicente Guerrero 116 PONIEN",
        "address": "Col. Centro, Ciudad Mante, C.P. 89800, Tamaulipas",
        "references": "Morelos y Hidalgo",
        "state": "Tamaulipas",
        "postalCode": "89800",
        "type": "Sucursal",
        "phone": "2320311",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 22.742847,
            "longitude": -98.972236
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9aee",
        "name": "Blvd. Agua Caliente",
        "street": "Blvd. Agua Caliente 4560",
        "address": "Col. Aviación, Tijuana, C.P. 22420, Baja California",
        "references": "Pablo Sid y Blvd. Salinas",
        "state": "Baja California",
        "postalCode": "22420",
        "type": "Sucursal",
        "phone": "6817922",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 32.515203,
            "longitude": -117.004939
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9aef",
        "name": "Leandro Valle",
        "street": "Av. Independencia 5 Ote. 1110",
        "address": "Col. Doctores, Toluca, C.P. 50090, Estado De Mexico",
        "references": "Esq. Leandro Valle",
        "state": "Estado de México",
        "postalCode": "50090",
        "type": "Sucursal",
        "phone": "2150680",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.2923652,
            "longitude": -99.6402691
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9af0",
        "name": "Tlatelolco",
        "street": "Manuel González 139",
        "address": "Col. San Simón Tolnahuac, Cuauhtémoc, C.P. 06920, Ciudad de México",
        "references": "Eje Central Lazaro Cardenas y Vallejo",
        "state": "Ciudad de México",
        "postalCode": "06920",
        "type": "Sucursal",
        "phone": "91.12.37.04 / 91.12.37.01",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.455501,
            "longitude": -99.138173
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9af1",
        "name": "Misantla Ver",
        "street": "Av. Zaragoza 109",
        "address": "Col. Centro, Misantla, C.P. 93820, Veracruz",
        "references": "Esq. Acuña y Llave",
        "state": "Veracruz",
        "postalCode": "93820",
        "type": "Sucursal",
        "phone": "3230811",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.927482,
            "longitude": -96.852888
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9af2",
        "name": "Cortazar",
        "street": "Portal Constitución 25",
        "address": "Col. Centro, Cortazar, C.P. 38300, Guanajuato",
        "references": "5 De Febrero y Benito Juárez",
        "state": "Guanajuato",
        "postalCode": "38300",
        "type": "Sucursal",
        "phone": "1550788",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.481858,
            "longitude": -100.964683
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9af3",
        "name": "Santa Rosalia",
        "street": "Obregon S/N",
        "address": "Col. Centro, Mulege, C.P. 23920, Baja California Sur",
        "references": "Calle 5",
        "state": "Baja California Sur",
        "postalCode": "23920",
        "type": "Sucursal",
        "phone": "1520010",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 27.33611,
            "longitude": -112.269817
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9af4",
        "name": "Loma Bonita Oax",
        "street": "Quintana Roo Y Michoacán S/N",
        "address": "Col. Centro, Loma Bonita, C.P. 68400, Oaxaca",
        "references": "Av. Michoacán y Guerrero",
        "state": "Oaxaca",
        "postalCode": "68400",
        "type": "Sucursal",
        "phone": "8720568",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 18.10685,
            "longitude": -95.88073
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9af5",
        "name": "Empalme Son",
        "street": "Reforma S/N",
        "address": "Col. Centro, Empalme, C.P. 85300, Sonora",
        "references": "Miguel Hidalgo y Niños Héroes",
        "state": "Sonora",
        "postalCode": "85300",
        "type": "Sucursal",
        "phone": "2231114",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 27.958518,
            "longitude": -110.815648
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9af6",
        "name": "Tuxpan",
        "street": "Hidalgo 119 OTE",
        "address": "Col. Centro, Tuxpan, C.P. 63200, Nayarit",
        "references": "Fco I. Madero Nte y Zaragoza Nte",
        "state": "Nayarit",
        "postalCode": "63200",
        "type": "Sucursal",
        "phone": "323 06 25",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 21.9451405,
            "longitude": -105.2994851
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9af7",
        "name": "Cd. Mendoza",
        "street": "Av. Miguel Hidalgo 326",
        "address": "Col. Ciudad Mendoza Centro, Ciudad Mendoza, C.P. 94740, Veracruz",
        "references": "16 De Septiembre e Industria",
        "state": "Veracruz",
        "postalCode": "94740",
        "type": "Sucursal",
        "phone": "7270795",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 18.806133,
            "longitude": -97.178637
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9af8",
        "name": "Villaflores",
        "street": "Central 25",
        "address": "Col. Centro, Villa Flores, C.P. 30470, Chiapas",
        "references": "2Da Sur Pte y 1A Av Sur Ote",
        "state": "Chiapas",
        "postalCode": "30470",
        "type": "Sucursal",
        "phone": "6520369",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 16.233982,
            "longitude": -93.266953
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9af9",
        "name": "División Del Nte  Tlalpan",
        "street": "División Del Norte 3695",
        "address": "Col. San Pablo Tepetlapa, Coyoacán, C.P. 04620, Ciudad de México",
        "references": "Calz. De Tlalpan y Benito Juarez",
        "state": "Ciudad de México",
        "postalCode": "04620",
        "type": "Sucursal",
        "phone": "22629017",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.320225,
            "longitude": -99.138739
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9afa",
        "name": "San Rafael",
        "street": "Ribera Del Río 53",
        "address": "Col. San Rafael, Martinez De La Torre, C.P. 93620, Veracruz",
        "references": "Independencia y Revolución",
        "state": "Veracruz",
        "postalCode": "93620",
        "type": "Sucursal",
        "phone": "3250139",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.187481,
            "longitude": -96.865058
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9afb",
        "name": "Simón Bolivar",
        "street": "Av. Moisés Sáenz 410",
        "address": "Col. Mitras Centro, Monterrey, C.P. 66460, Nuevo Leon",
        "references": "Av. Simón Bolivar y Tulancingo",
        "state": "Nuevo León",
        "postalCode": "66460",
        "type": "Sucursal",
        "phone": "81232793",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 25.690517,
            "longitude": -100.344388
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9afc",
        "name": "Valle De Santiago",
        "street": "Arteaga 78",
        "address": "Col. Centro, Valle De Santiago, C.P. 38400, Guanajuato",
        "references": "Heroico Colegio Militar y 5 De Mayo",
        "state": "Guanajuato",
        "postalCode": "38400",
        "type": "Sucursal",
        "phone": "6430699",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.391963,
            "longitude": -101.181644
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9afd",
        "name": "Moroleon",
        "street": "Hidalgo 19",
        "address": "Col. Centro, Moroleon, C.P. 38800, Guanajuato",
        "references": "16 De Septiembre y Melchor Ocampo",
        "state": "Guanajuato",
        "postalCode": "38800",
        "type": "Sucursal",
        "phone": "4573993",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.131843,
            "longitude": -101.18961
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9afe",
        "name": "Salvatierra",
        "street": "Zaragoza 2",
        "address": "Col. Centro, Salvatierra, C.P. 38900, Guanajuato",
        "references": "Hidalgo y Landro Valle",
        "state": "Guanajuato",
        "postalCode": "38900",
        "type": "Sucursal",
        "phone": "6630688",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.213977,
            "longitude": -100.882346
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9aff",
        "name": "Zinacantepec",
        "street": "Blvd. Adolfo López Mateos 1520",
        "address": "Col. San Mateo Oxtotitlan, Toluca, C.P. 50100, Estado De Mexico",
        "references": "Corralitos y 20 De Noviembre",
        "state": "Estado de México",
        "postalCode": "50100",
        "type": "Sucursal",
        "phone": "2785785",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.288339,
            "longitude": -99.689034
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b00",
        "name": "Tenosique",
        "street": "Calle 26 306",
        "address": "Col. Centro, Tenosique, C.P. 86900, Tabasco",
        "references": "Calle 27 y Calle 31",
        "state": "Tabasco",
        "postalCode": "86900",
        "type": "Sucursal",
        "phone": "3420170",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 17.474722,
            "longitude": -91.425551
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b01",
        "name": "Jerecuaro",
        "street": "Juárez S/N",
        "address": "Col. Centro, Jerecuaro, C.P. 38540, Guanajuato",
        "references": "Ocampo y José Aguilar Y Maya",
        "state": "Guanajuato",
        "postalCode": "38540",
        "type": "Sucursal",
        "phone": "4760005",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.150109,
            "longitude": -100.510792
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b02",
        "name": "Apaseo El Alto",
        "street": "Jardín Cuauhtemoc 139",
        "address": "Col. Centro, Apaseo El Alto, C.P. 38500, Guanajuato",
        "references": "Ignacio Allende y Chapultepec",
        "state": "Guanajuato",
        "postalCode": "38500",
        "type": "Sucursal",
        "phone": "1660049",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.4559947,
            "longitude": -100.6219993
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b03",
        "name": "San José Iturbide",
        "street": "Ignacio Allende 6",
        "address": "Col. Centro, San Jose Iturbide, C.P. 37980, Guanajuato",
        "references": "Ignacio Zaragoza y Benito Juárez",
        "state": "Guanajuato",
        "postalCode": "37980",
        "type": "Sucursal",
        "phone": "1980946",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 21.000912,
            "longitude": -100.385058
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b04",
        "name": "Hidalgo Tampico",
        "street": "Av. Hidalgo S/N",
        "address": "Col. Águilas, Tampico, C.P. 89230, Tamaulipas",
        "references": "Fresno y Roble",
        "state": "Tamaulipas",
        "postalCode": "89230",
        "type": "Sucursal",
        "phone": "2134677",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 22.240205,
            "longitude": -97.870208
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b05",
        "name": "Jaral Del Progreso",
        "street": "Hidalgo 200",
        "address": "Col. Centro, Jaral Del Progreso, C.P. 38470, Guanajuato",
        "references": "Porfirio Díaz Ote y Mariano Abasolo",
        "state": "Guanajuato",
        "postalCode": "38470",
        "type": "Sucursal",
        "phone": "6610161",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.373562,
            "longitude": -101.062889
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b06",
        "name": "Emiliano Zapata Tab",
        "street": "Álvaro Obregón S/N",
        "address": "Col. Emiliano Zapata, Emiliano Zapata, C.P. 86980, Tabasco",
        "references": "Gregorio Méndez Magóna y José Ma. Morelos Y Pavón",
        "state": "Tabasco",
        "postalCode": "86980",
        "type": "Sucursal",
        "phone": "3430015",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 17.743639,
            "longitude": -91.765131
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b07",
        "name": "Sahuayo",
        "street": "Constitución 174",
        "address": "Col. Centro, Sahuayo, C.P. 51510, Michoacan",
        "references": "Bolivar y Guadalupe",
        "state": "Michoacán",
        "postalCode": "51510",
        "type": "Sucursal",
        "phone": "532-00-30",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.0571397,
            "longitude": -102.7195492
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b08",
        "name": "Huimanguillo",
        "street": "Av. Juárez 124",
        "address": "Col. Centro, Huimanguillo, C.P. 86400, Tabasco",
        "references": "Cuauhtemoc y 5 De Mayo",
        "state": "Tabasco",
        "postalCode": "86400",
        "type": "Sucursal",
        "phone": "3750930",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 17.836413,
            "longitude": -93.39117
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b09",
        "name": "Tonalá",
        "street": "Av. Hidalgo 137",
        "address": "Col. Centro, Tonalá, C.P. 30500, Chiapas",
        "references": "5 De Febrero e Independencia",
        "state": "Chiapas",
        "postalCode": "30500",
        "type": "Sucursal",
        "phone": "6631077",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 16.090804,
            "longitude": -93.751207
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b0a",
        "name": "Mercado Independencia",
        "street": "Vicente Santa María 639",
        "address": "Col. Centro, Morelia, C.P. 58000, Michoacan",
        "references": "Av. Lazaro Cardenas y Ana Ma. Gallaga",
        "state": "Michoacán",
        "postalCode": "58000",
        "type": "Sucursal",
        "phone": "313-24-12",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.6966457,
            "longitude": -101.1888141
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b0b",
        "name": "San Francisco Del Rincon",
        "street": "Díaz Mirón 203",
        "address": "Col. Centro, San Francisco Del Rincon, C.P. 36300, Guanajuato",
        "references": "Venustiano Carranza y Fco I. Madero",
        "state": "Guanajuato",
        "postalCode": "36300",
        "type": "Sucursal",
        "phone": "7435806",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 21.0178065,
            "longitude": -101.8583515
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b0c",
        "name": "El Fuerte Sin",
        "street": "Juárez 212",
        "address": "Col. Centro, El Fuerte, C.P. 81820, Sinaloa",
        "references": "Ángel Flores y Donato Guerra",
        "state": "Sinaloa",
        "postalCode": "81820",
        "type": "Sucursal",
        "phone": "8930151",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 26.417791,
            "longitude": -108.622901
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b0d",
        "name": "Cf Iztapalapa",
        "street": "Calz Ermita Iztapalapa 1029",
        "address": "Col. Ricardo Flores Magon, Iztapalapa, C.P. 09820, Ciudad de México",
        "references": "Puente Titla y Minerva",
        "state": "Ciudad de México",
        "postalCode": "09820",
        "type": "Sucursal",
        "phone": "22627004",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.356639,
            "longitude": -99.097978
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b0e",
        "name": "Chapingo",
        "street": "Av. Emiliano Zapata 1",
        "address": "Col. Santa Úrsula, Texcoco, C.P. 56150, Estado De Mexico",
        "references": "Carr Texcoco Lecheria y Emiliano Zapata",
        "state": "Estado de México",
        "postalCode": "56150",
        "type": "Sucursal",
        "phone": "595 92 51121",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.5053017,
            "longitude": -98.8923338
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b0f",
        "name": "Martinez De La Torre",
        "street": "Maximino Avila Camacho 300",
        "address": "Col. Centro, Martinez De La Torre, C.P. 93600, Veracruz",
        "references": "Esq. Vicente Guerrero y Mariano Matamoros",
        "state": "Veracruz",
        "postalCode": "93600",
        "type": "Sucursal",
        "phone": "3242526",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.062759,
            "longitude": -97.053705
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b10",
        "name": "San Andrés Tuxtla Ver",
        "street": "Fco I. Madero 4",
        "address": "Col. Centro, San Andres Tuxtla, C.P. 95700, Veracruz",
        "references": "Independencia y Reforma",
        "state": "Veracruz",
        "postalCode": "95700",
        "type": "Sucursal",
        "phone": "9421350",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 18.446388,
            "longitude": -95.213002
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b11",
        "name": "Jardín Balbuena",
        "street": "Fray Servando Teresa De Mier 979",
        "address": "Col. Jardín Balbuena, Venustiano Carranza, C.P. 15900, Ciudad de México",
        "references": "25 De Fray Servando y 23 De Fray Servando",
        "state": "Ciudad de México",
        "postalCode": "15900",
        "type": "Sucursal",
        "phone": "55.71.38.21",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.4171039,
            "longitude": -99.1008548
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b12",
        "name": "Penjamo",
        "street": "Jardín Hidalgo 22",
        "address": "Col. Centro, Penjamo, C.P. 36900, Guanajuato",
        "references": "Manuel Doblado y Aldama",
        "state": "Guanajuato",
        "postalCode": "36900",
        "type": "Sucursal",
        "phone": "6920554",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.428182,
            "longitude": -101.724208
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b13",
        "name": "Centro",
        "street": "Fco I. Madero 125",
        "address": "Col. Centro, Leon, C.P. 37000, Guanajuato",
        "references": "Hnos. Aldama y Av. 5 De Mayo",
        "state": "Guanajuato",
        "postalCode": "37000",
        "type": "Sucursal",
        "phone": "7168880",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 21.121752,
            "longitude": -101.681001
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b14",
        "name": "Nuevas Casas Grandes",
        "street": "5 De Feb 105",
        "address": "Col. Centro, Nuevo Casas Grandes, C.P. 31700, Chihuahua",
        "references": "Av. Miguel Hidalgo y Cjon. Revolución",
        "state": "Chihuahua",
        "postalCode": "31700",
        "type": "Sucursal",
        "phone": "6940130",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 30.409061,
            "longitude": -107.917077
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b15",
        "name": "Plan De Ayala",
        "street": "Av. Plan De Ayala 801",
        "address": "Col. Vicente Guerrero, Cuernavaca, C.P. 62430, Morelos",
        "references": "San Juan y Allende",
        "state": "Morelos",
        "postalCode": "62430",
        "type": "Sucursal",
        "phone": "3163136",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 18.9239422,
            "longitude": -99.2123191
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b16",
        "name": "Abasolo",
        "street": "Plaza Principal 210",
        "address": "Col. Centro, Abasolo, C.P. 36970, Guanajuato",
        "references": "Aldama y Hidalgo",
        "state": "Guanajuato",
        "postalCode": "36970",
        "type": "Sucursal",
        "phone": "6930053",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.450791,
            "longitude": -101.529383
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b17",
        "name": "Cf Puerto Vallarta",
        "street": "Benito Juarez S/N",
        "address": "Col. Centro, Puerto Vallarta, C.P. 48300, Jalisco",
        "references": "Zaragoza y Morelos",
        "state": "Jalisco",
        "postalCode": "48300",
        "type": "Sucursal",
        "phone": "226 61 03",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.608148,
            "longitude": -105.235437
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b18",
        "name": "Palenque ",
        "street": "Reforma 29",
        "address": "Col. Centro, Palenque, C.P. 29960, Chiapas",
        "references": "Nicolas Bravo y Abasolo",
        "state": "Chiapas",
        "postalCode": "29960",
        "type": "Sucursal",
        "phone": "3450200",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 17.510381,
            "longitude": -91.982827
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b19",
        "name": "Cf Zona Industrial",
        "street": "Av. 8 De Julio 1800",
        "address": "Col. 8 De Julio, Guadalajara, C.P. 44910, Jalisco",
        "references": "Ruiseñor y Pelicano",
        "state": "Jalisco",
        "postalCode": "44910",
        "type": "Sucursal",
        "phone": "12 26 29 11",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.64987,
            "longitude": -103.3602664
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b1a",
        "name": "San Felipe",
        "street": "Av. Vallarta S/N",
        "address": "Col. Altavista, Chihuahua, C.P. 31320, Chihuahua",
        "references": "Agustín Melgar y Cedro",
        "state": "Chihuahua",
        "postalCode": "31320",
        "type": "Sucursal",
        "phone": "4155980",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 28.660824,
            "longitude": -106.09596
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b1b",
        "name": "Juárez",
        "street": "Av. Benito Juarez (Calle Quinta) 520",
        "address": "Col. Chapultepec, Ensenada, C.P. 22870, Baja California",
        "references": "Av. Riveroll y Alvarado",
        "state": "Baja California",
        "postalCode": "22870",
        "type": "Sucursal",
        "phone": "40048",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 31.866343,
            "longitude": -116.621855
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b1c",
        "name": "Cd. Hidalgo",
        "street": "Av. Morelos 4",
        "address": "Col. Centro, Cuidad Hidalgo, C.P. 61100, Michoacan",
        "references": "Cuauhtemoc y Abasolo",
        "state": "Michoacán",
        "postalCode": "61100",
        "type": "Sucursal",
        "phone": "154-01-86",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.689185,
            "longitude": -100.554704
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b1d",
        "name": "Pichucalco",
        "street": "Constitución 4",
        "address": "Col. Centro, Pichucalco, C.P. 29520, Chiapas",
        "references": "Aldama y Roman Ferrer",
        "state": "Chiapas",
        "postalCode": "29520",
        "type": "Sucursal",
        "phone": "3230021",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 17.508683,
            "longitude": -93.117585
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b1e",
        "name": "Teapa",
        "street": "Gregorio Méndez 102",
        "address": "Col. Centro, Teapa, C.P. 86800, Tabasco",
        "references": "Eduardo Bastar y Doctor Abel Tapia Najera",
        "state": "Tabasco",
        "postalCode": "86800",
        "type": "Sucursal",
        "phone": "3220284",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 17.548979,
            "longitude": -92.95311
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b1f",
        "name": "Paraiso Tab",
        "street": "Melchor Ocampo 5",
        "address": "Col. Centro, Paraiso, C.P. 86600, Tabasco",
        "references": "Ignacio Zaragoza y Hermenegildo Galeona",
        "state": "Tabasco",
        "postalCode": "86600",
        "type": "Sucursal",
        "phone": "3330282",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 18.397225,
            "longitude": -93.213259
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b20",
        "name": "C.F. Kino",
        "street": "Blvd. Luis Encinas Johnson S/N",
        "address": "Col. San Benito, Hermosillo, C.P. 83190, Sonora",
        "references": "Esq. Guadalupe Victoria y Prof. Manuel M.L Radillo",
        "state": "Sonora",
        "postalCode": "83190",
        "type": "Sucursal",
        "phone": "2592424",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 29.087974,
            "longitude": -110.964703
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b21",
        "name": "Puruandiro",
        "street": "Guerrero 11",
        "address": "Col. Centro, Puruandiro, C.P. 58500, Michoacan",
        "references": "Albino Garcia y Prol. Abasolo",
        "state": "Michoacán",
        "postalCode": "58500",
        "type": "Sucursal",
        "phone": "383-00-54",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.088057,
            "longitude": -101.522822
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b22",
        "name": "Inguaran",
        "street": "Oriente 107 3118",
        "address": "Col. Tablas De San Agustín, Gustavo A. Madero, C.P. 07860, Ciudad de México",
        "references": "Esq. Av. Congreso De La Unión",
        "state": "Ciudad de México",
        "postalCode": "07860",
        "type": "Sucursal",
        "phone": "12.26.92.50 / 12.26.92.52",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.46561,
            "longitude": -99.11143
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b23",
        "name": "Aragón Villa De Guadalupe",
        "street": "Eje 1 Ote F.C. Hidalgo 1414",
        "address": "Col. Aragon La Villa, Gustavo A. Madero, C.P. 07050, Ciudad de México",
        "references": "San Juan de Aragon y Pelicanos",
        "state": "Ciudad de México",
        "postalCode": "07050",
        "type": "Sucursal",
        "phone": " ",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.481103,
            "longitude": -99.107163
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b24",
        "name": "Escuinapa Sin",
        "street": "Miguel Hidalgo S/N",
        "address": "Col. Centro, Escuinapa, C.P. 82400, Sinaloa",
        "references": "Av. Independencia y Av. Gabriel Leyva",
        "state": "Sinaloa",
        "postalCode": "82400",
        "type": "Sucursal",
        "phone": "9531370",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 22.834777,
            "longitude": -105.777529
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b25",
        "name": "Ameca",
        "street": "José Guadalupe Vázquez 18",
        "address": "Col. Centro, Ameca, C.P. 46600, Jalisco",
        "references": "Vallarta y Libertad",
        "state": "Jalisco",
        "postalCode": "46600",
        "type": "Sucursal",
        "phone": "758 05 21",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 20.548283,
            "longitude": -104.047639
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b26",
        "name": "Las Puentes",
        "street": "Av. Periférico Lazaro Cardenas L 4 5 6",
        "address": "Col. Las Puentes, San Nicolas De Los Garza, C.P. 66460, Nuevo Leon",
        "references": "República Mexicana y Av San Nicolás",
        "state": "Nuevo León",
        "postalCode": "66460",
        "type": "Sucursal",
        "phone": "80575580",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 25.73755,
            "longitude": -100.288567
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    },
    {
        "_id": "64186ad0c3428b5847cf9b27",
        "name": "Niño Perdido",
        "street": "Manuel M Flores #3",
        "address": "Col. Doctores, Cuauhtémoc, C.P. 06720, Ciudad de México",
        "references": "Esq. Eje Central L Cardenas",
        "state": "Ciudad de México",
        "postalCode": "06720",
        "type": "Sucursal",
        "phone": "1226-9400",
        "openingTime": {
            "open": "09:00",
            "close": "16:00"
        },
        "location": {
            "latitude": 19.416689,
            "longitude": -99.143696
        },
        "_class": "com.manuelr.bank.api.entity.BankEntity"
    }
]);