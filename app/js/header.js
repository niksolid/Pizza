;(function() {

  if (window.matchMedia('(max-width: 992px)').matches) {
    return;
  }

  var headerPage = document.querySelector('.header-page');

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 0) {
      headerPage.classList.add('is-active');
    } else {
      headerPage.classList.remove('is-active');
    }
  });
})();
// Конструкция вида (function() {})(); является самовызывающейся функцией без параметров. Однако в () перед ; можно передавать параметры

// (func_b)() или (function func_b() { })() вызвать функцию
// (var_c).key или ({ "key": "val" }).key использовать объект
// (var_d)[0] или ([ "one", "two" ])[0] использовать массив

// Синтаксической ошибкой было бы использование функции, массива, объекта без скобок (   )
// function func_b() { }() ошибка "Unexpected token )"