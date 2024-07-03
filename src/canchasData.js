const persona = [
    {
        id: 1,
        name: 'Jorge',
        pago: true,
    },
    {
        id: 2,
        name: 'Maria',
        pago: false,
    },
    {
        id: 3,
        name: 'Mario',
        pago: false,
    },
    {
        id: 4,
        name: 'Michelle',
        pago: true,
    },
];

const canchas = [
    { 
        id: 1, 
        name: 'Burj Al Arab', 
        price: 4, 
        available: true, 
        descripcion: "Superficie de césped que se habilita para partidos de exhibición.",
        availableTimes: ['10:00 - 11:00', '12:00 - 13:30', '14:00 - 14:30']
    },
    { 
        id: 2, 
        name: 'Qi Zhong', 
        price: 15, 
        available: true, 
        descripcion: "Cancha con polvo de ladrillo y techo automatico.",
        availableTimes: ['09:00 - 10:00', '11:00 - 12:00', '13:00 - 13:30']
    },
    { 
        id: 3, 
        name: 'San Sebastian', 
        price: 10, 
        available: false, 
        person: 1,
        descripcion: "Cancha de césped al aire libre y cuenta con riego automático.",
        availableTimes: ['08:00 - 08:30', '10:00 - 10:30', '12:00 - 13:00']
    },
    { 
        id: 4, 
        name: 'Rod Laver', 
        price: 20, 
        available: true, 
        descripcion: "Cancha de cemento y paredes de vidrio.",
        availableTimes: ['07:00 - 07:30', '09:00 - 09:45', '11:00 - 12:00']
    },
    { 
        id: 5, 
        name: 'Campo Centrale', 
        price: 6, 
        available: true, 
        descripcion: "Superficie de polvo de ladrillo.",
        availableTimes: ['06:00 - 07:00', '08:00 - 08:30', '10:00 - 10:30']
    },
    { 
        id: 6, 
        name: 'La Quinta Resort', 
        price: 2, 
        available: false, 
        person: 2,
        descripcion: "Cancha de césped al aire libre y cuenta con riego automático.",
        availableTimes: ['05:00 - 06:00', '07:00 - 07:30', '09:00 - 10:00']
    },
    { 
        id: 7, 
        name: 'The Couch', 
        price: 12, 
        available: true, 
        descripcion: "Superficie de polvo de ladrillo.",
        availableTimes: ['14:00 - 14:30', '16:00 - 16:30', '18:00 - 18:30']
    },
    { 
        id: 8, 
        name: 'Grand', 
        price: 8, 
        available: true, 
        descripcion: "Superficie de césped que se habilita para partidos de exhibición.",
        availableTimes: ['13:00 - 13:45', '15:00 - 15:30', '17:00 - 18:00']
    },
    { 
        id: 9, 
        name: 'La Cavalerie', 
        price: 10, 
        available: false,
        person: 4, 
        descripcion: "Cancha con polvo de ladrillo y techo automatico.",
        availableTimes: ['12:00 - 12:45', '14:00 - 14:30', '16:00 - 16:30']
    },
];

export { canchas, persona };
