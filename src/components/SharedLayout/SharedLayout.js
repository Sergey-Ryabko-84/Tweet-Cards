import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { LayoutWrapper } from "./SharedLayout.styled";
import Header from "../Header/Header";

function SharedLayout() {
  return (
    <LayoutWrapper>
      <Header/>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </LayoutWrapper>
  );
}

export default SharedLayout;
