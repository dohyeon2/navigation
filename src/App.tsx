import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { menu, MenuItem } from "./menu";

const getMenuItemByID = (menuItemID: MenuItem["ID"]) => {
  return menu.find((x) => x.ID === menuItemID);
};

const getChildrenMenu = (menuItemID: MenuItem["ID"]) => {
  return menu.filter((x) => x.parent === menuItemID);
};
function App() {
  const [currentMenuItemIDList, setCurrentMenuItemIDList] = useState<number[]>(
    []
  );
  const appendCurrentMenuItem = (menuItemID: MenuItem["ID"]) => {
    setCurrentMenuItemIDList((s) => [...s, menuItemID]);
  };
  const rootMenu = menu.filter((x) => !x.parent);
  return (
    <Layout className="App">
      <>
        <RootMenu>
          {rootMenu.map((menuItem) => (
            <li onClick={() => appendCurrentMenuItem(menuItem.ID)}>
              {menuItem.label}
            </li>
          ))}
        </RootMenu>
        {currentMenuItemIDList.map((x) => {
          const currentMenu = getMenuItemByID(x);
          const children = getChildrenMenu(x);
          return (
            <ul>
              <li>{currentMenu?.label}</li>
              <ul>
                {children?.map((menuItem) => (
                  <li>{menuItem.label}</li>
                ))}
              </ul>
            </ul>
          );
        })}
      </>
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  display: flex;
`;

const RootMenu = styled.ul``;
