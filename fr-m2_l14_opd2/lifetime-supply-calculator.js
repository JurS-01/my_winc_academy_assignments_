const calculateSupply = (age, amountPerDay) => {
    const ripeAge = 100;
    const lifetimeSupply = (365 * amountPerDay) * (ripeAge - age);
    return `You will need ${Math.round(lifetimeSupply)} to last you until the ripe old age of ${Math.round(ripeAge)}`;
}

console.log(calculateSupply(23, 7));
console.log(calculateSupply(53, 3));
console.log(calculateSupply(7, 2));

