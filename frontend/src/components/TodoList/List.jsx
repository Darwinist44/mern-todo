import useSWR from "swr";
import fetcher from "../../libs/fetcher";

import Item from "./Item";
import { useEffect } from "react";

const List = () => {
  const { data, error, isLoading } = useSWR("/tasks", fetcher);

  useEffect(() => {
    console.log(data);
  }, [isLoading]);

  return (
    <ul>
      {!isLoading &&
        data.map((el) => {
          {
            return <Item id={el.id} name={el.name} finished={el.completed} />;
          }
        })}
    </ul>
  );
};

export default List;
