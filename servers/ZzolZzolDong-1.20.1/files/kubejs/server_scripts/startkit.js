const starter_items = ["ftbquests:book","minecraft:fishing_rod"];
PlayerEvents.loggedIn(e => {
    if(e.player.stages.has('start')) return;
    e.player.stages.add('start');

    starter_items.forEach(item => e.player.give(item));
});