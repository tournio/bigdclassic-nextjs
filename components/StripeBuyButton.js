const StripeBuyButton = ({buttonId}) => {
  return (
    <stripe-buy-button buy-button-id={buttonId}
                       publishable-key={process.env.NEXT_PUBLIC_STRIPE_API_KEY}
    ></stripe-buy-button>
  );
}

export default StripeBuyButton;
