import { UpdateParams } from "@/components/companies/hooks/useFilter";
import {
  CardStackIcon,
  GlobeIcon,
  InfoCircledIcon,
  Share1Icon,
} from "@radix-ui/react-icons";
import { lazy, LazyExoticComponent, ReactNode } from "react";

import Location from "./detail/location";

export type DetailComponentProps<T> = {
  params: T;
  updateFilters: (params: UpdateParams) => void;
};

export type Config<T> = {
  id: string;
  name: string;
  description: string;
  //   DetailComponent: LazyExoticComponent<
  //     (props: DetailComponentProps<T>) => JSX.Element
  //   >;
  DetailComponent: (props: DetailComponentProps<T>) => JSX.Element;
  Icon?: ReturnType<typeof GlobeIcon>;
  keys: (keyof T)[];
  hidden?: boolean;
};

export const configs = [
  {
    id: "location",
    name: "Location",
    description: "this is the descriptions.",
    DetailComponent: Location,
    Icon: <GlobeIcon />,
    keys: ["location"],
    hidden: false,
    params: {},
  },
  //   {
  //     id: "keywords",
  //     name: "Keywords",
  //     description: "this is the descriptions.",
  //     DetailComponent: Location,
  //     Icon: <InfoCircledIcon />,
  //     keys: ["keywords"],
  //     hidden: false,
  //   },
  {
    id: "revenue",
    name: "Rrevenue",
    description: "this is the descriptions.",
    // DetailComponent: Location,
    Icon: <Share1Icon />,
    keys: ["revenue"],
    hidden: true,
    params: {},
  },
  {
    id: "technologies",
    name: "Technologies",
    description: "this is the descriptions.",
    // DetailComponent: Location,
    Icon: <CardStackIcon />,
    keys: ["technologies"],
    hidden: true,
    params: {},
  },
];
