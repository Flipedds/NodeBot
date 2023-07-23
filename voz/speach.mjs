import { createWriteStream } from 'fs';
import { getAudioUrl } from 'google-tts-api';
import axios from 'axios';

async function speech(textToSpeech, outputFile) {
  // Specify the language and voice. For example, 'en' for English, 'en-us' for US English.
  const language = 'pt';
  const voice = 'pt-br';

  // Generate the audio URL
  const audioUrl = getAudioUrl(textToSpeech, {
    lang: language,
    slow: false,
    host: 'https://translate.google.com',
    splitPunct: ',.;',
  });

  // Function to download the audio and save it to a file
  const downloadAudio = async (url, outputFile) => {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream',
    });

    const audioStream = response.data.pipe(createWriteStream(outputFile));

    return new Promise((resolve, reject) => {
      audioStream.on('finish', () => resolve());
      audioStream.on('error', (error) => reject(error));
    });
  };

  // Call the downloadAudio function to save the audio to the specified file
  try {
    await downloadAudio(audioUrl, outputFile);
    console.log('Audio saved:', outputFile);
    return outputFile;
  } catch (error) {
    console.error('Error:', error.stack || error);
  }
};

export default speech;

