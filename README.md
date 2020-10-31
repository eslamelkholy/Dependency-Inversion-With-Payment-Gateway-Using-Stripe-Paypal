# Payment-Gateway-Stripe-Paypal-Using-Dependency-Inversion

This Repo Related to Online Payment Service With Stripe and Paypal Following SOLID Principles With Focus On Dependency Inversion Principle
And How To Use it in Real Case Senario You Can More Details at my Article Here
[Dependency Inversion With Payment Gateways Stripe/Paypal Using Nodejs](https://dev.to/eslamelkholy/dependency-inversion-with-payment-gateways-stripe-paypal-using-nodejs-4n1g)

## Dependency Inversion Idea

- High level Modules should not depend on low level modules Both Should Depend on Abstractions ?
- That's Means Code Depends on The Wrapper We Created Not The Actual Implementation Of Dependcies We Are Using
- Here We Don't Want Our Code Depends On How Stripe/Paypal Works
- So If We Want Switch Between Stripe/Paypal We Will Change The Wrapper And it's Going To Be Easy Then

## Problem

- Change Payment Gateway From Stripe >> Paypal Will Be Very Hard and We Will Change tons Of Code
- Our Code Depends on the Actual Implementation Of The Payment Service and This Going to be Hard to Maintain
- Test Everything From Scratch Again
- Making any Transaction Going To Be Really Hard to Trace Later

## Solution

- Create Intermediate Layer This Layer Going to Be Wrapper Around Payment Gateway Services
- e.g StripeServiceWrapper, PaypalServiceWrapper
- So We Just Abstract the Payment Gateways Idea Using These Wrappers it's
- Our Code Now Depends On These Wrappers Not The Actual Implementation Of Dependency We're Using

## How To Start
- npm install
- Make Account At Stripe https://dashboard.stripe.com/login 
- Set Environment Variables at .env STRIPE_PUBLISH_KEY & STRIPE_SECRET_KEY
- Signup at Paypal https://developer.paypal.com/developer/accounts/
- Set Environment Variables at .env PAYPAL_CLIENT_ID & PAYPAL_SECRET
- Hit Stripe End Point http://localhost:3000/payment/ With Empty Post Request 
- Hit http://localhost:3000/payment/paypal With Empty Post Request
