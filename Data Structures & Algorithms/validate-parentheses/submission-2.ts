class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const opener: string[] = [];

        for (const bracket of s) {
            switch (bracket) {
                case "(":
                case "{":
                case "[":
                    opener.push(bracket);
                    break;

                case ")":
                    if (opener.pop() !== "(") {
                        return false;
                    }
                    break;

                case "]":
                    if (opener.pop() !== "[") {
                        return false;
                    }
                    break;

                case "}":
                    if (opener.pop() !== "{") {
                        return false;
                    }
                    break;
            }
        }

        return opener.length === 0;
    }
}
