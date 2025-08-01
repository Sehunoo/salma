import React from "react";
import "./Webpage.css"; // Optional: for card-row and card styles

function Cards() {
  let CardData = [
    {
      image:
        "https://th.bing.com/th/id/R.c245fd86c25839074eeb7cddec38b3b6?rik=6Hv%2fv6t1MwHx8g&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f30800000%2fBelle-disney-princess-30818229-1920-1080.jpg&ehk=LeLakP8Um%2byDMuw37wiQ15Y3gnCVrSna7G42PzDsVag%3d&risl=&pid=ImgRaw&r=0",
      title: "Beauty and the Beast",
      description:
        "Belle is the beloved heroine from Disney’s Beauty and the Beast — a character known for her intelligence, kindness, and fierce independence. She’s not your typical princess: she’d rather read a book than attend a ball, and she sees beyond appearances to find the good in others."
    },
    {
      image:
        "https://th.bing.com/th/id/R.c245fd86c25839074eeb7cddec38b3b6?rik=6Hv%2fv6t1MwHx8g&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f30800000%2fBelle-disney-princess-30818229-1920-1080.jpg&ehk=LeLakP8Um%2byDMuw37wiQ15Y3gnCVrSna7G42PzDsVag%3d&risl=&pid=ImgRaw&r=0",
      title: "Beauty and the Beast",
      description:
        "Belle is the beloved heroine from Disney’s Beauty and the Beast — a character known for her intelligence, kindness, and fierce independence. She’s not your typical princess: she’d rather read a book than attend a ball, and she sees beyond appearances to find the good in others."
    },
    {
      image:
        "https://th.bing.com/th/id/R.c245fd86c25839074eeb7cddec38b3b6?rik=6Hv%2fv6t1MwHx8g&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f30800000%2fBelle-disney-princess-30818229-1920-1080.jpg&ehk=LeLakP8Um%2byDMuw37wiQ15Y3gnCVrSna7G42PzDsVag%3d&risl=&pid=ImgRaw&r=0",
      title: "Beauty and the Beast",
      description:
        "Belle is the beloved heroine from Disney’s Beauty and the Beast — a character known for her intelligence, kindness, and fierce independence. She’s not your typical princess: she’d rather read a book than attend a ball, and she sees beyond appearances to find the good in others."
    }
  ];

  return (
    <div className="card-row">
      {CardData.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.image} alt={card.title} />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;