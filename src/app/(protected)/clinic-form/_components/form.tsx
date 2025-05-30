"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

import { createClinic } from "@/actions/create-clinic";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const loginSchema = z.object({
  name: z.string().trim().min(1, { message: "Nome é obrigatório" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function FormClinc() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      name: "",
    },
  });

  // ... existing code ...
  async function onSubmit(data: LoginFormValues) {
    try {
      await createClinic(data.name);
    } catch (error) {
      if (!isRedirectError(error)) {
        console.error("Erro ao criar clínica:", error);
        toast.error("Erro ao criar clínica");
      }
    }
  }
  // ... existing code ...

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome da Clínica</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o nome da clínica" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter>
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting && (
                <Loader className="h-4 w-4 animate-spin" />
              )}
              Criar Clínica
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </>
  );
}
