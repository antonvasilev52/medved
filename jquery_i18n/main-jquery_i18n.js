$(function() {
//  $("#bear").attr("src","bear_ru.jpg");
  let date = new Date();
  const japOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  let  update_texts = function() { $('body').i18n() };
  $.i18n().load({
  'en': {
    'welcome': 'Welcome',
	'clearlist': ' Clear the list',
	'heading': 'To-do list for ' + date.toLocaleDateString('en-US'),
	'name': 'Enter a task',
	'tooltip': 'Task',
	'add': 'Add',
	'help': 'Help'
  },
  'ru' : {
    'welcome': 'Добро пожаловать',
	'clearlist': ' Очистить список',
	'heading': 'Список дел на '  + date.toLocaleDateString('ru-RU'),
	'name': 'Введите дело',
	'tooltip': 'Или дельце',
	'add': 'Добавить',
	'help': 'Справка'
	
  },
  	fr: 'i18n/fr.json',
	ja: 'i18n/ja.json'
/*  'fr' : {
    'welcome': 'Bienvenue',
	'clearlist': ' Effacer la liste',
	'heading': 'Liste des tâches à faire le '  + date.toLocaleDateString('fr-FR',japOptions),
	'name': 'Saisissez une tache',
	'add': 'Ajouter',
	'help': 'Aide'
  },
  'ja' : {
    'welcome': 'ようこそ',
	'clearlist': ' 削除',
	'heading': date.toLocaleDateString('ja-JP',japOptions) + 'のやることリスト ',
	'name': 'やることを入力してください',
	'add': '追加',
	'help': 'Aide'
  } */
  });
  update_texts();
  
  $('.lang-switch').click(function(e) {
  e.preventDefault();
  $.i18n().locale = $(this).data('locale');
  $("#bear").attr("src","img/bear_"+$(this).data('locale')+".jpg");
  update_texts();
});
  
  
});