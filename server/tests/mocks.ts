import { ISgGovParkingLot } from "../models";

export const successParkingLotData: ISgGovParkingLot = {
  items: [
    { 
      timestamp: "123", 
      carpark_data: [
        {
          carpark_info: [{ total_lots: "12", lot_type: "C", lots_available: "3"}],
          carpark_number: "A1"
        },
        {
          carpark_info: [{ total_lots: "14", lot_type: "C", lots_available: "0"}],
          carpark_number: "A2"
        }
      ]
    }
  ]
}

export const smallGroupData: ISgGovParkingLot = {
  items: [
    { 
      timestamp: "123", 
      carpark_data: [
        {
          carpark_info: [{ total_lots: "12", lot_type: "C", lots_available: "3"}],
          carpark_number: "A1"
        },
        {
          carpark_info: [{ total_lots: "14", lot_type: "C", lots_available: "0"}],
          carpark_number: "A2"
        }
      ]
    }
  ]
}

export const mediumGroupData: ISgGovParkingLot = {
  items: [
    { 
      timestamp: "123", 
      carpark_data: [
        {
          carpark_info: [{ total_lots: "101", lot_type: "C", lots_available: "3"}],
          carpark_number: "A1"
        },
        {
          carpark_info: [{ total_lots: "101", lot_type: "C", lots_available: "0"}],
          carpark_number: "A2"
        }
      ]
    }
  ]
}

export const bigGroupData: ISgGovParkingLot = {
  items: [
    { 
      timestamp: "123", 
      carpark_data: [
        {
          carpark_info: [{ total_lots: "301", lot_type: "C", lots_available: "3"}],
          carpark_number: "A1"
        },
        {
          carpark_info: [{ total_lots: "302", lot_type: "C", lots_available: "0"}],
          carpark_number: "A2"
        }
      ]
    }
  ]
}

export const largeGroupData: ISgGovParkingLot = {
  items: [
    { 
      timestamp: "123", 
      carpark_data: [
        {
          carpark_info: [{ total_lots: "501", lot_type: "C", lots_available: "3"}],
          carpark_number: "A1"
        },
        {
          carpark_info: [{ total_lots: "502", lot_type: "C", lots_available: "0"}],
          carpark_number: "A2"
        }
      ]
    }
  ]
}

export const successParkingLotDataAllSizes: ISgGovParkingLot = {
  items: [
    { 
      timestamp: "123", 
      carpark_data: [
        {
          carpark_info: [{ total_lots: "12", lot_type: "C", lots_available: "3"}],
          carpark_number: "A1"
        },
        {
          carpark_info: [{ total_lots: "14", lot_type: "C", lots_available: "0"}],
          carpark_number: "A2"
        },
        {
          carpark_info: [{ total_lots: "101", lot_type: "C", lots_available: "50"}],
          carpark_number: "A1"
        },
        {
          carpark_info: [{ total_lots: "105", lot_type: "C", lots_available: "2"}],
          carpark_number: "A2"
        },
        {
          carpark_info: [{ total_lots: "301", lot_type: "C", lots_available: "50"}],
          carpark_number: "A1"
        },
        {
          carpark_info: [{ total_lots: "305", lot_type: "C", lots_available: "2"}],
          carpark_number: "A2"
        },
        {
          carpark_info: [{ total_lots: "401", lot_type: "C", lots_available: "50"}],
          carpark_number: "A1"
        },
        {
          carpark_info: [{ total_lots: "405", lot_type: "C", lots_available: "2"}],
          carpark_number: "A2"
        }
      ]
    }
  ]
}