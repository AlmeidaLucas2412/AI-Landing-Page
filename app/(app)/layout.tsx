import { Header } from "@/components/layout/header";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen flex-col p-4">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
