import dollar from "../assets/image/dollar.svg";
import euro from "../assets/image/euro.svg";
import tl from "../assets/image/tl.svg";
import azn from "../assets/image/azn.svg";
function OtherCurrencies({result}) {
  return (
    <>
      <div className="other">
        <div className="other-img">
          <img id="azn" src={azn} alt="" />
        </div>
        <span>AZN</span>
        <span>{result.AZN}</span>
      </div>
      <div className="other">
        <div className="other-img">
          <img src={dollar} alt="" />
        </div>
        <span>Dollar</span>
        <span>{result.USD}</span>
      </div>
      <div className="other">
        <div className="other-img">
          <img src={euro} alt="" />
        </div>
        <span>Euro</span>
        <span>{result.EUR}</span>
      </div>
      <div className="other">
        <div className="other-img">
          <img src={tl} alt="" />
        </div>
        <span>TL</span>
        <span>{result.TRY}</span>
      </div>
    </>
  );
}

export default OtherCurrencies;
