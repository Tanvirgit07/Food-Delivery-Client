import DemoCarousel from "../../Components/Carousel/DemoCarousel";
import MenuBox from "../../Components/MenuBox/MenuBox";
import MenuTItle from "../../Components/MenuBox/MenuTItle";

const Home = () => {
  return (
    <div>
      <div>
        <DemoCarousel />
      </div>
      <div>
        <MenuTItle />
      </div>
      <div>
        <MenuBox />
      </div>
      <div>
        <div className="divider divider-end"></div>
      </div>
    </div>
  );
};

export default Home;
