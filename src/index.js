
class Sorter {
      constructor() {
        this.arr = [];
        this.compareFunction = function(a, b) {
            return a - b;
          }    
      }

      add(element) {
        return this.arr.push(element);
      }

      at(index) {
        return this.arr[index];
      }

      get length() {
        return this.arr.length
      }

      toArray() {
        return this.arr;
      }

      sort(indices) {

        var toSort = []; 
        for (var i = 0; indices.length - 1 >= i; i++) {
          toSort.push(this.arr[indices[i]]);
        }

        toSort.sort(this.compareFunction);
        
        indices = indices.sort();

        for (var i = 0; indices.length - 1 >= i; i++) {
          this.arr[indices[i]] = toSort[i];
        }

        return this.arr;
      }

      setComparator(compareFunction) {
        return this.compareFunction = compareFunction;
      }
}

module.exports = Sorter;