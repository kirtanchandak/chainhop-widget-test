import logo from "../assets/logo.png";
import eclips from "../assets/Ellipse 2.png";

function Navbar() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0">
        <img src={eclips} alt="Overlay" className="w-full h-auto" />
      </div>
      <div className="relative z-10 flex justify-between px-44 p-4 text-white">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="mt-3">
          <ul className="flex gap-6 font-normal">
            <li>About</li>
            <li>Services</li>
            <li>Process</li>
            <li>Work</li>
            <li>Pricing</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <button className="border-[#6881FF] border rounded-lg py-2 px-4 font-bold">
            Book a call
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
