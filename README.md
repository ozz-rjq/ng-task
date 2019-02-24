# NgTestTask

======

Test task for Middle Javascript developer (Angular 2+)

Application implements table that gets data from "ApiService" (its implementation should not be changed). Every 5 seconds service
sends the same re-sorted list.

Problem: value entered in "Note" field dissapears after re-sorting.
Task: entered value should stay on the line with the same number on which it was entered before re-sorting.

<a href="https://mznpk1k6jj.codesandbox.io/" target="_blank">Actual behavior</a>
<br>
<a href="https://734qx193vj.codesandbox.io/" target="_blank">Expected behavior</a>

Additional task: how can AppComponent be optimized using different Angular change detection strategies? Implement this optimization and describe one of the optimization technics in the comments section.

My solution: <a href="https://github.com/ozz-rjq/ng-task/blob/83fdb908e8974892584e40ac401b842ae795eff6/src/app/app.module.ts#L36" target="_blank">Review</a>

======

Original text (in russian):
Приложение реализует таблицу, которую получает через «ApiService» (его реализацию изменять не нужно). Каждые 5 секунд сервис присылает один и тот же пересортированный список.

Проблема: при пересортировке слетает значение, введённое в поле «Note».
Задача: нужно сделать так, чтобы введённое значение после пересортировки сохранилось на строке с тем же номером (№), что и до сортировки.

<a href="https://mznpk1k6jj.codesandbox.io/" target="_blank">Актуальное поведение</a>
<br>
<a href="https://734qx193vj.codesandbox.io/" target="_blank">Ожидаемое поведение</a>

Нужно исправить проблему и написать в комментариях, в чём она заключалась.

Дополнительное задание, которое сократит количество вопросов на собеседовании: как можно оптимизировать AppComponent с точки зрения работы change-detection? Реализуйте предложенную оптимизацию и расскажите об одном или нескольких способах оптимизации в комментарии.

Моё решение: <a href="https://github.com/ozz-rjq/ng-task/blob/83fdb908e8974892584e40ac401b842ae795eff6/src/app/app.module.ts#L36" target="_blank">Посмотреть</a>
