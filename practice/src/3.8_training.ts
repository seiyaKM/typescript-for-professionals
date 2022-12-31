type User = {
    name: string,
    age: number,
    premiumUser: boolean
}

const data = `
riku,3,0
yoko,41,0
seiya,29,1
`;

const users: User[] = data.split(/\n/).filter(v => v !== "").map(v => {
    const [name, age, isPremium] = v.split(",")
    return { name: name, age: Number.parseInt(age), premiumUser: isPremium === "1" }
})

for (const user of users) {
    if (user.premiumUser) {
        console.log(`${user.name}(${user.age}) is premium user`);
    } else {
        console.log(`${user.name}(${user.age})  is not premium user`);
    }
}
