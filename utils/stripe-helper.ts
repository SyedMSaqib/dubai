 function formatAmountForStripe(amount: number) {
    // Multiply by 100 to convert AED to fils (smallest unit)
    const amountInSmallestUnit = Math.round(amount * 100);
  
    // Return the formatted amount based on the currency
    return amountInSmallestUnit
      
  }
  export default formatAmountForStripe