import { Card } from "./Card";

export default function CardContainer() {
  const cardObject = [
    {
      name: "Mark",
      title: "Frontend developer",
      bio: "I like to work with different frontend technologies and play video games in my free time.",
    },
    {
      name: "Tiffany",
      title: "Engineering manager",
      bio: "I have worked in tech for 15 years and love to help people grow in this industry.",
    },
    {
      name: "Doug",
      title: "Backend developer",
      bio: "I have been a software developer for 20 years and I love working with Go and Rust.",
    },
  ];

  return (
    <div className="flex-container">
      <Card {...cardObject[0]} />
      <Card {...cardObject[1]} />
      <Card {...cardObject[2]} />
    </div>
  );
}
