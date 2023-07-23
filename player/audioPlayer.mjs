import playSound from 'play-sound';

const audioFilePath = './output.mp3'; // Substitua pelo caminho do seu arquivo de áudio

const player = playSound({});

const playMp3 = () => {
    player.play(audioFilePath, (err) => {
        if (err) {
          console.error('Erro ao reproduzir o arquivo de áudio:', err);
        } else {
          console.log('Áudio reproduzido com sucesso!');
        }
      });
}

export default playMp3;
