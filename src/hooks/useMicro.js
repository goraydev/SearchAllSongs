export const useMicro = () => {


    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    return {

        recognition,
    }
}
