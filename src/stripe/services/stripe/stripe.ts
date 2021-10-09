import Stripe from 'stripe';

export interface IStripeService {
  createPaymentIntent(): Promise<Stripe.PaymentIntent>;
}
