export const useMicro = () => {


    const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    return {

        recognition,
    }
}
