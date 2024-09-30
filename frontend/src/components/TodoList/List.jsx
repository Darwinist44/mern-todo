import { useEffect } from "react";

import data from "../../libs/mock";
import Item from "./Item";

const List = () => {
  useEffect(() => {}, []);

  return (
    <ul>
      {data.map((el) => {
        {
          return <Item id={el.id} name={el.name} finished={el.completed} />;
        }
      })}
    </ul>
  );
};

export default List;
