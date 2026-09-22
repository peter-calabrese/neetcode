class Solution {
  /**
   * @param {string[]} operations
   * @return {number}
   */
  calPoints(operations) {
    const record = [];
    for (const  op of operations) {
      if (Number(op)) {
        record.push(Number(op));
      } else {
        switch (op) {
          case "D":
            record.push(record[record.length - 1] * 2);
            break;
          case "C":
            record.pop();
            break;
          default:
            record.push(Number(record[record.length - 2] + record[record.length - 1]));
            break;
        }
      }
    }

    if(record.length === 0) return 0
    return record.reduce((acc,cur)=> acc + cur ) || 0;
  }
}
