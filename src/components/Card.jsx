import BuyButton from "./BuyButton";
import img from "../utils/sequelize.png";
export default function Card() {
  return (
    <>
      <div className="flex border-red-500">
        <div>
          <img src={img} alt="img" />
        </div>
        <div>
          <div>
            <h1>Titulo</h1>
            <h1>camino</h1>
            <img src="" alt="" />
          </div>
          
        </div>
        <BuyButton />
      </div>
    </>
  );
}
