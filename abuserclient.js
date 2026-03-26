// why you in my file skidder
// i know this is simple code but dont be a skid bro
// tbh if you really REALLY want to skid then ykw ill make a template for you jst dm me on dc my user is surreal.music
player.onChat("!explosion", function () {
    blocks.fill(
    TNT,
    pos(-1, -1, -1),
    pos(1, 1, 1),
    FillOperation.Replace
    )
})
player.onChat("!ice", function () {
    blocks.fill(
    ICE,
    pos(-3, -1, -3),
    pos(3, -1, 3),
    FillOperation.Replace
    )
})
player.onChat("!cage", function () {
    blocks.fill(
    GLASS,
    pos(-2, 0, -2),
    pos(2, 4, 2),
    FillOperation.Replace
    )
})
player.onChat("!tnttrail", function () {
    fireTrailOn = false
    bridgeOn = false
})
player.onChat("!help", function () {
    player.say("§cABUSER CLIENT")
    player.say("!p1 - page 1")
})
player.onChat("!rainfire", function () {
    for (let index = 0; index < 10; index++) {
        blocks.place(FIRE, pos(randint(-5, 5), 5, randint(-5, 5)))
    }
})
// PAGE 3 (NON OP + MORE)
player.onChat("!p3", function () {
    player.say("§cPage 3")
    player.say("!nonOP")
    player.say("!agentbridge")
    player.say("!agentwall")
    player.say("!agenttnt")
    player.say("!agentmove")
    player.say("!agentspin")
    player.say("!agentplace")
    player.say("!agentline")
    player.say("!agentcube")
    player.say("!agentstairs")
    player.say("!agentdig")
    player.say("!p2")
})
player.onChat("!lavacube", function () {
    blocks.fill(
    LAVA,
    pos(-3, 0, -3),
    pos(3, 6, 3),
    FillOperation.Replace
    )
})
player.onChat("!abridge", function () {
    bridgeOn = !(bridgeOn)
})
// NON OP (AGENT)
player.onChat("!nonOP", function () {
    player.say("§cNon OP Agent Active")
    agent.teleportToPlayer()
})
// PAGE 1
player.onChat("!p1", function () {
    player.say("§cPage 1")
    player.say("!hg")
    player.say("!abridge")
    player.say("!tntfloor")
    player.say("!firetrail")
    player.say("!lavafall")
    player.say("!explosion")
    player.say("!lightning")
    player.say("!water")
    player.say("!ice")
    player.say("!trap")
    player.say("!tower")
    player.say("!hole")
    player.say("!p2")
})
player.onChat("!bridge10", function () {
    blocks.fill(
    STONE,
    pos(0, -1, 0),
    pos(10, -1, 0),
    FillOperation.Replace
    )
})
player.onChat("!lightning", function () {
    mobs.spawn(LIGHTNING_BOLT, pos(0, 1, 0))
})
player.onChat("!wall", function () {
    blocks.fill(
    STONE,
    pos(-5, 0, 0),
    pos(5, 5, 0),
    FillOperation.Replace
    )
})
// COMMANDS
player.onChat("!hg", function () {
    blocks.fill(
    TNT,
    pos(-5, 1, -5),
    pos(5, 9, 5),
    FillOperation.Replace
    )
    blocks.fill(
    RED_WOOL,
    pos(-5, 0, -5),
    pos(5, 0, 5),
    FillOperation.Replace
    )
    blocks.fill(
    RED_WOOL,
    pos(-5, 10, -5),
    pos(5, 10, 5),
    FillOperation.Replace
    )
    blocks.place(FIRE, pos(0, 5, 0))
})
// PAGE 2 COMMANDS
player.onChat("!bigtnt", function () {
    blocks.fill(
    TNT,
    pos(-10, -1, -10),
    pos(10, -1, 10),
    FillOperation.Replace
    )
})
player.onTravelled(WALK, function () {
    if (bridgeOn) {
        blocks.place(GRASS, pos(0, -2, 0))
        blocks.place(GRASS, pos(0, -2, 0))
        blocks.place(GRASS, pos(0, -2, 0))
    }
    if (bridgeOn) {
        blocks.place(GRASS, pos(0, -1, 0))
        blocks.place(GRASS, pos(0, -1, 0))
        blocks.place(GRASS, pos(0, -1, 0))
    }
    if (fireTrailOn) {
        blocks.place(FIRE, pos(0, -1, 0))
    }
})
player.onChat("!floorlava", function () {
    blocks.fill(
    LAVA,
    pos(-5, -1, -5),
    pos(5, -1, 5),
    FillOperation.Replace
    )
})
// PAGE 2
player.onChat("!p2", function () {
    player.say("§cPage 2")
    player.say("!bigtnt")
    player.say("!firecube")
    player.say("!lavacube")
    player.say("!bridge10")
    player.say("!boom")
    player.say("!rainfire")
    player.say("!teleup")
    player.say("!tnttrail")
    player.say("!floorlava")
    player.say("!wall")
    player.say("!cage")
    player.say("!nonOP")
    player.say("!p3")
})
player.onChat("!trap", function () {
    blocks.fill(
    TNT,
    pos(-2, -3, -2),
    pos(2, -1, 2),
    FillOperation.Replace
    )
})
player.onTravelled(FALL, function () {
    if (bridgeOn) {
        blocks.place(GRASS, pos(0, -2, 0))
        blocks.place(GRASS, pos(0, -2, 0))
        blocks.place(GRASS, pos(0, -2, 0))
    }
    if (bridgeOn) {
        blocks.place(GRASS, pos(0, -1, 0))
        blocks.place(GRASS, pos(0, -1, 0))
        blocks.place(GRASS, pos(0, -1, 0))
    }
})
player.onChat("!water", function () {
    blocks.fill(
    WATER,
    pos(-3, -1, -3),
    pos(3, -1, 3),
    FillOperation.Replace
    )
})
player.onChat("!hole", function () {
    blocks.fill(
    AIR,
    pos(-2, -5, -2),
    pos(2, 0, 2),
    FillOperation.Replace
    )
})
player.onChat("!lavafall", function () {
    blocks.fill(
    LAVA,
    pos(0, -5, 0),
    pos(0, -1, 0),
    FillOperation.Replace
    )
})
player.onChat("!tower", function () {
    blocks.fill(
    STONE,
    pos(0, 0, 0),
    pos(0, 10, 0),
    FillOperation.Replace
    )
})
player.onChat("!teleup", function () {
    player.teleport(pos(0, 10, 0))
})
player.onChat("!firecube", function () {
    blocks.fill(
    FIRE,
    pos(-3, 0, -3),
    pos(3, 6, 3),
    FillOperation.Replace
    )
})
player.onChat("!boom", function () {
    blocks.fill(
    TNT,
    pos(-3, -3, -3),
    pos(3, 3, 3),
    FillOperation.Replace
    )
})
player.onChat("!firetrail", function () {
    fireTrailOn = !(fireTrailOn)
})
player.onChat("!tntfloor", function () {
    blocks.fill(
    TNT,
    pos(-5, -1, -5),
    pos(5, -1, 5),
    FillOperation.Replace
    )
})
player.onChat("!agenttnt", function () {
    agent.setItem(TNT, 10, 1)
    agent.place(DOWN)
})
player.onChat("!agentwall", function () {
    agent.setItem(STONE, 64, 1)
    for (let index = 0; index < 5; index++) {
        agent.place(FORWARD)
        agent.move(UP, 1)
    }
})
player.onChat("!agentbridge", function () {
    agent.setItem(STONE, 64, 1)
    for (let index = 0; index < 5; index++) {
        agent.move(FORWARD, 1)
        agent.place(DOWN)
    }
})
let bridgeOn = false
let fireTrailOn = false
player.say("§cABUSER CLIENT LOADING...")
for (let index = 0; index < 5; index++) {
    blocks.place(FIRE, pos(randint(-2, 2), 1, randint(-2, 2)))
}
player.say("§cABUSER CLIENT LOADED! - DEVELOPED BY TWENTY/RILEY")
player.say("Type !help")
