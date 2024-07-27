// import { BookingDetails } from 'src/bookingDetails/booking-detail.entity';
import { BookingDetails } from 'src/bookingDetails/booking-detail.entity';
import { Customers } from 'src/customers/customers.entitiy';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'bookings' })
export class Booking {
    @PrimaryGeneratedColumn('uuid')
    bookingId: string

    @Column({type: 'varchar', length: 24})
    date: string

    @Column({type: 'varchar', length: 24})
    time: string

    @Column({type: 'boolean', default: false})
    isDeleted: boolean

  @OneToOne(() => BookingDetails)
  @JoinColumn({ name: 'booking-details-id' })
  bookingDetails: BookingDetails;

  @ManyToOne(() => Customers, (customer) => customer.bookings)
  @JoinColumn({ name: 'customer-id' })
  customer: Customers;
}
