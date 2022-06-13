const min1 = function(list){
  let minValue = list[0];
    for (let i = 1; i < list.length; i++) {
      const item = list[i];
      if (item < minValue) {
        minValue = item;
      }
    }
    return minValue;
}

const max1 = function(list){
  let maxValue = list[0];
    for (let i = 1; i < list.length; i++) {
      const item = list[i];
      if (item > maxValue) {
        maxValue = item;
      }
    }
    return maxValue;
}

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

describe("Test", function(){
    test("Examples", function(){
    expect(min([-52, 56, 30, 29, -54, 0, -110])).toBe(-110);});
    
    test("Examples", function(){
    expect(min([42, 54, 65, 87, 0])).toBe(0);});
    
    test("Examples", function(){
    expect(max([4,6,2,1,9,63,-134,566])).toBe(566);});
    
    test("Examples", function(){
    expect(max([5])).toBe(5);});
  });