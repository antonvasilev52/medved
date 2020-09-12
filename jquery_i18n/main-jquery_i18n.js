jQuery(document).ready(function() {
//  $("#bear").attr("src","bear_ru.jpg");
  let date = new Date();
  const japOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',};
  let  update_texts = function() { $('body').i18n() };
  $.i18n().load({
  'en': {
    'welcome': 'Welcome',
	'clearlist': ' Clear the list',
	'heading': 'To-do list for ' + date.toLocaleDateString('en-US'),
	'name': 'Enter a task',
	'add': 'Add',
	'help': 'Help'
  },
  'ru' : {
    'welcome': 'Добро пожаловать',
	'clearlist': ' Очистить список',
	'heading': 'Список дел на '  + date.toLocaleDateString('ru-RU'),
	'name': 'Введите дело',
	'add': 'Добавить',
	'help': 'Справка'
	
  },
  'fr' : {
    'welcome': 'Bienvenue',
	'clearlist': ' Effacer la liste',
	'heading': 'Liste des tâches à faire le '  + date.toLocaleDateString('fr-FR'),
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
  }
  });
  update_texts();
  
  $('.lang-switch').click(function(e) {
  e.preventDefault();
  $.i18n().locale = $(this).data('locale');
  let country = $(this).data('locale');
  $("#bear").attr("src","img/bear_"+country+".jpg");
  update_texts();
});
  
  
});