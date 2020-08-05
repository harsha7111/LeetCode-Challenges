var topKFrequent = function(nums, k) {
    let number = [];
    let myMap = new Map();
    let unique = [...new Set(nums)];
    for(value of unique) {
        myMap.set(value, nums.filter(elem => elem=== value).length)
    }
    keys = [...(new Map([...myMap.entries()].sort((a, b) => b[1] - a[1])).keys())];
    for(let i=0;i<k ;i++) {
        number.push(keys[i]);
    }
    return number;
};
