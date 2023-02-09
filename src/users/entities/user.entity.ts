import { Column, Model, Table } from "sequelize-typescript";

@Table
export class User extends Model {

  @Column({ allowNull:false,autoIncrement:true,primaryKey:true})
  id: number;
  
  @Column
  first_name: string;

  @Column
  last_name: string;

  @Column({ allowNull: false, unique: true })
  email: string;

  @Column
  password: string;

  @Column
  refreshToken: string;
}
