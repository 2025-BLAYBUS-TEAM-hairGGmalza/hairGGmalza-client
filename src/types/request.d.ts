export interface DesignerInfo {
  name: string;
  age: number;
}

export interface MeetingRequest {
  meetingType: 0 | 1 | 2 | null;
  region: 0 | 1 | 2 | 3 | null;
  minPrice: number | null;
  maxPrice: number | null;
  majors: string[] | null;
}

export interface Designer {
  designerId: number;
  name: string;
  region: string;
  address: string;
  profile: string;
  description: string;
  offlinePrice: number;
  onlinePrice: number;
  meetingType: string;
  majors: string[];
}
