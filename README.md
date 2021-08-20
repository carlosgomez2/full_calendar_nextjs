
# FullCalendar Next.js Example

Getting FullCalendar to work with [Next.js](https://nextjs.org/) requires a bit of configuration. See below.


## Installation

```bash
git clone https://gitlab.com/rasalghul/fullcalendar-next.git
yarn install
```


## Build && Run Commands

```
yarn dev   # starts dev environment (RECOMENDED)
yarn watch # watch and rebuild while developing
yarn build # build for production
yarn start # run the production build
yarn clean # clear all built files
```


## Workarounds Explained

1. Install [next-transpile-modules](https://www.npmjs.com/package/next-transpile-modules) to process FullCalendar's ES modules. See [next.config.js](next.config.js). If you don't like this, [vote to give Next ESM support for third-party packages](https://github.com/vercel/next.js/issues/706).
2. Configure Babel to ignore imports of CSS files, which FullCalendar uses to include styles. Uses the [babel-plugin-transform-require-ignore](https://www.npmjs.com/package/babel-plugin-transform-require-ignore) plugin. See [babel.config.js](babel.config.js)
3. In [_app.jsx](pages/_app.jsx), include FullCalendar's global stylesheets manually...


## FullCalendar Stylesheets

In environments other than Next.js, FullCalendar is able to include its own stylesheets so that you don't need to worry about it. Next disallows this however, and you inherit the responsibility as a developer. So, try to trace the FullCalendar's dependency tree and include any `main.css` files in each package. For example, if you import these JS modules:

```js
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
```


**Copyright 2021 Carlos Gómez - carlosgomez.deb@gmail.com**

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.