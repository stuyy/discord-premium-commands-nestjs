import { Test, TestingModule } from '@nestjs/testing';
import { PaymentIntentsController } from './payment-intents.controller';

describe('PaymentIntentsController', () => {
  let controller: PaymentIntentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentIntentsController],
    }).compile();

    controller = module.get<PaymentIntentsController>(PaymentIntentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
