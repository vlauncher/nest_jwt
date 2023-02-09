import { Model } from "sequelize-typescript";
export declare class User extends Model {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    refreshToken: string;
}
