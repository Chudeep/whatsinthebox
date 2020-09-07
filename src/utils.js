const movies = [
  {
    Name: 'Jurassic Park',
    Year: 1993,
    'Letterboxd URI': 'https://letterboxd.com/film/jurassic-park/',
  },
  {
    Name: 'The Lost World: Jurassic Park',
    Year: 1997,
    'Letterboxd URI': 'https://letterboxd.com/film/the-lost-world-jurassic-park/',
  },
  {
    Name: 'The Kissing Booth 2',
    Year: 2020,
    'Letterboxd URI': 'https://letterboxd.com/film/the-kissing-booth-2/',
  },
  {
    Name: 'Transcendence',
    Year: 2014,
    'Letterboxd URI': 'https://letterboxd.com/film/transcendence/',
  },
  {
    Name: 'Train to Busan',
    Year: 2016,
    'Letterboxd URI': 'https://letterboxd.com/film/train-to-busan/',
  },
  {
    Name: 'The Lord of the Rings: The Return of the King',
    Year: 2003,
    'Letterboxd URI': 'https://letterboxd.com/film/the-lord-of-the-rings-the-return-of-the-king/',
  },
  {
    Name: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: 2001,
    'Letterboxd URI': 'https://letterboxd.com/film/the-lord-of-the-rings-the-fellowship-of-the-ring/',
  },
  {
    Name: 'The Lord of the Rings: The Two Towers',
    Year: 2002,
    'Letterboxd URI': 'https://letterboxd.com/film/the-lord-of-the-rings-the-two-towers/',
  },
  {
    Name: '12 Years a Slave',
    Year: 2013,
    'Letterboxd URI': 'https://letterboxd.com/film/12-years-a-slave/',
  },
  {
    Name: 'The Core',
    Year: 2003,
    'Letterboxd URI': 'https://letterboxd.com/film/the-core/',
  },
  {
    Name: 'The Day After Tomorrow',
    Year: 2004,
    'Letterboxd URI': 'https://letterboxd.com/film/the-day-after-tomorrow/',
  },
  {
    Name: 'The Big Sick',
    Year: 2017,
    'Letterboxd URI': 'https://letterboxd.com/film/the-big-sick/',
  },
  {
    Name: 'The Theory of Everything',
    Year: 2014,
    'Letterboxd URI': 'https://letterboxd.com/film/the-theory-of-everything-2014/',
  },
  {
    Name: 'Casablanca',
    Year: 1942,
    'Letterboxd URI': 'https://letterboxd.com/film/casablanca/',
  },
  {
    Name: 'Cast Away',
    Year: 2000,
    'Letterboxd URI': 'https://letterboxd.com/film/cast-away/',
  },
  {
    Name: 'The Princess Bride',
    Year: 1987,
    'Letterboxd URI': 'https://letterboxd.com/film/the-princess-bride/',
  },
  {
    Name: 'Real Steel',
    Year: 2011,
    'Letterboxd URI': 'https://letterboxd.com/film/real-steel/',
  },
  {
    Name: 'The Platform',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/the-platform/',
  },
  {
    Name: 'The Departed',
    Year: 2006,
    'Letterboxd URI': 'https://letterboxd.com/film/the-departed/',
  },
  {
    Name: 'Demolition',
    Year: 2015,
    'Letterboxd URI': 'https://letterboxd.com/film/demolition/',
  },
  {
    Name: 'Die Hard',
    Year: 1988,
    'Letterboxd URI': 'https://letterboxd.com/film/die-hard/',
  },
  {
    Name: 'Die Hard 2',
    Year: 1990,
    'Letterboxd URI': 'https://letterboxd.com/film/die-hard-2/',
  },
  {
    Name: 'Die Hard: With a Vengeance',
    Year: 1995,
    'Letterboxd URI': 'https://letterboxd.com/film/die-hard-with-a-vengeance/',
  },
  {
    Name: 'Live Free or Die Hard',
    Year: 2007,
    'Letterboxd URI': 'https://letterboxd.com/film/live-free-or-die-hard/',
  },
  {
    Name: 'Gone Girl',
    Year: 2014,
    'Letterboxd URI': 'https://letterboxd.com/film/gone-girl/',
  },
  {
    Name: 'Panic Room',
    Year: 2002,
    'Letterboxd URI': 'https://letterboxd.com/film/panic-room/',
  },
  {
    Name: 'Catch Me If You Can',
    Year: 2002,
    'Letterboxd URI': 'https://letterboxd.com/film/catch-me-if-you-can-2002/',
  },
  {
    Name: 'The Interview',
    Year: 2014,
    'Letterboxd URI': 'https://letterboxd.com/film/the-interview-2014/',
  },
  {
    Name: 'Slumdog Millionaire',
    Year: 2008,
    'Letterboxd URI': 'https://letterboxd.com/film/slumdog-millionaire/',
  },
  {
    Name: 'Frozen',
    Year: 2013,
    'Letterboxd URI': 'https://letterboxd.com/film/frozen-2013/',
  },
  {
    Name: 'Frozen II',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/frozen-ii/',
  },
  {
    Name: 'The Martian',
    Year: 2015,
    'Letterboxd URI': 'https://letterboxd.com/film/the-martian/',
  },
  {
    Name: 'Palm Springs',
    Year: 2020,
    'Letterboxd URI': 'https://letterboxd.com/film/palm-springs-2020/',
  },
  {
    Name: 'The Body',
    Year: 2012,
    'Letterboxd URI': 'https://letterboxd.com/film/the-body-2012/',
  },
  {
    Name: 'The Curious Case of Benjamin Button',
    Year: 2008,
    'Letterboxd URI': 'https://letterboxd.com/film/the-curious-case-of-benjamin-button/',
  },
  {
    Name: 'The Karate Kid',
    Year: 2010,
    'Letterboxd URI': 'https://letterboxd.com/film/the-karate-kid-2010/',
  },
  {
    Name: 'Hawking',
    Year: 2004,
    'Letterboxd URI': 'https://letterboxd.com/film/hawking/',
  },
  {
    Name: 'Alien',
    Year: 1979,
    'Letterboxd URI': 'https://letterboxd.com/film/alien/',
  },
  {
    Name: 'Contact',
    Year: 1997,
    'Letterboxd URI': 'https://letterboxd.com/film/contact/',
  },
  {
    Name: 'The Hunger Games: Catching Fire',
    Year: 2013,
    'Letterboxd URI': 'https://letterboxd.com/film/the-hunger-games-catching-fire/',
  },
  {
    Name: 'The Hunger Games: Mockingjay - Part 1',
    Year: 2014,
    'Letterboxd URI': 'https://letterboxd.com/film/the-hunger-games-mockingjay-part-1/',
  },
  {
    Name: 'Se7en',
    Year: 1995,
    'Letterboxd URI': 'https://letterboxd.com/film/se7en/',
  },
  {
    Name: 'In Time',
    Year: 2011,
    'Letterboxd URI': 'https://letterboxd.com/film/in-time/',
  },
  {
    Name: 'Weathering with You',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/weathering-with-you/',
  },
  {
    Name: 'Night at the Museum',
    Year: 2006,
    'Letterboxd URI': 'https://letterboxd.com/film/night-at-the-museum/',
  },
  {
    Name: 'The Lunchbox',
    Year: 2013,
    'Letterboxd URI': 'https://letterboxd.com/film/the-lunchbox/',
  },
  {
    Name: 'Saving Private Ryan',
    Year: 1998,
    'Letterboxd URI': 'https://letterboxd.com/film/saving-private-ryan/',
  },
  {
    Name: 'Patch Adams',
    Year: 1998,
    'Letterboxd URI': 'https://letterboxd.com/film/patch-adams/',
  },
  {
    Name: 'The Half of It',
    Year: 2020,
    'Letterboxd URI': 'https://letterboxd.com/film/the-half-of-it/',
  },
  {
    Name: '12 Strong',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/12-strong/',
  },
  {
    Name: 'Confessions',
    Year: 2010,
    'Letterboxd URI': 'https://letterboxd.com/film/confessions/',
  },
  {
    Name: 'Harry Potter and the Prisoner of Azkaban',
    Year: 2004,
    'Letterboxd URI': 'https://letterboxd.com/film/harry-potter-and-the-prisoner-of-azkaban/',
  },
  {
    Name: 'Star Trek',
    Year: 2009,
    'Letterboxd URI': 'https://letterboxd.com/film/star-trek/',
  },
  {
    Name: 'Stardust',
    Year: 2007,
    'Letterboxd URI': 'https://letterboxd.com/film/stardust-2007/',
  },
  {
    Name: 'The Boy in the Striped Pyjamas',
    Year: 2008,
    'Letterboxd URI': 'https://letterboxd.com/film/the-boy-in-the-striped-pyjamas/',
  },
  {
    Name: 'Just Mercy',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/just-mercy/',
  },
  {
    Name: 'The Godfather',
    Year: 1972,
    'Letterboxd URI': 'https://letterboxd.com/film/the-godfather/',
  },
  {
    Name: 'The Big Short',
    Year: 2015,
    'Letterboxd URI': 'https://letterboxd.com/film/the-big-short/',
  },
  {
    Name: 'The Way Back',
    Year: 2020,
    'Letterboxd URI': 'https://letterboxd.com/film/the-way-back-2020/',
  },
  {
    Name: 'Kannum Kannum Kollaiyadithaal',
    Year: 2020,
    'Letterboxd URI': 'https://letterboxd.com/film/kannum-kannum-kollaiyadithaal/',
  },
  {
    Name: 'Memories of Murder',
    Year: 2003,
    'Letterboxd URI': 'https://letterboxd.com/film/memories-of-murder/',
  },
  {
    Name: 'Maayavan',
    Year: 2017,
    'Letterboxd URI': 'https://letterboxd.com/film/maayavan/',
  },
  {
    Name: 'Little Women',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/little-women-2019/',
  },
  {
    Name: 'Oh My Kadavule',
    Year: 2020,
    'Letterboxd URI': 'https://letterboxd.com/film/oh-my-kadavule/',
  },
  {
    Name: 'Star Wars: The Rise of Skywalker',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/star-wars-the-rise-of-skywalker/',
  },
  {
    Name: 1917,
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/1917/',
  },
  {
    Name: 'National Treasure',
    Year: 2004,
    'Letterboxd URI': 'https://letterboxd.com/film/national-treasure/',
  },
  {
    Name: 'Travelling Salesman',
    Year: 2012,
    'Letterboxd URI': 'https://letterboxd.com/film/travelling-salesman/',
  },
  {
    Name: 'Casino Royale',
    Year: 2006,
    'Letterboxd URI': 'https://letterboxd.com/film/casino-royale-2006/',
  },
  {
    Name: 'Snowpiercer',
    Year: 2013,
    'Letterboxd URI': 'https://letterboxd.com/film/snowpiercer/',
  },
  {
    Name: 'Gladiator',
    Year: 2000,
    'Letterboxd URI': 'https://letterboxd.com/film/gladiator-2000/',
  },
  {
    Name: 'Waves',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/waves-2019/',
  },
  {
    Name: '21 Bridges',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/21-bridges/',
  },
  {
    Name: 'Knives Out',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/knives-out-2019/',
  },
  {
    Name: 'A Beautiful Day in the Neighborhood',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/a-beautiful-day-in-the-neighborhood/',
  },
  {
    Name: 'Jojo Rabbit',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/jojo-rabbit/',
  },
  {
    Name: 'A Rainy Day in New York',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/a-rainy-day-in-new-york/',
  },
  {
    Name: 'Burning',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/burning-2018/',
  },
  {
    Name: 'Liberal Arts',
    Year: 2012,
    'Letterboxd URI': 'https://letterboxd.com/film/liberal-arts/',
  },
  {
    Name: 'Columbus',
    Year: 2017,
    'Letterboxd URI': 'https://letterboxd.com/film/columbus-2017/',
  },
  {
    Name: 'Chhichhore',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/chhichhore/',
  },
  {
    Name: 'Sillu Karupatti',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/sillu-karupatti/',
  },
  {
    Name: 'Top Gun',
    Year: 1986,
    'Letterboxd URI': 'https://letterboxd.com/film/top-gun/',
  },
  {
    Name: 'Serendipity',
    Year: 2001,
    'Letterboxd URI': 'https://letterboxd.com/film/serendipity/',
  },
  {
    Name: 'V for Vendetta',
    Year: 2005,
    'Letterboxd URI': 'https://letterboxd.com/film/v-for-vendetta/',
  },
  {
    Name: 'What If',
    Year: 2013,
    'Letterboxd URI': 'https://letterboxd.com/film/what-if-2013/',
  },
  {
    Name: 'Dunkirk',
    Year: 2017,
    'Letterboxd URI': 'https://letterboxd.com/film/dunkirk-2017/',
  },
  {
    Name: 'Crazy Rich Asians',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/crazy-rich-asians/',
  },
  {
    Name: 'Ford v Ferrari',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/ford-v-ferrari/',
  },
  {
    Name: 'Darbar',
    Year: 2020,
    'Letterboxd URI': 'https://letterboxd.com/film/darbar-2020/',
  },
  {
    Name: 'Donnie Darko',
    Year: 2001,
    'Letterboxd URI': 'https://letterboxd.com/film/donnie-darko/',
  },
  {
    Name: 'Joker',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/joker-2019/',
  },
  {
    Name: 'One Day',
    Year: 2011,
    'Letterboxd URI': 'https://letterboxd.com/film/one-day-2011/',
  },
  {
    Name: 'Kaithi',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/kaithi/',
  },
  {
    Name: 'Marriage Story',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/marriage-story-2019/',
  },
  {
    Name: 'Ad Astra',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/ad-astra-2019/',
  },
  {
    Name: 'Chungking Express',
    Year: 1994,
    'Letterboxd URI': 'https://letterboxd.com/film/chungking-express/',
  },
  {
    Name: 'The Report',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/the-report-2019/',
  },
  {
    Name: 'Zombieland: Double Tap',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/zombieland-double-tap/',
  },
  {
    Name: 'Paterson',
    Year: 2016,
    'Letterboxd URI': 'https://letterboxd.com/film/paterson/',
  },
  {
    Name: 'Parasite',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/parasite-2019/',
  },
  {
    Name: 'The Irishman',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/the-irishman-2019/',
  },
  {
    Name: 'No Strings Attached',
    Year: 2011,
    'Letterboxd URI': 'https://letterboxd.com/film/no-strings-attached/',
  },
  {
    Name: 'Asuran',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/asuran/',
  },
  {
    Name: 'The Current War',
    Year: 2017,
    'Letterboxd URI': 'https://letterboxd.com/film/the-current-war/',
  },
  {
    Name: 'The Farewell',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/the-farewell-2019/',
  },
  {
    Name: 'Once Upon a Time… in Hollywood',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/once-upon-a-time-in-hollywood/',
  },
  {
    Name: 'Good Boys',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/good-boys-2019/',
  },
  {
    Name: 'Bigil',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/bigil/',
  },
  {
    Name: 'Us',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/us-2019/',
  },
  {
    Name: 'Scott Pilgrim vs. the World',
    Year: 2010,
    'Letterboxd URI': 'https://letterboxd.com/film/scott-pilgrim-vs-the-world/',
  },
  {
    Name: 'Whiplash',
    Year: 2014,
    'Letterboxd URI': 'https://letterboxd.com/film/whiplash-2014/',
  },
  {
    Name: 'The Lion King',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/the-lion-king-2019/',
  },
  {
    Name: 'Dallas Buyers Club',
    Year: 2013,
    'Letterboxd URI': 'https://letterboxd.com/film/dallas-buyers-club/',
  },
  {
    Name: 'El Camino: A Breaking Bad Movie',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/el-camino-a-breaking-bad-movie/',
  },
  {
    Name: 'The Art of Self-Defense',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/the-art-of-self-defense-2019/',
  },
  {
    Name: 'Boyhood',
    Year: 2014,
    'Letterboxd URI': 'https://letterboxd.com/film/boyhood/',
  },
  {
    Name: 'Sicario',
    Year: 2015,
    'Letterboxd URI': 'https://letterboxd.com/film/sicario-2015/',
  },
  {
    Name: 'Coherence',
    Year: 2013,
    'Letterboxd URI': 'https://letterboxd.com/film/coherence/',
  },
  {
    Name: 'Crazy, Stupid, Love.',
    Year: 2011,
    'Letterboxd URI': 'https://letterboxd.com/film/crazy-stupid-love/',
  },
  {
    Name: 'Booksmart',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/booksmart/',
  },
  {
    Name: 'Armageddon',
    Year: 1998,
    'Letterboxd URI': 'https://letterboxd.com/film/armageddon/',
  },
  {
    Name: 'Spider-Man: Far from Home',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/spider-man-far-from-home/',
  },
  {
    Name: 'The Keeper',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/the-keeper-2018/',
  },
  {
    Name: 'The Edge of Seventeen',
    Year: 2016,
    'Letterboxd URI': 'https://letterboxd.com/film/the-edge-of-seventeen/',
  },
  {
    Name: 'The Amazing Spider-Man 2',
    Year: 2014,
    'Letterboxd URI': 'https://letterboxd.com/film/the-amazing-spider-man-2/',
  },
  {
    Name: 'Captain America: The Winter Soldier',
    Year: 2014,
    'Letterboxd URI': 'https://letterboxd.com/film/captain-america-the-winter-soldier/',
  },
  {
    Name: 'Superbad',
    Year: 2007,
    'Letterboxd URI': 'https://letterboxd.com/film/superbad/',
  },
  {
    Name: 'Tolkien',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/tolkien-2019/',
  },
  {
    Name: 'When Harry Met Sally...',
    Year: 1989,
    'Letterboxd URI': 'https://letterboxd.com/film/when-harry-met-sally/',
  },
  {
    Name: 'Pride & Prejudice',
    Year: 2005,
    'Letterboxd URI': 'https://letterboxd.com/film/pride-prejudice/',
  },
  {
    Name: 'The Amazing Spider-Man',
    Year: 2012,
    'Letterboxd URI': 'https://letterboxd.com/film/the-amazing-spider-man/',
  },
  {
    Name: 'Zombieland',
    Year: 2009,
    'Letterboxd URI': 'https://letterboxd.com/film/zombieland/',
  },
  {
    Name: "You've Got Mail",
    Year: 1998,
    'Letterboxd URI': 'https://letterboxd.com/film/youve-got-mail/',
  },
  {
    Name: 'Aladdin',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/aladdin-2019/',
  },
  {
    Name: 'WALL·E',
    Year: 2008,
    'Letterboxd URI': 'https://letterboxd.com/film/walle/',
  },
  {
    Name: 'Captain America: The First Avenger',
    Year: 2011,
    'Letterboxd URI': 'https://letterboxd.com/film/captain-america-the-first-avenger/',
  },
  {
    Name: 'Natpe Thunai',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/natpe-thunai/',
  },
  {
    Name: 'Drive',
    Year: 2011,
    'Letterboxd URI': 'https://letterboxd.com/film/drive-2011/',
  },
  {
    Name: 'Kanaa',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/kanaa/',
  },
  {
    Name: 'Midnight in Paris',
    Year: 2011,
    'Letterboxd URI': 'https://letterboxd.com/film/midnight-in-paris/',
  },
  {
    Name: 'Gully Boy',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/gully-boy/',
  },
  {
    Name: 'Then Came You',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/then-came-you/',
  },
  {
    Name: 'Avengers: Endgame',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/avengers-endgame/',
  },
  {
    Name: 'Thadam',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/thadam/',
  },
  {
    Name: 'Reservoir Dogs',
    Year: 1992,
    'Letterboxd URI': 'https://letterboxd.com/film/reservoir-dogs/',
  },
  {
    Name: 'Friends with Benefits',
    Year: 2011,
    'Letterboxd URI': 'https://letterboxd.com/film/friends-with-benefits/',
  },
  {
    Name: 'Okja',
    Year: 2017,
    'Letterboxd URI': 'https://letterboxd.com/film/okja/',
  },
  {
    Name: 'Escape Room',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/escape-room-2019/',
  },
  {
    Name: 'Shazam!',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/shazam/',
  },
  {
    Name: 'The Girl Next Door',
    Year: 2004,
    'Letterboxd URI': 'https://letterboxd.com/film/the-girl-next-door-2004/',
  },
  {
    Name: 2,
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/20/',
  },
  {
    Name: 'Django Unchained',
    Year: 2012,
    'Letterboxd URI': 'https://letterboxd.com/film/django-unchained/',
  },
  {
    Name: 'How to Train Your Dragon: The Hidden World',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/how-to-train-your-dragon-the-hidden-world/',
  },
  {
    Name: 'Kill Bill: Vol. 1',
    Year: 2003,
    'Letterboxd URI': 'https://letterboxd.com/film/kill-bill-vol-1/',
  },
  {
    Name: 'Kill Bill: Vol. 2',
    Year: 2004,
    'Letterboxd URI': 'https://letterboxd.com/film/kill-bill-vol-2/',
  },
  {
    Name: 'My Name Is Khan',
    Year: 2010,
    'Letterboxd URI': 'https://letterboxd.com/film/my-name-is-khan/',
  },
  {
    Name: 'Taxi Driver',
    Year: 1976,
    'Letterboxd URI': 'https://letterboxd.com/film/taxi-driver/',
  },
  {
    Name: 'Bumblebee',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/bumblebee/',
  },
  {
    Name: 'Inglourious Basterds',
    Year: 2009,
    'Letterboxd URI': 'https://letterboxd.com/film/inglourious-basterds/',
  },
  {
    Name: 'Southpaw',
    Year: 2015,
    'Letterboxd URI': 'https://letterboxd.com/film/southpaw-2015/',
  },
  {
    Name: 'If Beale Street Could Talk',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/if-beale-street-could-talk/',
  },
  {
    Name: 'Triple Frontier',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/triple-frontier/',
  },
  {
    Name: 'Spider-Man: Into the Spider-Verse',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/spider-man-into-the-spider-verse/',
  },
  {
    Name: 'Project Gutenberg',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/project-gutenberg/',
  },
  {
    Name: 'The Silence of the Lambs',
    Year: 1991,
    'Letterboxd URI': 'https://letterboxd.com/film/the-silence-of-the-lambs/',
  },
  {
    Name: 'Instant Family',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/instant-family/',
  },
  {
    Name: 'Sarvam Thaala Mayam',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/sarvam-thaala-mayam/',
  },
  {
    Name: 'Viswasam',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/viswasam/',
  },
  {
    Name: 'National Geographic: Journey to the Edge of the Universe',
    Year: 2008,
    'Letterboxd URI': 'https://letterboxd.com/film/national-geographic-journey-to-the-edge-of-the-universe/',
  },
  {
    Name: 'Your Name.',
    Year: 2016,
    'Letterboxd URI': 'https://letterboxd.com/film/your-name/',
  },
  {
    Name: 'On Your Wedding Day',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/on-your-wedding-day/',
  },
  {
    Name: 'Mortal Engines',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/mortal-engines/',
  },
  {
    Name: 'K.G.F: Chapter 1',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/kgf-chapter-1/',
  },
  {
    Name: 'Shoplifters',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/shoplifters/',
  },
  {
    Name: 'Velvet Buzzsaw',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/velvet-buzzsaw/',
  },
  {
    Name: 'Take the Ball, Pass the Ball',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/take-the-ball-pass-the-ball/',
  },
  {
    Name: 'Risky Business',
    Year: 1983,
    'Letterboxd URI': 'https://letterboxd.com/film/risky-business/',
  },
  {
    Name: 'Adanga Maru',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/adanga-maru/',
  },
  {
    Name: 'Thuppakki Munai',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/thuppakki-munai/',
  },
  {
    Name: 'Maari 2',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/maari-2/',
  },
  {
    Name: 'Bohemian Rhapsody',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/bohemian-rhapsody/',
  },
  {
    Name: 'Me and Earl and the Dying Girl',
    Year: 2015,
    'Letterboxd URI': 'https://letterboxd.com/film/me-and-earl-and-the-dying-girl/',
  },
  {
    Name: 'Andhadhun',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/andhadhun/',
  },
  {
    Name: 'Silukkuvarupatti Singam',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/silukkuvarupatti-singam/',
  },
  {
    Name: "The Girl in the Spider's Web",
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/the-girl-in-the-spiders-web/',
  },
  {
    Name: 'Pariyerum Perumal',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/pariyerum-perumal/',
  },
  {
    Name: 'Johnny English Strikes Again',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/johnny-english-strikes-again/',
  },
  {
    Name: 'A Star Is Born',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/a-star-is-born-2018/',
  },
  {
    Name: 'Beautiful Boy',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/beautiful-boy-2018/',
  },
  {
    Name: 'Petta',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/petta/',
  },
  {
    Name: 'Loophole',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/loophole-2019/',
  },
  {
    Name: "Tomorrow I Will Date With Yesterday's You",
    Year: 2016,
    'Letterboxd URI': 'https://letterboxd.com/film/tomorrow-i-will-date-with-yesterdays-you/',
  },
  {
    Name: 'Rust Creek',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/rust-creek/',
  },
  {
    Name: 'The Shawshank Redemption',
    Year: 1994,
    'Letterboxd URI': 'https://letterboxd.com/film/the-shawshank-redemption/',
  },
  {
    Name: 'The Guilty',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/the-guilty-2018/',
  },
  {
    Name: 'Bird Box',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/bird-box/',
  },
  {
    Name: 'Thor',
    Year: 2011,
    'Letterboxd URI': 'https://letterboxd.com/film/thor/',
  },
  {
    Name: 'Thor: The Dark World',
    Year: 2013,
    'Letterboxd URI': 'https://letterboxd.com/film/thor-the-dark-world/',
  },
  {
    Name: 'Citizen Kane',
    Year: 1941,
    'Letterboxd URI': 'https://letterboxd.com/film/citizen-kane/',
  },
  {
    Name: 'First Man',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/first-man/',
  },
  {
    Name: 'The Net',
    Year: 1995,
    'Letterboxd URI': 'https://letterboxd.com/film/the-net/',
  },
  {
    Name: '12 Angry Men',
    Year: 1957,
    'Letterboxd URI': 'https://letterboxd.com/film/12-angry-men/',
  },
  {
    Name: '27 Dresses',
    Year: 2008,
    'Letterboxd URI': 'https://letterboxd.com/film/27-dresses/',
  },
  {
    Name: '8 Mile',
    Year: 2002,
    'Letterboxd URI': 'https://letterboxd.com/film/8-mile/',
  },
  {
    Name: 96,
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/96-2018/',
  },
  {
    Name: 'X+Y',
    Year: 2014,
    'Letterboxd URI': 'https://letterboxd.com/film/xy/',
  },
  {
    Name: "A Dog's Purpose",
    Year: 2017,
    'Letterboxd URI': 'https://letterboxd.com/film/a-dogs-purpose/',
  },
  {
    Name: 'A Few Good Men',
    Year: 1992,
    'Letterboxd URI': 'https://letterboxd.com/film/a-few-good-men/',
  },
  {
    Name: 'A Walk to Remember',
    Year: 2002,
    'Letterboxd URI': 'https://letterboxd.com/film/a-walk-to-remember/',
  },
  {
    Name: 'About Time',
    Year: 2013,
    'Letterboxd URI': 'https://letterboxd.com/film/about-time/',
  },
  {
    Name: 'Adrift',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/adrift-2018/',
  },
  {
    Name: 'Alex Strangelove',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/alex-strangelove/',
  },
  {
    Name: 'Almost Friends',
    Year: 2016,
    'Letterboxd URI': 'https://letterboxd.com/film/almost-friends/',
  },
  {
    Name: 'American Made',
    Year: 2017,
    'Letterboxd URI': 'https://letterboxd.com/film/american-made/',
  },
  {
    Name: 'An Interview with God',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/an-interview-with-god/',
  },
  {
    Name: 'Annihilation',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/annihilation/',
  },
  {
    Name: 'Ant-Man and the Wasp',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/ant-man-and-the-wasp/',
  },
  {
    Name: 'Apollo 13',
    Year: 1995,
    'Letterboxd URI': 'https://letterboxd.com/film/apollo-13/',
  },
  {
    Name: 'Aquaman',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/aquaman-2018/',
  },
  {
    Name: 'Avengers: Infinity War',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/avengers-infinity-war/',
  },
  {
    Name: 'Away You Go',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/away-you-go/',
  },
  {
    Name: 'Back to the Future',
    Year: 1985,
    'Letterboxd URI': 'https://letterboxd.com/film/back-to-the-future/',
  },
  {
    Name: 'Back to the Future Part III',
    Year: 1990,
    'Letterboxd URI': 'https://letterboxd.com/film/back-to-the-future-part-iii/',
  },
  {
    Name: 'Back to the Future Part II',
    Year: 1989,
    'Letterboxd URI': 'https://letterboxd.com/film/back-to-the-future-part-ii/',
  },
  {
    Name: 'Bad Genius',
    Year: 2017,
    'Letterboxd URI': 'https://letterboxd.com/film/bad-genius/',
  },
  {
    Name: 'Before Sunrise',
    Year: 1995,
    'Letterboxd URI': 'https://letterboxd.com/film/before-sunrise/',
  },
  {
    Name: 'Before Sunset',
    Year: 2004,
    'Letterboxd URI': 'https://letterboxd.com/film/before-sunset/',
  },
  {
    Name: 'Before Midnight',
    Year: 2013,
    'Letterboxd URI': 'https://letterboxd.com/film/before-midnight/',
  },
  {
    Name: 'Black Mirror: Bandersnatch',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/black-mirror-bandersnatch/',
  },
  {
    Name: 'Black Panther',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/black-panther-2018/',
  },
  {
    Name: 'Brain on Fire',
    Year: 2016,
    'Letterboxd URI': 'https://letterboxd.com/film/brain-on-fire/',
  },
  {
    Name: 'Breathe',
    Year: 2017,
    'Letterboxd URI': 'https://letterboxd.com/film/breathe-2017/',
  },
  {
    Name: 'Brothers',
    Year: 2009,
    'Letterboxd URI': 'https://letterboxd.com/film/brothers-2009/',
  },
  {
    Name: 'Call Me by Your Name',
    Year: 2017,
    'Letterboxd URI': 'https://letterboxd.com/film/call-me-by-your-name/',
  },
  {
    Name: 'Chekka Chivantha Vaanam',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/chekka-chivantha-vaanam/',
  },
  {
    Name: 'Children of Men',
    Year: 2006,
    'Letterboxd URI': 'https://letterboxd.com/film/children-of-men/',
  },
  {
    Name: 'Coco',
    Year: 2017,
    'Letterboxd URI': 'https://letterboxd.com/film/coco-2017/',
  },
  {
    Name: 'Comet',
    Year: 2014,
    'Letterboxd URI': 'https://letterboxd.com/film/comet/',
  },
  {
    Name: 'CIA: Comrade In America',
    Year: 2017,
    'Letterboxd URI': 'https://letterboxd.com/film/cia-comrade-in-america/',
  },
  {
    Name: 'Darkest Hour',
    Year: 2017,
    'Letterboxd URI': 'https://letterboxd.com/film/darkest-hour/',
  },
  {
    Name: 'Deadpool 2',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/deadpool-2/',
  },
  {
    Name: 'Den of Thieves',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/den-of-thieves/',
  },
  {
    Name: 'Destination Wedding',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/destination-wedding-2018/',
  },
  {
    Name: 'Eighth Grade',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/eighth-grade/',
  },
  {
    Name: 'Enemy at the Gates',
    Year: 2001,
    'Letterboxd URI': 'https://letterboxd.com/film/enemy-at-the-gates/',
  },
  {
    Name: 'Escape Plan 2: Hades',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/escape-plan-2-hades/',
  },
  {
    Name: 'Fantastic Beasts: The Crimes of Grindelwald',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/fantastic-beasts-the-crimes-of-grindelwald/',
  },
  {
    Name: 'Game Night',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/game-night/',
  },
  {
    Name: 'Google and the World Brain',
    Year: 2013,
    'Letterboxd URI': 'https://letterboxd.com/film/google-and-the-world-brain/',
  },
  {
    Name: 'Happy Death Day',
    Year: 2017,
    'Letterboxd URI': 'https://letterboxd.com/film/happy-death-day/',
  },
  {
    Name: 'Her',
    Year: 2013,
    'Letterboxd URI': 'https://letterboxd.com/film/her/',
  },
  {
    Name: 'How to Talk to Girls at Parties',
    Year: 2017,
    'Letterboxd URI': 'https://letterboxd.com/film/how-to-talk-to-girls-at-parties/',
  },
  {
    Name: 'Imaikkaa Nodigal',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/imaikkaa-nodigal/',
  },
  {
    Name: 'Raiders of the Lost Ark',
    Year: 1981,
    'Letterboxd URI': 'https://letterboxd.com/film/raiders-of-the-lost-ark/',
  },
  {
    Name: 'Indiana Jones and the Temple of Doom',
    Year: 1984,
    'Letterboxd URI': 'https://letterboxd.com/film/indiana-jones-and-the-temple-of-doom/',
  },
  {
    Name: 'Indiana Jones and the Last Crusade',
    Year: 1989,
    'Letterboxd URI': 'https://letterboxd.com/film/indiana-jones-and-the-last-crusade/',
  },
  {
    Name: 'Indiana Jones and the Kingdom of the Crystal Skull',
    Year: 2008,
    'Letterboxd URI': 'https://letterboxd.com/film/indiana-jones-and-the-kingdom-of-the-crystal-skull/',
  },
  {
    Name: 'Irumbu Thirai',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/irumbu-thirai-2018/',
  },
  {
    Name: 'Jonathan',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/jonathan-2018/',
  },
  {
    Name: 'Jumanji: Welcome to the Jungle',
    Year: 2017,
    'Letterboxd URI': 'https://letterboxd.com/film/jumanji-welcome-to-the-jungle/',
  },
  {
    Name: 'Junga',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/junga/',
  },
  {
    Name: 'Juno',
    Year: 2007,
    'Letterboxd URI': 'https://letterboxd.com/film/juno/',
  },
  {
    Name: 'Kolamavu Kokila',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/kolamavu-kokila/',
  },
  {
    Name: 'Lady Bird',
    Year: 2017,
    'Letterboxd URI': 'https://letterboxd.com/film/lady-bird/',
  },
  {
    Name: 'Little Miss Sunshine',
    Year: 2006,
    'Letterboxd URI': 'https://letterboxd.com/film/little-miss-sunshine/',
  },
  {
    Name: 'Locke',
    Year: 2013,
    'Letterboxd URI': 'https://letterboxd.com/film/locke/',
  },
  {
    Name: 'Love Actually',
    Year: 2003,
    'Letterboxd URI': 'https://letterboxd.com/film/love-actually/',
  },
  {
    Name: 'Love & Other Drugs',
    Year: 2010,
    'Letterboxd URI': 'https://letterboxd.com/film/love-other-drugs/',
  },
  {
    Name: 'Love, Rosie',
    Year: 2014,
    'Letterboxd URI': 'https://letterboxd.com/film/love-rosie/',
  },
  {
    Name: 'Love, Simon',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/love-simon/',
  },
  {
    Name: 'Maze',
    Year: 2017,
    'Letterboxd URI': 'https://letterboxd.com/film/maze-2017/',
  },
  {
    Name: 'Mean Girls',
    Year: 2004,
    'Letterboxd URI': 'https://letterboxd.com/film/mean-girls/',
  },
  {
    Name: 'Million Dollar Baby',
    Year: 2004,
    'Letterboxd URI': 'https://letterboxd.com/film/million-dollar-baby/',
  },
  {
    Name: 'Moneyball',
    Year: 2011,
    'Letterboxd URI': 'https://letterboxd.com/film/moneyball/',
  },
  {
    Name: 'Murder on the Orient Express',
    Year: 2017,
    'Letterboxd URI': 'https://letterboxd.com/film/murder-on-the-orient-express-2017/',
  },
  {
    Name: "My Best Friend's Wedding",
    Year: 1997,
    'Letterboxd URI': 'https://letterboxd.com/film/my-best-friends-wedding/',
  },
  {
    Name: 'Nerve',
    Year: 2016,
    'Letterboxd URI': 'https://letterboxd.com/film/nerve-2016/',
  },
  {
    Name: 'No Country for Old Men',
    Year: 2007,
    'Letterboxd URI': 'https://letterboxd.com/film/no-country-for-old-men/',
  },
  {
    Name: "Not Cinderella's Type",
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/not-cinderellas-type/',
  },
  {
    Name: 'October Sky',
    Year: 1999,
    'Letterboxd URI': 'https://letterboxd.com/film/october-sky/',
  },
  {
    Name: 'Patriots Day',
    Year: 2016,
    'Letterboxd URI': 'https://letterboxd.com/film/patriots-day/',
  },
  {
    Name: 'Pulp Fiction',
    Year: 1994,
    'Letterboxd URI': 'https://letterboxd.com/film/pulp-fiction/',
  },
  {
    Name: 'Puzzle',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/puzzle-2018/',
  },
  {
    Name: 'Rampage',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/rampage-2018/',
  },
  {
    Name: 'Ratsasan',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/ratsasan/',
  },
  {
    Name: 'Ready Player One',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/ready-player-one/',
  },
  {
    Name: 'Saamy²',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/saamy-2018/',
  },
  {
    Name: 'Sarkar',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/sarkar-2018/',
  },
  {
    Name: "Schindler's List",
    Year: 1993,
    'Letterboxd URI': 'https://letterboxd.com/film/schindlers-list/',
  },
  {
    Name: 'Searching',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/searching-2018/',
  },
  {
    Name: 'Serenity',
    Year: 2005,
    'Letterboxd URI': 'https://letterboxd.com/film/serenity/',
  },
  {
    Name: 'Set It Up',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/set-it-up/',
  },
  {
    Name: "She's the Man",
    Year: 2006,
    'Letterboxd URI': 'https://letterboxd.com/film/shes-the-man/',
  },
  {
    Name: 'Sierra Burgess Is a Loser',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/sierra-burgess-is-a-loser/',
  },
  {
    Name: 'Skyscraper',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/skyscraper-2018/',
  },
  {
    Name: 'Speed',
    Year: 1994,
    'Letterboxd URI': 'https://letterboxd.com/film/speed/',
  },
  {
    Name: 'Stuck in Love',
    Year: 2012,
    'Letterboxd URI': 'https://letterboxd.com/film/stuck-in-love/',
  },
  {
    Name: 'Tag',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/tag-2018/',
  },
  {
    Name: 'Tamizh Padam 2',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/tamizh-padam-2/',
  },
  {
    Name: 'The Bank Job',
    Year: 2008,
    'Letterboxd URI': 'https://letterboxd.com/film/the-bank-job-2008/',
  },
  {
    Name: 'The Breakfast Club',
    Year: 1985,
    'Letterboxd URI': 'https://letterboxd.com/film/the-breakfast-club/',
  },
  {
    Name: 'The Commuter',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/the-commuter/',
  },
  {
    Name: 'The Darkest Minds',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/the-darkest-minds/',
  },
  {
    Name: 'The First Purge',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/the-first-purge/',
  },
  {
    Name: 'The First Time',
    Year: 2012,
    'Letterboxd URI': 'https://letterboxd.com/film/the-first-time-2012/',
  },
  {
    Name: 'The Greatest Showman',
    Year: 2017,
    'Letterboxd URI': 'https://letterboxd.com/film/the-greatest-showman/',
  },
  {
    Name: 'The Hunt for Red October',
    Year: 1990,
    'Letterboxd URI': 'https://letterboxd.com/film/the-hunt-for-red-october/',
  },
  {
    Name: 'The Invisible Guest',
    Year: 2016,
    'Letterboxd URI': 'https://letterboxd.com/film/the-invisible-guest/',
  },
  {
    Name: "The King's Speech",
    Year: 2010,
    'Letterboxd URI': 'https://letterboxd.com/film/the-kings-speech/',
  },
  {
    Name: 'The Kissing Booth',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/the-kissing-booth/',
  },
  {
    Name: 'The Last Samurai',
    Year: 2003,
    'Letterboxd URI': 'https://letterboxd.com/film/the-last-samurai/',
  },
  {
    Name: 'The Meg',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/the-meg/',
  },
  {
    Name: 'The Notebook',
    Year: 2004,
    'Letterboxd URI': 'https://letterboxd.com/film/the-notebook/',
  },
  {
    Name: 'The Post',
    Year: 2017,
    'Letterboxd URI': 'https://letterboxd.com/film/the-post-2017/',
  },
  {
    Name: 'The Proposal',
    Year: 2009,
    'Letterboxd URI': 'https://letterboxd.com/film/the-proposal-2009/',
  },
  {
    Name: 'The Quake',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/the-quake/',
  },
  {
    Name: 'The Shape of Water',
    Year: 2017,
    'Letterboxd URI': 'https://letterboxd.com/film/the-shape-of-water/',
  },
  {
    Name: 'The Spectacular Now',
    Year: 2013,
    'Letterboxd URI': 'https://letterboxd.com/film/the-spectacular-now/',
  },
  {
    Name: 'The Terminal',
    Year: 2004,
    'Letterboxd URI': 'https://letterboxd.com/film/the-terminal/',
  },
  {
    Name: 'The Wave',
    Year: 2015,
    'Letterboxd URI': 'https://letterboxd.com/film/the-wave-2015/',
  },
  {
    Name: 'Thor: Ragnarok',
    Year: 2017,
    'Letterboxd URI': 'https://letterboxd.com/film/thor-ragnarok/',
  },
  {
    Name: 'Three Billboards Outside Ebbing, Missouri',
    Year: 2017,
    'Letterboxd URI': 'https://letterboxd.com/film/three-billboards-outside-ebbing-missouri/',
  },
  {
    Name: 'Tik Tik Tik',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/tik-tik-tik-2018/',
  },
  {
    Name: "Tinker'",
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/tinker-2018/',
  },
  {
    Name: 'Titanic',
    Year: 1997,
    'Letterboxd URI': 'https://letterboxd.com/film/titanic-1997/',
  },
  {
    Name: "To All the Boys I've Loved Before",
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/to-all-the-boys-ive-loved-before/',
  },
  {
    Name: 'To the Bone',
    Year: 2017,
    'Letterboxd URI': 'https://letterboxd.com/film/to-the-bone-2017/',
  },
  {
    Name: 'Tomb Raider',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/tomb-raider/',
  },
  {
    Name: 'Transition',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/transition-2018/',
  },
  {
    Name: 'U Turn',
    Year: 2016,
    'Letterboxd URI': 'https://letterboxd.com/film/u-turn-2016-1/',
  },
  {
    Name: 'Vada Chennai',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/vada-chennai/',
  },
  {
    Name: 'Velaikkaran',
    Year: 2017,
    'Letterboxd URI': 'https://letterboxd.com/film/velaikkaran/',
  },
  {
    Name: 'When We First Met',
    Year: 2018,
    'Letterboxd URI': 'https://letterboxd.com/film/when-we-first-met/',
  },
  {
    Name: 'Wild Tales',
    Year: 2014,
    'Letterboxd URI': 'https://letterboxd.com/film/wild-tales/',
  },
  {
    Name: 'Wind River',
    Year: 2017,
    'Letterboxd URI': 'https://letterboxd.com/film/wind-river-2017/',
  },
  {
    Name: 'Wonder',
    Year: 2017,
    'Letterboxd URI': 'https://letterboxd.com/film/wonder-2017/',
  },
  {
    Name: 'Wreck-It Ralph',
    Year: 2012,
    'Letterboxd URI': 'https://letterboxd.com/film/wreck-it-ralph/',
  },
  {
    Name: 'Hacksaw Ridge',
    Year: 2016,
    'Letterboxd URI': 'https://letterboxd.com/film/hacksaw-ridge/',
  },
  {
    Name: 'Neerja',
    Year: 2016,
    'Letterboxd URI': 'https://letterboxd.com/film/neerja/',
  },
  {
    Name: 'Mission: Impossible',
    Year: 1996,
    'Letterboxd URI': 'https://letterboxd.com/film/mission-impossible/',
  },
  {
    Name: 'Captain Phillips',
    Year: 2013,
    'Letterboxd URI': 'https://letterboxd.com/film/captain-phillips/',
  },
  {
    Name: 'Portrait of a Lady on Fire',
    Year: 2019,
    'Letterboxd URI': 'https://letterboxd.com/film/portrait-of-a-lady-on-fire/',
  },
];

export {
  // eslint-disable-next-line import/prefer-default-export
  movies,
};
