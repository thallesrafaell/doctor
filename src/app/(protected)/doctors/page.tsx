import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  PageActions,
  PageContainer,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from "@/components/ui/page-container";

const DoctorsPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Médicos</PageTitle>
          <PageDescription>Gerencie os médicos da sua clínica</PageDescription>
        </PageHeaderContent>
        <PageActions>
          <Button className="cursor-pointer">
            <Plus className="mr-2 h-4 w-4" />
            Adicionar Médico
          </Button>
        </PageActions>
      </PageHeader>
      <PageContent>
        <p>médicos</p>
      </PageContent>
    </PageContainer>
  );
};

export default DoctorsPage;
