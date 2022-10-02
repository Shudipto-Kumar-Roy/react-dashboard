import { AiOutlineDashboard } from "react-icons/ai";
import {
  HiOutlineClipboardList,
  HiOutlineUsers,
  HiArchive,
} from "react-icons/hi";
import { IoAnalyticsOutline } from "react-icons/io5";
import { GiMoneyStack, GiTakeMyMoney, GiPayMoney } from "react-icons/gi";
import img1 from "../assets/images/customer_1.jpg";
import img2 from "../assets/images/customer_2.jpg";
import img3 from "../assets/images/customer_3.jpg";
export const Data = [
  { icon: AiOutlineDashboard, heading: "Dashboard" },
  { icon: HiOutlineClipboardList, heading: "Orders" },
  { icon: HiOutlineUsers, heading: "Customers" },
  { icon: HiArchive, heading: "Products" },
  { icon: IoAnalyticsOutline, heading: "Analytics" },
];

export const CardsData = [
  {
    title: "Sales",
    color: {
      backGround: "#f5704a",
      boxShadow: "0 1rem 2rem 0 #f5704a",
    },
    barValue: 80,
    value: "25,970",
    icon: GiMoneyStack,
    series: [{ name: "Sales", data: [31, 40, 50, 51, 42, 109, 100] }],
  },
  {
    title: "Revenue",
    color: {
      backGround: "#828d00",
      boxShadow: "0 1rem 2rem 0 #828d00",
    },
    barValue: 70,
    value: "30,250",
    icon: GiTakeMyMoney,
    series: [{ name: "Sales", data: [31, 40, 50, 51, 42, 109, 100] }],
  },
  {
    title: "Expense",
    color: {
      backGround: "#bc0000",
      boxShadow: "0 1rem 2rem 0 #bc0000",
    },
    barValue: 60,
    value: "10,200",
    icon: GiPayMoney,
    series: [{ name: "Sales", data: [31, 40, 50, 51, 42, 109, 100] }],
  },
];

export const updateData = [
  {
    image: img1,
    name: "John Doe",
    notification: "has received Cat school Bag correctly",
    time: "24 seconds ago",
  },
  {
    image: img2,
    name: "Fredrik Smith",
    notification: "has received Nokia cellphone m-1542 correctly",
    time: "24 seconds ago",
  },
  {
    image: img3,
    name: "John Doe",
    notification: "has ordered Titan wrest watch m-8800 correctly",
    time: "24 seconds ago",
  },
];
