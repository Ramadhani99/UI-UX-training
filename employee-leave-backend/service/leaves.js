leaves = [];

leavesDetails = {};

leavesDetails.retrieveLeaves = () => {
  return leaves;
};

leavesDetails.retrieveLeaveDetail = (mname) => {
  for (let i = 0; i < leaves.length; i++) {
    if (leaves[i]["employeeName"].toLowerCase() == mname.toLowerCase())
      return leaves[i];
  }
};

leavesDetails.addLeave = (Leave) => {
  if (Leave) {
    let Obj = JSON.parse(Leave);
    leaves.push(Obj);
    console.log(Leave);
    return true;
  } else return false;
};

leavesDetails.deleteLeaveDetail = (mname) => {
  let index;
  if (mname) {
    for (let i = 0; i < leaves.length; i++) {
      if (leaves[i]["name"].toLowerCase() == mname.toLowerCase()) {
        index = i;
        break;
      }
    }
    leaves.splice(index, 1);
    console.log(leaves);
    return true;
  } else return false;
};

leavesDetails.updateLeaveDetails = (mname, key, value) => {
  if (mname) {
    for (let i = 0; i < leaves.length; i++) {
      if (leaves[i]["name"].toLowerCase() == mname.toLowerCase()) {
        leaves[key] = value;
        return true;
      }
    }
  } else return false;
};

module.exports = leavesDetails;
