export default function Video() {
  return (
    <div className="video">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/k0Kp5fwaEds?si=lyuJU2m79y9c0-Sv"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}
