const sampleRestaurants = [
  {
    name: "Little Asia",
    thumbnails: [
      "https://s3-media0.fl.yelpcdn.com/bphoto/C9mGUTu3v8Od96GWVfNtcQ/348s.jpg",
      "https://s3-media0.fl.yelpcdn.com/bphoto/z1BjT-snZhPfhBoXI46m0w/348s.jpg",
    ],
  },
  {
    name: "Everyday Noodles",
    thumbnails: [
      "https://s3-media0.fl.yelpcdn.com/bphoto/khvTYhE9avLGf0s8tdvFeQ/348s.jpg",
      "https://s3-media0.fl.yelpcdn.com/bphoto/zvtGoP-oMUlproYL2f8Flw/348s.jpg",
    ],
  },
  {
    name: "Pink Box",
    thumbnails: [
      "https://s3-media0.fl.yelpcdn.com/bphoto/9B8snlzvzwXOZ77oBP6COw/348s.jpg",
      "https://s3-media0.fl.yelpcdn.com/bphoto/NSLCZiM4FGvg-XZEpD3Zbg/348s.jpg",
    ],
  },
];

const sampleReviews = [
  {
    url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/337339216_933961044317548_9223230663527836157_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=M-CzcGdMkJMAX_nj7uQ&_nc_ht=scontent-sjc3-1.xx&oh=03_AdQjKpaPr9_EawV4eJZtpVHYHyltxF-9J5xOnqv9El5eBg&oe=6457ACDB",
    timestamp: "2023-03-28T21:59:15+0000",
    rating: 5,
    username: "nozomi",
  },
  {
    url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/337304153_1752500001935000_885886743798148424_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Mj3J5h3tyMAAX9qVxP8&_nc_ht=scontent-sjc3-1.xx&oh=03_AdSjnGSC7N9yb8esKaNEMbKWqncYEIclhaC5PfNamSOOfQ&oe=6457CD9E",
    timestamp: "2023-03-19T21:29:59+0000",
    rating: 5,
    username: "nozomi",
  },
  {
    url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/337316791_987566435458666_1057702532685195885_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=yB95TxifjAEAX9lcrIJ&_nc_ht=scontent-sjc3-1.xx&oh=03_AdRzSt8MFBrjohJ39CrASzCJRS5frna3oqtVPVEc-uFZbg&oe=6457D892",
    timestamp: "2023-03-19T21:29:59+0000",
    rating: 5,
    username: "nozomi",
  },
  {
    url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/337295240_3503668799891265_7037083633528697167_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=O47WrDgOJcMAX-NJs0c&_nc_ht=scontent-sjc3-1.xx&oh=03_AdRwUawEQ5CxShLYgctkjVjUuWPMvZsI8FuJSyDNm-8IOA&oe=6457B365",
    timestamp: "2023-03-19T21:28:55+0000",
    rating: 5,
    username: "nozomi",
  },
  {
    url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/337320522_778030247019927_3317338879921778828_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=6i5Zdaoj_j8AX8VDjy9&_nc_ht=scontent-sjc3-1.xx&oh=03_AdQLGhLc5s7HJcnJc6Makspot_5oZyHiNpZmk_pHc4jIYg&oe=6457DA59",
    timestamp: "2023-03-19T21:28:55+0000",
    rating: 5,
    username: "nozomi",
  },
  {
    url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/337377911_1254991151782823_8507305383482197637_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=kGxdfyJ7OEEAX_4-w3e&_nc_ht=scontent-sjc3-1.xx&oh=03_AdSZS50HiXB7rrHqeauXggkC23Gkz0HqS6Dl70C2VmJ6PQ&oe=6457D87A",
    timestamp: "2023-03-12T20:37:13+0000",
    rating: 5,
    username: "nozomi",
  },
  {
    url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/337324516_124273037230460_9171256758567038659_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Tz-5f2-aBhUAX_ICWSj&_nc_ht=scontent-sjc3-1.xx&oh=03_AdQ91JCWshARVjLMhdy8atpjg8fGoWry1Ff-QsT5GAn3QA&oe=6457D20E",
    timestamp: "2023-03-12T20:37:13+0000",
    rating: 5,
    username: "nozomi",
  },
  {
    url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/337341758_254109753717678_4908608241108898709_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Th8JrioKXb0AX_T2mPL&_nc_ht=scontent-sjc3-1.xx&oh=03_AdSdWz3N4ArY6f2U_EX0G3Eb52XRaqbJznAm6IpXcIS4wQ&oe=6457D4B5",
    timestamp: "2023-03-12T20:37:13+0000",
    rating: 5,
    username: "nozomi",
  },
  {
    url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/338313280_730962825331373_6337145082658839094_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=XxKfban9uDQAX-mh7Dq&_nc_ht=scontent-sjc3-1.xx&oh=03_AdSQ4-TW8bfbUPVWW9k2Qzqgak3KzZpjSbziMrrtWtNxZg&oe=6457B9BF",
    timestamp: "2023-02-03T17:40:08+0000",
    rating: 5,
    username: "cody",
  },
  {
    url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/340059687_195164743263160_2161877914161130524_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=QPb35kdTgEYAX_pXA6l&_nc_ht=scontent-sjc3-1.xx&oh=03_AdQaWStvChpC-oIrDgXdbFJnuuY3bzD7sny7jYwOXe5WlQ&oe=6457C9FF",
    timestamp: "2023-02-03T17:40:08+0000",
    rating: 5,
    username: "cody",
  },
  {
    url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/339220269_892259171852155_6297410520087098236_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=xLnr9KHrglkAX9YF0Ju&_nc_ht=scontent-sjc3-1.xx&oh=03_AdTwFf7tTGk_ef9Oaf01dPfwJM8Yak7TwDum43PegohpOw&oe=6457AD19",
    timestamp: "2023-01-28T23:29:41+0000",
    rating: 5,
    username: "cody",
  },
  {
    url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/339891821_927472408699240_1573945513004191441_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=tMdca5sD4H4AX_8uk-b&_nc_ht=scontent-sjc3-1.xx&oh=03_AdQEmzWkAg7elYzeGSkib4SECCJx-anj4td-pxWIrBKrCQ&oe=6457C44C",
    timestamp: "2023-01-28T23:29:41+0000",
    rating: 4,
    username: "cody",
  },
  {
    url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/340198180_1272872863602639_3026862442194109067_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=VE3uLKYx6bkAX9vu8En&_nc_ht=scontent-sjc3-1.xx&oh=03_AdSHIwz2Q01QNJvJeH5ROgzYtRwTgrsAzfzANb_uf7jpeQ&oe=6457D69F",
    timestamp: "2023-01-28T22:27:50+0000",
    rating: 1,
    username: "cody",
  },
  {
    url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/340083409_180824161437712_8084774355213504491_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=uD_6jBOopJcAX9GEQUg&_nc_ht=scontent-sjc3-1.xx&oh=03_AdQJ_7U3lXUPK_ON8Z4-ttNqI1n120TexzcadFSEAxKjpg&oe=6457B669",
    timestamp: "2023-01-28T22:27:50+0000",
    rating: 2,
    username: "cody",
  },
  {
    url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/340060890_746580966926028_4102227403556602448_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=VlGjDzEqu_IAX-4MiTw&_nc_ht=scontent-sjc3-1.xx&oh=03_AdQiXzBReJ3gmV8mNHYuPY3oS94RWJnm3NQiYd_qDjtTBQ&oe=6457D5E3",
    timestamp: "2023-01-28T21:59:15+0000",
    rating: 1,
    username: "cody",
  },
  {
    url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/338633556_552718306929498_6950914552071606251_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=wcL4zwNY0WwAX_Mt3Eg&_nc_ht=scontent-sjc3-1.xx&oh=03_AdRoFtRUrwCSSJXozuyRjmVG-bvudB7mE3b8vL3WX-DirA&oe=6457D880",
    timestamp: "2022-03-28T21:59:15+0000",
    rating: 5,
    username: "alef",
  },
  {
    url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/338415444_995181168120407_7319697644937102148_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=LEo5KQLiXZMAX8nvMiS&_nc_ht=scontent-sjc3-1.xx&oh=03_AdTTn3vIN6TGjrncFskmaMQBjqVUnVqkP9tZzJH3eYUzBQ&oe=6457BF25",
    timestamp: "2022-03-19T21:29:59+0000",
    rating: 4,
    username: "alef",
  },
  {
    url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/338641374_5815351248573840_1597776099863154290_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=tkpBumpdbFEAX8QJd-1&_nc_ht=scontent-sjc3-1.xx&oh=03_AdR1IxX0-iYTL1bU54qb7UlzJC287svU2LnOZWmK2Mkf4w&oe=6457B86C",
    timestamp: "2022-03-19T21:29:59+0000",
    rating: 3,
    username: "alef",
  },
  {
    url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/338731616_242391681519048_2956513867325044986_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=IERH08-_g2oAX83cH2c&_nc_ht=scontent-sjc3-1.xx&oh=03_AdSG_o4BTv-_3bz0pb7XDflPgFsvNUxielydsHEvCk3e2g&oe=6457D8F2",
    timestamp: "2022-03-19T21:28:55+0000",
    rating: 4,
    username: "alef",
  },
  {
    url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/339488994_905224607382172_4519892540507173898_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=-V_YKUclIY0AX-yujRq&_nc_ht=scontent-sjc3-1.xx&oh=03_AdTY1iwV17KT_0ws6hJtgxVXOGID57cbQct04KPGDjk6pw&oe=6457C026",
    timestamp: "2022-03-19T21:28:55+0000",
    rating: 2,
    username: "alef",
  },
  {
    url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/338906981_206781845382337_5513076151156413773_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=UoCUiphMHowAX9P6-E0&_nc_ht=scontent-sjc3-1.xx&oh=03_AdRgi8DzSHFW6jtOjZv2qOeN6RjW6TOb-obqOCNQeyZIgw&oe=6457D374",
    timestamp: "2022-03-12T20:37:13+0000",
    rating: 2,
    username: "alef",
  },
  {
    url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/339986471_195805316534144_3960316657391789751_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=3pT1DdXoYvYAX9OCrbC&_nc_ht=scontent-sjc3-1.xx&oh=03_AdTIKYP6AKw1Wx4_q79hkASrz237IErz45ycbh_YuFqNVw&oe=6457C948",
    timestamp: "2022-03-12T20:37:13+0000",
    rating: 3,
    username: "alef",
  },
  {
    url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/338589584_6082972625116925_3887950144214703882_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Ob-0uG4ACw0AX8tMqI-&_nc_ht=scontent-sjc3-1.xx&oh=03_AdTzHELvDa5j3CReBvIuLNLADpZaWK69BasAJfgXYBDkAQ&oe=6457C04A",
    timestamp: "2022-02-28T21:59:15+0000",
    rating: 5,
    username: "alef",
  },
  {
    url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/339833651_1166468624039160_8772893995714454105_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=KskovNkbojEAX99zVCl&_nc_ht=scontent-sjc3-1.xx&oh=03_AdQhh6Lnmrf0oZjfdnncv-X2-f-akJfrtVCFhr0roTmJ2Q&oe=6457BAD9",
    timestamp: "2022-02-19T21:29:59+0000",
    rating: 4,
    username: "alef",
  },
  {
    url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/338381743_2037468879957950_5110708258992859768_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=opzto8r_gMUAX--oBHW&_nc_ht=scontent-sjc3-1.xx&oh=03_AdTgysTdMaZdJvjRqc3C2SvTOXsEBT_bFzLMi6uOMoQ3Jg&oe=6457D7BD",
    timestamp: "2022-02-19T21:29:59+0000",
    rating: 3,
    username: "alef",
  },
  {
    url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/340035264_1272996596931393_3113470613939545603_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=j8qLmyiP_w8AX8CicLw&_nc_ht=scontent-sjc3-1.xx&oh=03_AdQOo_g_qCPiYe1bEZQVJJvy5uV27dxiiXnxrHqYzpJAKw&oe=6457A863",
    timestamp: "2022-02-19T21:28:55+0000",
    rating: 2,
    username: "alef",
  },
  {
    url: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/339985537_239879901777023_3379566911381022861_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=FxabJ22RzhUAX-3w6sZ&_nc_ht=scontent-sjc3-1.xx&oh=03_AdRyz0w7ojjtTDySezfiJmc77XJyx_d9vmd4aP22VZtRtQ&oe=6457ABE3",
    timestamp: "2022-02-19T21:28:55+0000",
    rating: 4,
    username: "alef",
  },
];

const sampleStats = {
  "Favorite food": [
    { item: "Food 1", percentMatch: 95 },
    { item: "Food 2", percentMatch: 90 },
    { item: "Food 3", percentMatch: 85 },
  ],
  "Least favorite food": [
    { item: "Food 1", percentMatch: 5 },
    { item: "Food 2", percentMatch: 10 },
    { item: "Food 3", percentMatch: 15 },
  ],
  "Favorite cuisine": [
    { item: "Cuisine 1", percentMatch: 95 },
    { item: "Cuisine 2", percentMatch: 90 },
    { item: "Cuisine 3", percentMatch: 85 },
  ],
  "Least favorite cuisine": [
    { item: "Cuisine 1", percentMatch: 5 },
    { item: "Cuisine 2", percentMatch: 10 },
    { item: "Cuisine 3", percentMatch: 15 },
  ],
};

export const loadRestaurants = async (find, location, instagramUsername) =>
  sampleRestaurants;

export const loadReviews = async (instagramUsername) => sampleReviews;

export const loadStats = async (instagramUsername) => sampleStats;

export const loadAllReviews = async () => sampleReviews;
