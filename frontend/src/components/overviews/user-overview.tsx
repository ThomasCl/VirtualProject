import { columns } from "@/components/tables/user-columns";
import { DataTable } from "@/components/tables/data-table";

export default function Overview({
  inputData = [],
  title = "Lijst van alle studenten",
  description = "Hier is de lijst van alle studenten!",
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
          </div>
          <DataTable columns={columns} data={inputData} />
        </div>
      </div>
    </div>
  );
}
