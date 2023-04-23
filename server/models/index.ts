export interface ISgGovParkingLot {
  items: {
    timestamp: string;
    carpark_data: {
      carpark_info: {
        total_lots: string;
        lot_type: string;
        lots_available: string;
      }[],
      carpark_number: string,
    }[]
  }[]
}

export interface IParkingLotResponse {
  small: { 
    lowest: { amount: number, lots: string[] };
    highest: { amount: number, lots: string[] }; 
  };
  medium: { 
    lowest: { amount: number, lots: string[] };
    highest: { amount: number, lots: string[] }; 
  };
  big: { 
    lowest: { amount: number, lots: string[] };
    highest: { amount: number, lots: string[] }; 
  };
  large: { 
    lowest: { amount: number, lots: string[] };
    highest: { amount: number, lots: string[] }; 
  };
}


