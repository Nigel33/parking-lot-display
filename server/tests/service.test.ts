import { processData } from '../service';
import { successParkingLotData, smallGroupData, mediumGroupData, bigGroupData, largeGroupData } from './mocks';

describe('processData', () => {
  describe("success", () => {
    it("returns result if data is valid", () => {
      const res = processData(successParkingLotData);
      expect(res).toHaveProperty("small", {highest: { amount: 3, lots: ["A1"]}, lowest: { amount: 0, lots: ["A2"]} });
    });

    describe("allocateToGroup", () => {
        
      it("allocates to small group", () => {
        const res = processData(smallGroupData)
        expect(res).toHaveProperty("small", {highest: { amount: 3, lots: ["A1"]}, lowest: { amount: 0, lots: ["A2"]} });
        expect(res).toHaveProperty("medium", {highest: { amount: 0, lots: [""]}, lowest: { amount: 999999, lots: [""]} });
        expect(res).toHaveProperty("big", {highest: { amount: 0, lots: [""]}, lowest: { amount: 999999, lots: [""]} });
        expect(res).toHaveProperty("large", {highest: { amount: 0, lots: [""]}, lowest: { amount: 999999, lots: [""]} });
      })

      it("allocates to medium group", () => {
        const res = processData(mediumGroupData)
        expect(res).toHaveProperty("medium", {highest: { amount: 3, lots: ["A1"]}, lowest: { amount: 0, lots: ["A2"]} });
        expect(res).toHaveProperty("small", {highest: { amount: 0, lots: [""]}, lowest: { amount: 999999, lots: [""]} });
        expect(res).toHaveProperty("big", {highest: { amount: 0, lots: [""]}, lowest: { amount: 999999, lots: [""]} });
        expect(res).toHaveProperty("large", {highest: { amount: 0, lots: [""]}, lowest: { amount: 999999, lots: [""]} });
      })

      it("allocates to big group", () => {
        const res = processData(bigGroupData)
        expect(res).toHaveProperty("big", {highest: { amount: 3, lots: ["A1"]}, lowest: { amount: 0, lots: ["A2"]} });
        expect(res).toHaveProperty("medium", {highest: { amount: 0, lots: [""]}, lowest: { amount: 999999, lots: [""]} });
        expect(res).toHaveProperty("small", {highest: { amount: 0, lots: [""]}, lowest: { amount: 999999, lots: [""]} });
        expect(res).toHaveProperty("large", {highest: { amount: 0, lots: [""]}, lowest: { amount: 999999, lots: [""]} });
      })

      it("allocates to large group", () => {
        const res = processData(largeGroupData)
        expect(res).toHaveProperty("large", {highest: { amount: 3, lots: ["A1"]}, lowest: { amount: 0, lots: ["A2"]} });
        expect(res).toHaveProperty("medium", {highest: { amount: 0, lots: [""]}, lowest: { amount: 999999, lots: [""]} });
        expect(res).toHaveProperty("big", {highest: { amount: 0, lots: [""]}, lowest: { amount: 999999, lots: [""]} });
        expect(res).toHaveProperty("small", {highest: { amount: 0, lots: [""]}, lowest: { amount: 999999, lots: [""]} });
      })
    });
  })
  
  describe("failure", () => {
    it("throws error if there is no data", () => {
      const mockData = {};
      try {
        processData(mockData as any);
      } catch(e) {
        expect(e).toEqual(new Error("Issue with data, please try again"));
      }
    });

    it("throws error if carpark_data is missing", () => {
      const mockData = { items: [] };
      try {
        processData(mockData as any);
      } catch(e) {
        expect(e).toEqual(new Error("Issue with data, please try again"));
      }
    });
  });
});

