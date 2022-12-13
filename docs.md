# docs-email-tr-common

## Checklist

- Письму установлен lang, title, preheader
- Атрибуты изображений alt, title
- Оформлен alt изображений
- Текстовые узлы в p или span
- Адаптация для мобильных экранов
- Адаптация для темной темы
- Сетка письма работает без секции head
- Типография текста
- Проверка ссылок
- Тестирование

## Code

- Базовая структура

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title></title>
    <link rel="stylesheet" type="text/css" href="styles.css" />
    <!--[if (gte mso 9)|(IE)]>
      <style type="text/css">
        table {
          border-collapse: collapse;
        }
      </style>
    <![endif]-->
  </head>
  <body>
    <center class="wrapper">
      <div class="webkit">
        <!--[if (gte mso 9)|(IE)]>
        <table width="600" align="center" cellpadding="0" cellspacing="0" border="0">
        <tr>
        <td>
        <![endif]-->
        <table class="outer" align="center">
          <tr>
            <td>[content goes here]</td>
          </tr>
        </table>
        <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
      </div>
    </center>
  </body>
</html>
```

- Базовые стили

```css
body {
  margin: 0 !important;
  padding: 0;
  background-color: #ffffff;
  min-width: 320px;
}

table {
  border-spacing: 0;
  font-family: sans-serif;
  color: #333333;
}

td {
  padding: 0;
}

img {
  border: 0;
}

div[style*="margin: 16px 0"] {
  margin: 0 !important;
}

.wrapper {
  width: 100%;
  table-layout: fixed;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

.webkit {
  max-width: 600px;
  margin: 0 auto;
}

.outer {
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
}
```

- Комментарии для MSO

```html
<!--[if mso | IE]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
    <tr>
      <td style="vertical-align:top;width:50%;">
      <![endif]-->
<div></div>
<!--[if mso | IE]>
      </td>
    </tr>
  <td style="vertical-align:top;width:50%;">
<![endif]-->
```

- Preheader письма

```html
<div
  style="display:none;
  font-size:1px;
  color:#ffffff;
  line-height:1px;
  max-height:0px;
  max-width:0px;
  opacity:0;
  overflow:hidden;"
>
  Preview
</div>
```

- Стили для Black mode

```html
<html>
  <head>
    <meta name="color-scheme" content="light dark" />
    <meta name="supported-color-schemes" content="light dark" />

    <style>
      :root {
        color-scheme: light dark;
        supported-color-schemes: light dark;
      }

      body {
        background-color: #eee !important;
        color: #111 !important;
      }

      @media (prefers-color-scheme: dark) {
        body {
          background-color: #111 !important;
          color: #eee !important;
        }
      }

      /* double for mso */

      [data-ogsc] body {
        background-color: #111 !important;
        color: #eee !important;
      }
    </style>
  </head>
  <body>
    Hello Dark Mode!
  </body>
</html>
```

- Смена лого для Black mode(html)

```html
<!--[if !mso]><! -->
<div class="dark-img" align="center">
  <img src="" width="" height="" alt="" title="" border="0" />
</div>
<!--<![endif]-->

<img
  class="light-img"
  src=""
  href=""
  width=""
  height=""
  alt=""
  title=""
  border="0"
/>
```

- Смена лого для Black mode(style)

```css
/* inline style */

.dark-img {
  display: none !important;
  overflow: hidden !important;
  float: left !important;
  width: 0px !important;
  max-height: 0px !important;
  max-width: 0px !important;
  line-height: 0px !important;
  visibility: hidden !important;
}

.dark-img {
}

/* style in head */

@media (prefers-color-scheme: dark) {
  .dark-img {
    display: block !important;
    width: auto !important;
    overflow: visible !important;
    float: none !important;
    max-height: inherit !important;
    max-width: inherit !important;
    line-height: auto !important;
    margin-top: 0px !important;
    visibility: inherit !important;
  }

  .light-img {
    display: none;
    display: none !important;
  }
}

[data-ogsc] .dark-img,
[data-ogsb] .dark-img {
  display: block !important;
  width: auto !important;
  overflow: visible !important;
  float: none !important;
  max-height: inherit !important;
  max-width: inherit !important;
  line-height: auto !important;
  margin-top: 0px !important;
  visibility: inherit !important;
}

[data-ogsc] .light-img,
[data-ogsb] .light-img {
  display: none;
  display: none !important;
}
```

## Docs

**Порядок разработки**

база

- разработка сетки письма с заглушками и базовыми отступами
- head документа правильно сконфигурирован
- контроль background-image, background-color
- контроль ширины письма
- соблюдение минимальной ширины для body

изображения

- сжатие изображений
- хостинг изображений для тестирования
- подключение изображений
- оформить alt

ссылки

- установка реальных ссылок

текст

- разметка шрифтов
- типография текста
- контроль переноса текста

pixel-perfect

- выровнять вертикальный и горизонтальный интервал
- установить цветовое оформление

оптимизация

- preheader письма
- title письма
- оптимизация для темного режима
- работоспособность сетки без head(style, media)
- письмо не теряет смысл при отключенных изображениях
- улучшенная поддержка для клиентов с поддержкой секции head

**Основные критерии**

- Обязательные атрибуты для ссылок target="\_blank", title, rel="noopener noreferrer"
- Обязательные атрибуты для изображений alt, title
- Все текстовые узлы должны быть заключены в p или span
- Код не более 100 kb

**Базовые клиенты для тестирования**

- Gmail
- Yandex
- Mailru
- Yahoo
- Proton
- Aol
- Outlook
- Mozilla ThunderBird

**Полный список клиентов для тестирования**

- Apple mail
- Gmail
- Outlook
- Yahoo
- AOL
- Samsung Email
- Mozilla ThunderBird
- ProtonMail
- HEY
- Orange
- SFR
- Mailru

## Links

- https://webdesign.tutsplus.com/tutorials/creating-a-future-proof-responsive-email-without-media-queries--cms-23919
- https://vc.ru/design/75639-kak-pravilno-verstat-pisma-rekomendacii-i-trebovaniya-dlya-verstalshchika
- https://templates.mailchimp.com/development/css/client-specific-styles/
- https://www.campaignmonitor.com/resources/guides/dark-mode-in-email/
- https://github.com/tomayac/dark-mode-email
- https://www.litmus.com/blog/the-ultimate-guide-to-dark-mode-for-email-marketers/
- https://vc.ru/dev/63425-instrukciya-pishem-pervoe-pismo-s-pomoshchyu-amp
- https://amp.dev/
- https://developers.google.com/gmail

# docs-email-type-mjml

## CheckList

- Письму установлен lang, title, preheader
- Атрибуты изображений alt, title
- Оформлен alt изображений
- Текстовые узлы в p или span
- Адаптация для мобильных экранов
- Адаптация для темной темы
- Сетка письма работает без секции head
- Типография текста
- Проверка ссылок
- Тестирование
- Для качества изображений выгрузка 2x 3x 4x

## Code

**snippet**

email-a

```html
<a
  href="{{{class.href}}}"
  title="{{{class.title}}}"
  target="_blank"
  rel="noopener noreferrer"
  >link</a
>
```

email-class

```
mj-class="class" css-class="class"
```

email-img

```html
<mj-image
  mj-class="class__img"
  css-class="class__img"
  src="{{{class__img.src}}}"
  href="{{{class__img.href}}}"
  title="{{{class__img.title}}}"
  alt="{{{class__img.alt}}}"
/>
```

email-meta-color-scheme

```html
<meta name="color-scheme" content="light dark" />
<meta name="supported-color-schemes" content="light dark" />
```

email-meta-style-color-scheme

```css
:root {
  color-scheme: light dark;
  supported-color-schemes: light dark;
}

@media (prefers-color-scheme: dark) {
  .class {
    background-color: #eeeeee !important;
    color: #ffffff !important;
  }
}

[data-ogsc] .class,
[data-ogsb] .class {
  background-color: #eeeeee !important;
  color: #ffffff !important;
}
```

## Docs

## Links

- https://mjml.io/
- https://medium.com/mjml-making-responsive-email-easy/tutorial-creating-your-own-component-with-mjml-4-1c0e84e97b36
- https://github.com/mjmlio/mjml-component-boilerplate


# docs-email-type-mjml

## CheckList

- Письму установлен lang, title, preheader
- Атрибуты изображений alt, title
- Оформлен alt изображений
- Текстовые узлы в p или span
- Адаптация для мобильных экранов
- Адаптация для темной темы
- Сетка письма работает без секции head
- Типография текста
- Проверка ссылок
- Тестирование
- Для качества изображений выгрузка 2x 3x 4x

## Code

**snippet**

email-a

```html
<a
  href="{{{class.href}}}"
  title="{{{class.title}}}"
  target="_blank"
  rel="noopener noreferrer"
>link</a
>
```

email-class

```
mj-class="class" css-class="class"
```

email-img

```html
<mj-image
  mj-class="class__img"
  css-class="class__img"
  src="{{{class__img.src}}}"
  href="{{{class__img.href}}}"
  title="{{{class__img.title}}}"
  alt="{{{class__img.alt}}}"
/>
```

email-meta-color-scheme

```html
<meta name="color-scheme" content="light dark" />
<meta name="supported-color-schemes" content="light dark" />
```

email-meta-style-color-scheme

```css
:root {
  color-scheme: light dark;
  supported-color-schemes: light dark;
}

@media (prefers-color-scheme: dark) {
  .class {
    background-color: #eeeeee !important;
    color: #ffffff !important;
  }
}

[data-ogsc] .class,
[data-ogsb] .class {
  background-color: #eeeeee !important;
  color: #ffffff !important;
}
```

## Docs

## Links

- https://mjml.io/
- https://medium.com/mjml-making-responsive-email-easy/tutorial-creating-your-own-component-with-mjml-4-1c0e84e97b36
- https://github.com/mjmlio/mjml-component-boilerplate
