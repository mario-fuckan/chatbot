import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"

Chatbot.init({
  chatflowid: "e6e06621-a154-49c3-bb62-943a8e38589f",
  apiHost: "https://chatbot.mariofuckan.com",
  chatflowConfig: {
    /* Chatflow Config */
  },
  observersConfig: {
    /* Observers Config */
  },
  theme: {
    button: {
      backgroundColor: "#FF0000",
      right: 40,
      bottom: 40,
      size: 67,
      dragAndDrop: false,
      iconColor: "white",
      customIconSrc:
        "https://d2a36f0cf527f47ba96097dbd00ed260.cdn.bubble.io/f1774525391217x104636647025312180/chat-bubble.png",
      autoWindowOpen: {
        autoOpen: false,
      },
    },
    tooltip: {
      showTooltip: false,
      tooltipMessage: "Hi There 👋!",
      tooltipBackgroundColor: "black",
      tooltipTextColor: "white",
      tooltipFontSize: 16,
    },
    /*
              disclaimer: {
                  title: 'Disclaimer',
                  message: "By using this chatbot, you agree to the <a target=\"_blank\" href=\"https://flowiseai.com/terms\">Terms & Condition</a>",
                  textColor: 'black',
                  buttonColor: '#3b82f6',
                  buttonText: 'Start Chatting',
                  buttonTextColor: 'white',
                  blurredBackgroundColor: 'rgba(0, 0, 0, 0.4)',
                  backgroundColor: 'white'
              },
              */
    customCSS: `
              .chatbot-input {
                border-radius: 40px !important;
              }
              `,
    chatWindow: {
      showTitle: true,
      showAgentMessages: false,
      title: "Chatbot",
      titleTextColor: "#ffffff",
      titleAvatarSrc:
        "https://d2a36f0cf527f47ba96097dbd00ed260.cdn.bubble.io/f1774525387067x141005625618797260/bot-white.png",
      welcomeMessage: "Pozdrav, kako Vam mogu pomoći?",
      errorMessage: "",
      backgroundColor: "#F3F3F3",
      backgroundImage: "",
      height: 600,
      width: 400,
      fontSize: 16,
      /*
                  starterPrompts: [
                      "What is a bot?",
                      "Who are you?"
                  ],
                  */
      starterPromptFontSize: 15,
      clearChatOnReload: false,
      sourceDocsTitle: "Sources:",
      renderHTML: true,
      botMessage: {
        backgroundColor: "#E1E1E1",
        textColor: "#303235",
        showAvatar: true,
        avatarSrc:
          "https://d2a36f0cf527f47ba96097dbd00ed260.cdn.bubble.io/f1774525381451x268606998969008960/bot-red.png",
      },
      userMessage: {
        backgroundColor: "#6C6C6C",
        textColor: "#ffffff",
        showAvatar: false,
        avatarSrc: "",
      },
      textInput: {
        placeholder: "",
        backgroundColor: "#ffffff",
        textColor: "#303235",
        sendButtonColor: "#D9D9D9",
        maxChars: 200,
        maxCharsWarningMessage:
          "Maksimalni broj slova je 200. Molim Vas unesite manji broj slova.",
        autoFocus: true,
        sendMessageSound: false,
        sendSoundLocation: "",
        receiveMessageSound: false,
        receiveSoundLocation: "",
      },
      feedback: {
        color: "#303235",
      },
      dateTimeToggle: {
        date: true,
        time: true,
      },
      footer: {
        textColor: "",
        text: "",
        company: "",
        companyLink: "",
      },
    },
  },
})
