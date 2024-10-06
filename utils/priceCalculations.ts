export const TotalPrice = (adultPrice:number, childPrice:number,adults:number,childrens:number,totalAddOnPrice:number, transportType:string,privateRidePrice:number) => {
    const totalPeople= adults + childrens
    let total =
      adultPrice * adults + childPrice* childrens + totalAddOnPrice 
    if (transportType === "private") {
      total += totalPeople * privateRidePrice
    }
    return total
  }