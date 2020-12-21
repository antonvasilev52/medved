$(function() {
//  $("#bear").attr("src","bear_ru.jpg");

  let date = new Date();
  const japOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  let  update_texts = function() { $('body').i18n() 
    $( '#inputbox' ).prop( {
    placeholder: $.i18n( 'name' ),
    title: $.i18n( 'tooltip' ),
//  value: $.i18n( 'task-value' )
	});
  };
  $.i18n().load({
/*	en: 'i18n/en.json',
	ru: 'i18n/en.json',
  	fr: 'i18n/fr.json',
	ja: 'i18n/ja.json'
*/ 'en': {
    'welcome': 'Welcome',
	'clearlist': ' Clear the list',
	'heading': 'To-do list for ' + date.toLocaleDateString('en-US'),
	'name': 'Enter a task',
	'tooltip': 'Task',
	'add': 'Add',
	'task-value': "Составить список дел",
	'interface-language': 'Interface language',
	'help': 'Help'
  },
  'ru' : {
    'welcome': 'Добро пожаловать',
	'clearlist': ' Очистить список',
	'heading': 'Список дел на '  + date.toLocaleDateString('ru-RU'),
	'name': 'Введите дело',
	'tooltip': 'Или дельце',
	'add': 'Добавить',
	'task-value': "Составить список дел",
	'interface-language': 'Язык интерфейса',
	'help': 'Справка'
	
  },
 'fr' : {
    'welcome': 'Bienvenue',
	'clearlist': ' Effacer la liste',
	'heading': 'Liste des tâches à faire le '  + date.toLocaleDateString('fr-FR',japOptions),
	'name': 'Saisissez une tache',
	'tooltip': 'Une tache',
	'add': 'Ajouter',
	'interface-language': "Langue de l'interface",
	'help': 'Aide'
  },
  'ja' : {
    'welcome': 'ようこそ',
	'clearlist': ' 削除',
	'heading': date.toLocaleDateString('ja-JP',japOptions) + 'のやることリスト ',
	'name': 'やることを入力して',
	'tooltip': 'やること',
	'add': '追加',
	'interface-language': 'インターフェース言語',
	'help': 'ヘルプ'
  }
  });
  update_texts();
  
  $('.lang-switch').click(function(e) {
  e.preventDefault();
  $.i18n().locale = $(this).data('locale');
  $("#bear").attr("src","img/bear_"+$(this).data('locale')+".jpg");
$( '#inputbox' ).prop( {
    placeholder: $.i18n( 'name' ),
    title: $.i18n( 'tooltip' )});
  update_texts();
});

  
});