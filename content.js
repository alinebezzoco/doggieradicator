var load;
function ready() {
    load = setTimeout(fireContentLoadedEvent, 3000);
}

document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);

function fireContentLoadedEvent() {
    ready();

    var glbComentarios = document.getElementById('boxComentarios')

    if (glbComentarios) {
        document.getElementById('boxComentarios')
            .innerHTML = '<h1 style="font-size: 30px; letter-spacing: -1.5px; font-weight: 300; margin-bottom: 10px;">Em vez de ficar triste lendo esses comentários, que tal ficar feliz vendo esses lindos catioros?</h1><hr style="border: 1px solid #d8d8d8;" /><p class="glbComentarios-disclaimer" style="font-size: 14px;">Tenha um ótimo dia! :)</p><img src="http://www.randomdoggiegenerator.com/randomdoggie.php" alt="Fotos aleatórias de gatinhos" title="Fotos aleatórias de gatinhos" style="width: 100%; height: auto;" /><small style="text-align: right; display: block;">Créditos das fotos: Random Doggie Generator</small>';

    }
}


