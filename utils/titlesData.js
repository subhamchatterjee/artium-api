const Titles = require("../models/Titles");

const titles = [
  {
    name: "Game of Thrones",
    year: "2011–2019",
    type: "series",
    image: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg",
    rating: 9.2,
    plot: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    genres: ["Action", "Adventure", "Drama"],
    actors: ["Emilia Clarke", "Peter Dinklage", "Kit Harington"],
    playTime: '57m',
    writers: ['David Benioff', 'D.B. Weiss']
  }, {
    name: "The Imitation Game",
    year: "2014",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BOTgwMzFiMWYtZDhlNS00ODNkLWJiODAtZDVhNzgyNzJhYjQ4L2ltYWdlXkEyXkFqcGdeQXVyNzEzOTYxNTQ@._V1_SX300.jpg",
    rating: 8.0,
    plot: "During World War II, the English mathematical genius Alan Turing tries to crack the German Enigma code with help from fellow mathematicians while attempting to come to terms with his troubled private life.",
    genres: ['Biography', 'Drama', 'Thriller'],
    actors: ['Benedict Cumberbatch','Keira Knightley','Matthew Goode'],
    playTime: "1h 54m",
    writers: ['Graham Moore','Andrew Hodges']
  }, {
    name: "Sherlock Holmes: A Game of Shadows",
    year: "2011",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BMTQwMzQ5Njk1MF5BMl5BanBnXkFtZTcwNjIxNzIxNw@@._V1_SX300.jpg",
    rating: 7.5,
    plot: "Detective Sherlock Holmes is on the trail of criminal mastermind Professor Moriarty, who is carrying out a string of random crimes across Europe.",
    genres: ['Action', 'Adventure', 'Mystery'],
    actors: ['Robert Downey Jr.','Jude Law','Jared Harris'],
    playTime: "2h 9m",
    writers: ['Michele Mulroney','Kieran Mulroney','Arthur Conan Doyle']
  }, {
    name: "Squid Game",
    year: "2021–",
    type: "series",
    image: "https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX300.jpg",
    rating: 8.0,
    plot: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes. A survival game that has a whopping 45.6 billion-won prize at stake.",
    genres: ['Action', 'Drama', 'Mystery'],
    actors: ['Lee Jung-jae','Park Hae-soo','Masoud Sepahi'],
    playTime: "55m",
    writers: []
  }, {
    name: "The Game",
    year: "1997",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BZGVmMDNmYmEtNGQ2Mi00Y2ZhLThhZTYtYjE5YmQzMjZiZGMxXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Ender's Game",
    year: "2013",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BMjAzMzI5OTgzMl5BMl5BanBnXkFtZTgwMTU5MTAwMDE@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Game Night",
    year: "2018",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BMjI3ODkzNDk5MF5BMl5BanBnXkFtZTgwNTEyNjY2NDM@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Molly's Game",
    year: "2017",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BNTkzMzRlYjEtMTQ5Yi00OWY3LWI0NzYtNGQ4ZDkzZTU0M2IwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Spy Game",
    year: "2001",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BNjNhOGZkNzktMGU3NC00ODk2LWE4NjctZTliN2JjZTQxZmIxXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Gerald's Game",
    year: "2017",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BMzg0NGE0N2MtYTg1My00NTBkLWI5NjEtZTgyMDA0MTU4MmIyXkEyXkFqcGdeQXVyMTU2NTcyMg@@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Iron Man",
    year: "2008",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
    rating: 7.9,
    plot: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    actors: ['Robert Downey Jr.','Gwyneth Paltrow','Terrence Howard'],
    playTime: "2h 6m",
    writers: ['Mark Fergus','Hawk Ostby','Art Marcum']
  }, {
    name: "Iron Man 3",
    year: "2013",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg",
    rating: 7.9,
    plot: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    actors: ['Robert Downey Jr.','Guy Pearce','Gwyneth Paltrow'],
    playTime: "2h 10m",
    writers: ['Drew Pearce','Shane Black','Stan Lee']
  }, {
    name: "Iron Man 2",
    year: "2010",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg",
    rating: 6.9,
    plot: "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Spider-Man",
    year: "2002",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
    rating: 7.3,
    plot: "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.",
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Man of Steel",
    year: "2013",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_SX300.jpg",
    rating: 7.0,
    plot: "An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened when other survivors of his home planet invade Earth.",
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Ant-Man",
    year: "2015",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg",
    rating: 7.3,
    plot: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, pull off a plan that will save the world.",
    genres: ['Action', 'Adventure', 'Comedy'],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "The Amazing Spider-Man",
    year: "2012",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Spider-Man 2",
    year: "2004",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Spider-Man: Homecoming",
    year: "2017",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Spider-Man 3",
    year: "2007",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Harry Potter and the Deathly Hallows: Part 2",
    year: "2011",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Harry Potter and the Sorcerer's Stone",
    year: "2001",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Harry Potter and the Chamber of Secrets",
    year: "2002",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Harry Potter and the Prisoner of Azkaban",
    year: "2004",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Harry Potter and the Goblet of Fire",
    year: "2005",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Harry Potter and the Order of the Phoenix",
    year: "2007",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Harry Potter and the Deathly Hallows: Part 1",
    year: "2010",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Harry Potter and the Half-Blood Prince",
    year: "2009",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Fast & Furious 6",
    year: "2013",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "The Fast and the Furious",
    year: "2001",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Fast Five",
    year: "2011",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Fast & Furious",
    year: "2009",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BYjQ1ZTMxNzgtZDcxOC00NWY5LTk3ZjAtYzRhMDhlNDZlOWEzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "2 Fast 2 Furious",
    year: "2003",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BMzExYjcyYWMtY2JkOC00NDUwLTg2OTgtMDI3MGY2OWQzMDE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "The Fast and the Furious: Tokyo Drift",
    year: "2006",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Fast & Furious Presents: Hobbs & Shaw",
    year: "2019",
    type: "movie",
    image: "https://m.media-amazon.com/images/M/MV5BOTIzYmUyMmEtMWQzNC00YzExLTk3MzYtZTUzYjMyMmRiYzIwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "The Walking Dead",
    year: "2010–2022",
    type: "series",
    image: "https://m.media-amazon.com/images/M/MV5BZmU5NTcwNjktODIwMi00ZmZkLTk4ZWUtYzVjZWQ5ZTZjN2RlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "The Big Bang Theory",
    year: "2007–2019",
    type: "series",
    image: "https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "The Office",
    year: "2005–2013",
    type: "series",
    image: "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "The Witcher",
    year: "2019–",
    type: "series",
    image: "https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "The Mandalorian",
    year: "2019–",
    type: "series",
    image: "https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "The Simpsons",
    year: "1989–",
    type: "series",
    image: "https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "The Queen's Gambit",
    year: "2020",
    type: "series",
    image: "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "The Sopranos",
    year: "1999–2007",
    type: "series",
    image: "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "The Boys",
    year: "2019–",
    type: "series",
    image: "https://m.media-amazon.com/images/M/MV5BNGEyOGJiNWEtMTgwMi00ODU4LTlkMjItZWI4NjFmMzgxZGY2XkEyXkFqcGdeQXVyNjcyNjcyMzQ@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "The Flash",
    year: "2014–",
    type: "series",
    image: "https://m.media-amazon.com/images/M/MV5BMDIzNzYwNTctZWY4Mi00YjQ2LWI5YWYtMzdmNDgwMGI4Yzk1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Rick and Morty",
    year: "2013–",
    type: "series",
    image: "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Two and a Half Men",
    year: "2003–2015",
    type: "series",
    image: "https://m.media-amazon.com/images/M/MV5BOTI2MjIzN2ItZDg0OS00MTlhLWIzMTMtYWI4ZTA0NGE4NDJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Parks and Recreation",
    year: "2009–2015",
    type: "series",
    image: "https://m.media-amazon.com/images/M/MV5BMjA5MjUxNDgwNF5BMl5BanBnXkFtZTgwMDI5NjMwNDE@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "The Falcon and the Winter Soldier",
    year: "2021",
    type: "series",
    image: "https://m.media-amazon.com/images/M/MV5BODNiODVmYjItM2MyMC00ZWQyLTgyMGYtNzJjMmVmZTY2OTJjXkEyXkFqcGdeQXVyNzk3NDUzNTc@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Freaks and Geeks",
    year: "1999–2000",
    type: "series",
    image: "https://m.media-amazon.com/images/M/MV5BZWJhOGFiZWMtYTY5Ni00NGU1LWE5OWItNzA5NThkNWUwYzc4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Sex and the City",
    year: "1998–2004",
    type: "series",
    image: "https://m.media-amazon.com/images/M/MV5BNGEyNDRjM2QtY2VlYy00OWRhLWI4N2UtZTM4NDc0MGM0YzBkXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Leyla and Mecnun",
    year: "2011–2022",
    type: "series",
    image: "https://m.media-amazon.com/images/M/MV5BZGZlN2QzYTQtNmZkMy00YjdiLWIwOGUtMzlhZTJlMmIyNmJhXkEyXkFqcGdeQXVyOTQ2MjQ3MTI@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }, {
    name: "Pride and Prejudice",
    year: "1995",
    type: "series",
    image: "https://m.media-amazon.com/images/M/MV5BMDM0MjFlOGYtNTg2ZC00MmRkLTg5OTQtM2U5ZjUyYTgxZThiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    rating: 0,
    plot: "",
    genres: [],
    actors: [],
    playTime: "",
    writers: []
  }
]

module.exports = {
  insertTitles: () => {
    Titles.insertMany(titles, (err, data) => {
      if(err) console.log('Error in inserting data to collection:', err);
      else console.log('Successfully populated the titles');
    });
  }
}