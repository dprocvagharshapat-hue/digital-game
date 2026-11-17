
let score = 0;
let matchingChecked = false;

const matchingTasks = [
    {
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500",
        description: "Այս գաղտնի համադրությունն օգտագործում ենք համակարգիչ կամ կայք մուտք գործելիս։ Այն պետք է լինի դժվար կռահելի։",
        answer: "Գաղտնաբառ"
    },
    {
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500",
        description: "Այստեղ կարող ենք համացանցում պահել մեր նկարները, փաստաթղթերը և այլ նիշքեր, որպեսզի դրանք հասանելի լինեն տարբեր սարքերից։",
        answer: "Ամպային տիրույթ"
    },
    {
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500",
        description: "Մի քանի մարդ միասին աշխատում է ընդհանուր նպատակի հասնելու համար՝ կիսվելով մտքերով և կատարելով տարբեր աշխատանքներ։",
        answer: "Թիմային աշխատանք"
    },
    {
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500",
        description: "Համացանցում տարբեր կայքերից տեղեկություններ ենք գտնում և կարդում աշխարհի իրադարձությունների մասին։",
        answer: "Տեղեկատվության որոնում"
    },
    {
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500",
        description: "Պահպանում ենք մեր անունը, գաղտնաբառը և այլ անձնական տեղեկությունները, որպեսզի դրանք չհայտնվեն անծանոթ մարդկանց ձեռքում։",
        answer: "Անձնական տվյալների պաշտպանություն"
    },
    {
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500",
        description: "Մարդիկ ինտերնետի միջոցով կապ են հաստատում, հաղորդագրություններ ուղարկում և միասին աշխատում՝ նույնիսկ տարբեր վայրերում գտնվելիս։",
        answer: "Առցանց համագործակցություն"
    }
];

const choices = [
    "Գաղտնաբառ",
    "Ամպային տիրույթ",
    "Թիմային աշխատանք",
    "Տեղեկատվության որոնում",
    "Անձնական տվյալների պաշտպանություն",
    "Առցանց համագործակցություն"
];

const quizQuestions = [
    {
        question: "1. Ի՞նչ է անձնական տվյալը։",
        options: [
            "Մարդուն վերաբերող տեղեկություն",
            "Միայն խաղի անունը",
            "Միայն համակարգչի գույնը"
        ],
        answer: 0
    },
    {
        question: "2. Ո՞ր գաղտնաբառն է ավելի անվտանգ։",
        options: [
            "12345",
            "qwerty",
            "Ar!2026#Km"
        ],
        answer: 2
    },
    {
        question: "3. Ի՞նչ պետք է անել անծանոթ հղում ստանալիս։",
        options: [
            "Անմիջապես բացել",
            "Ստուգել՝ արդյոք այն անվտանգ է",
            "Ուղարկել բոլոր ընկերներին"
        ],
        answer: 1
    },
    {
        question: "4. Որտե՞ղ կարելի է պահել նիշքերը համացանցում։",
        options: [
            "Ամպային տիրույթում",
            "Միայն թղթի վրա",
            "Միայն ստեղնաշարի մեջ"
        ],
        answer: 0
    },
    {
        question: "5. Ի՞նչ է կեղծ տեղեկությունը։",
        options: [
            "Միշտ ճիշտ տեղեկություն",
            "Ստուգված տեղեկություն",
            "Սխալ կամ մոլորեցնող տեղեկություն"
        ],
        answer: 2
    },
    {
        question: "6. Ի՞նչ պետք է անել կասկածելի հաղորդագրություն ստանալիս։",
        options: [
            "Չպատասխանել և հայտնել մեծահասակին",
            "Ուղարկել անձնական տվյալները",
            "Բացել բոլոր հղումները"
        ],
        answer: 0
    },
    {
        question: "7. Ո՞րն է համացանցում ճիշտ վարքագիծը։",
        options: [
            "Վիրավորել ուրիշներին",
            "Հարգել ուրիշների կարծիքը",
            "Տարածել ուրիշի գաղտնաբառը"
        ],
        answer: 1
    },
    {
        question: "8. Ի՞նչ է որոնողական համակարգը։",
        options: [
            "Նկարելու ծրագիր",
            "Երաժշտություն լսելու սարք",
            "Տեղեկություններ գտնելու գործիք"
        ],
        answer: 2
    },
    {
        question: "9. Ո՞ր ծրագիրն է նախատեսված տեքստեր ստեղծելու համար։",
        options: [
            "Microsoft Word",
            "Հաշվիչ",
            "Ժամացույց"
        ],
        answer: 0
    },
    {
        question: "10. Ի՞նչ կարելի է տեղադրել տեքստային փաստաթղթում։",
        options: [
            "Միայն թվեր",
            "Տեքստ, նկարներ և աղյուսակներ",
            "Միայն ձայներ"
        ],
        answer: 1
    },
    {
        question: "11. Ի՞նչ է առցանց համագործակցությունը։",
        options: [
            "Միայնակ խաղալը",
            "Համակարգիչն անջատելը",
            "Համացանցով միասին աշխատելը"
        ],
        answer: 2
    },
    {
        question: "12. Ի՞նչ է համաժամանակյա աշխատանքը։",
        options: [
            "Մասնակիցները աշխատում են միաժամանակ",
            "Բոլորը աշխատում են տարբեր օրերի",
            "Աշխատանք չի կատարվում"
        ],
        answer: 0
    },
    {
        question: "13. Ի՞նչ է հետադարձ կապը։",
        options: [
            "Համակարգիչը վերագործարկելը",
            "Կատարված աշխատանքի մասին կարծիք կամ առաջարկություն",
            "Նկարը ջնջելը"
        ],
        answer: 1
    },
    {
        question: "14. Ինչպե՞ս պետք է վարվել ուրիշի աշխատանքի հետ։",
        options: [
            "Ջնջել այն",
            "Փոխել առանց թույլտվության",
            "Հարգել աշխատանքը և առաջարկել օգտակար բարելավումներ"
        ],
        answer: 2
    }
];

function startGame() {
    document.querySelector(".welcome").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");

    showMatching();
    showQuestions();
}

function showMatching() {
    const container = document.getElementById("matching");

    container.innerHTML = matchingTasks.map((task, index) => `
        <div class="match-card">
            <img src="${task.image}" alt="Առաջադրանքի նկար ${index + 1}">
            <p><strong>Նկարի բացատրությունը՝</strong><br>${task.description}</p>
            <label for="match${index}">Ընտրի՛ր ճիշտ հասկացությունը․</label>
            <select id="match${index}">
                <option value="">Ընտրել պատասխանը</option>
                ${choices.map(choice =>
                    `<option value="${choice}">${choice}</option>`
                ).join("")}
            </select>
        </div>
    `).join("");
}

function checkMatching() {
    if (matchingChecked) {
        return;
    }

    let correct = 0;

    matchingTasks.forEach((task, index) => {
        const selected = document.getElementById(`match${index}`).value;

        if (selected === task.answer) {
            correct++;
        }
    });

    score += correct;
    matchingChecked = true;

    document.getElementById("score").textContent = score;

    document.getElementById("matchingResult").textContent =
        `Ճիշտ պատասխաններ՝ ${correct} / ${matchingTasks.length}։`;
}

function showQuestions() {
    const container = document.getElementById("questions");

    container.innerHTML = quizQuestions.map((q, index) => `
        <div class="question-card">
            <h3>${q.question}</h3>
            ${q.options.map((option, optionIndex) => `
                <label class="option">
                    <input
                        type="radio"
                        name="question${index}"
                        value="${optionIndex}"
                    >
                    ${option}
                </label>
            `).join("")}
        </div>
    `).join("");
}

function checkQuiz() {
    if (!matchingChecked) {
        alert("Նախ ստուգի՛ր առաջին առաջադրանքի պատասխանները։");
        return;
    }

    const button = document.querySelector("#game > button:last-of-type");

    if (button.disabled) {
        return;
    }

    let correct = 0;

    quizQuestions.forEach((q, index) => {
        const selected = document.querySelector(
            `input[name="question${index}"]:checked`
        );

        if (selected && Number(selected.value) === q.answer) {
            correct++;
        }
    });

    score += correct;
    document.getElementById("score").textContent = score;

    const total = matchingTasks.length + quizQuestions.length;
    const percentage = Math.round((score / total) * 100);

    let message = "";

    if (percentage >= 90) {
        message = "Գերազանց է։ Դու իսկական թվային գիտելիքների հետախույզ ես։ 🏆";
    } else if (percentage >= 70) {
        message = "Շատ լավ է։ Դու լավ գիտես թվային աշխարհի կանոնները։ 🌟";
    } else if (percentage >= 50) {
        message = "Լավ աշխատանք է։ Շարունակի՛ր սովորել և փորձել։ 👍";
    } else {
        message = "Մի՛ հանձնվիր։ Կրկնիր դասերը և նորից փորձիր։ 💪";
    }

    document.getElementById("finalResult").innerHTML = `
        <h2>🎉 Խաղն ավարտված է։</h2>
        <p>Քո միավորները՝ ${score} / ${total}</p>
        <p>Արդյունք՝ ${percentage}%</p>
        <p>${message}</p>
    `;

    button.disabled = true;
}
