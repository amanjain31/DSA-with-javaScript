/**
 * @param {string} num
 * @param {number} t
 * @return {string}
 */
var smallestNumber = function(num, t) {
    const need = [0, 0, 0, 0];
    const primes = [2, 3, 5, 7];

    for (let i = 0; i < 4; i++) {
        while (t % primes[i] === 0) {
            need[i]++;
            t /= primes[i];
        }
    }

    if (t !== 1) return "-1";

    const factors = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [2, 0, 0, 0],
        [0, 0, 1, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 1],
        [3, 0, 0, 0],
        [0, 2, 0, 0]
    ];

    const minDigits = ([a, b, c, d]) => {
        let ans = Infinity;

        for (let six = 0; six <= Math.min(a, b); six++) {
            ans = Math.min(
                ans,
                six +
                Math.ceil((a - six) / 3) +
                Math.ceil((b - six) / 2) +
                c + d
            );
        }

        return ans;
    };

    const build = (req, len) => {
        let [a, b, c, d] = req;
        let best = null;

        for (let six = 0; six <= Math.min(a, b); six++) {
            let x = a - six;
            let y = b - six;
            let digits = [];

            for (let i = 0; i < six; i++) digits.push(6);

            while (x >= 3) {
                digits.push(8);
                x -= 3;
            }

            if (x === 2) digits.push(4);
            if (x === 1) digits.push(2);

            while (y >= 2) {
                digits.push(9);
                y -= 2;
            }

            if (y === 1) digits.push(3);

            for (let i = 0; i < c; i++) digits.push(5);
            for (let i = 0; i < d; i++) digits.push(7);

            digits.sort((a, b) => a - b);

            const s = digits.join("");

            if (
                best === null ||
                s.length < best.length ||
                (s.length === best.length && s < best)
            ) {
                best = s;
            }
        }

        return "1".repeat(len - best.length) + best;
    };

    let current = [0, 0, 0, 0];
    let firstZero = num.indexOf("0");

    for (const ch of num) {
        const d = Number(ch);

        if (d === 0) continue;

        for (let j = 0; j < 4; j++) {
            current[j] += factors[d][j];
        }
    }

    if (
        firstZero === -1 &&
        need.every((x, i) => current[i] >= x)
    ) {
        return num;
    }

    const min = minDigits(need);

    if (min > num.length) {
        return build(need, min);
    }

    let prefix = [...current];

    for (let i = num.length - 1; i >= 0; i--) {
        const digit = Number(num[i]);

        for (let j = 0; j < 4; j++) {
            prefix[j] -= factors[digit][j];
        }

        if (firstZero !== -1 && i > firstZero) {
            continue;
        }

        for (let next = digit + 1; next <= 9; next++) {
            const remaining = num.length - i - 1;
            const required = [0, 0, 0, 0];

            for (let j = 0; j < 4; j++) {
                required[j] = Math.max(
                    0,
                    need[j] - prefix[j] - factors[next][j]
                );
            }

            if (minDigits(required) <= remaining) {
                return (
                    num.slice(0, i) +
                    next +
                    build(required, remaining)
                );
            }
        }
    }

    return build(need, num.length + 1);
};