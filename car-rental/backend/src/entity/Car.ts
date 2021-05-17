import { Column, Entity, JoinTable,  ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Status } from './Status';
import { User } from './User';

@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, type: 'text' })
    type: string;

    @Column({ nullable: true, type: 'text' })
    manufacturer: string;

    @Column({ nullable: true })
    imgUrl: string;

    @Column({ nullable: true })
    license: string;

    @Column({ type: 'float' })
    rentalno: number;

    @Column({ type: Date })
    acqDate: Date;

    @Column({ type: 'float' })
    rfee: number;
    
    @Column({ type: 'float' })
    kmfee: number;

    @ManyToOne(type => User, user=>user.cars,{
        eager: true,
        cascade: true
    })
    rentedby: User;

    @ManyToOne(type =>Status,{
        eager: true,
        cascade: true
    })
    @JoinTable()
    condition: Status;
}