const movies = [
  {
    "id": 76341,
    "title": "Mad Max: Fury Road",
    "overview": "In a post-apocalyptic wasteland, Max teams up with Furiosa to flee from a cult leader and his followers.",
    "poster_path": "https://image.tmdb.org/t/p/original/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
    "release_date": "2015-05-15",
    "duration": 120,  // Duration in minutes
    "cast": ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
    "director": "George Miller",
    "producer": "Doug Mitchell",
    "vote_average": 7.6,
    "vote_count": 18720,
    "trailer": "https://www.youtube.com/watch?v=hEJnMQG9ev8"
  },
  {
    "id": 812542,
    "title": "Luca",
    "overview": "A young sea monster experiences a life-changing summer on the Italian Riviera.",
    "poster_path": "https://image.tmdb.org/t/p/original/jTswp6KyDYKtvC52GbHagrZbGvD.jpg",
    "release_date": "2021-06-18",
    "duration": 95,
    "cast": ["Jacob Tremblay", "Jack Dylan Grazer", "Emma Berman"],
    "director": "Enrico Casarosa",
    "producer": "Andrea Warren",
    "vote_average": 7.8,
    "vote_count": 7894,
    "trailer": "https://www.youtube.com/watch?v=mYfJxlgR2jw"
  },
  {
    "id": 581392,
    "title": "The Conjuring: The Devil Made Me Do It",
    "overview": "Paranormal investigators Ed and Lorraine Warren face one of their most sensational cases.",
    "poster_path": "https://image.tmdb.org/t/p/original/xbSuFiJbbBWCkyCCKIMfuDCA4yV.jpg",
    "release_date": "2021-06-04",
    "duration": 112,
    "cast": ["Patrick Wilson", "Vera Farmiga", "Ruairi O'Connor"],
    "director": "Michael Chaves",
    "producer": "Peter Safran",
    "vote_average": 7.3,
    "vote_count": 4892,
    "trailer": "https://www.youtube.com/watch?v=NGp6dK8U3pM"
  },
  {
    "id": 497698,
    "title": "Black Widow",
    "overview": "Natasha Romanoff confronts the darker parts of her past in this action-packed Marvel film.",
    "poster_path": "https://image.tmdb.org/t/p/original/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
    "release_date": "2021-07-09",
    "duration": 134,
    "cast": ["Scarlett Johansson", "Florence Pugh", "David Harbour"],
    "director": "Cate Shortland",
    "producer": "Kevin Feige",
    "vote_average": 7.3,
    "vote_count": 8111,
    "trailer": "https://www.youtube.com/watch?v=Fp9pNPdNwjI"
  },
  {
    "id": 791373,
    "title": "Zack Snyder's Justice League",
    "overview": "Zack Snyder's definitive director's cut of the Justice League.",
    "poster_path": "https://image.tmdb.org/t/p/original/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
    "release_date": "2021-03-18",
    "duration": 242,
    "cast": ["Ben Affleck", "Gal Gadot", "Ray Fisher"],
    "director": "Zack Snyder",
    "producer": "Deborah Snyder",
    "vote_average": 8.1,
    "vote_count": 8629,
    "trailer": "https://www.youtube.com/watch?v=vM-Bja2Gy04"
  },
  {
    "id": 567189,
    "title": "Tom Clancy's Without Remorse",
    "overview": "An elite Navy SEAL uncovers an international conspiracy while seeking justice for his wife's murder.",
    "poster_path": "https://image.tmdb.org/t/p/original/rEm96ib0sPiZBADNKBHKBv5bve9.jpg",
    "release_date": "2021-04-29",
    "duration": 109,
    "cast": ["Michael B. Jordan", "Jodie Turner-Smith", "Jamie Bell"],
    "director": "Stefano Sollima",
    "producer": "Erwin Stoff",
    "vote_average": 7.2,
    "vote_count": 2434,
    "trailer": "https://www.youtube.com/watch?v=e-rw2cxFVLg"
  },
  {
    "id": 120,
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "overview": "A meek Hobbit and his companions set out on a quest to destroy a powerful ring.",
    "poster_path": "https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    "release_date": "2001-12-19",
    "duration": 178,
    "cast": ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    "director": "Peter Jackson",
    "producer": "Barrie M. Osborne",
    "vote_average": 8.8,
    "vote_count": 18857,
    "trailer": "https://www.youtube.com/watch?v=aStYWD25fAQ"
  },
  {
    "id": 724089,
    "title": "Gabriel's Inferno",
    "overview": "An intriguing and sinful exploration of seduction and redemption.",
    "poster_path": "https://image.tmdb.org/t/p/original/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg",
    "release_date": "2020-05-29",
    "duration": 138,
    "cast": ["Ian Somerhalder", "Amy Brenneman", "Giulia Guerrini"],
    "director": "Martin Donovan",
    "producer": "Paul Levin",
    "vote_average": 8.5,
    "vote_count": 2257,
    "trailer": "https://www.youtube.com/watch?v=js7IB3mtD9Q"
  },
  {
    "id": 634649,
    "title": "Spider-Man: No Way Home",
    "overview": "Peter Parker navigates through multiverse chaos in this action-packed Spider-Man film.",
    "poster_path": "https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    "release_date": "2021-12-17",
    "duration": 148,
    "cast": ["Tom Holland", "Zendaya", "Benedict Cumberbatch"],
    "director": "Jon Watts",
    "producer": "Kevin Feige",
    "vote_average": 8.5,
    "vote_count": 18165,
    "trailer": "https://www.youtube.com/watch?v=rt-2cxAiPJk"
  }
];


  export default movies;
  