import { useState } from "react";
import data from "./data.json";
import Slideshow from "./Slideshow";

export default function CardPreview({ data: item, click, move, index }) {
  console.log(data);
  let [show, setShow] = useState(false);
  return (
    <div className="cardbox">
      {show && <Slideshow close ={()=> setShow(false)} image={item.images.gallery} />}
      <div className="header">
        <img src="galleria.png" />
        <button className="stop" onClick={click}>
          STOP SLIDESHOW
        </button>
      </div>
      <div className="centerbox">
        <div className="rectangle1">
          <div className="leftsidebox">
            <div className="drawing">
              <img src={item.images.thumbnail} />
            </div>
            <div className="previewdrawing"  onClick={() => setShow(true)}>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.71431 0L9.21432 1.5L6.85718 3.85714L8.14288 5.14285L10.5 2.78571L12 4.28571V0H7.71431Z"
                  fill="white"
                />
                <path
                  d="M3.85714 6.85715L1.5 9.21429L0 7.71428V12H4.28571L2.78571 10.5L5.14285 8.14285L3.85714 6.85715Z"
                  fill="white"
                />
                <path
                  d="M8.14288 6.85715L6.85718 8.14285L9.21432 10.5L7.71431 12H12V7.71428L10.5 9.21429L8.14288 6.85715Z"
                  fill="white"
                />
                <path
                  d="M4.28571 0H0V4.28571L1.5 2.78571L3.85714 5.14285L5.14285 3.85714L2.78571 1.5L4.28571 0Z"
                  fill="white"
                />  
              </svg>
              <div className="textpreview">VIEW IMAGE</div>
            </div>
          </div>
          <div className="middlebox">
            <div className="infocontainer">
              <div className="infopreview">
                <div className="titlepreview">{item.name}</div>
                <div className="artistpreview">{item.artist.name}</div>
              </div>
            </div>

            <div className="artistpicture">
              <img src={item.artist.image} />
            </div>
          </div>
        </div>

        <div className="infotext">
          <div className="year">{item.year}</div>
          <div className="text">{item.description}</div>
          <div className="sourselink">
            <a href={item.source}>Go to sourse</a>{" "}
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="infopreview">
          <div className="titlepreview">{item.name}</div>
          <div className="artistpreview">{item.artist.name}</div>
        </div>
        <div className="arrows">
          <img
            src="Group 5 Copy.png"
            onClick={() => {
              if (index !== 0) {
                move(-1);
              }
            }}
            style={{ opacity: index == 0 ? "0.3" : "1" }}
          />
          <img
            src="Group 5.png"
            onClick={() => {
              if (index !== data.length - 1) {
                move(+1);
              }
            }}
            style={{ opacity: index == data.length - 1 ? "0.3" : "1" }}
          />
        </div>
      </div>
    </div>
  );
}
