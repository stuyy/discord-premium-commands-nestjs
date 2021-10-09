import { Inject, Injectable } from '@nestjs/common';
import { IStripeService } from '../stripe/stripe';
import { IPaymentIntentService } from './payment-intents';

@Injectable()
export class PaymentIntentsService implements IPaymentIntentService {
  constructor(
    @Inject('STRIPE_SERVICE') private readonly stripeService: IStripeService,
  ) {}
  create() {
    return this.stripeService.createPaymentIntent();
  }
}
