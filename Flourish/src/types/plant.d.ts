interface Plant {
  id: string;
  name: string;
  description: string;
  waterNeeds: string;
  waterFrequency: string;
  waterAmount: string;
  lightNeeds: string;
  growthRate: string;
  price: number;
  height: number;
  createdAt: string;
  updatedAt: string;
  coverImg: string;
  images: string[];
  scientificName: string;
  potSize: string;
  color: string;
  maintenance: string;
  locationType: string;
  temperatureRange: string;
  specialCare: string;
  propagationMethods: string[];
  careSchedule: CareSchedule[];
  _count: {
    sprouty: number;
  };
}

interface CareSchedule {
  id: string;
  plantId: string;
  taskType: string;
  frequency: string;
  seasonalTiming: string;
  instructions: string;
}

