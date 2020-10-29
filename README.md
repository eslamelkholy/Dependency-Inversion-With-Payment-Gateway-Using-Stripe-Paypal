# Payment-Gateway-Stripe-Paypal-Using-Dependency-Inversion

This Repo Related to Online Payment Service With Stripe and Paypal Following SOLID Principles With Focus On Dependency Inversion Principle
And How To Use it in Real Case Senario

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
