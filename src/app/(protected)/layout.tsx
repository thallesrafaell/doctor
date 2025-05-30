import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { AppSidebar } from "./_components/AppSidebar";

const LayoutProtected = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
};

export default LayoutProtected;
