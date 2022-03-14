import { Icon } from "Icons";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();

  function PrevPage() {
    navigate(-1);
  }

  function NextPage() {
    navigate(+1);
  }
  return (
    <nav className="flex items-center gap-x-4">
      <button
        onClick={PrevPage}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70"
      >
        <Icon size={22} name="prev" />
      </button>
      <button
        onClick={NextPage}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70"
      >
        <Icon size={22} name="next" />
      </button>
    </nav>
  );
}
