import { Module } from '@nestjs/common';
import { Stripe } from 'stripe';
import { PaymentIntentsController } from './controllers/payment-intents/payment-intents.controller';
import { PaymentIntentsService } from './services/payment-intents/payment-intents.service';
import { StripeService } from './services/stripe/stripe.service';

@Module({
  controllers: [PaymentIntentsController],
  providers: [
    {
      provide: 'STRIPE',
      useValue: new Stripe(
        'sk_test_51HAZJXANztZLfIGWVCPrmsSTN6aEjyqIy1XnvzdUCc3t65dwK2RuquY7oFZYiSzIkWgfIeFBSelDxH7AZwjwRdy400nJon5sZ9',
        {
          apiVersion: '2020-08-27',
        },
      ),
    },
    {
      provide: 'PAYMENT_INTENTS',
      useClass: PaymentIntentsService,
    },
    {
      provide: 'STRIPE_SERVICE',
      useClass: StripeService,
    },
  ],
})
export class StripeModule {}
