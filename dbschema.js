let db = {
  posts: [
    {
      user: "user",
      body: "this is the post body",
      createdAt: "2020-02-10T13:23:57.434Z",
      location: "Sinj",
      likeCount: 5,
      commentCount: 2
    }
  ],
  users: [
    {
      userId: "G4IktNZEAegnchZFnDKjGLkv36E2",
      email: "anica1@email.com",
      handle: "anicav",
      createdAt: "2020-02-11T15:10:43.630Z",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/nwt-app-423ca.appspot.com/o/81327001495.jpg?alt=media",
      bio: "Hello, I'm Anica, this is my profile",
      website: "https://user.com",
      location: "Sinj, Croatia"
    }
  ],
  comments: [
    {
      user: "user",
      postId: "hjhfs77sd7fs7skjdfsjfssldk",
      body: "nice post!",
      createdAt: "2020-02-11T15:10:43.630Z"
    }
  ],
  notifications: [
    {
      recipitient: "user",
      sender: "john",
      read: "true | false",
      postId: "hjhfs77sd7fs7skjdfsjfssldk",
      type: "like | comment",
      createdAt: "2020-02-11T15:10:43.630Z"
    }
  ]
};

const UserDetails = {
  //Redux data
  credentials: {
    userId: "G4IktNZEAegnchZFnDKjGLkv36E2",
    email: "anica1@email.com",
    handle: "anicav",
    createdAt: "2020-02-11T15:10:43.630Z",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/nwt-app-423ca.appspot.com/o/81327001495.jpg?alt=media",
    bio: "Hello, I'm Anica, this is my profile",
    website: "https://user.com",
    location: "Sinj, Croatia"
  },
  likes: [
    {
      user: "user",
      postId: "hjhfs77sd7fs7skjdfsjfssldk"
    },
    {
      user: "user",
      postId: "3fkjhfs77sd7fs7skjdfsjfssldk"
    }
  ]
};
