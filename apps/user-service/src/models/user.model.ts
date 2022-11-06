import { Column, Table, Model } from "sequelize-typescript";

@Table({tableName:'Users'})
export class User extends Model<User> {
    @Column( {allowNull: false })
    firstName: string;

    @Column( {allowNull: false })
    lastName: string;

    @Column( { allowNull: false,unique: true })
    email: string;

    @Column( {allowNull: false})
    password: string;    

    @Column( { allowNull: false})
    type: string;
}