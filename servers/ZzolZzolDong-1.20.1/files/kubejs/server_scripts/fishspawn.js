ServerEvents.loaded(event => {
    if (event.server.persistentData.gameRules)
        return

    event.server.gameRules.set("maxEntityCramming", 210)
})