var money = prompt('Введите ваш бюджет на месяц');
var time = prompt('Введите дату в формате YYYY-MM-DD');

var appData = {

    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: 0,
    income:[],
    savings: false
}
var question1 = prompt('Введите обязательную статью расходов в этом месяце'),
    question2 = prompt('Во сколько обойдется?'),
    question3 = prompt('Введите обязательную статью расходов в этом месяце'),
    question4 = prompt('Во сколько обойдется?');
    
    expenses = {
        question1 : question2;
        question3 : question4
    };
    appData.expenses.question1 = question2;
    appData.expenses.question3 = question4;     
    alert("Ваш бюджет на один день" + appData.budget/30);
    