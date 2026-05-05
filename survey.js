const surveyText = {
  zh: {
    eyebrow: "Postpartum Constitution Survey",
    title: "测测你的产后恢复类型",
    intro: "每次只回答一个问题。完成后，我们会根据你的回答倾向给出中性、寒性或热性建议。",
    disclaimer:
      "本测验基于中医理论提供通用调理建议，不构成医疗诊断。如有严重不适，请立即咨询医生或助产士。",
    previous: "上一题",
    next: "下一题",
    seeResult: "查看结果",
    backHome: "返回主页",
    restart: "重新测试",
    resultLabel: "你的回答倾向",
    progress: "问题",
    neutralTitle: "中性体质倾向：温和平衡",
    neutralBody:
      "你更接近大多数人的中性体质，产后恢复主打“温和平衡”。建议从标准28天产后焕新套组开始，配合泡脚、轻柔贴敷和日常洗护。",
    neutralProducts: "推荐：标准版28天产后焕新套组、舒眠足浴包、中草药手工皂。",
    coldTitle: "寒性体质倾向：更需要温热支持",
    coldBody:
      "你的回答显示怕冷、手脚凉或偏寒信号更明显。产后护理可更重视腹部与下半身的温暖，但仍建议从第15天后温和开始。",
    coldProducts: "推荐：温护升级版、温护暖宫贴、温护足浴包。",
    heatTitle: "热性体质倾向：减少过度温热",
    heatBody:
      "你的回答显示偏热、烦躁或口渴等信号更明显。建议减少温热性产品的使用，把重点放在温和清洁、肚脐贴与教育内容上。",
    heatProducts: "推荐：精简版护理组合、草本肚脐贴、中草药手工皂。",
    returnPrompt: "你可以回到网站继续查看适合的产品和品牌内容。",
    returnCta: "回到网站",
  },
  en: {
    eyebrow: "Postpartum Constitution Survey",
    title: "Discover your postpartum recovery style",
    intro:
      "Answer one question at a time. At the end, we will show a neutral, cold, or heat tendency recommendation.",
    disclaimer:
      "This quiz offers general wellness guidance based on traditional Chinese principles. It is not a medical diagnosis. If you feel seriously unwell, please consult your doctor or midwife.",
    previous: "Previous",
    next: "Next",
    seeResult: "See result",
    backHome: "Back to website",
    restart: "Restart",
    resultLabel: "Your answer pattern",
    progress: "Question",
    neutralTitle: "Neutral tendency: gentle balance",
    neutralBody:
      "Your answers are closest to a neutral tendency. Your postpartum care can focus on gentle balance, simple routines, and steady daily support.",
    neutralProducts:
      "Recommended: Standard 28-Day Postpartum Renewal Set, Sleep Ease Foot Soak, Chinese Herbal Soap Set.",
    coldTitle: "Cold tendency: more warming support",
    coldBody:
      "Your answers show more cold signs, such as chilliness or cold hands and feet. You may prefer rituals that focus on lower-body and belly warmth, starting gently from day 15 onward.",
    coldProducts: "Recommended: Warming Upgrade Set, Warming Belly Patch, Warming Foot Soak.",
    heatTitle: "Heat tendency: reduce excess warmth",
    heatBody:
      "Your answers show more heat signs, such as thirst, restlessness, or feeling warm. You may prefer a simplified routine with less warming intensity.",
    heatProducts: "Recommended: Simplified Care Set, Herbal Navel Patch, Chinese Herbal Soap Set.",
    returnPrompt: "You can return to the website to keep exploring products and brand content.",
    returnCta: "Back to website",
  },
};

const questions = [
  {
    zh: "怕冷还是怕热？",
    en: "Do you feel colder or warmer lately?",
    answers: [
      { type: "cold", zh: "非常怕冷，手脚冰凉", en: "Very cold, with cold hands and feet" },
      { type: "heat", zh: "非常怕热，总想喝凉的", en: "Very warm, often craving cold drinks" },
      { type: "neutral", zh: "都还好，或者偶尔", en: "Mostly balanced, or only occasional" },
    ],
  },
  {
    zh: "手脚温度？",
    en: "How do your hands and feet usually feel?",
    answers: [
      { type: "cold", zh: "常年冰凉", en: "Usually cold" },
      { type: "heat", zh: "常年温热", en: "Usually warm" },
      { type: "neutral", zh: "和正常人差不多", en: "About normal" },
    ],
  },
  {
    zh: "恶露情况？",
    en: "How would you describe lochia right now?",
    answers: [
      { type: "cold", zh: "量少、颜色暗、血块多", en: "Light amount, darker color, more clots" },
      { type: "heat", zh: "量多、颜色鲜红、味重", en: "Heavier amount, bright red color, stronger odor" },
      { type: "neutral", zh: "正常排净", en: "Clearing normally" },
    ],
  },
  {
    zh: "口渴与饮水偏好？",
    en: "Thirst and drink preference?",
    answers: [
      { type: "cold", zh: "不渴，喜欢喝热水", en: "Not very thirsty, prefer warm water" },
      { type: "heat", zh: "经常口渴，喜欢喝凉水", en: "Often thirsty, prefer cold water" },
      { type: "neutral", zh: "正常，温水和凉水都可以", en: "Normal; warm or cool water both feel fine" },
    ],
  },
  {
    zh: "产后排便感觉？",
    en: "How does bowel movement feel postpartum?",
    answers: [
      { type: "heat", zh: "困难，不规律", en: "Difficult or irregular" },
      { type: "neutral", zh: "基本正常", en: "Mostly normal" },
      { type: "cold", zh: "大便偏软/不成形", en: "Loose or unformed" },
    ],
  },
  {
    zh: "睡眠质量？",
    en: "How is your sleep quality?",
    answers: [
      { type: "heat", zh: "很差，很难入睡", en: "Poor; hard to fall asleep" },
      { type: "neutral", zh: "一般，能睡但易醒", en: "Average; can sleep but wake easily" },
      { type: "neutral", zh: "较好，基本能休息", en: "Fairly good; able to rest" },
    ],
  },
];

const resultKeys = {
  neutral: ["neutralTitle", "neutralBody", "neutralProducts"],
  cold: ["coldTitle", "coldBody", "coldProducts"],
  heat: ["heatTitle", "heatBody", "heatProducts"],
};

const answers = Array(questions.length).fill(null);
let language = localStorage.getItem("preferredLanguage") === "en" ? "en" : "zh";
let currentStep = 0;

const questionEl = document.querySelector("#stepQuestion");
const resultEl = document.querySelector("#stepSurveyResult");
const progressBar = document.querySelector("#surveyProgressBar");
const prevButton = document.querySelector("#prevQuestion");
const nextButton = document.querySelector("#nextQuestion");
const languageToggle = document.querySelector("#surveyLanguageToggle");
const form = document.querySelector("#stepSurveyForm");

const t = (key) => surveyText[language][key];

const applyText = () => {
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  languageToggle.querySelector("strong").textContent = language === "zh" ? "EN" : "中文";
  renderQuestion();
};

const renderQuestion = () => {
  const question = questions[currentStep];
  const selected = answers[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;
  progressBar.style.width = `${progress}%`;
  prevButton.disabled = currentStep === 0;
  nextButton.textContent = currentStep === questions.length - 1 ? t("seeResult") : t("next");

  questionEl.innerHTML = `
    <p class="question-count">${t("progress")} ${currentStep + 1} / ${questions.length}</p>
    <fieldset class="question-card single-question">
      <legend>${question[language]}</legend>
      <div class="answer-list">
        ${question.answers
          .map(
            (answer, answerIndex) => `
              <label>
                <input type="radio" name="answer" value="${answer.type}" data-index="${answerIndex}" ${
                  selected?.index === answerIndex ? "checked" : ""
                } />
                <span>${answer[language]}</span>
              </label>
            `,
          )
          .join("")}
      </div>
    </fieldset>
  `;
};

const saveCurrentAnswer = () => {
  const checked = questionEl.querySelector("input[name='answer']:checked");
  if (!checked) return false;
  answers[currentStep] = {
    type: checked.value,
    index: Number(checked.dataset.index),
  };
  return true;
};

const getResultType = () => {
  const scores = { neutral: 0, cold: 0, heat: 0 };
  answers.forEach((answer) => {
    scores[answer.type] += 1;
  });
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return {
    type: sorted[0][1] === sorted[1][1] ? "neutral" : sorted[0][0],
    scores,
  };
};

const renderResult = () => {
  const { type, scores } = getResultType();
  const [titleKey, bodyKey, productsKey] = resultKeys[type];
  form.hidden = true;
  resultEl.classList.add("is-visible");
  resultEl.innerHTML = `
    <p class="eyebrow">${t("resultLabel")}</p>
    <h3>${t(titleKey)}</h3>
    <p>${t(bodyKey)}</p>
    <p><strong>${t(productsKey)}</strong></p>
    <div class="score-row">
      <span>Neutral ${scores.neutral}</span>
      <span>Cold ${scores.cold}</span>
      <span>Heat ${scores.heat}</span>
    </div>
    <p>${t("returnPrompt")}</p>
    <div class="survey-actions">
      <a class="primary-link" href="index.html">${t("returnCta")}</a>
      <button class="text-button" type="button" id="restartSurvey">${t("restart")}</button>
    </div>
  `;
  document.querySelector("#restartSurvey").addEventListener("click", () => {
    answers.fill(null);
    currentStep = 0;
    form.hidden = false;
    resultEl.classList.remove("is-visible");
    resultEl.innerHTML = "";
    renderQuestion();
  });
};

prevButton.addEventListener("click", () => {
  saveCurrentAnswer();
  currentStep = Math.max(0, currentStep - 1);
  renderQuestion();
});

nextButton.addEventListener("click", () => {
  if (!saveCurrentAnswer()) return;
  if (currentStep === questions.length - 1) {
    renderResult();
    return;
  }
  currentStep += 1;
  renderQuestion();
});

languageToggle.addEventListener("click", () => {
  language = language === "zh" ? "en" : "zh";
  localStorage.setItem("preferredLanguage", language);
  applyText();
});

applyText();
