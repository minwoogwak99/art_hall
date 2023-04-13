import "./mainSlides.css";

function MainSlides(props) {
  return (
    <div className="mainSlides">
      <img src={props.content.imageLink} alt="" />
      <div className="infos">
        <div className="info subTitle">{props.content.subTitle}</div>
        <div className="info title">{props.content.title}</div>
        <div className="info period">{props.content.period}</div>
      </div>
    </div>
  );
}

export default MainSlides;
