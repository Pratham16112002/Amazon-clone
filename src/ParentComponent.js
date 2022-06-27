import { Elements } from '@stripe/react-stripe-js'
import React from 'react'
import Payment from './Payment'
import { loadStripe } from "@stripe/stripe-js";


function ParentComponent() {
    const promise = loadStripe(
        "pk_test_51LEVdwSDmWU9oqZxYseErGlB4HbkKQqlXkJsY7l9vlJ8Aaju8ArPp6H9LtVE14YZXzjLSTB1dUVFZvBiVoR0Lp1400Qt2KmGOB"
    )
  return (
    <Elements stripe={promise}>
        <Payment/>
    </Elements>
  )
}

export default ParentComponent