const UserList = [
    {
        id: 1,
        name: "John",
        username: "john123",
        age: 20,
        nationality: "CANADA",
        friends: [
            {
                id: 3,
                name: "Hikaru",
                username: "Nakamura",
                age: 32,
                nationality: "BRAZIL",
            },
            {
                id: 4,
                name: "Jan-Krzysztof",
                username: "Duda",
                age: 23,
                nationality: "POLAND",
            },
            {
                id: 5,
                name: "Kacper",
                username: "kac",
                age: 3,
                nationality: "ENGLAND",
            },
        ]
    },
    {
        id: 2,
        name: "Mat",
        username: "mati",
        age: 31,
        nationality: "USA",
        friends: [
            {
                id: 6,
                name: "Jack",
                username: "Sparrow",
                age: 22,
                nationality: "USA",
            },
            {
                id: 3,
                name: "Hikaru",
                username: "Nakamura",
                age: 32,
                nationality: "BRAZIL",
            },
        ]
    },
    {
        id: 3,
        name: "Hikaru",
        username: "Nakamura",
        age: 32,
        nationality: "BRAZIL",
    },
    {
        id: 4,
        name: "Jan-Krzysztof",
        username: "Duda",
        age: 23,
        nationality: "POLAND",
    },
    {
        id: 5,
        name: "Kacper",
        username: "kac",
        age: 3,
        nationality: "ENGLAND",
        friends: [
            {
                id: 4,
                name: "Jan-Krzysztof",
                username: "Duda",
                age: 23,
                nationality: "POLAND",
            },
            {
                id: 5,
                name: "Kacper",
                username: "kac",
                age: 3,
                nationality: "ENGLAND",
            },
        ]
    },
];

const MovieList = [
    {
      id: 1,
      name: "Avengers Endgame",
      publicationYear: 2019,
      isInTheaters: true,
    },
    {
      id: 2,
      name: "Interstellar",
      publicationYear: 2007,
      isInTheaters: true,
    },
    {
      id: 3,
      name: "Superbad",
      publicationYear: 2009,
      isInTheaters: true,
    },
    {
      id: 4,
      name: "PedroTech The Movie",
      publicationYear: 2035,
      isInTheaters: false,
    },
  ];

module.exports = { UserList, MovieList};

