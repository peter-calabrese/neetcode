class Solution {
  /**
   * @param {string[]} operations
   * @return {number}
   */
  calPoints(operations) {
    const record = [];
    for (const op of operations) {
      switch (op) {
        case "+":
          const secondLast = record[record.length - 1];
          const last = record[record.length - 2];
          record.push(secondLast + last);
          break;
        case "D":
          record.push(record[record.length - 1] * 2);
          break;
        case "C":
          record.pop();
          break;
        default:
          record.push(Number(op));
      }
    }

    return record.reduce((acc, cur) => acc + cur, 0);
  }
}
