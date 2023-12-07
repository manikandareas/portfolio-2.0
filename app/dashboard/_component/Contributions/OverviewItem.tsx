import AnimateCounter from "@/app/common/components/AnimateCounter";
import Card from "@/app/common/components/Card";

interface OverviewItemProps {
  label: string;
  value: number;
  unit?: string;
}

const OverviewItem = ({ label, value, unit = "" }: OverviewItemProps) => (
  <Card className="flex flex-col self-center rounded-xl bg-neutral-100 py-3 px-4 border border-neutral-200 dark:border-neutral-900">
    <span className="text-sm dark:text-neutral-400">{label}</span>
    <div>
      <AnimateCounter
        className="text-xl lg:text-2xl font-medium text-green-600"
        total={value}
      />
      {unit && <span className="text-sm dark:text-neutral-400"> {unit}</span>}
    </div>
  </Card>
);

export default OverviewItem;
