import { TUser } from "@/types/user.type";

export interface TInternship {
    id: number;
    users: TUser[];
    location: string;
    startDate: Date;
    endDate: Date;
    companyName: string;
	lat: number;
	lng: number;
}