export const useMicro = () => {


    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    return {

        recognition,
    }
}
