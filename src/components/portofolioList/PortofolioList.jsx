import "./portofolioList.scss";

export default function PortofolioList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "portofolioList active" : "portofolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
