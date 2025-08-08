export interface StatisticItem {
  value: number;
  suffix?: string;
  label: string;
}

export const HOME_STATISTICS: StatisticItem[] = [
  {
    value: 4,
    label: 'Key Projects'
  },
  {
    value: 27,
    label: 'LGAs Served'
  },
  {
    value: 4,
    label: 'Donor Partners'
  },
  {
    value: 3,
    label: 'Sectors of Focus'
  }
];

export const PROJECTS_STATISTICS: StatisticItem[] = [
  {
    value: 4,
    label: 'Active Projects'
  },
  {
    value: 4,
    label: 'Donor Partners'
  },
  {
    value: 27,
    label: 'LGAs Covered'
  },
  {
    value: 3,
    label: 'Sectors of Impact'
  }
];
