import { Inject, Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { IStripeService } from './stripe';

@Injectable()
export class StripeService implements IStripeService {
  constructor(@Inject('STRIPE') private readonly stripe: Stripe) {}
  createPaymentIntent() {
    return this.stripe.paymentIntents.create({
      amount: 99000,
      currency: 'usd',
      payment_method_types: ['card'],
    });
  }
}
