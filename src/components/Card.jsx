import "../styles/Card.css";

export default function Card({ cardData }) {
  return (
    <>
      {cardData.map((currCard, idx) => (
        <div className="cardBox" key={idx}>
          <img src={currCard.img} alt="" />
          <div className="data">
            <h2>{currCard.title}</h2>
            <p className="desc">{currCard.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
}
