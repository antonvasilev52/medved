//Changing mode

$(function () {
  let darkTheme = function (){
    $("body").toggleClass("dark",true);
    $(".bg").toggleClass("darkbear",true);
    $("button").toggleClass("darkbutton",true);
    $(".fa-pencil-square-o, .fa-floppy-o, .fa-question-circle-o, .fa-newspaper-o, .fa-plus, .fa-recycle").toggleClass("darkicon",true);
    $("h1, span").toggleClass("darkicon",true);
    $(".modal-content").toggleClass("modal-content-dark",true);
    $("#mode").html('<i class="fa fa-moon-o"></i>')
  }
  let lightTheme = function (){
    $("body").toggleClass("dark",false);
    $(".bg").toggleClass("darkbear",false);
    $("button").toggleClass("darkbutton",false);
    $(".fa-pencil-square-o, .fa-floppy-o, .fa-question-circle-o, .fa-newspaper-o, .fa-plus, .fa-recycle").toggleClass("darkicon",false);
    $("h1, span").toggleClass("darkicon",false);
        $(".modal-content").toggleClass("modal-content-dark",false);
    $("#mode").html('<i class="fa fa-sun-o"></i>')
  }
  $("#mode").on("click", function(){
     if (localStorage.toggled == ""){
       localStorage.toggled = "dark";
       darkTheme();
     }
     else {
       localStorage.toggled = "";
       lightTheme();
     }
  })
  if (localStorage.toggled == "dark"){
       darkTheme();
  }
  else {
       lightTheme();
  }
})

//Функция вывода даты в заголовок
$(function () {
let today = new Date();
$("#todoheader").text(`Список дел на ${today.toLocaleDateString('ru-RU')}`)
$("#todoheader").prepend("<i class='fa fa-calendar' aria-hidden='true'></i> ")
})

//Функция вывода справки
$(function () {
  $("#help").on("click", function(){
    $("#helptext").slideToggle(500);

  })
})

//Функция для закрытия модального окна по кнопке
$(function () {
  $("#modalButton").on("click", function(){
    $("#myModal").removeClass("modal");
  })
})

//Функция для закрытия модального окна по кнопке
$(function () {
  $("#sameTaskButton").on("click", function(){
    $("#sameTask").removeClass("modal");
  })
})

//Основная функция по заполнению списка
$(function () {
    var val = $("#inputbox").val();
    var elem = $("<li></li>").text(`${val}`);
    const crossRemover = function(){
        $(this).prev().toggleClass("strikethrough");
    }


  let itemsArray = localStorage.getItem('items')
    ? JSON.parse(localStorage.getItem('items'))
    : []
  localStorage.setItem('items', JSON.stringify(itemsArray))

  const crossButton = "<button class='rem' title='Зачеркнуть, если дело сделано'><i class='fa fa-times'></i></button>";
  const editButton = " <button class='editor' title='Изменить'><i class='fa fa-pencil-square-o'></i></button>";

  const data = JSON.parse(localStorage.getItem('items'))
  data.forEach((item) => {
      let listText = $("<span contentEditable='false'></span>").text(item);
      let elem = $("<li></li>");
      $(elem).prepend(listText);
      $(elem).append(crossButton, editButton);
      $("#mylist").append(elem);
        })

  $("#add").on("click", function() {
    let val = $("#inputbox").val();
//     let timeVal = $("#time").val();
//     let hour = timeVal * 60 * 60;

    if(val !== '' && !itemsArray.includes(val)) {
      let listText = $("<span contentEditable='false'></span>").text(`${val} `);
//      let listTime = $(" <span class='Kuka'></span>").text(`${hour}`);
      let elem = $("<li></li>");
 //     $(elem).prepend(listText, listTime);
      $(elem).append(crossButton, editButton);
      // $(elem).append("<i class='fa-li fa fa-check'>");
      itemsArray.push(val);
      localStorage.setItem('items', JSON.stringify(itemsArray));
      $("#mylist").append(elem); // Добавляем элемент списка и кнопку
      $("#inputbox").focus();    // Курсор переносится на поле ввода товара
      $("#inputbox").val("");    // Очищаем поле ввода товара
      // $("#quantity").val("");    // Очищаем поле ввода количества
            }
    else if (itemsArray.includes(val)) {
      $("#sameTask").addClass("modal");
    }
    else
    $("#myModal").addClass("modal");
  }
);

$("#clear").on("click", function(){
  localStorage.clear();
  $("li").fadeOut(1000, function(){
    $(".fa-recycle").removeClass("kek");
  });
  $(".fa-recycle").addClass("kek");
})
  $("#inputbox, #quantity").keyup(function(event){
  if(event.which==13){
    $("#add").click();
  }
 });
$(function () {
    $(".rem").on("click", crossRemover)
  });

});

//Функция редактирования элемента списка
$(function () {
  $(".editor").click(function(){
    let spanEditable = $(this).prevAll("span");
    if (spanEditable.attr("contentEditable") == "false"){
      spanEditable.attr("contentEditable", "true");
      // spanEditable.css({"border":"1px solid gray", "border-radius":"5px"});
      spanEditable.focus();
      $(this).html("<i class='fa fa-floppy-o'>");
      $(this).attr("title", "Сохранить");
      }
      else {
        spanEditable.attr("contentEditable", "false");
        spanEditable.css("border","none");
        $(this).html("<i class='fa fa-pencil-square-o'>");
      }
  })
})
// $(function (){
//   let kuka = parseInt($(".Kuka").text(),10);
//   let kuko = kuka - 1;
//   $(".Kuka").text(`${kuka} + 1`);
//   // setInterval(kukaFunction, 1000);
// })
