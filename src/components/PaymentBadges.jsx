export default function PaymentBadges({ light = false }) {
  return (
    <div className={`payment-badges ${light ? 'light' : ''}`} aria-label="Accepted payment methods">
      {['VISA','mastercard','RuPay','UPI','G Pay','PhonePe'].map(x => <span key={x}>{x}</span>)}
    </div>
  )
}
