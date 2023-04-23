import { CarparkSizeEnum } from './enum'; 
import { ISgGovParkingLot, IParkingLotResponse } from './models';

export const processData = (response: ISgGovParkingLot) => {
  const items = response?.items ?? [];  
  if (items.length <= 0 || items?.[0]?.['carpark_data']?.length <= 0) throw new Error("Issue with data, please try again");
  
  const res: IParkingLotResponse = {
    small: {
      lowest: { amount: 999999, lots: [""] },
      highest: { amount: 0, lots: [""] },
    }, 
    medium: {
      lowest: { amount: 999999, lots: [""] },
      highest: { amount: 0, lots: [""] },
    },
    big: {
      lowest: { amount: 999999, lots: [""] },
      highest: { amount: 0, lots: [""] },
    },
    large: {
      lowest: { amount: 999999, lots: [""] },
      highest: { amount: 0, lots: [""] },
    }
  }

  const length = items[0]['carpark_data'].length;
  
  for(let i = 0; i < length; i++) {    
    const data = items[0]?.carpark_data;
    processSize(data[i], res);
  }  

  return res;
}

const processSize = (carparkObj: ISgGovParkingLot['items'][0]['carpark_data'][0], resObj: IParkingLotResponse) => {  
  const carparkInfo = carparkObj?.['carpark_info']?.[0];
  const totalLotsNo = +carparkInfo?.['total_lots'];  
  const lotsAvailableNo = +carparkInfo?.['lots_available'];
  const carparkNumberString = carparkObj?.['carpark_number'];

  if (totalLotsNo < 100) {
    allocateToGroup(resObj, { size: CarparkSizeEnum.small, lotsAvailableNo, carparkNumberString });
  } else if (totalLotsNo >= 100 && totalLotsNo < 300) {
    allocateToGroup(resObj, { size: CarparkSizeEnum.medium, lotsAvailableNo, carparkNumberString });
  } else if (totalLotsNo >= 300 && totalLotsNo < 400) {
    allocateToGroup(resObj, { size: CarparkSizeEnum.big, lotsAvailableNo, carparkNumberString });
  } else if (totalLotsNo >= 400) {
    allocateToGroup(resObj, { size: CarparkSizeEnum.large, lotsAvailableNo, carparkNumberString });
  }
}

const allocateToGroup = (resObj: IParkingLotResponse, { size, lotsAvailableNo, carparkNumberString }) => {
  const group = resObj[size];
  const lowest = group.lowest.amount;
  const highest = group.highest.amount;
  
  if (lotsAvailableNo < lowest) {
    group.lowest.amount = lotsAvailableNo;
    group.lowest.lots = [carparkNumberString];
  } else if (lotsAvailableNo === lowest) {
    group.lowest.amount = lotsAvailableNo;
    group.lowest.lots.push(carparkNumberString);
  }

  if (lotsAvailableNo > highest) {
    group.highest.amount = lotsAvailableNo;
    group.highest.lots = [carparkNumberString];
  } else if (lotsAvailableNo === highest) {
    group.highest.amount = lotsAvailableNo;
    group.highest.lots.push(carparkNumberString);
  }
}

