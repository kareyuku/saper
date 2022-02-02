const bombFields = [
    '🟫', '1️⃣ ', '2️⃣ ', '3️⃣ ', '4️⃣ ', '5️⃣ ', '6️⃣', '7️⃣', '8️⃣'
]

const findBombs = (board, field) => {
    if(field.content != '🟫') return;
    let bombsCount = 0;

    const a2 = board.find(x => x.content == '💣' && x.height == field.height && x.width == field.width - 1)
    const a3 = board.find(x => x.content == '💣' && x.height == field.height && x.width == field.width + 1)
    const b1 = board.find(x => x.content == '💣' && x.height == field.height + 1 && x.width == field.width)
    const b2 = board.find(x => x.content == '💣' && x.height == field.height + 1 && x.width == field.width - 1)
    const b3 = board.find(x => x.content == '💣' && x.height == field.height + 1 && x.width == field.width + 1)
    const c1 = board.find(x => x.content == '💣' && x.height == field.height - 1 && x.width == field.width)
    const c2 = board.find(x => x.content == '💣' && x.height == field.height - 1 && x.width == field.width - 1)
    const c3 = board.find(x => x.content == '💣' && x.height == field.height - 1 && x.width == field.width + 1)
    if(a2) bombsCount += 1;
    if(a3) bombsCount += 1;
    if(b1) bombsCount += 1;
    if(b2) bombsCount += 1;
    if(b3) bombsCount += 1;
    if(c1) bombsCount += 1;
    if(c2) bombsCount += 1;
    if(c3) bombsCount += 1;

    return bombFields[bombsCount]
} 

module.exports = findBombs