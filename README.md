Результаты Google Lighthouse:

* Performance: 75
    First Contentful Paint: 0.2 s
    Largest Contentful Paint: 0.8 s
    Total Blocking Time: 0 ms
    Cumulative Layout Shift: 1.041
    Speed Index: 0.2 s
Что исправить:
Ensure text remains visible during webfont load - использовать стандартные штрифты до загрузки подключаемых
Image elements do not have explicit width and height - не всем картинкам заданы width и height
Page prevented back/forward cache restoration - как я понял нужно установить соответствующие заголовки для кэширования вперед/назад:
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Expires" content="0">
Serve static assets with an efficient cache policy - могу ошибаться, но заголовки выше должны помочь

* Accessibility: 100
* Best Practices: 92
Browser errors were logged to the console - консольные ошибки вроде перехода на https://monitoring.host/pixel.png?.biography-hero-box__name . Пока не знаю как исправить
* SEO: 90
Document does not have a meta description - добавить meta описание в head