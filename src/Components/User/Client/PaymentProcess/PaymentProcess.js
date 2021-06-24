import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitCardForm from './SplitCardForm';


const stripePromise = loadStripe('pk_test_51IeAtQHje2ICnTUd7bNBbVCQOkF8ArgTZ7EiysAW90ulsX5XBeYdJPh4EamwO7F9mxDhR86quwCxov9EAbxb7Qyg00JjDVccsW');

const ProcessPayment = ({ handlePaymentSuccess }) => {

    return (
        <Elements stripe={stripePromise}>
            <SplitCardForm handlePaymentSuccess={handlePaymentSuccess} />
        </Elements>
    );
};

export default ProcessPayment;