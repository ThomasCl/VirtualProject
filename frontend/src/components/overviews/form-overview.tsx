import { DataTable } from "@/components/tables/form-table";
import { form_columns } from "../tables/form-columns";
import { Button } from "../ui/button";
import Link from "next/link";

export default function FormOverview({
  inputData = [],
  title = "Lijst van alle forms",
  description = "Hier is de lijst van alle forms!",
}: {
  inputData: any[];
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-5xl px-6 lg:px-8">
      <div className="mt-6 w-full max-w-full flex-none px-3">
        <div className="shadow-soft-xl relative mb-6 flex min-w-0 flex-col break-words rounded-2xl border-0 bg-card bg-clip-border p-10">
          <div className="flex items-center justify-between space-y-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <Button asChild>
              <Link href={"/create-form"}>Create form</Link>
            </Button>
          </div>
          <DataTable columns={form_columns} data={inputData} />
        </div>
      </div>
    </div>
  );
}
