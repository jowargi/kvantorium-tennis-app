import Header from "@/components/header/Header";
import { FC } from "react";

const AppLayout: FC<LayoutProps<"/">> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default AppLayout;
