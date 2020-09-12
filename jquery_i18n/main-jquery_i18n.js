jQuery(document).ready(function() {
  let  update_texts = function() { $('body').i18n() };
  $.i18n().load({
	'ru': 'i18n/ru.json',
	'en': 'i18n/en.json',
	'fr': 'i18n/fr.json'
  });
  update_texts();
  
  $('.lang-switch').click(function(e) {
  e.preventDefault();
  $.i18n().locale = $(this).data('locale');
  update_texts();
});
  
  
});