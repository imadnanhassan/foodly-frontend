import { menu_list } from "../../assets/assets";
import "./exploremenu.css";
// eslint-disable-next-line react/prop-types
export default function ExploreMenu({ category, setCategory }) {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        eligendi soluta, odit optio iusto ipsam in facere atque nam sed?
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "ALL" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
