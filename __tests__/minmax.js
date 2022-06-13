var min = function(list){
    return list[0];
}

var max = function(list){
    return list[0];
}

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