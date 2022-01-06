import {
    Entity,
    PrimaryGeneratedColumn,
    JoinColumn, OneToOne, Column,
    ManyToOne,
} from 'typeorm'

@Entity()  //decorator

export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    firstName: string
    
    @Column()
    lastName: string
    
    @Column()
    accountNumber: number
    
    @Column()
    accountDigit: number
   
    @Column()
    wallet: number

    @Column()
    email: string

    @Column()
    password: string

}