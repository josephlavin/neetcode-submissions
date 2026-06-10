class MinStack {
    min: number[] = [];
    stack: number[] = [];

    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);

        const min = this.getMin();

        if (this.min.length === 0 || val <= min) {
            this.min.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        const val = this.stack.pop();

        const min = this.getMin();

        if (val === min) {
            this.min.pop();
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1] ?? 0;
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.min[this.min.length - 1] ?? 0;
    }
}
