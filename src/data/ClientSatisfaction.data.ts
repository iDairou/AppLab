import { ClientSatisfaction } from "@/interfaces/ClientSatisfaction.interface";

export default [
  {
    rate: 5,
    title: "User friendly & Customizable",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla culpa ut, quae rerum nostrum ipsa at quod voluptas accusamus praesentium ipsum. Iste quis, officia amet esse a id dolore illo.",
    user: {
      name: "Zoltan Nemeth",
      company: "CEO of Pixler Lab",
      photo: "zoltan.png",
    },
  },
  {
    rate: 4,
    title: "User friendly & Customizable",
    description:
      "Lorem ipsum dolor sit amet. Culpa ut, quae rerum nostrum ipsa at quod voluptas accusamus praesentium ipsum. Iste quis, officia amet esse a id dolore illo.",
    user: {
      name: "Jan Kowalski",
      company: "Frontend developer of Pixler Lab",
      photo: "jan.png",
    },
  },
  {
    rate: 3,
    title: "User friendly & Customizable",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. sit amet consectetur adipisicing el Nulla culpa ut, quae rerum nostrum ipsa at quod voluptas accusamus praesentium ipsum. Iste quis, officia amet esse a id dolore illo.",
    user: {
      name: "Adam Nowak",
      company: "Backend developer of Pixler Lab",
      photo: "adam.png",
    },
  },
] as ClientSatisfaction[];
