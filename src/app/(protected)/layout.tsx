import { SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar } from "./_components/AppSidebar";

const LayoutProtected = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />

        {children}
      </SidebarProvider>
    </>
  );
};

export default LayoutProtected;
