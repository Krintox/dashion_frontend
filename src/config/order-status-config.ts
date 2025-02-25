import { OrderStatus } from "@/types";

type OrderStatusInfo = {
  label: string;
  value: OrderStatus;
  progressValue: number;
};

export const ORDER_STATUS: OrderStatusInfo[] = [
  { label: "Order Received", value: "placed", progressValue: 0 },
  {
    label: "Processing Design",
    value: "paid",
    progressValue: 25,
  },
  { label: "Printing in Progress", value: "inProgress", progressValue: 50 },
  { label: "Quality Check & Packaging", value: "outForDelivery", progressValue: 75 },
  { label: "Shipped", value: "delivered", progressValue: 100 },
];
