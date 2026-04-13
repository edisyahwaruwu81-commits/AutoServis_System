export interface Job {
  id: string
  licensePlate: string
  carModel: string
  status: "waiting" | "in-progress" | "completed"
  customerName: string
  estimatedTime?: string
}

export const mockJobs: Job[] = [
  {
    id: "1",
    licensePlate: "B 1234 XYZ",
    carModel: "Toyota Avanza 2021",
    status: "in-progress",
    customerName: "Ahmad Suryadi",
    estimatedTime: "2 hours",
  },
  {
    id: "2",
    licensePlate: "D 5678 ABC",
    carModel: "Honda Jazz 2020",
    status: "waiting",
    customerName: "Budi Santoso",
    estimatedTime: "1.5 hours",
  },
  {
    id: "3",
    licensePlate: "F 9012 DEF",
    carModel: "Suzuki Ertiga 2022",
    status: "waiting",
    customerName: "Dewi Lestari",
    estimatedTime: "3 hours",
  },
  {
    id: "4",
    licensePlate: "B 3456 GHI",
    carModel: "Daihatsu Xenia 2019",
    status: "in-progress",
    customerName: "Eko Prasetyo",
    estimatedTime: "45 min",
  },
  {
    id: "5",
    licensePlate: "D 7890 JKL",
    carModel: "Mitsubishi Xpander 2023",
    status: "waiting",
    customerName: "Fitri Handayani",
  },
]
