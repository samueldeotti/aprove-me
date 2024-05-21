import { Payable } from '@prisma/client';
import { CreatePayableDto } from '../dto/create-payable.dto';
import { UpdatePayableDto } from '../dto/update-payable.dto';

export default abstract class PayableRepository {
  abstract create(createPayableDto: CreatePayableDto): Promise<Payable>;
  abstract findOne(id: string): Promise<Payable>;
  abstract findAll(): Promise<Payable[]>;
  abstract update(
    id: string,
    updatePayableDto: UpdatePayableDto,
  ): Promise<Payable>;
  abstract remove(id: string): Promise<void>;
}