export interface Stat {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}


export const stats: Stat[] = [
  { value: 1230, suffix: "", label: "devices we've tracked since 2019" },
  { value: 98, suffix: "%", label: "recovery rate" },
  { value: 13, suffix: "", label: "countries reached since 2019" },
  { value: 7, suffix: "", label: "years building" },
];
