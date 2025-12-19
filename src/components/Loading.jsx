import "../styles/Loading.css";

export default function Loading({ data }) {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <div>
        <p>Loading {data}</p>
      </div>
    </div>
  );
}
