import playSound from 'play-sound';

const player = playSound({});

const playMp3 = (path) => {
    player.play(path, (err) => {
        if (err) {
          console.error('Erro ao reproduzir o arquivo de áudio:', err);
        } else {
          console.log('Áudio reproduzido com sucesso!');
        }
      });
}

export default playMp3;
