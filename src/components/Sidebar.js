import { useState } from "react";

const Sidebar = (props) => {
  const { items, heading, onSelectItem } = props;

  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <ul className="list-group">
        <h2>{heading} </h2>
        {items.map((item, index) => (
          <a
            id={index}
            href={"#" + item}
            className={
              selectedIndex === index
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action "
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item, index);
            }}
          >
            {item}
          </a>
        ))}
      </ul>
    </>
  );
};

export default Sidebar;
