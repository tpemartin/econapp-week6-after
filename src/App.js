import "./styles.css";

export default function App() {
  return (
    <div className="card-info">
  <BusinessText/>
  <div className="business-picture">
    <div className="business-image-holder">
      <div className="business-image" />
    </div>
  </div>
</div>

  );
}

function BusinessText(){
  return(
    <div className="business-text">
    <div className="business-description">
      <div className="business-name">Fiber House</div>
      <div className="business-hashtag">
        <div className="business-hashtag-holder">
          <div className="hashtag1">#lantern</div>
          <div className="hashtag2">#handcraft</div>
        </div>
        <div className="Frame2">
          <div className="hashtag3">#natural.dye</div>
          <div className="hashtag4">#bark.canvas</div>
        </div>
      </div>
      <div className="business-description-text">A sensational experience of the color of mountains and the expression of ocean.</div>
    </div>
    <div className="business-category">
      <div className="category-type">
        <div className="type-text">Art &amp; Humanity</div>
      </div>
      <div className="category-image-holder">
        <div className="category-image">
          <div className="example-image" />
        </div>
      </div>
    </div>
  </div>
  )
}