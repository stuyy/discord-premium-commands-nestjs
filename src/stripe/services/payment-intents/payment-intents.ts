import Stripe from 'stripe';

export interface IPaymentIntentService {
  create(): Promise<Stripe.PaymentIntent>;
}
