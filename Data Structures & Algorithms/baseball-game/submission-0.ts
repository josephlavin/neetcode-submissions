class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const scores: number[] = [];

        operations.forEach((o, index) => {
            switch (o) {
                case "+":
                    scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
                    break;

                case "D":
                    scores.push(scores[scores.length - 1] * 2);
                    break;

                case "C":
                    scores.pop();
                    break;

                default:
                    scores.push(parseInt(o));
            }
        });

        return scores.reduce((carry, val) => carry + val, 0);
    }
}
