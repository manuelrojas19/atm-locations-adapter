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
    }
]);