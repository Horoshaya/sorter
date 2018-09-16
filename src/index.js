const AGE_COMPARATOR = (left, right) => left.age - right.age;
const REVERSE_COMPARATOR = (left, right) => right - left;
const STRINGIFY_COMPARATOR = (left, right) => JSON.stringify(left, null, 2).length - JSON.stringify(right, null, 2).length;

class Sorter {
 constructor() {
        this.arr = [];
        this.compareFunction = {};
        this.ageComporator = (left, right) => left.age - right.age;
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
        indices.sort();
        var toSort = []; 
        for (var i = 0; indices.length - 1 >= i; i++) {
          toSort.push(this.arr[indices[i]]);
        }

        if (this.compareFunction == AGE_COMPARATOR) {
          toSort.sort(function(a, b) {
          return a.age - b.age;
          });
        } else if (this.compareFunction == REVERSE_COMPARATOR) {
          toSort.sort(function(a, b) {
          return b - a;
          });
        } 
        else {
          toSort.sort(function(a, b) {
            return a - b;
          });
        }
        
        for (var i = 0; indices.length - 1 >= i; i++) {
          this.arr[indices[i]] = toSort[i];
        }

        return this.arr;
      }

      setComparator(compareFunction) {
        if (compareFunction == AGE_COMPARATOR) {
          console.log('test')
        }
        return this.compareFunction = compareFunction;
      }
}

module.exports = Sorter;