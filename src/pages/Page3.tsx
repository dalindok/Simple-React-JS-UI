import image01 from "../assets/1.jpg";
import image02 from "../assets/2.jpg";
import image03 from "../assets/3.png";

function Part1() {
  return (
    <div className="flex flex-row justify-between h-screen">
      <div className="flex flex-row h-screen ">
        <img src={image01} alt="Pictue01" className="p-5" />
        <div className="flex flex-col pt-5 w-64">
          <img
            src={image02}
            alt="Picture02"
            className="h-3/5"
            style={{ width: "100%", height: "60%", objectFit: "cover" }}
          />
          <img
            src={image03}
            alt="Picture03"
            className="py-5 h-2/5"
            style={{ width: "100%", height: "94%", objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="felx flex-col text-black pt-24 pr-60 text-start">
        <p className="text-4xl">Featured</p>
        <p className="font-bold text-4xl">Work</p>
        <div className="text-sm pt-5">
          <p>01 Anissa &Tam Co., 2021</p>
          <p>02 Mintmade Fashion, 2021</p>
          <p>03 Tully and Drive, 2021</p>
        </div>
      </div>
    </div>
  );
}

export default Part1;
