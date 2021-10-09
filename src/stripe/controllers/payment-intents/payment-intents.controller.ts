import { Controller, Get, Inject, Post } from '@nestjs/common';
import { IPaymentIntentService } from '../../services/payment-intents/payment-intents';

@Controller('payment-intents')
export class PaymentIntentsController {
  constructor(
    @Inject('PAYMENT_INTENTS')
    private readonly paymentIntentsService: IPaymentIntentService,
  ) {}

  @Post('create')
  createPaymentIntent() {
    return this.paymentIntentsService.create();
  }
}
