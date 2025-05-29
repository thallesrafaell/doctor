import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import FormClinc from "./components/form";

export default function ClinicForm() {
  return (
    <div>
      <Dialog open>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Adicionar CLínica</DialogTitle>
            <DialogDescription>
              Adicione os detalhes da clínica para continuar.
            </DialogDescription>
          </DialogHeader>
          <FormClinc />
        </DialogContent>
      </Dialog>
    </div>
  );
}
