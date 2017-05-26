function isProgrammeID(pid){
  const validPIDRegex = /^[0-9b-df-hj-np-tv-z]{8,15}$/
  return validPIDRegex.test(pid);
}

module.exports = isProgrammeID;
