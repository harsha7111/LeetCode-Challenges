var pivotIndex = function(nums) {
    for(let i=0;i< nums.length;i++) {
        let leftSum = 0;
        let rightSum = 0;
        for(let j=0; j<i; j++) {
            leftSum = leftSum + nums[j];
        }
        for(let k=i+1; k<nums.length; k++) {
            rightSum = rightSum + nums[k];   
        }
        if(leftSum === rightSum) {
            return i;
        }
    }
     return -1;
};

let nums = [2,1,-1]
pivotIndex(nums);
