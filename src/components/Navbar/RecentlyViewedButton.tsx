"use client";

import Button from "@/components/ui-common/Button";
import { Clock } from "lucide-react";

const RecentlyViewedButton = ({ onClick }: { onClick: () => void }) => (
  <Button onClick={onClick} variant="secondary" className="p-2">
    <Clock className="w-5 h-5" />
  </Button>
);
export default RecentlyViewedButton;
