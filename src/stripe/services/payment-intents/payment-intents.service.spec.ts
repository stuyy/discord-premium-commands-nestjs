import { Test, TestingModule } from '@nestjs/testing';
import { PaymentIntentsService } from './payment-intents.service';

describe('PaymentIntentsService', () => {
  let service: PaymentIntentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentIntentsService],
    }).compile();

    service = module.get<PaymentIntentsService>(PaymentIntentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
