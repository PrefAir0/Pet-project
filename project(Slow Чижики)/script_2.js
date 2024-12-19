function adminDecision(action) {
    if (action === "moderateComments") {
        let comments = ["Отличный пост!", "Ненавижу это!", "Согласен с тобой!", "Мне нравится!", "Хорошая идея!"];
        comments.forEach((comment) => {
            if (comment.includes("ненавижу")) {
                console.log(`Комментарий удалён: ${comment}`);
            } else {
                console.log(`Комментарий сохранён: ${comment}`);
            }
        });
    } else if (action === "chooseDiscussionTopic") {
        let topics = ["Технологии", "Наука", "Искусство"];
        let selectedTopic = "Наука";
        if (topics.includes(selectedTopic)) {
            console.log(`Выбранная тема для обсуждения: ${selectedTopic}`);
        } else {
            console.log("Эта тема не приемлема.");
        }
    } else if (action === "banUser") {
        let userToBan = "user123";
        console.log(`Пользователь ${userToBan} был заблокирован.`);
    } else {
        console.log("Неизвестное действие. Пожалуйста, попробуйте снова.");
    }
}

console.log(adminDecision())