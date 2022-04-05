export const getUserAnswersData = (questions, users, authUser) => {
    const answeredQuestionsIds = Object.keys(users[authUser].answers);
    const answeredQuestions = Object.values(questions).filter((question) =>
        answeredQuestionsIds.includes(question.id)
    );
    const sortedAnswers = answeredQuestions.sort((a, b) => {
        return b.timestamp - a.timestamp;
    });
    const unAnsweredQuestions = Object.values(questions).filter(
        (question) => !answeredQuestionsIds.includes(question.id)
    );
    const sortedUnAnsweredQuestions = unAnsweredQuestions.sort(
        (a, b) => b.timestamp - a.timestamp
    );
    return {answered: sortedAnswers, unanswered: sortedUnAnsweredQuestions};
};