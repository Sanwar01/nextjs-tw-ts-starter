/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next';
import initStripe from 'stripe';
import { supabase } from '@/utils/supabaseClient';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const stripe = initStripe(process.env.STRIPE_SECRET_KEY);
  const customer = await stripe.customers.create({
    email: req.body.record.email,
  });

  await supabase
    .from('profile')
    .update({
      stripe_customer: customer.id,
    })
    .eq('id', req.body.record.id);

  res.status(200).json({ message: `stripe customer created ${customer.id}` });
};