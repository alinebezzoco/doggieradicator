const ready = () => load = setTimeout(removeGlbComments, 3000)

const removeGlbComments = () => { 
    ready()

    const glbComments = document.getElementById('boxComentarios')

    if(glbComments) 
    glbComments[i].innerHTML = 
    '<h1 style="font-size: 2rem; letter-spacing: -1.5px; font-weight: 300; margin-bottom: 1rem;">Em vez de ficar triste lendo esses comentários, que tal ficar feliz vendo esses lindos catioros?</h1><hr style="border: 1px solid #d8d8d8;" /><p class="glbComentarios-disclaimer" style="font-size: 1.25rem;">Tenha um ótimo dia! :)</p><img src="http://www.randomdoggiegenerator.com/randomdoggie.php" alt="Fotos aleatórias de gatinhos" title="Fotos aleatórias de gatinhos" style="width: 100%; height: auto;" /><small style="text-align: right; display: block;">Créditos das fotos: Random Doggie Generator</small>';
}

document.addEventListener('DOMContentLoaded', removeGlbComments, false)