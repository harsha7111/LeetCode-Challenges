var runningSum = function(nums) {
    let output = [];
    for(let i=0;i<nums.length;i++) {
        let sum = 0;
        for(let j=0;j<i+1;j++) {
            sum = sum + nums[j]
        }
        output[i] = sum;
    }
    return output
};

let nums = [1,2,3,4]
runningSum(nums);
