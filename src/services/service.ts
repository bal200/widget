export type Competition = {
  id: number;
  title?: string;
  description?: string;
  image?: string;
}

const Service = {
  getCompetitions() {
    return new Promise<Competition[]>((resolve) => {
      resolve(dat);
    })
  },
  getCompetition( compId:string ) {
    return new Promise<Competition>((resolve) => {
      resolve(dat.find( c => c.id == parseInt(compId) ));
    })
  },
}
export default Service;

const dat = [
  {
    id: 1,
    title: "1st title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro asperiores reiciendis saepe a possimus quis commodi?",
    image: "https://i.picsum.photos/id/769/600/300.jpg",
  },
  {
    id: 2,
    title: "another title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quae quos obcaecati?",
    image: "https://i.picsum.photos/id/478/600/300.jpg?blur=2",
  },
  {
    id: 3,
    title: "third one",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quae quos obcaecati?",
    image: "https://i.picsum.photos/id/365/600/300.jpg?blur=2",
  },
];
