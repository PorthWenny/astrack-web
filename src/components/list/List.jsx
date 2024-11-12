import Card from "../card/Card";
import "./list.scss";
import { facilData } from "../../lib/demodata";

function List() {
  const data = facilData;
  return (
    <div className="List">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default List;
